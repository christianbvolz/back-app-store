const { Favorite } = require('../Database/models');


const getFavorite = async (userId, productId) => {
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
  createFavorite,
  deleteFavorite,
  getFavorite,
};