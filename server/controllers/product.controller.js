import { httpErrorHandler } from 'shared/errors/index.js';
import {
  associateUserToProduct,
  findAllProducts,
  updateProduct,
} from '../services/product.service.js';

const findAll = async (_req, res) => res.send(await findAllProducts());

const update = async (req, res) => {
  try {
    return res.send(
      await updateProduct({ id: req.params.id, product: req.body }),
    );
  } catch (err) {
    return httpErrorHandler(err, res);
  }
};

const associateUser = async (req, res) => {
  try {
    return res.send(
      await associateUserToProduct({
        id: req.params.id,
        email: req.body.email,
      }),
    );
  } catch (err) {
    return httpErrorHandler(err, res);
  }
};

export {
  findAll,
  update,
  associateUser,
};
