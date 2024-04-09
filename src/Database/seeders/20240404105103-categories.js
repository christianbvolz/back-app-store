'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('categories',
    [
      {
        category_name: "Acessórios para Veículos"
      },
      {
        category_name: "Agro"
      },
      {
        category_name: "Alimentos e Bebidas"
      },
      {
        category_name: "Animais"
      },
      {
        category_name: "Antiguidades e Coleções"
      },
      {
        category_name: "Arte, Papelaria e Armarinho"
      },
      {
        category_name: "Bebês"
      },
      {
        category_name: "Beleza e Cuidado Pessoal"
      },
      {
        category_name: "Brinquedos e Hobbies"
      },
      {
        category_name: "Calçados, Roupas e Bolsas"
      },
      {
        category_name: "Câmeras e Acessórios"
      },
      {
        category_name: "Carros, Motos e Outros"
      },
      {
        category_name: "Casa, Móveis e Decoração"
      },
      {
        category_name: "Celulares e Telefones"
      },
      {
        category_name: "Construção"
      },
      {
        category_name: "Eletrodomésticos"
      },
      {
        category_name: "Eletrônicos, Áudio e Vídeo"
      },
      {
        category_name: "Esportes e Fitness"
      },
      {
        category_name: "Ferramentas"
      },
      {
        category_name: "Festas e Lembrancinhas"
      },
      {
        category_name: "Games"
      },
      {
        category_name: "Imóveis"
      },
      {
        category_name: "Indústria e Comércio"
      },
      {
        category_name: "Informática"
      },
      {
        category_name: "Ingressos"
      },
      {
        category_name: "Instrumentos Musicais"
      },
      {
        category_name: "Joias e Relógios"
      },
      {
        category_name: "Livros, Revistas e Comics"
      },
      {
        category_name: "Música, Filmes e Seriados"
      },
      {
        category_name: "Saúde"
      },
      {
        category_name: "Serviços"
      },
      {
        category_name: "Mais Categorias"
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};