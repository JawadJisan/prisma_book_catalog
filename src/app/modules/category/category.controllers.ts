import { Category } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { categorySearchAndFilter } from './category.constants';
import { CategoryServices } from './category.services';

const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const categoryData = req.body;
  const result = await CategoryServices.createCategory(categoryData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully!',
    data: result,
  });
});

const getAllCategories: RequestHandler = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationFields);
  const searchAndFilter = pick(req.query, categorySearchAndFilter);

  const result = await CategoryServices.getAllCategories(
    pagination,
    searchAndFilter
  );

  sendResponse<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories fetched successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CategoryServices.getCategory(id);

  sendResponse<Category | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully!',
    data: result,
  });
});

const updateCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const categoryData = req.body;
  const result = await CategoryServices.updateCategory(id, categoryData);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categorys updated successfully!',
    data: result,
  });
});

const deleteCategory: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await CategoryServices.deleteCategory(id);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categorys deleted successfully!',
    data: result,
  });
});

export const CategoryControllers = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
