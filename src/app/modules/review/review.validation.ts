import { z } from 'zod';

const createReviewValidationSchema = z.object({
  rating: z.number().min(1).max(5),
  review: z.string().min(1),
});

const updateReviewValidationSchema = z.object({
  rating: z.number().min(1).max(5),
  review: z.string().min(1),
});

export const ReviewValidation = {
  createReviewValidationSchema,
  updateReviewValidationSchema,
};
