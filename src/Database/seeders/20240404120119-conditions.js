'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('conditions',
    [
      {
        condition_name: 'new',
      },{
        condition_name: 'used',
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('conditions', null, {}),
};