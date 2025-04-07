import { z } from 'zod';

export const createOrderSchema = z.object({
  items: z
    .array(
      z.object({
        product: z.string().min(1, 'Product ID is required'),
        quantity: z.number().min(1, 'Quantity must be at least 1'),
        price: z.number().nonnegative('Price must be positive or 0'),
      }),
    )
    .min(1, 'At least one item is required'),
  totalAmount: z.number().nonnegative('Total amount must be positive or 0'),
  status: z.enum(['pending', 'shipped', 'delivered', 'cancelled']).optional(),
  paymentMethod: z.enum(['COD', 'Card', 'Bkash']),
  paymentStatus: z.enum(['paid', 'unpaid']).optional(),
  deliveryAddress: z.string().min(1, 'Delivery address is required'),
});

export const updateOrderSchema = z.object({
  items: z
    .array(
      z.object({
        product: z.string().optional(),
        quantity: z.number().min(1).optional(),
        price: z.number().nonnegative().optional(),
      }),
    )
    .optional(),
  totalAmount: z.number().nonnegative().optional(),
  status: z.enum(['pending', 'shipped', 'delivered', 'cancelled']).optional(),
  paymentMethod: z.enum(['COD', 'Card', 'Bkash']).optional(),
  paymentStatus: z.enum(['paid', 'unpaid']).optional(),
  deliveryAddress: z.string().optional(),
});
