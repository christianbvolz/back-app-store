const { User, Favorite, Product } = require('../Database/models');
const sequelize = require('sequelize');
const md5 = require('md5');

const findUser = async (id) => {
  const loginUser = await User.findOne({ where: id });

  return loginUser;
};

const getLogin = async (email) => {
  const loginUser = await User.findOne({ where: { email } });

  return loginUser;
};

const createUser = async (userName, firstName, lastName, email, password) => {
  const user = await User.findOne({ where: sequelize.or({ userName }, { email }) });

  if (user) return undefined;

  const hashedPassword = md5(password);

  const createdUser = await User
  .create({ userName, firstName, lastName, email, password: hashedPassword });

  return createdUser;
};

const getFavorites = async (id) => {
  const favorites = await User.findOne({
    where: id,
    include: ['favorites'],
  });

  return favorites;
};

module.exports = {
  findUser,
  getLogin,
  createUser,
  getFavorites,
};
