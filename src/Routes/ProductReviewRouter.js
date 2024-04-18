const { Router } = require('express');
const ProductReviewController = require('../Controllers/ProductReviewController');
const { validationCreateProductReview, validateAuthorization } = require('../Middlewares/validations');


const route = Router();

route.post('/', validateAuthorization, validationCreateProductReview, ProductReviewController.createProductReview);
route.delete('/:id', validateAuthorization, ProductReviewController.deleteProductReview);

module.exports = route;
