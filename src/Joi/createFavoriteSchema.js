const Joi = require('joi');

const schema = Joi.object({
  userId: Joi.number().min(1).required(),
  productId: Joi.number().min(1).required(),
});

module.exports = schema;