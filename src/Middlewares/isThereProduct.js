const ProductService = require('../Services/ProductService');
const { StatusCodes } = require('http-status-codes');


const isThereProduct = async (req, _res, next) => {
  const { id: productId } = req.params;
  
  if (isNaN(+productId))
    return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const product = await ProductService.getProductById(+productId);

  if (!product) return next({ error: StatusCodes.NO_CONTENT, message: 'Product does not exist' });
  
  req.product = product;
  return next();
};

module.exports = isThereProduct;