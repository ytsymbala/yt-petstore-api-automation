export const petId = 12345;

export const newPet = {
  id: petId,
  category: { id: 0, name: 'string' },
  name: 'doggie',
  photoUrls: ['string'],
  tags: [{ id: 0, name: 'string' }],
  status: 'available'
};

export const statuses = ['available', 'pending', 'sold'];

export const updatedName = 'updatedNameTest';
export const updatedStatus = 'pending';

export const inventoryResponseValues = [
  'sold', 'string', 'NewPets', 'pending', 'available', 'peric'
];

export const orderId = 1;

export const newOrder = {
  id: orderId,
  petId: petId,
  quantity: 10,
  shipDate: "2024-07-17T18:51:02.555+0000",
  status: "placed",
  complete: true
};