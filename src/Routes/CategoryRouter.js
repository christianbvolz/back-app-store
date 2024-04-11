const { Router } = require('express');
const CategoryController = require('../Controllers/CategoryController');

const route = Router();

route.get('/', CategoryController.getCategories);

module.exports = route;
