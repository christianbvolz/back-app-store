const Joi = require('joi');

const RegisterSchema = Joi.object({
  userName: Joi.string().required().min(6).messages({
    'string.base': 'User name must be a string',
    'string.min': 'User name must be longer than, or equal to 6 characters',
    'any.required': 'User name is required',
  }),
  firstName: Joi.string().required().messages({
    'string.base': 'First name must be a string',
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().required().messages({
    'string.base': 'Last name must be a string',
    'any.required': 'Last name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'string.email': 'Invalid email format',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.base': 'Password must be a string',
    'string.min': 'Password must be longer than, or equal to 8 characters',
    'any.required': 'Password is required',
  }),
});

module.exports = RegisterSchema;