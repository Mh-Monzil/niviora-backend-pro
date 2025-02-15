import { Request, Response } from 'express';
import userValidationSchema from './user.validation';
import { UserService } from './user.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body;
  const zodParsedData = userValidationSchema.parse(user);

  const result = await UserService.createUserInDB(zodParsedData);

  //send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUserFromDB();

  //send response
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User retrieved successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
};
