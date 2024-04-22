const UserService = require('../Services/UserService');
const { StatusCodes } = require('http-status-codes');
const { generateToken, verifyToken } = require('../Token');
const md5 = require('md5');


const findUser = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const user = await UserService.findUser(+id);
  
  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User does not exist' });

  if (user.error) return next({ error: user.error, message: user.message });

  return res.status(StatusCodes.OK).json(user);
};

const getLogin = async (req, res, next) => {
  const { email, password } = req.body;
  
  const user = await UserService.getLogin(email);

  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User does not exist' });

  const hashedPassword = md5(password);

  if (user.password !== hashedPassword) return next({ error: StatusCodes.UNAUTHORIZED, message: 'Wrong password' });

  const token = generateToken({ id: user.id, email });
  const objLocalStorage = {
    userName: user.userName,
    email,
    token,
  };
  return res.status(StatusCodes.OK).json(objLocalStorage);
};

const createUser = async (req, res, next) => {
  const { userName, firstName, lastName, email, password } = req.body;
  
  const createdUser = await UserService.createUser(userName, firstName, lastName, email, password);

  if (!createdUser) return next({ error: StatusCodes.CONFLICT, message: 'User already exists' });

  const { id } = createdUser;

  const token = generateToken({ id, email });
  const objLocalStorage = {
    userName,
    email,
    token,
  };

  return res.status(StatusCodes.CREATED).json(objLocalStorage);
};

const validateUser = async (req, res, next) => {
  const { authorization } = req.headers;

  const authorized = verifyToken(authorization);

  if (!authorized) return next({ error: StatusCodes.UNAUTHORIZED, message: 'UNAUTHORIZED' });

  return res.status(StatusCodes.OK).json(authorized);
};

const getFavorites = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  
  const user = await UserService.getFavorites(authorizedId);

  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User not found' });

  if (user.favorites.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'User does not have favorites' });

  return res.status(StatusCodes.OK).json(user.favorites);
};

const getProductReviewByUser = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  
  const user = await UserService.getProductReviewByUser(authorizedId);

  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User not found' });

  if (user.reviews.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'User does not have favorites' });

  return res.status(StatusCodes.OK).json(user.reviews);
};

const getOrders = async (req, res, next) => {
  const { id: authorizedId } = req.authorized;
  
  const userSales = await UserService.getSalesByUser(authorizedId);

  if (userSales.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'User does not have orders' });

  return res.status(StatusCodes.OK).json(userSales);
};

module.exports = {
  findUser,
  getLogin,
  createUser,
  validateUser,
  getFavorites,
  getProductReviewByUser,
  getOrders,
};
