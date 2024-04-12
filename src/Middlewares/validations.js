const { StatusCodes } = require('http-status-codes');
const LoginSchema = require('../Joi/LoginSchema');
const RegisterSchema = require('../Joi/RegisterSchema');
const getProductsSchema = require('../Joi/getProductsSchema');
const createFavoriteSchema = require('../Joi/createFavoriteSchema');
const createProductReviewSchema = require('../Joi/createProductReviewSchema');



const validator = (schema, values) => {
  const { error } = schema.validate(values);

  if (error) return { error: StatusCodes.UNPROCESSABLE_ENTITY, message: error.details[0].message };
};

const validationLogin = (req, _res, next) => next(validator(LoginSchema, req.body));

const validationRegister = (req, _res, next) => next(validator(RegisterSchema, req.body));

const validationGetProducts = (req, _res, next) => next(validator(getProductsSchema, req.query));

const validationCreateFavorite = (req, _res, next) => next(validator(createFavoriteSchema, req.body));

const validationcreateProductReview = (req, _res, next) => next(validator(createProductReviewSchema, req.body));


module.exports = {
  validationLogin,
  validationRegister,
  validationGetProducts,
  validationCreateFavorite,
  validationcreateProductReview,
};