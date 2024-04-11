const { Router } = require('express');
const ProductsController = require('../Controllers/ProductsController');
const { validationGetProducts } = require('../Middlewares/validations');

const route = Router();

route.get('/products', validationGetProducts, ProductsController.getProducts);
route.get('/product/:id', ProductsController.getProduct);

module.exports = route;