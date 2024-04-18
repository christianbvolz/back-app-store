const { StatusCodes } = require('http-status-codes');
const LoginSchema = require('../Joi/LoginSchema');
const RegisterSchema = require('../Joi/RegisterSchema');
const getProductsSchema = require('../Joi/getProductsSchema');
const createFavoriteSchema = require('../Joi/createFavoriteSchema');
const createProductReviewSchema = require('../Joi/createProductReviewSchema');
const createProductSchema = require('../Joi/createProductSchema');
const updateProductSchema = require('../Joi/updateProductSchema');
const { verifyToken } = require('../Token')



const validator = (schema, values) => {
  const { error } = schema.validate(values);

  if (error) return { error: StatusCodes.UNPROCESSABLE_ENTITY, message: error.details[0].message };
};

const validateAuthorization = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next({ error: StatusCodes.UNAUTHORIZED, message: 'UNAUTHORIZED' });

  const authorized = verifyToken(authorization);

  if (!authorized) return next({ error: StatusCodes.UNAUTHORIZED, message: 'UNAUTHORIZED' });

  req.authorized = authorized;
  return next();
};

const validationLogin = (req, _res, next) => next(validator(LoginSchema, req.body));

const validationRegister = (req, _res, next) => next(validator(RegisterSchema, req.body));

const validationGetProducts = (req, _res, next) => next(validator(getProductsSchema, req.query));

const validationCreateFavorite = (req, _res, next) => next(validator(createFavoriteSchema, req.body));

const validationCreateProduct = (req, _res, next) => next(validator(createProductSchema, req.query));

const validationUpdateProduct = (req, _res, next) => next(validator(updateProductSchema, req.query));

const validationCreateProductReview = (req, _res, next) => next(validator(createProductReviewSchema, req.body));


module.exports = {
  validateAuthorization,
  validationLogin,
  validationRegister,
  validationGetProducts,
  validationCreateFavorite,
  validationCreateProduct,
  validationUpdateProduct,
  validationCreateProductReview,
};