import {
  associateUserToProductValidator,
} from './associate-user-to-product.validator.js';
import { updateProductValidator } from './update-product.validator.js';

export const validators = [
  associateUserToProductValidator,
  updateProductValidator,
];
