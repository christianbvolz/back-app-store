'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('users',
    [
      {
        user_name: 'christianbvolz',
        first_name: 'christian',
        last_name: 'volz',
        email: 'christianbvolz@gmail.com',
        password: 'a7116dd5ecd1bf17e5d86d2369af9986'
      },
      {
        user_name: 'LailaStore',
        first_name: 'Laila',
        last_name: 'Teofila',
        email: 'lailastore.contact@gmail.com',
        password: 'efcc33b66d4088dbfee3de02498320fd'
      },
      {
        user_name: 'MoustaphaStore',
        first_name: 'Usman',
        last_name: 'Moustapha',
        email: 'moustaphastore.contact@gmail.com',
        password: '478181330b81a56a7bf7607edc3724b4'
      },
      {
        user_name: 'Graciano',
        first_name: 'Graciano Cecilio',
        last_name: 'Cecilio',
        email: 'gracianocec@gmail.com',
        password: '73ec29066060c3685b8057165b209408'
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('users', null, {}),
};