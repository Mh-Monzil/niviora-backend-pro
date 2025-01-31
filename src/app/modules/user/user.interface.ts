import { Types } from 'mongoose';

export type User = {
  //Basic Information
  id: string;
  name: string;
  email: string;
  password: string;

  //User Role and Status
  role: 'user' | 'admin' | 'moderator' | 'beauty_expert';
  isVerified?: boolean;

  //Skin Profile
  skinProfile?: {
    skinType?: 'normal' | 'dry' | 'oily' | 'combination' | 'sensitive';
    allergies?: string[];
    sensitivityLevel?: 'low' | 'moderate' | 'high';
  };

  shoppingCart?: {
    product: Types.ObjectId;
    quantity: number;
  }[];
  wishlist?: Types.ObjectId[];

  // Reviews & Ratings
  reviews?: Types.ObjectId[];

  // Shipping & Billing
  addresses?: {
    type: 'shipping' | 'billing';
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    isDefault?: boolean;
  }[];

  // Marketing Preferences
  marketingPreferences?: {
    emailNotifications?: boolean;
    smsNotifications?: boolean;
    productRecommendations?: boolean;
  };

  createdAt?: Date;
  updatedAt?: Date;
};
