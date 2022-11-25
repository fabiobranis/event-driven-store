import { Router } from 'express';

import { validateRequest } from '../middlewares/validate-request.middleware.js';
import {
  update,
  associateUser,
  findAll,
} from '../controllers/product.controller.js';

const router = Router();
const ENDPOINT = '/product';

router.get(ENDPOINT, findAll);

router.patch(
  `${ENDPOINT}/:id/`,
  validateRequest('updateProduct'),
  update,
);

router.post(
  `${ENDPOINT}/:id/associate-user`,
  validateRequest('associateUserToProduct'),
  associateUser,
);

export default router;
