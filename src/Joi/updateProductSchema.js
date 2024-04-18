const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string(),
  price: Joi.number().positive(),
  categoryId: Joi.number().min(1).max(32),
  conditionId: Joi.number().min(1).max(2),
});

module.exports = schema;