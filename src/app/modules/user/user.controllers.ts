import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userSearchAndFilter } from './user.constant';
import { UserServices } from './user.services';

const getAllUsers: RequestHandler = catchAsync(async (req, res) => {
  const pagination = pick(req.query, paginationFields);
  const searchAndFilter = pick(req.query, userSearchAndFilter);
  const result = await UserServices.getAllUsers(pagination, searchAndFilter);

  sendResponse<User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data fetched successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserServices.getUser(id);

  sendResponse<User | null>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fetched successfully!',
    data: result,
  });
});

const updateUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const userData = req.body;
  const result = await UserServices.updateUser(id, userData);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data updated successfully!',
    data: result,
  });
});

const deleteUser: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await UserServices.deleteUser(id);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users data deleted successfully!',
    data: result,
  });
});

export const UserControllers = {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
};
