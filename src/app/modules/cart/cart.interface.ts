import { Types } from 'mongoose';

export type TCart = {
  user: Types.ObjectId;
  products: {
    product: Types.ObjectId | string;
    quantity: number;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
};
