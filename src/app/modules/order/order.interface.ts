import { Types } from 'mongoose';

type TItems = {
  product: string; // ObjectId of the Product
  quantity: number;
  price: number;
};

export type TOrder = {
  user: Types.ObjectId;
  items: TItems[];
  totalAmount: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  paymentMethod: 'COD' | 'Card' | 'Bkash';
  paymentStatus: 'paid' | 'unpaid';
  deliveryAddress: string;
  createdAt?: Date;
  updatedAt?: Date;
};
