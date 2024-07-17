
import { test as base } from '@playwright/test';
import { PetApi } from '../page-objects/petApi';
import { StoreApi } from './storeApi';

type PetFixture = {
  petApi: PetApi;
  storeApi: StoreApi;
};

export const test = base.extend<PetFixture>({
  petApi: async ({ request }, use) => {
    const baseURL = 'https://petstore.swagger.io/v2';
    const api = new PetApi(request, baseURL);
    await use(api);
  },

  storeApi: async ({ request }, use) => {
    const baseURL = 'https://petstore.swagger.io/v2';
    const api = new StoreApi(request, baseURL);
    await use(api);
  },

});

export { expect } from '@playwright/test';