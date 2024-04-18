const { Favorite } = require('../Database/models');


const getFavoriteByPk = async (id) => {
  const favorite = await Favorite.findByPk(id);

  return favorite;
};

const findFavorite = async (userId, productId) => {
  const favorite = await Favorite.findOne({ where: { userId, productId } });

  return favorite;
};

const createFavorite = async (userId, productId) => {
  const favorite = await Favorite.create({ userId, productId });

  return favorite;
};

const deleteFavorite = async (id) => {
  const favorite = await Favorite.destroy({ where: { id } });

  return favorite;
};


module.exports = {
  getFavoriteByPk,
  createFavorite,
  deleteFavorite,
  findFavorite,
};