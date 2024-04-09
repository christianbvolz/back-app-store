const { Router } = require('express');
const UserController = require('../Controllers/UserController');
const { validationLogin, validationRegister } = require('../Middlewares/validations');

const route = Router();

route.post('/register', UserController.createUser);
route.get('/login', validationLogin, UserController.getLogin);

module.exports = route;
