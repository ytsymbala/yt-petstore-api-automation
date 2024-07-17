import { APIRequestContext } from '@playwright/test';

export class StoreApi {
    readonly request: APIRequestContext;
    readonly baseURL: string;
  
    constructor(request: APIRequestContext, baseURL: string) {
      this.request = request;
      this.baseURL = baseURL
    }
    async getPetInventories() {
      const response = await this.request.get(`${this.baseURL}/store/inventory`);
      return response;
    }

    async addStoreOrder(order: object) {
      const response = await this.request.post(`${this.baseURL}/store/order`, { data: order });
      return response;
    }

    async getOrderById(orderId: number) {
      const response = await this.request.get(`${this.baseURL}/store/order/${orderId}`);
      return response;
    }

    async deleteOrderById(orderId: number) {
      const response = await this.request.delete(`${this.baseURL}/store/order/${orderId}`);
      return response;
    }

}