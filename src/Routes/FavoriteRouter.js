const { Router } = require('express');
const FavoriteController = require('../Controllers/FavoriteController');
const { validationCreateFavorite, validateAuthorization } = require('../Middlewares/validations');


const route = Router();

route.post('/', validateAuthorization, validationCreateFavorite, FavoriteController.createFavorite);
route.delete('/:id', validateAuthorization, FavoriteController.deleteFavorite);

module.exports = route;
