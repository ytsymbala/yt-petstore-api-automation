
import { test, expect } from '../page-objects/fixtures';
import { inventoryResponseValues, newOrder, orderId } from '../testData';

test.describe('Access to Petstore orders', () => {
  
    test('Upload an image for a pet', async ({ storeApi }) => {
        const response = await storeApi.getPetInventories();
        expect(response.status()).toBe(200);
        const petInventory = await response.json();
        inventoryResponseValues.forEach(key => {
        expect(petInventory).toHaveProperty(key);
        });
    });

    test('Place an order for a pet', async ({ storeApi }) => {
        const response = await storeApi.addStoreOrder(newOrder);
        expect(response.status()).toBe(200);
        const order = await response.json();
        expect(order).toMatchObject(newOrder);
    })

    test('Find purchase order by ID', async ({ storeApi }) => {
        const response = await storeApi.getOrderById(orderId);
        expect(response.status()).toBe(200);
        const order = await response.json();
        expect(order).toHaveProperty('id', orderId);
    })

    test('Delete purchase order by ID', async ({ storeApi }) => {
        const response = await storeApi.deleteOrderById(orderId);
        expect(response.status()).toBe(200);
    })

    test('Check that not found error is displayed for deleted order', async ({ storeApi }) => {
        const response = await storeApi.getOrderById(orderId);
        expect(response.status()).toBe(404);
    })
  });
  