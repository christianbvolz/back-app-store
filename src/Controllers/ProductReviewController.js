const ProductReviewService = require('../Services/ProductReviewService');
const ProductService = require('../Services/ProductService');
const UserService = require('../Services/UserService');
const { StatusCodes } = require('http-status-codes');


const createProductReview = async (req, res, next) => {
  const { comment, rate, productId } = req.body;
  const { id: authorizedId } = req.authorized;

  const productReview = await ProductReviewService.findProductReview(authorizedId, +productId);

  if (productReview) return next({ error: StatusCodes.CONFLICT, message: 'ProductReview already exists' });

  const user = await UserService.findUser(authorizedId);

  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User does not exists' });

  const product = await ProductService.getProductById(+productId);

  if (!product) return next({ error: StatusCodes.NOT_FOUND, message: 'Product does not exists' });

  const createdProductReview = await ProductReviewService
    .createProductReview(comment, rate, authorizedId, +productId);

  return res.status(StatusCodes.CREATED).json(createdProductReview);
};

const deleteProductReview = async (req, res, next) => {
  const { id } = req.params;
  const { id: authorizedId } = req.authorized;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const productReview = await ProductReviewService.getProductReviewByPk(+id);

  if (!productReview) return next({ error: StatusCodes.NOT_FOUND, message: 'ProductReview does not exists' });

  if (productReview.userId !== authorizedId)
    return next({ error: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' });

  await ProductReviewService.deleteProductReview(+id);
  
  return res.status(StatusCodes.OK).json({ message: 'ProductReview removed' });
};

const updateProductReview = async (req, res, next) => {
  const { id: reviewId } = req.params;
  const { id: authorizedId } = req.authorized;

  if (isNaN(+reviewId))
    return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const productReview = await ProductReviewService.getProductReviewByPk(+reviewId);

  if (!productReview)
    return next({ error: StatusCodes.NOT_FOUND, message: 'ProductReview does not exists' });

  if (productReview.userId !== authorizedId)
    return next({ error: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' });

  const [updated] = await ProductReviewService.updateProductReview({ reviewId , ...req.body });

  const message = (updated) ? 'updated successfully' : 'No changes';

  return res.status(StatusCodes.OK).json({ message });
};

module.exports = {
  createProductReview,
  deleteProductReview,
  updateProductReview,
};
