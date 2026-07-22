import { Page, Locator } from '@playwright/test';

export class Product {
  [x: string]: any;
  readonly page: Page;
  readonly products: Locator;
  readonly addToCartButtons: Locator;
  readonly cartCount: Locator;
  readonly sizeFilter:Locator;

  readonly cartItems: Locator;
readonly cartTotal: Locator;
readonly productVisible : Locator;
    readonly productFirst : Locator // 1st product Identify products priced $10.90
    readonly countProduct : Locator // verify products priced $10.90 count is 4

    readonly productSecond : Locator // 2nd product products priced $14.90 count is 2

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('//div[@class="sc-124al1g-2 dwOYCh"]');
    this.addToCartButtons = page.locator('//button[text()="Add to cart"]');
    this.cartCount = page.locator('//div[@title="Products in cart quantity"]');
    this.sizeFilter = page.locator('//input[@value="M"]');


     this.cartItems = page.locator('div.sc-11uohgb-0');
  this.cartTotal = page.locator('div.sc-11uohgb-4');
    this.productVisible = page.locator('//p[text() = "Cropped Stay Groovy off white"]')
        this.productFirst = page.locator('//small[text() = "S"]/parent::p[@class="sc-124al1g-6 ljgnQL"]')
        this.countProduct = page.locator('//b[text() = "10"]/parent::p')
        this.productSecond = page.locator('//b[text() = "14"]/parent::p/span[text() = ".90"]')
  }
}