const { User, Sale, SaleProduct, Product, DeliveryStatus } = require('../Database/models');
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

const getProductReviewByUser = async (id) => {
  const reviews = await User.findOne({
    where: id,
    include: ['reviews'],
  });

  return reviews;
};

const getSalesByUser = async (id) => {
  const { userSales } = await User.findOne({
    where: id,
    include: [{
      model: Sale,
      as: 'userSales',
      attributes: {exclude: ['userId', 'deliveryAddress', 'deliveryNumber']},
      include: {
        model: SaleProduct,
        as: 'salesProduct',
        attributes: {exclude: ['id', 'deliveryStatusId', 'saleId', 'productId']},
        include: [{
          model: DeliveryStatus,
          as: 'deliveryStatus',
          attributes: {exclude: ['id']},
        },{
          model: Product,
          as: 'product',
          attributes:  ['id', 'title', 'price'],
        }],
      }
    }],
  });

  return userSales;
};

module.exports = {
  findUser,
  getLogin,
  createUser,
  getFavorites,
  getSalesByUser,
  getProductReviewByUser,
};
