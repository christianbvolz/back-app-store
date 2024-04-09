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
        password: '94fea3a5c1a28e936b5e363f1780c5e7'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};