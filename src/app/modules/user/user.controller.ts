import { Request, Response } from 'express';
import userValidationSchema from './user.validation';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const zodParsedData = userValidationSchema.parse(user);

    const result = await UserService.createUserInDB(zodParsedData);

    //send response
    res.status(200).send({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Error in creating student',
      error,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAllUserFromDB();

    res.status(200).send({
      success: true,
      message: 'Student retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).send({
      success: true,
      message: 'Users not found',
      data: error,
    });
  }
};

export const UserController = {
  createUser,
  getAllUser,
};
