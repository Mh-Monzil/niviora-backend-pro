import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    // Basic Information
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // User Role and Status
    role: {
      type: String,
      enum: ['user', 'admin', 'moderator', 'beauty_expert'],
      default: 'user',
    },
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Skin Profile
    skinProfile: {
      skinType: {
        type: String,
        enum: ['normal', 'dry', 'oily', 'combination', 'sensitive'],
      },
      allergies: [String],
      sensitivityLevel: {
        type: String,
        enum: ['low', 'moderate', 'high'],
      },
    },

    // Shopping & Preferences
    shoppingCart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],

    // Reviews & Ratings
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review',
      },
    ],

    // Shipping & Billing
    addresses: [
      {
        type: {
          type: String,
          enum: ['shipping', 'billing'],
          required: true,
        },
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
        isDefault: {
          type: Boolean,
          default: false,
        },
      },
    ],

    // Marketing Preferences
    marketingPreferences: {
      emailNotifications: {
        type: Boolean,
        default: true,
      },
      smsNotifications: {
        type: Boolean,
        default: false,
      },
      productRecommendations: {
        type: Boolean,
        default: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model('User', userSchema);
