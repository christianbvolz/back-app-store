const Joi = require('joi');

const schema = Joi.object({
  comment: Joi.string(),
  rate: Joi.number().min(1).max(5).integer().required(),
  userId: Joi.number().min(1).required(),
  productId: Joi.number().min(1).required(),
});

module.exports = schema;