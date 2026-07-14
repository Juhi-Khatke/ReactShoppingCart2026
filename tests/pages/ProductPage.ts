import { Page, Locator } from '@playwright/test';

export class Product {
  readonly page: Page;
  readonly products: Locator;
  readonly addToCartButtons: Locator;
  readonly cartCount: Locator;
  readonly sizeFilter: (size: string) => Locator;




  constructor(page: Page) {
    this.page = page;

    this.products = page.locator('div.sc-124al1g-2.dwOYCh');
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    this.cartCount = page.locator('div[title="Products in cart quantity"]');
    this.sizeFilter = (size: string) =>page.locator(`input[type="checkbox"][value="${size}"]`);


    
      
  }
}