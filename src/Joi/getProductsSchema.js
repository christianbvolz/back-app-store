const Joi = require('joi');

const schema = Joi.object({
  category: Joi.number().messages({
    'number.base': 'category must be a number',
  }),
  q: Joi.string().messages({
    'string.base': 'q must be a string',
  }),
  condition: Joi.number().messages({
    'number.base': 'condition must be a number',
  }),
  page: Joi.number().min(1).required().messages({
    'number.base': 'page must be a number',
    'number.min': 'page must be longer than 1 character',
    'any.required': 'Email is required',
  }),
  limit: Joi.number().min(1).required().messages({
    'number.base': 'Password must be a string',
    'number.min': 'Password must be longer than, or equal to 8 characters',
    'any.required': 'Password is required',
  }),
});

module.exports = schema;