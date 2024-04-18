const { ProductReview } = require('../Database/models');


const getProductReviewByPk = async (id) => {
  const productReview = await ProductReview.findByPk(id);

  return productReview;
};

const findProductReview = async (userId, productId) => {
  const productReview = await ProductReview.findOne({ where: { userId, productId } });

  return productReview;
};

const createProductReview = async (comment, rate, userId, productId) => {
  const productReview = await ProductReview.create({ comment, rate, userId, productId });

  return productReview;
};

const deleteProductReview = async (id) => {
  const productReview = await ProductReview.destroy({ where: { id } });

  return productReview;
};


module.exports = {
  findProductReview,
  createProductReview,
  deleteProductReview,
  getProductReviewByPk,
};