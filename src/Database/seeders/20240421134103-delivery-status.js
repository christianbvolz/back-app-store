'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('deliveryStatus',
    [
      {
        status_name: "Aguardando pagamento"
      },
      {
        status_name: "Pagamento aprovado"
      },
      {
        status_name: "Preparando para o envio"
      },
      {
        status_name: "Em trânsito"
      },
      {
        status_name: "Entregue"
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('deliveryStatus', null, {}),
};