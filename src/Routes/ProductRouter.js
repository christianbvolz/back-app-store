const { Router } = require('express');
const ProductController = require('../Controllers/ProductController');
const { validationGetProducts } = require('../Middlewares/validations');

const route = Router();

route.get('/', validationGetProducts, ProductController.getProducts);
route.get('/:id', ProductController.getProductById);

module.exports = route;