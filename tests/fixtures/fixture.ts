import { test as base } from '@playwright/test';
import { Product } from '../pages/ProductPage';

import { ProductActions } from '../actions/ProductAction';

type Fixtures = {
  productActions: ProductActions;
};

export const test = base.extend<Fixtures>({
  productActions: async ({ page }, use) => {
    const productPage = new Product(page);
    const actions = new ProductActions(productPage); 
    await use(actions);
  },
});

export { expect } from '@playwright/test';