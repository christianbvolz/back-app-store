const ProductsService = require('../Services/ProductsService');
const { StatusCodes } = require('http-status-codes');


const getProducts = async (req, res, next) => { 
  const { category: categoryId, q: searchInput, condition: conditionId, page, limit } = req.query;

  const responseProducts = await ProductsService.getProducts(+categoryId, searchInput, +conditionId, +page, +limit);
  
  if (responseProducts.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'Products do not exist' });

  return res.status(StatusCodes.OK).json(responseProducts);
};

const getProduct = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const responseProduct = await ProductsService.getProduct(+id);
  
  if (!responseProduct) return next({ error: StatusCodes.NO_CONTENT, message: 'Product does not exist' });

  return res.status(StatusCodes.OK).json(responseProduct);
};

module.exports = {
  getProducts,
  getProduct,
};
