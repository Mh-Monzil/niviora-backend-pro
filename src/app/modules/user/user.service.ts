import { User } from './user.interface';
import { UserModel } from './user.model';

const createUserInDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find({});
  return result;
};

export const UserService = {
  createUserInDB,
  getAllUserFromDB,
};
