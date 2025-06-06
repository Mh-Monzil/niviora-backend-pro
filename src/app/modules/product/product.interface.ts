import { Model } from 'mongoose';
import { Types } from 'mongoose';

export interface TRating {
  user: Types.ObjectId;
  rating: number;
  review?: string;
  createdAt?: Date;
}

export interface TImage {
  type: string;
  publicId: string;
}

export interface TProduct {
  _id?: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  stock: number;
  category?: Types.ObjectId;
  brand?: string;
  images: TImage[];
  ratings: TRating[];
  avgRating?: number;
  createdAt?: Date;
}

export interface ProductModel extends Model<TProduct> {
  calculateReviewsStats(productId: string): Promise<void>;
}
