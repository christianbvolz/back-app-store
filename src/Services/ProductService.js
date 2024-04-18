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


const getProductById = async (id) => {
  include.push({
    model: User,
    as: 'reviews',
    attributes: ['userName'],
  });
  const product = await Product.findOne({
    where: id,
    include,
  });

  return product;
};

const createProduct = async (title, price, sellerId, categoryId, conditionId) => {
  const product = await Product.create({ title, price, sellerId, categoryId, conditionId });
  
  return product;
};


const deleteProduct = async (id) => {
  const product = await Product.destroy({ where: { id } });

  return product;
};

const updateProduct = async (changes) => {
  const product = await Product.update(changes, { where: { id: changes.productId } });


  return product;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
};