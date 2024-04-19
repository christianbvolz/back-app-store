const FavoriteService = require('../Services/FavoriteService');
const ProductService = require('../Services/ProductService');
const UserService = require('../Services/UserService');
const { StatusCodes } = require('http-status-codes');


const createFavorite = async (req, res, next) => {
  const { productId } = req.body;
  const { id: authorizedId } = req.authorized;

  const favorite = await FavoriteService.findFavorite(+authorizedId, +productId);

  if (favorite) return next({ error: StatusCodes.CONFLICT, message: 'Favorite already exists' });

  const user = await UserService.findUser(+authorizedId);

  if (!user) return next({ error: StatusCodes.NOT_FOUND, message: 'User does not exists' });

  const product = await ProductService.getProductById(+productId);

  if (!product) return next({ error: StatusCodes.NOT_FOUND, message: 'Product does not exists' });

  const createdFavorite = await FavoriteService.createFavorite(+authorizedId, +productId);

  return res.status(StatusCodes.CREATED).json(createdFavorite);
};

const deleteFavorite = async (req, res, next) => {
  const { id } = req.params;
  const { id: authorizedId } = req.authorized;

  if (isNaN(+id)) return next({ error: StatusCodes.UNPROCESSABLE_ENTITY, message: 'Id must be a number' });

  const favorite = await FavoriteService.getFavoriteByPk(+id);

  if (!favorite) return next({ error: StatusCodes.NOT_FOUND, message: 'Favorite does not exists' });

  if (authorizedId !== favorite.userId) return next({ error: StatusCodes.UNAUTHORIZED, message: 'Unauthorized user' });

  await FavoriteService.deleteFavorite(+id);
  
  return res.status(StatusCodes.OK).json({ message: 'Favorite removed' });
};


module.exports = {
  createFavorite,
  deleteFavorite,
};
