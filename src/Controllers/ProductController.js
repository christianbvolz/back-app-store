const ProductService = require('../Services/ProductService');
const { StatusCodes } = require('http-status-codes');


const getProducts = async (req, res, next) => { 
  const { category: categoryId, q: searchInput, condition: conditionId, page, limit } = req.query;

  const responseProducts = await ProductService.getProducts(+categoryId, searchInput, +conditionId, +page, +limit);
  
  if (responseProducts.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'Products do not exist' });

  return res.status(StatusCodes.OK).json(responseProducts);
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const responseProduct = await ProductService.getProductById(+id);
  
  if (!responseProduct) return next({ error: StatusCodes.NO_CONTENT, message: 'Product does not exist' });

  return res.status(StatusCodes.OK).json(responseProduct);
};

const createProduct = async (req, res, next) => {
  const { title, price, sellerId, categoryId, conditionId } = req.query;
  console.log(title, price, sellerId, categoryId, conditionId);
  console.log(req.body);


  return res.status(StatusCodes.OK).end();
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
