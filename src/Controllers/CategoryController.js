const CategoryService = require('../Services/CategoryService');
const { StatusCodes } = require('http-status-codes');


const getCategories = async (_req, res, next) => { 

  const categories = await CategoryService.getCategories();
  
  if (categories.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'Categories do not exist' });

  return res.status(StatusCodes.OK).json(categories);
};


module.exports = {
  getCategories,
};
