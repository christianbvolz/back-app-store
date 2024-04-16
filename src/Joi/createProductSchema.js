const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().positive().required(),
  sellerId: Joi.number().min(1).required(),
  categoryId: Joi.number().min(1).required(),
  conditionId: Joi.number().min(1).required(),
});

module.exports = schema;