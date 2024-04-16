const { Router } = require('express');
const ProductReviewController = require('../Controllers/ProductReviewController');
const { validationCreateProductReview } = require('../Middlewares/validations');


const route = Router();

route.post('/', validationCreateProductReview, ProductReviewController.createProductReview);
route.delete('/:id', ProductReviewController.deleteProductReview);

module.exports = route;
