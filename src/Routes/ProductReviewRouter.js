const { Router } = require('express');
const ProductReviewController = require('../Controllers/ProductReviewController');
const { validationcreateProductReview } = require('../Middlewares/validations');


const route = Router();

route.post('/', validationcreateProductReview, ProductReviewController.createProductReview);
route.delete('/:id', ProductReviewController.deleteProductReview);

module.exports = route;
