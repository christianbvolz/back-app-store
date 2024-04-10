'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        user_name: 'christianbvolz',
        first_name: 'christian',
        last_name: 'volz',
        email: 'chris@test.com',
        password: 'a7116dd5ecd1bf17e5d86d2369af9986'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};