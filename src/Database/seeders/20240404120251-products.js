"use strict";

const date = new Date();
const products = require("../../Utils/productList.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "products",
      products.map((product) => ({
        ...product,
        created_at: date,
        updated_at: date,
      })),
      {}
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete("products", null, {}),
};
