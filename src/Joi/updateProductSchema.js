const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string(),
  price: Joi.number().positive(),
  quantity: Joi.number().integer().min(1),
  categoryId: Joi.number().integer().min(1).max(32),
  conditionId: Joi.number().integer().min(1).max(2),
});

module.exports = schema;