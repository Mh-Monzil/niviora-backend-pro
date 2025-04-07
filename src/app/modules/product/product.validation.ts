import { z } from 'zod';

const imageSchema = z.object({
  type: z.string(),
  publicId: z.string(),
});

// Single rating schema
const ratingSchema = z.object({
  rating: z.number().min(1).max(5),
  review: z.string().optional(),
  createdAt: z.date().optional(),
});

// Main product validation schema
export const createProductValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be non-negative'),
  stock: z.number().min(0, 'Stock must be non-negative'),
  brand: z.string().optional(),
  images: z.array(imageSchema).min(1, 'At least one image is required'),
  ratings: z.array(ratingSchema).optional(),
  avgRating: z.number().min(0).max(5).optional(),
});

export const updateProductValidationSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  description: z.string().min(1, 'Description is required').optional(),
  price: z.number().min(0, 'Price must be non-negative').optional(),
  stock: z.number().min(0, 'Stock must be non-negative').optional(),
  brand: z.string().optional(),
  images: z
    .array(imageSchema)
    .min(1, 'At least one image is required')
    .optional(),
  ratings: z.array(ratingSchema).optional(),
  avgRating: z.number().min(0).max(5).optional(),
});
