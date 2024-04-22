const { Router } = require('express');
const SaleController = require('../Controllers/SaleController');
const { validateAuthorization, validationCreateSale, validationUpdateSale } = require('../Middlewares/validations');
const verifyProducts = require('../Middlewares/verifyProducts');


const route = Router();

route.get('/:id', validateAuthorization,  SaleController.getSale);
route.post('/', validateAuthorization, validationCreateSale, verifyProducts, SaleController.createSale);
route.put('/:id', validateAuthorization, validationUpdateSale, SaleController.updateSale);
route.delete('/:id', validateAuthorization, SaleController.deleteSale);

module.exports = route;
