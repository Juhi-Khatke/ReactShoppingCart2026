import { test as base, expect } from '@playwright/test';
import { Product } from '../pages/ProductPage';

type ProductActionsFixture = {
  productActions: {
    open: (url: string) => Promise<void>;
    getProductCount: () => Promise<number>;
    verifyProductsVisible: () => Promise<void>;
    addFirstProductToCart: () => Promise<void>;
    verifyCartCount: (count: number) => Promise<void>;
    filterBySize: (size: string) => Promise<void>;
    productPage: {
    [x: string]: any;
    products: {
    first: () => any;
      };


    };
  };
};


export const test = base.extend<ProductActionsFixture>({
  productActions: async ({ page }, use) => {
    const productActions = {
      open: async (url: string) => {
        await page.goto(url);
        await page.waitForLoadState('networkidle');
      },
      getProductCount: async () => {
        return await page.locator('div[tabindex="1"]').count();
      },
      verifyProductsVisible: async () => {
        await expect(page.locator('div[tabindex="1"]').first()).toBeVisible();
      },
      addFirstProductToCart: async () => {
        await page.locator('button:has-text("Add to cart")').first().click();
        await page.waitForTimeout(800);
      },
      verifyCartCount: async (count: number) => {
        await expect(page.locator('div.sc-1h98xa9-3.VLMSP')).toHaveText(String(count));
      },
      filterBySize: async (size: string) => {
        await page.locator(`label:has-text("${size}")`).first().click();
        await page.waitForTimeout(1000);
      },
      productPage: {
        products: {
          first: () => page.locator('div[tabindex="1"]').first(),
        },
        page,
      },
    };

    await use(productActions);
  },
});

export { expect } from '@playwright/test';

export class ProductActions {
  constructor(public productPage: Product) { }

  async open(url: string) {
    await this.productPage.page.goto(url);
    await this.productPage.page.waitForLoadState('networkidle');
  }

  async getProductCount() {
    return await this.productPage.products.count();
  }

  async verifyProductsVisible() {
    await expect(this.productPage.products.first()).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.productPage.addToCartButtons.first().click();
  }

  async verifyCartCount(count: number) {
    await expect(this.productPage.cartCount).toHaveText(String(count));
  }

  async filterBySize(size: string) {
    await this.productPage.sizeFilter(size).click();
  }

}

