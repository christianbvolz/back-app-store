const ProductReviewService = require('../Services/ProductReviewService');
const ProductService = require('../Services/ProductService');
const UserService = require('../Services/UserService');
const { StatusCodes } = require('http-status-codes');


const createProductReview = async (req, res, next) => {
  const { comment, rate, userId, productId } = req.body;

  const productReviewService = await ProductReviewService.getProductReview(+userId, +productId);

  if (productReviewService) return next({ error: StatusCodes.CONFLICT, message: 'ProductReview already exists' });

  const user = await UserService.findUser(+userId);

  if (!user) return next({ error: StatusCodes.CONFLICT, message: 'User does not exists' });

  const product = await ProductService.getProductById(+productId);

  if (!product) return next({ error: StatusCodes.CONFLICT, message: 'Product does not exists' });

  const createdProductReview = await ProductReviewService
    .createProductReview(comment, rate, +userId, +productId);

  return res.status(StatusCodes.OK).json(createdProductReview);
};

const deleteProductReview = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  await ProductReviewService.deleteProductReview(+id);
  
  return res.status(StatusCodes.OK).json({ message: 'ProductReview removed' });
};


module.exports = {
  createProductReview,
  deleteProductReview,
};
