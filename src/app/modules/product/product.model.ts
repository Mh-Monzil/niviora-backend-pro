import { model, Schema } from 'mongoose';

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    brand: { type: String },
    images: [{ type: String, publicId: String, required: true }],
    ratings: [
      {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number, min: 1, max: 5 },
        review: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    avgRating: { type: Number, default: 0 },
  },
  { timestamps: true },
);

module.exports = model('Product', productSchema);
