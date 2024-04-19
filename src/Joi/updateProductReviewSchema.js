const Joi = require('joi');

const schema = Joi.object({
  comment: Joi.string(),
  rate: Joi.number().min(1).max(5).integer(),
});

module.exports = schema;