
import { test as base } from '@playwright/test';
import { PetApi } from '../page-objects/petApi';

type PetFixture = {
  petApi: PetApi;
};

export const test = base.extend<PetFixture>({
  petApi: async ({ request }, use) => {
    const baseURL = 'https://petstore.swagger.io/v2';
    const api = new PetApi(request, baseURL);
    await use(api);
  },
});

export { expect } from '@playwright/test';