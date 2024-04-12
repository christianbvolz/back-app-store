'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('favorites',
    [
      {
        user_id: 1,
        product_id: 5,
      },
      {
        user_id: 1,
        product_id: 111,
      },
      {
        user_id: 1,
        product_id: 69,
      },
      {
        user_id: 1,
        product_id: 42,
      },
      {
        user_id: 1,
        product_id: 420,
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('favorites', null, {}),
};