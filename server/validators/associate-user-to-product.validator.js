import Joi from 'joi';

export const associateUserToProductValidator = {
  name: 'associateUserToProduct',
  schema: Joi.object({
    email: Joi.string().email().required(),
  }),
};
