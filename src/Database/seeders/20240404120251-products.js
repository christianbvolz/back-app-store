'use strict';
const products = require('../../Utils/productList.json')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products', products, {}),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};