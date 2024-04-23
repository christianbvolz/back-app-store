const ConditionService = require('../Services/ConditionService');
const { StatusCodes } = require('http-status-codes');


const getConditions = async (_req, res, next) => { 

  const conditions = await ConditionService.getConditions();
  
  if (conditions.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'Conditions do not exist' });

  return res.status(StatusCodes.OK).json(conditions);
};


module.exports = {
  getConditions,
};
