const { Router } = require('express');
const UserController = require('../Controllers/UserController');
const { validationLogin, validationRegister, validateAuthorization } = require('../Middlewares/validations');

const route = Router();

route.post('/register', validationRegister, UserController.createUser);
route.get('/login', validationLogin, UserController.getLogin);
route.get('/validate', UserController.validateUser);
route.get('/favorites', validateAuthorization, UserController.getFavorites);
route.get('/reviews', validateAuthorization, UserController.getProductReviewByUser);
route.get('/:id', UserController.findUser);

module.exports = route;
