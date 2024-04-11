const { Product, Condition, Category, User } = require('../Database/models');
const { Op } = require('sequelize');

const include = [{
  model: Condition,
  as: 'condition',
  attributes: ['conditionName'],
},
{
  model: Category,
  as: 'category',
  attributes: ['categoryName'],
},
{
  model: User,
  as: 'seller',
  attributes: ['userName'],
}];

const getProducts = async (categoryId, searchInput, conditionId, page, limit) => {
  const where = {};
  if (categoryId) where.categoryId = categoryId;
  if (searchInput) where.title = { [Op.like]: `%${searchInput}%` };
  if (conditionId) where.conditionId = conditionId;

  const products = await Product.findAll({
    where,
    include,
    offset: (page - 1) * limit,
    limit,
  });

  return products;
};


const getProduct = async (id) => {
  const product = await Product.findOne({
    where: id,
    include,
  });

  return product;
};

module.exports = {
  getProducts,
  getProduct,
};