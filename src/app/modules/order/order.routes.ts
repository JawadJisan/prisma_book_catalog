import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderControllers } from './order.controllers';
import { OrderValidators } from './order.validation';
const router = express.Router();

router.post(
  '/create-order',
  auth(UserRole.customer),
  validateRequest(OrderValidators.createOrderZodSchema),
  OrderControllers.createOrder
);

router.get(
  '/',
  auth(UserRole.customer, UserRole.admin),
  OrderControllers.getAllOrders
);

router.get(
  '/:orderId',
  auth(UserRole.admin, UserRole.customer),
  OrderControllers.getOrder
);

export const OrderRoutes = router;
