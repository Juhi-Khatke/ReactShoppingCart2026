import { platform } from 'node:os';
import { test, expect } from './actions/ProductAction';
import data from './testdata/product.json';

test.describe('React Shopping Cart E2E', () => {

  test('TC1 - Load products', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    expect(await productActions.getProductCount()).toBeGreaterThan(0);
  });

  test('TC2 - Product UI visible', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.verifyProductsVisible();
  });

  
  test('TC3 - Add product to cart', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.addFirstProductToCart();
    await productActions.verifyCartCount(1);
  });

  test('TC4 - Add 2 products', async ({ productActions }) =>{
    await productActions.open(data.baseURL);
    await productActions.addFirstProductToCart();
    await productActions.addFirstProductToCart();
    await productActions.verifyCartCount(2);
  });

  test('TC5 - Filter by size M', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.filterBySize('M');
    expect(await productActions.getProductCount()).toBeGreaterThan(0);
  });

  test('TC6 - Filter by size L', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.filterBySize('L');
    expect(await productActions.getProductCount()).toBeGreaterThan(0);
  });

  test('TC7 - Cart increases after add', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.addFirstProductToCart();
    await productActions.verifyCartCount(1);
  });

  test('TC8 - Product has UI elements', async ({ productActions }) => {
    await productActions.open(data.baseURL);

    const first = productActions.productPage.products.first();
    await expect(first.locator('p.sc-124al1g-4.eeXMBo')).toBeVisible();
    await expect(first.locator('button:has-text("Add to cart")')).toBeVisible();
  });

  test('TC9 - Free shipping visible', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await expect(productActions.productPage.page.locator('text=Free Shipping').first()).toBeVisible();
  });

  test('TC10 - Cart starts empty', async ({ productActions }) => {
    await productActions.open(data.baseURL);
    await productActions.verifyCartCount(0);
  });
  test('TC_011 Verify number of products priced at $10.90 and $14.90', async({productActions}) => {
     await productActions.open(data.baseURL);
  await productActions.productValidation(data.ProductData)

  })
})