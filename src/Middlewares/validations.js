const LoginSchema = require('../Joi/LoginSchema');
const statusErrorRedirect = require('../Joi/StatusError');


const validationLogin = (req, _res, next) => {  
  const { error } = LoginSchema.validate(req.body);
  if (error !== undefined) {

    const erroStatus = statusErrorRedirect(error.details[0].type);

    const middlewareError = { error: erroStatus, message: error.details[0].message };

    return next(middlewareError);
  }
  next();
};

module.exports = {
  validationLogin,
};