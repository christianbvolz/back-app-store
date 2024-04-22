const Joi = require('joi');

const schema = Joi.object({
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.number().min(1).integer(),
  totalPrice: Joi.number().required().positive(),
  products: Joi.array().items(
    Joi.object({
      productId: Joi.number().min(1).integer().required(),
      quantity: Joi.number().min(1).integer().required(),
    }).required()
  ).required(),
});

module.exports = schema;