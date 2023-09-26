import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthServices } from './auth.services';

const signup: RequestHandler = catchAsync(async (req, res) => {
  const user = req.body;
  const result = await AuthServices.signup(user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Signed Up successfully!',
    data: result,
  });
});

const signin: RequestHandler = catchAsync(async (req, res) => {
  const { ...userSignIn } = req.body;
  const result = await AuthServices.signin(userSignIn);

  console.log('token: ', result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    token: result,
  });
});

export const AuthControllers = {
  signup,
  signin,
};
