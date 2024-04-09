const { User } = require('../Database/models');
const sequelize = require('sequelize');
const md5 = require('md5');

const findUser = async (id) => {
  const loginUser = await User.findOne({ where: id });

  if (!loginUser) return undefined;

  return loginUser;
};

const getLogin = async (email, password) => {
  const loginUser = await User.findOne({ where: { email } });

  if (!loginUser) return undefined;
  
  const hashedPassword = md5(password);
  if (loginUser.password === hashedPassword) return loginUser;
  
  return { error: 404, message: 'Senha incorreta' };
};

const createUser = async (userName, firstName, lastName, email, password) => {
  const user = await User.findOne({ where: sequelize.or({ userName }, { email }) });

  if (user) return undefined;

  const hashedPassword = md5(password);

  const createdUser = await User
  .create({ userName, firstName, lastName, email, password: hashedPassword });

  return createdUser;
};


module.exports = {
  findUser,
  getLogin,
  createUser,
};