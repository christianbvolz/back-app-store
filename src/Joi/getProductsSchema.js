const Joi = require('joi');

const schema = Joi.object({
  category: Joi.number().min(1),
  q: Joi.string(),
  condition: Joi.number().min(1),
  page: Joi.number().min(1).required(),
  limit: Joi.number().min(1).required(),
});

module.exports = schema;