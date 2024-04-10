const Joi = require('joi');

const schema = Joi.object({
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

module.exports = schema;