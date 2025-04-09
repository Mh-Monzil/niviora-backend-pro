import { model, Schema } from 'mongoose';

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

module.exports = model('Product', productSchema);
