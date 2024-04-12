const { Router } = require('express');
const FavoriteController = require('../Controllers/FavoriteController');
const { validationCreateFavorite } = require('../Middlewares/validations');


const route = Router();

route.post('/', validationCreateFavorite, FavoriteController.createFavorite);
route.delete('/:id', FavoriteController.deleteFavorite);

module.exports = route;
