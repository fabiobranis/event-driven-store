/* eslint-disable no-console */
import Joi from 'joi';
import { validators } from '../validators/index.js';

const { ValidationError } = Joi;

export const validateRequest = (name) => {
  const validatorContent = validators.find(
    ({ name: validatorName }) => validatorName === name,
  );

  if (!validatorContent) throw Error(`${name} validator does not exist`);

  return async (req, res, next) => {
    try {
      const validated = await validatorContent.schema.validateAsync(req.body, {
        abortEarly: false,
      });
      req.body = validated;
      return next();
    } catch (err) {
      console.log(err.stack);

      if (err instanceof ValidationError) {
        return next(res.status(422).send({ errors: err.details }));
      }

      return next(res.status(500));
    }
  };
};
