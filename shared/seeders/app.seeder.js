import { faker } from '@faker-js/faker';
import { buildOrGetModels } from '../db/index.js';

const { models } = buildOrGetModels();

const createList = (size, callback) => Array
  .from(Array(size).keys()).map(() => callback());

const getRandom = (items) => items[Math.floor(Math.random() * items.length)];

const createProduct = () => ({
  name: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  photo: faker.image.food(),
  price: faker.commerce.price(),
});

const createUserProduct = (products) => ({
  ProductId: getRandom(products).id,
  email: faker.internet.email(),
});

const seedData = async () => {
  const products = createList(20, createProduct);
  const storedProducts = await models.Product.bulkCreate(products);
  const users = createList(50, createUserProduct.bind(null, storedProducts));
  await models.ProductUser.bulkCreate(users);
};

export { seedData };
