const Joi = require('joi');

const schema = Joi.object({
  deliveryAddress: Joi.string(),
  deliveryNumber: Joi.number().min(1).integer(),
});

module.exports = schema;