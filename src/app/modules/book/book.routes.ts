import { UserRole } from '@prisma/client';
import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookControllers } from './book.controllers';
import { BookValidators } from './book.validation';
const router = express.Router();

router.post(
  '/create-book',
  auth(UserRole.admin),
  validateRequest(BookValidators.createBookZodSchema),
  BookControllers.createBook
);

router.get('/', BookControllers.getAllBooks);

// router.get(
//   '/:categoryId',
//   auth(UserRole.admin),
//   BookControllers.getBooksByCategoryId
// );
router.get('/:categoryId/category', BookControllers.getBooksByCategoryId);

router.get('/:id', BookControllers.getBook);

router.patch('/:id', auth(UserRole.admin), BookControllers.updateBook);

router.delete('/:id', auth(UserRole.admin), BookControllers.deleteBook);

export const BookRoutes = router;
