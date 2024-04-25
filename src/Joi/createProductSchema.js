const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().positive().required(),
  quantity: Joi.number().integer().min(1).required(),
  categoryId: Joi.number().integer().min(1).max(32).required(),
  conditionId: Joi.number().integer().min(1).max(2).required(),
});

module.exports = schema;