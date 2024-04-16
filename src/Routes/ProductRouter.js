const { Router } = require('express');
const upload = require('../Utils/multer');
const ProductController = require('../Controllers/ProductController');
const { validationGetProducts, validationCreateProduct } = require('../Middlewares/validations');

const route = Router();

route.get('/', validationGetProducts, ProductController.getProducts);
route.get('/:id', ProductController.getProductById);
route.post('/', validationCreateProduct, ProductController.createProduct);

module.exports = route;