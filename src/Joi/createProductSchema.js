const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().positive().required(),
  categoryId: Joi.number().min(1).max(32).required(),
  conditionId: Joi.number().min(1).max(2).required(),
});

module.exports = schema;