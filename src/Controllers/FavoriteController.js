const FavoriteService = require('../Services/FavoriteService');
const ProductService = require('../Services/ProductService');
const UserService = require('../Services/UserService');
const { StatusCodes } = require('http-status-codes');


const createFavorite = async (req, res, next) => {
  const { userId, productId } = req.body;

  const favorite = await FavoriteService.getFavorite(+userId, +productId);

  if (favorite) return next({ error: StatusCodes.CONFLICT, message: 'Favorite already exists' });

  const user = await UserService.findUser(+userId);

  if (!user) return next({ error: StatusCodes.CONFLICT, message: 'User does not exists' });

  const product = await ProductService.getProductById(+productId);

  if (!product) return next({ error: StatusCodes.CONFLICT, message: 'Product does not exists' });

  const createdFavorite = await FavoriteService.createFavorite(+userId, +productId);

  return res.status(StatusCodes.OK).json(createdFavorite);
};

const deleteFavorite = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  await FavoriteService.deleteFavorite(+id);
  
  return res.status(StatusCodes.OK).json({ message: 'Favorite removed' });
};


module.exports = {
  createFavorite,
  deleteFavorite,
};
