import { model, Schema } from 'mongoose';
import { Product } from '../product/product.model';

const reviewSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, required: true },
  },
  { timestamps: true },
);

reviewSchema.post('save', async function () {
  const review = await this.populate('product');
  await Product.calculateReviewsStats(review.product._id.toString());
});

reviewSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Product.calculateReviewsStats(doc.product._id.toString());
  }
});

module.exports = model('Review', reviewSchema);
