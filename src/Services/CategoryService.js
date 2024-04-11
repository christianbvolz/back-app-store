const { Category } = require('../Database/models');


const getCategories = async () => {
  const loginUser = await Category.findAll();

  return loginUser;
};

module.exports = {
  getCategories,
};