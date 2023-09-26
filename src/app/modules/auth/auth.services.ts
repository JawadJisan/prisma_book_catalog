import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { IAuth } from './auth.interface';

const signup = async (user: User) => {
  const data = await prisma.user.create({
    data: user,
  });

  return data;
};
const signin = async (signInData: IAuth) => {
  // Check User Existence
  const userExist = await prisma.user.findFirst({
    where: {
      email: signInData.email,
    },
  });
  if (!userExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User doesn't exist!");
  }
  const { id, role, password } = userExist;
  console.log(id, 'userId');
  // Check Password
  if (signInData.password !== password) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Incorrect credentials!');
  }

  // console.log(process.env.JWT_SECRET);
  // console.log(process.env.JWT_REFRESH_EXPIRES_IN);

  // Generate Token
  const token = jwtHelpers.createToken(
    { userId: id, role },
    process.env.JWT_SECRET as Secret,
    process.env.JWT_REFRESH_EXPIRES_IN as string
  );
  return token;
  // return userExist;
};

export const AuthServices = {
  signup,
  signin,
};
