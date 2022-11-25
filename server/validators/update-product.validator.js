import Joi from 'joi';

export const updateProductValidator = {
  name: 'updateProduct',
  schema: Joi.object({
    name: Joi.string().min(2).max(20),
    description: Joi.string().min(5),
    photo: Joi.string().uri(),
    price: Joi.number().positive().precision(2),
  }),
};
