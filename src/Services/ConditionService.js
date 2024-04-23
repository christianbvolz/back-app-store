const { Condition } = require('../Database/models');


const getConditions = async () => {
  const Conditions = await Condition.findAll();

  return Conditions;
};

module.exports = {
  getConditions,
};