import { Product } from './product.model';

const getAllProductFromDB = async () => {
  const result = await Product.find({}).populate('reviews');
  return result;
};

export const ProductService = {
  getAllProductFromDB,
};
