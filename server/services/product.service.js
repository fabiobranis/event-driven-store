import { QUEUE_NAME } from 'shared/config.js';
import { buildOrGetModels } from 'shared/db/index.js';
import { buildQueue } from 'shared/queue/index.js';
import {
  EntityNotFoundException,
  UserAlreadyAssociatedError,
} from 'shared/errors/index.js';
import { isLoweringPrice } from '../domain-services/is-lowering-price.ds.js';

const { models } = buildOrGetModels();
const { Product, ProductUser } = models;

const { createProducer } = buildQueue({ name: QUEUE_NAME });

const findProductOrFail = async ({ id }) => {
  const product = await Product.findOne({ where: { id } });

  if (!product) {
    throw new EntityNotFoundException(
      {
        message: `Product id ${id} does not exists`,
        errors: [
          {
            message: 'Product id not found',
            path: ['id'],
          },
        ],
      },
    );
  }
  return product;
};

const findAllProducts = async () => Product.findAll();

const updateProduct = async ({
  id,
  product,
}) => {
  const oldProduct = await findProductOrFail({ id });
  const [, [updatedProduct]] = await Product.update(
    product,
    {
      where: { id },
      returning: true,
    },
  );

  if (isLoweringPrice({
    newPrice: product.price,
    oldPrice: oldProduct.price,
  })) {
    createProducer(updatedProduct)
      // eslint-disable-next-line no-console
      .then(() => console.log('Job created'))
      // eslint-disable-next-line no-console
      .catch((e) => console.error(e));
  }

  return updatedProduct;
};

const associateUserToProduct = async ({
  id,
  email,
}) => {
  const product = await findProductOrFail({ id });

  const possibleUser = await ProductUser.findOne({
    where: {
      email,
      ProductId: id,
    },
  });

  if (possibleUser) {
    throw new UserAlreadyAssociatedError(
      {
        // eslint-disable-next-line max-len
        message: `User ${email} already associated to the product ${product.name}`,
        errors: [
          {
            message: 'User email already associated with product id',
            path: ['email'],
          },
        ],
      },
    );
  }

  return ProductUser.create({
    email,
    ProductId: product.id,
  });
};

export {
  findAllProducts,
  associateUserToProduct,
  updateProduct,
};
