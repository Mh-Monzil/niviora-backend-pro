import { model, Schema } from 'mongoose';

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

module.exports = model('Review', reviewSchema);
