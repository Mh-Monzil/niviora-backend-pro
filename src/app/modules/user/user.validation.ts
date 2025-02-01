import { z } from 'zod';

export const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required').trim(),
  email: z.string().email('Invalid email address').trim(),
  password: z.string().min(6, 'Password must be at least 6 characters'),

  role: z.enum(['user', 'admin', 'moderator', 'beauty_expert']).default('user'),
  isVerified: z.boolean().default(false),

  skinProfile: z
    .object({
      skinType: z
        .enum(['normal', 'dry', 'oily', 'combination', 'sensitive'])
        .optional(),
      allergies: z.array(z.string()).optional(),
      sensitivityLevel: z.enum(['low', 'moderate', 'high']).optional(),
    })
    .optional(),

  shoppingCart: z
    .array(
      z.object({
        product: z.string(), // Assuming MongoDB ObjectId stored as string
        quantity: z.number().min(1).default(1),
      }),
    )
    .optional(),

  wishlist: z.array(z.string()).optional(),

  reviews: z.array(z.string()).optional(),

  addresses: z
    .array(
      z.object({
        type: z.enum(['shipping', 'billing']),
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        postalCode: z.string().optional(),
        country: z.string().optional(),
        isDefault: z.boolean().default(false),
      }),
    )
    .optional(),

  marketingPreferences: z
    .object({
      emailNotifications: z.boolean().default(true),
      smsNotifications: z.boolean().default(false),
      productRecommendations: z.boolean().default(true),
    })
    .optional(),
});

export default userValidationSchema;
