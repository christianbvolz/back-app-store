const ProductService = require('../Services/ProductService');
const { StatusCodes } = require('http-status-codes');
const removeFile = require('../Utils/removeFile');
const fs = require('fs');


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
  const { title, price, categoryId, conditionId } = req.query;

  const { id: sellerId } = req.authorized;

  if (!req.file) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Picture is required' });

  const { path: filePath } = req.file;
  
  const createdProduct = await ProductService.createProduct(title, +price, +sellerId, +categoryId, +conditionId);
  
  const fileExtension = req.file.originalname.split('.')[1];

  const createdProductId = createdProduct.id;

  const picturePath = `src/images/${createdProductId}-p.${fileExtension}`

  fs.renameSync(filePath, picturePath);

  return res.status(StatusCodes.CREATED).json(createdProduct);
};

const deleteProduct = async (req, res, next) => {
  const { id: productId, sellerId } = req.product;
  const { id: userId } = req.authorized;

  if (userId !== sellerId) return next({
    error: StatusCodes.UNAUTHORIZED,
    message: 'Product does not belong to the seller',
  });

  await ProductService.deleteProduct(+productId);

  await removeFile(`src/images/${productId}-p*`);

  return res.status(StatusCodes.OK).json({ message: 'Product removed' });
};

const updateProduct = async (req, res, next) => {
  const { title, price, categoryId, conditionId } = req.query;
  const { id: productId, sellerId } = req.product;
  

  if (sellerId !== req.authorized.id)
    return next({ error: StatusCodes.UNAUTHORIZED, message: 'Product does not belong to the seller' });
  
  const updatedProduct = await ProductService.updateProduct({
    productId,
    title,
    price,
    categoryId,
    conditionId,
  });
  
  if (!updatedProduct) return next({ error: StatusCodes.NO_CONTENT, message: 'Product does not exist' });

  if(req.file) {
    const { path: filePath } = req.file;

    const fileExtension = req.file.originalname.split('.')[1];

    const newPicturePath = `src/images/${productId}-p.${fileExtension}`;

    fs.renameSync(filePath, newPicturePath);
    
    await removeFile(`src/images/${productId}-p.*`, newPicturePath);
  };
  
  const message = (updatedProduct[0] === 1 || req.file) ? 'updated successfully' : 'No changes';
  return res.status(StatusCodes.OK).json({ message });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
