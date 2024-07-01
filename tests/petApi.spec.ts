// api-tests/petstoreApi.spec.ts
import path from 'path';
import { test, expect } from '../page-objects/fixtures';
import { petId, newPet, statuses } from '../testData'

test.describe('Petstore API', () => {
  
  test('Upload an image for a pet', async ({ petApi }) => {
    const filePath = path.resolve(__dirname, 'fixtures/test-image.png');
    const response = await petApi.uploadFile(petId, filePath);
    expect(response.status()).toBe(200);
    const result = await response.json();
    expect(result).toHaveProperty('message');
  });

  test('Add a new pet to the Store', async ({ petApi }) => {
    const response = await petApi.addPet(newPet);
    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet).toMatchObject(newPet);
  });

  test('Get pet by ID', async ({ petApi }) => {
    const response = await petApi.getPetById(petId);
    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet).toHaveProperty('id', petId);
  });

  test('Update an existing pet', async ({ petApi }) => {
    const updatedPet = { ...newPet, status: 'sold' };
    const response = await petApi.updatePet(updatedPet);
    expect(response.status()).toBe(200);
    const pet = await response.json();
    expect(pet).toMatchObject(updatedPet);
  });

  for (const status of statuses) {
    test(`Find pets by status: ${status}`, async ({ petApi }) => {
      const response = await petApi.findPetsByStatus(status);
      expect(response.status()).toBe(200);
      const pets = await response.json();
      expect(Array.isArray(pets)).toBeTruthy();
      pets.forEach((pet: any) => {
        expect(pet).toHaveProperty('status', status);
      });
    });
  }

  test('Delete a pet', async ({ petApi }) => {
    const response = await petApi.deletePet(petId);
    expect(response.status()).toBe(200);
  });
});
