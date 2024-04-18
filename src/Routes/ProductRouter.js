const { Router } = require('express');
const upload = require('../Utils/multer');
const ProductController = require('../Controllers/ProductController');
const { validationGetProducts, validationCreateProduct, validationUpdateProduct, validateAuthorization } = require('../Middlewares/validations');
const isThereProduct = require('../Middlewares/isThereProduct');

const route = Router();

route.get('/', validationGetProducts, ProductController.getProducts);
route.get('/:id', ProductController.getProductById);
route.post('/', validateAuthorization, validationCreateProduct, upload.single('picture'), ProductController.createProduct);
route.delete('/:id', validateAuthorization, isThereProduct, ProductController.deleteProduct);
route.put('/:id', validateAuthorization, validationUpdateProduct, isThereProduct, upload.single('picture'), ProductController.updateProduct);

module.exports = route;