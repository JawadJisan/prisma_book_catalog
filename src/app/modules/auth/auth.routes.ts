import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthControllers } from './auth.controllers';
import { AuthValidators } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidators.signupZodSchema),
  AuthControllers.signup
);

router.post(
  '/signin',
  validateRequest(AuthValidators.signInZodSchema),
  AuthControllers.signin
);

export const AuthRoutes = router;
