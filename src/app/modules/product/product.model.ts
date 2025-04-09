import { model, Schema, Types } from 'mongoose';
import { TReview } from '../review/review.interface';
import { ProductModel, TProduct } from './product.interface';

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String },
    brand: { type: String },
    images: [{ type: String, publicId: String, required: true }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', required: true }],
    avgRating: { type: Number, default: 0 },
    numReviews: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

productSchema.statics.calculateReviewsStats = async function (
  productId: Types.ObjectId,
) {
  const product = await this.findById(productId).populate('reviews');
  if (!product) return;

  const numReviews = product.reviews.length;
  const totalRating = product.reviews.reduce(
    (sum: number, review: TReview) => sum + review.rating,
    0,
  );
  const avgRating = numReviews > 0 ? totalRating / numReviews : 0;

  product.avgRating = avgRating;
  product.numReviews = numReviews;

  await product.save();
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
