const { Router } = require('express');
const ProductsController = require('../Controllers/ProductsController');

const route = Router();

route.get('/products', ProductsController.getProducts);
route.get('/product/:id', ProductsController.getProduct);

module.exports = route;