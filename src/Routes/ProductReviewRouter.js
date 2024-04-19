const { Router } = require('express');
const ProductReviewController = require('../Controllers/ProductReviewController');
const { validationCreateProductReview, validateAuthorization, validationUpdateProductReview } = require('../Middlewares/validations');


const route = Router();

route.post('/', validateAuthorization, validationCreateProductReview, ProductReviewController.createProductReview);
route.put('/:id', validateAuthorization, validationUpdateProductReview, ProductReviewController.updateProductReview);
route.delete('/:id', validateAuthorization, ProductReviewController.deleteProductReview);

module.exports = route;
