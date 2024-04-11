const { Router } = require('express');
const ProductController = require('../Controllers/ProductController');
const { validationGetProducts } = require('../Middlewares/validations');

const route = Router();

route.get('/products', validationGetProducts, ProductController.getProducts);
route.get('/product/:id', ProductController.getProduct);

module.exports = route;