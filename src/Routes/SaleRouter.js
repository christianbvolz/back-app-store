const { Router } = require('express');
const SaleController = require('../Controllers/SaleController');
const { validateAuthorization, validationCreateSale } = require('../Middlewares/validations');


const route = Router();

route.post('/', validateAuthorization, validationCreateSale, SaleController.createSale);
route.put('/:id', validateAuthorization, SaleController.updateSale);
route.delete('/:id', validateAuthorization, SaleController.deleteSale);

module.exports = route;
