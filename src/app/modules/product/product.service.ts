import { Product } from './product.model';

const getAllProductFromDB = async () => {
  const result = await Product.find({}).populate('reviews');
  return result;
};

const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById(id).populate('reviews');
  return result;
};

export const ProductService = {
  getAllProductFromDB,
  getProductByIdFromDB,
};
