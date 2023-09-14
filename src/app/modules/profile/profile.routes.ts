import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import { ProfileControllers } from './profile.controllers';
const router = express.Router();

router.get(
  '/',
  auth(UserRole.admin, UserRole.customer),
  ProfileControllers.getUserProfile
);

export const ProfileRoutes = router;
