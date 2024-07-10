
import { APIRequestContext } from '@playwright/test';

export class PetApi {
  readonly request: APIRequestContext;
  readonly baseURL: string;

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL
  }

  async uploadFile(petId: number, filePath: string) {
    const response = await this.request.post(`${this.baseURL}/pet/${petId}/uploadImage`, {
      multipart: {
        file: filePath
      }
    });
    return response;
  }

  async addPet(pet: object) {
    const response = await this.request.post(`${this.baseURL}/pet`, { data: pet });
    return response;
  }

  async updatePet(pet: object) {
    const response = await this.request.put(`${this.baseURL}/pet`, { data: pet });
    return response;
  }

  async findPetsByStatus(status: string) {
    const response = await this.request.get(`${this.baseURL}/pet/findByStatus?status=${status}`);
    return response;
  }

  async getPetById(petId: number) {
    const response = await this.request.get(`${this.baseURL}/pet/${petId}`);
    return response;
  }

  async updatePetWithForm(petId: number, name: string, status: string) {
    return this.request.post(`${this.baseURL}/pet/${petId}`, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      form: { name, status }
    });
  }

  async deletePet(petId: number) {
    const response = await this.request.delete(`${this.baseURL}/pet/${petId}`);
    return response;
  }
}