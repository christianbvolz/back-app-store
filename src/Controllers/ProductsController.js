const ProductsService = require('../Services/ProductsService');

const getProducts = async (req, res, next) => { 
  const { category: categoryId, q: searchInput, condition: conditionId, page, limit } = req.query;

  const responseProducts = await ProductsService.getProducts(+categoryId, searchInput, +conditionId, +page, +limit);
  
  if (responseProducts.length === 0) return next({ error: 204, message: 'Products do not exist' });

  return res.status(200).json(responseProducts);
};

const getProduct = async (req, res, next) => {
  const { id } = req.params;
  const responseProduct = await ProductsService.getProduct(+id);
  
  if (!responseProduct) return next({ error: 204, message: 'Product does not exist' });

  return res.status(200).json(responseProduct);
};

module.exports = {
  getProducts,
  getProduct,
};
