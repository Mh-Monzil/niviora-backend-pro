import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';

const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProductFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  });
});

export const ProductController = {
  getAllProduct,
};
