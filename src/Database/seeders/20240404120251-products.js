'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products',
  [
    {
      "title": "Bebê Conforto Wizz Para Crianças Do Grupo 0+ Até Os Seus 13kg Cor Preto Cosco",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_834543-MLU72851297502_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834543-MLU72851297502_112023-O.jpg",
      "price": 290.99
    },
    {
      "title": "Modulo Taramps Ts400x4 400w 2 Ohms Rca Ts 400x4 Amplificador 400rms T400 4 Canais Som Automotivo",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_896874-MLU74917793798_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_896874-MLU74917793798_032024-O.jpg",
      "price": 187.9
    },
    {
      "title": "Pneu Firestone F-series F-600 P 175/65r14 82 T",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_603190-MLA52430814203_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_603190-MLA52430814203_112022-O.jpg",
      "price": 292.99
    },
    {
      "title": "Chave Seta Ecosport Fiesta Ka 2003 2004 2005 2006 2007 2008",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_993681-MLB72035274399_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_993681-MLB72035274399_092023-O.jpg",
      "price": 179.9
    },
    {
      "title": "Capacete Masculino Fechado Mixs Mx2 Storm Fosco Cor Grafite Fosco Tamanho Do Capacete 58",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_776540-MLU70826148689_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776540-MLU70826148689_082023-O.jpg",
      "price": 171.03
    },
    {
      "title": "First Option 6688 Preto 25w",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_616161-MLA75407884573_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_616161-MLA75407884573_032024-O.jpg",
      "price": 56.18
    },
    {
      "title": "Câmara De Ar Para Fusca 560/15 Tr15 Alta Durabilidade",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_680231-MLU74099638486_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680231-MLU74099638486_012024-O.jpg",
      "price": 43.02
    },
    {
      "title": "Firestone F-series F-600 P 175/65r14 82 T",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_612764-MLU73592277958_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_612764-MLU73592277958_122023-O.jpg",
      "price": 585.98
    },
    {
      "title": "Chave Seta Fiorino Uno Fire 2003 2004 2005 2006 2007 2008 09",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_732852-MLB71978858328_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732852-MLB71978858328_092023-O.jpg",
      "price": 233.92
    },
    {
      "title": "Capacete Articulado Robocop Etceter Captiva Stronger Faster Cor Vermelho Tamanho Do Capacete 60",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_914880-MLU70613850710_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_914880-MLU70613850710_072023-O.jpg",
      "price": 266.32
    },
    {
      "title": "Modulo Taramps Amplificador Som 800w 4 Canais 2 Ohms Ts800x4 Cor Branco",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_873713-MLU75298793652_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873713-MLU75298793652_032024-O.jpg",
      "price": 349
    },
    {
      "title": "Macaco Hidráulico Jacare Portat 2t Ferramenta P/estepe Carro",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_961451-MLU72637735891_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961451-MLU72637735891_112023-O.jpg",
      "price": 131.05
    },
    {
      "title": "Óleo De Motor Quicksilver 2 Tempos Tc-w3 2 Tempos Para Veículos Náuticos De 1 Unidade",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_601645-MLA51754514545_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_601645-MLA51754514545_092022-O.jpg",
      "price": 47.9
    },
    {
      "title": "Adaptador Carregador Transmissor Usb Bluetooth Automotivo",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_980314-MLU72637735945_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_980314-MLU72637735945_112023-O.jpg",
      "price": 18.67
    },
    {
      "title": "Pneu Pirelli Cinturato P7 P 195/55r15 85 H",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_703800-MLA46523868695_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_703800-MLA46523868695_062021-O.jpg",
      "price": 613.21
    },
    {
      "title": "Capacete Moto Infantil New Liberty Four Kids Pro Tork Cor Rosa Tamanho Do Capacete 54",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_805351-MLB31148821600_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805351-MLB31148821600_062019-O.jpg",
      "price": 108.99
    },
    {
      "title": "Adaptador Receptor Bluetooth Automotivo 12v Universal",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_910748-MLU72830511577_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910748-MLU72830511577_112023-O.jpg",
      "price": 12.99
    },
    {
      "title": "Macaco Hidráulico Mecânica Elétrica 2t Sparta",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_964022-MLU72612991863_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964022-MLU72612991863_112023-O.jpg",
      "price": 145.5
    },
    {
      "title": "Camara De Ar Aro 13 E 14 De Carro: 165/70r13 Até 195/60r14",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_870425-MLU73982585662_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_870425-MLU73982585662_012024-O.jpg",
      "price": 44.54
    },
    {
      "title": "Kit De 2 Pneus Remold King Kar Passeio 175/65r14 P 82 H",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_612938-MLA74807971795_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_612938-MLA74807971795_022024-O.jpg",
      "price": 494.76
    },
    {
      "title": "Chave Seta Fiesta Ecosport Ka 2003 2004 2005 2006 2007 2008",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_686576-MLB74113379894_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_686576-MLB74113379894_012024-O.jpg",
      "price": 189.52
    },
    {
      "title": "Módulo Amplificador Soundigital Sd800.4 Evo 6",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_633280-MLU74089943784_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_633280-MLU74089943784_012024-O.jpg",
      "price": 359.91
    },
    {
      "title": "Capacete Fechado Gt 2 Fw3 Casco Pintado Viseira Cristal Cor Branco/vermelho Brilhante Tamanho Do Capacete 58",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_902631-MLB45104993980_032021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902631-MLB45104993980_032021-O.jpg",
      "price": 274.9
    },
    {
      "title": "Agua Desmineralizada Radiador E Bateria Galão 5 Litros",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_787522-MLU75533884066_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787522-MLU75533884066_042024-O.jpg",
      "price": 29.97
    },
    {
      "title": "Medidor Compressão De Motor Teste De Cilindros 4 Adaptadores",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_752520-MLU73333941288_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752520-MLU73333941288_122023-O.jpg",
      "price": 115.54
    },
    {
      "title": "Auto Radio Roadstar 7 Cor Mp3 Player Fm Bluetooth Muda Pasta",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_846722-MLA74782530427_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_846722-MLA74782530427_022024-O.jpg",
      "price": 121.9
    },
    {
      "title": "Pneu Continental Powercontact 2 P 195/65r15 91 H",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_730518-MLA44484093203_012021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730518-MLA44484093203_012021-O.jpg",
      "price": 464.97
    },
    {
      "title": "Chave Seta Sem Milha Sandero Logan Duster Oroch 2015 2016 17",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_772545-MLB72035329651_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_772545-MLB72035329651_092023-O.jpg",
      "price": 155.31
    },
    {
      "title": "Bomba Sucção Manual Transferência Óleo Etanol Água Gasolina",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_845862-MLU72760177294_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_845862-MLU72760177294_112023-O.jpg",
      "price": 28.04
    },
    {
      "title": "Aditivo Radiador Rosa T5 Radnaq 5 Litros Concentrado Galão",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_749813-MLU75438027630_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_749813-MLU75438027630_042024-O.jpg",
      "price": 34.48
    },
    {
      "title": "Streaming Box Faaftech Linha Chery Carplay Desbloqueio Tela",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_797364-MLU72637165733_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797364-MLU72637165733_112023-O.jpg",
      "price": 1421.28
    },
    {
      "title": "Capacete Fw3 Gtx Fox Grafite Fechado Com Oculos Interno",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_868749-MLB52856154233_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_868749-MLB52856154233_122022-O.jpg",
      "price": 342.32
    },
    {
      "title": "Macaco Hidraulico Tipo Garrafa 5 Tonelada Titanium - 7425",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_801417-MLU72608072899_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801417-MLU72608072899_112023-O.jpg",
      "price": 88.9
    },
    {
      "title": "Kit De 2 Pneus General Tire Altimax One P 175/70r14 88 T",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_946098-MLU72447622716_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_946098-MLU72447622716_102023-O.jpg",
      "price": 836.81
    },
    {
      "title": "Som Automotivo First Option 8850 Com Usb, Bluetooth E Leitor De Cartão Sd",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_783858-MLU72835319489_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_783858-MLU72835319489_112023-O.jpg",
      "price": 59.15
    },
    {
      "title": "Revitalizador Liquido Farol Carros Instantaneo Remove Fosco Cor Água",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_901586-MLU74407460717_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901586-MLU74407460717_022024-O.jpg",
      "price": 31.45
    },
    {
      "title": "Capacete Integral Robocop Stronger Faster Gladiator Etceter Cor Cinza/laranja Tamanho Do Capacete 58",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_608595-MLU74859141019_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_608595-MLU74859141019_032024-O.jpg",
      "price": 197.42
    },
    {
      "title": "Par De Pneu Mtb Chaoyang Phantom Wet Aro 29x2.20 Fx Creme Cor Preto C/marrom",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_993354-MLU71760746721_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_993354-MLU71760746721_092023-O.jpg",
      "price": 305.32
    },
    {
      "title": "Controle Remoto Jfa Redline Wr 1200 Metros",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_753289-MLU73077026384_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_753289-MLU73077026384_112023-O.jpg",
      "price": 93.06
    },
    {
      "title": "Pneu Continental Contiecocontact 3 165/70r14 85 T",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_706601-MLA74781898151_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_706601-MLA74781898151_022024-O.jpg",
      "price": 400.58
    },
    {
      "title": "Kit 3 Paletas Limpador Para-brisa Gol G6 2013 2014 2015 2016",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_713642-MLB72807836636_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_713642-MLB72807836636_112023-O.jpg",
      "price": 79.9
    },
    {
      "title": "Fonte Automotiva Infinite 60a Stetsom Voltímetro Bivolt 12v",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_627430-MLB43178420065_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627430-MLB43178420065_082020-O.jpg",
      "price": 396.9
    },
    {
      "title": "Carregador De Bateria 12v Até 300amperes Cf5 Inteligente",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_631453-MLB71498016080_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631453-MLB71498016080_092023-O.jpg",
      "price": 119.99
    },
    {
      "title": "Bardahl B12 Plus Aditivo Para Oleo Lubrificante",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_808921-MLU74098082117_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808921-MLU74098082117_012024-O.jpg",
      "price": 37.04
    },
    {
      "title": "Capacete Aberto Personalizado Pro Tork New Three Coyote Fume Cor Preto Desenho Brilhante Tamanho Do Capacete 58",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_839406-MLU74220911618_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_839406-MLU74220911618_012024-O.jpg",
      "price": 151.71
    },
    {
      "title": "Pneu 205/60r15 Linglong Crosswind A/t Linglong 16134 Índice De Velocidade H",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_642315-MLU73935140187_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_642315-MLU73935140187_012024-O.jpg",
      "price": 398.19
    },
    {
      "title": "Jbl Estéreo Automotivo Celebrity 150 Cor Preto Unidade",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_808231-MLU73803690459_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808231-MLU73803690459_012024-O.jpg",
      "price": 279.9
    },
    {
      "title": "Sensor Tpms Pressão Pneu Cruze Onix Spin S10 Prisma Tracker",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_858808-MLB53620620471_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_858808-MLB53620620471_022023-O.jpg",
      "price": 78.99
    },
    {
      "title": "Aditivo Para Motor A Diesel Bardahl B12 Turbo Ação Polar 1l",
      "condition_id": 1,
      "category_id": 1,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_873486-MLU74141677031_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873486-MLU74141677031_012024-O.jpg",
      "price": 54.38
    },
    {
      "title": "Desengraxante 1 Litro H-7 Limpeza Pesada Spray C/ Aplicador ",
      "condition_id": 2,
      "category_id": 1,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_872578-MLU74143242113_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_872578-MLU74143242113_012024-O.jpg",
      "price": 43.58
    },
    {
      "title": "Lavadora De Alta Pressão 1500w 1750psi Wap Ousada Plus 2200 110v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_927707-MLU71036964205_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927707-MLU71036964205_082023-O.jpg",
      "price": 465
    },
    {
      "title": "Pressurizador De Água 160w 13mca 2 A 3 Pontos 220v Mm House",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_793627-MLU74085597736_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793627-MLU74085597736_012024-O.jpg",
      "price": 279.92
    },
    {
      "title": "Relógio Temperatura Umidade Termo-higrômetro Digital",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_786598-MLB53204663961_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_786598-MLB53204663961_012023-O.jpg",
      "price": 25.76
    },
    {
      "title": "Lavadora De Alta Pressão 1300 Libras Lav 1300 Vonder 127v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_747245-MLU74057096088_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_747245-MLU74057096088_012024-O.jpg",
      "price": 325.06
    },
    {
      "title": "Kit Nutrição Fertilizante Flowermind M - 1 Litro 125 Gramas",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_926240-MLU72636723765_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_926240-MLU72636723765_112023-O.jpg",
      "price": 319.9
    },
    {
      "title": "Fio Eletroplastico 500m Cerca Eletrica Rural Residencial Top",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_804164-MLU72566095670_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804164-MLU72566095670_112023-O.jpg",
      "price": 55.51
    },
    {
      "title": "Boveda 62% - 8g Kit C/3un Umidificador Ervas E Fumos",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_834736-MLB72885759426_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834736-MLB72885759426_112023-O.jpg",
      "price": 39.5
    },
    {
      "title": "Bomba Anauger Sappo Drain Fit 127v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_832279-MLU74839794068_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_832279-MLU74839794068_032024-O.jpg",
      "price": 461.37
    },
    {
      "title": "Lavadora Alta Pressão Portátil Recarregável Carros Completa Bivolt",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_688615-MLU74163816851_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_688615-MLU74163816851_012024-O.jpg",
      "price": 159
    },
    {
      "title": "Pressurizador De Água 160w 13mca 2 A 3 Pontos 110v Mm House",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_649291-MLA74805955577_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649291-MLA74805955577_022024-O.jpg",
      "price": 276.42
    },
    {
      "title": "Bomba De Água Submersa Para Poço 450w Anauger 900 5g 220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_704151-MLU70430759125_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_704151-MLU70430759125_072023-O.jpg",
      "price": 523
    },
    {
      "title": "Bomba Pressurizador De Água 120w 2100l/h 11mca 220v Mm House",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_650884-MLU74975269420_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_650884-MLU74975269420_032024-O.jpg",
      "price": 247.19
    },
    {
      "title": "Kit 01kg Combate S3 Sal Milagroso E 01kg Vita Fort Ade",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_856207-MLU72161061505_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_856207-MLU72161061505_102023-O.jpg",
      "price": 179.01
    },
    {
      "title": "Lavadora De Alta Pressão 1300 Libras Lav1300 220v - Vonder Cor Amarelo Frequência 60 Hz",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_967426-MLU74178520351_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967426-MLU74178520351_012024-O.jpg",
      "price": 318.5
    },
    {
      "title": "Saco Para Silagem Silo Gobi Brasil Pacote Com 100 Un + 100 Abraçadeiras",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_649393-MLU73474155570_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649393-MLU73474155570_122023-O.jpg",
      "price": 148
    },
    {
      "title": "Termo-higrômetro Digital + Certificado Calibração Rastreável",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_981908-MLU71094930042_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_981908-MLU71094930042_082023-O.jpg",
      "price": 62.63
    },
    {
      "title": "Pressurizador De Água Lorenzetti Pl-20 350w - 220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_694676-MLU73212143145_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694676-MLU73212143145_122023-O.jpg",
      "price": 922
    },
    {
      "title": "Termometro Higrometro Relogio Digital Medidor",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_809922-MLU73784699802_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_809922-MLU73784699802_012024-O.jpg",
      "price": 21.15
    },
    {
      "title": "Lavadora De Alta Pressão Kärcher Compacta 1500psi 1400w Cor Amarelo 110v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_777504-MLU72700073101_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777504-MLU72700073101_112023-O.jpg",
      "price": 369
    },
    {
      "title": "Fio Eletroplastico Para Cerca Elétrica Rural 15/6 - 15 Fios Polímeros De Plástico / 6 Fios Aço Galvanizado - Rolo 500m Azul",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_780220-MLU72760166084_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_780220-MLU72760166084_112023-O.jpg",
      "price": 55.64
    },
    {
      "title": "Fio Eletroplástico 500m Cerca Elétrica Rural Residencial Top",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_866625-MLB70277933851_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866625-MLB70277933851_072023-O.jpg",
      "price": 59.63
    },
    {
      "title": "Bomba Periférica Periférica Lepono Bp60 0.5hp Cor Azul 110v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_800891-MLA46320909086_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800891-MLA46320909086_062021-O.jpg",
      "price": 165
    },
    {
      "title": "Nexus Bidim - Perneira Cobra Longa Couro Perneira Couro Perneira De Couro Perneira Cobra Trilha Perneira Bidim Cobra Perneira Bidim Com Velcro Perneira De Proteção Perneira De Segurança Epi Com Ca",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_682748-MLU71707239672_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_682748-MLU71707239672_092023-O.jpg",
      "price": 34.16
    },
    {
      "title": "Parafusadeira E Furadeira De Impacto 21v Wap K21 Id01 Bivolt Cor Cinza Frequência 60hz 110v/220v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_674848-MLU73982719992_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_674848-MLU73982719992_012024-O.jpg",
      "price": 348.3
    },
    {
      "title": "Bomba De Água Submersa 1/2hp 370w Água Limpa Suja Worker Cor Vermelho 220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_935470-MLU72564952472_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_935470-MLU72564952472_112023-O.jpg",
      "price": 254.72
    },
    {
      "title": "Macaco Hidráulico Tipo Garrafa 20 Toneladas Vonder",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_714702-MLU74696104620_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714702-MLU74696104620_022024-O.jpg",
      "price": 319.9
    },
    {
      "title": "Bomba Pressurizadora De Água - P120 - 220v - Jst",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_807683-MLU72607347245_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_807683-MLU72607347245_102023-O.jpg",
      "price": 222.85
    },
    {
      "title": "Semente De Rúcula Veloster - 500gr - Topseed",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_834096-MLU69451086589_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834096-MLU69451086589_052023-O.jpg",
      "price": 119
    },
    {
      "title": "Máquina De Solda Inverter Trato Tin160 Verde E Preta 60hz 127v/220v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_963138-MLA53430350743_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_963138-MLA53430350743_012023-O.jpg",
      "price": 374.9
    },
    {
      "title": "Seringa Vacinador Automático Pistola R50  Cor Metal Walmur",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_711899-MLU75528707872_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_711899-MLU75528707872_042024-O.jpg",
      "price": 283.9
    },
    {
      "title": "Bomba Periférica Ferrari Premium Idb-50 1cv Cor Amarelo 127v/220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_848785-MLA46316662271_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848785-MLA46316662271_062021-O.jpg",
      "price": 440
    },
    {
      "title": "Bomba D`água Motobomba Periférica 0,5hp 1/2 Cv Bp60 Lepono Cor Azul 220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_913922-MLA46320871268_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913922-MLA46320871268_062021-O.jpg",
      "price": 164.01
    },
    {
      "title": "Sonoff Th R3 16a Thr316 + Sensor De Temperatura Prova D'agua",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_697109-MLA73348293176_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_697109-MLA73348293176_122023-O.jpg",
      "price": 179.9
    },
    {
      "title": "Lavadora De Alta Pressão Kärcher Compacta Amarela E Preta De 1400w Com 1500psi De Pressão Máxima 110v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_621108-MLU72418610879_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621108-MLU72418610879_102023-O.jpg",
      "price": 382.2
    },
    {
      "title": "Pressurizador De Água Pl12 Lorenzetti 220v Para Sistemas Hidráulicos 2 A 3 Pontos De Uso 12mca 160w",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_736565-MLU72645106573_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736565-MLU72645106573_112023-O.jpg",
      "price": 584
    },
    {
      "title": "Corda Elástica Eletroplástica Para Cerca Elétrica Rural Zebu",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_989017-MLU72753835826_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_989017-MLU72753835826_112023-O.jpg",
      "price": 179.89
    },
    {
      "title": "Fertilizante 1kg  Nk 12 00 46 Nitrato De Potassio Hidroponia",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_825398-MLU74543874993_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825398-MLU74543874993_022024-O.jpg",
      "price": 21.9
    },
    {
      "title": "Tssaper Bomba De Agua Periférica Tpb1000 Cor Azul Monofásica 53m",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_942815-MLB51916418321_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_942815-MLB51916418321_102022-O.jpg",
      "price": 389
    },
    {
      "title": "Lavadora De Alta Pressão 1200w Master 1500 Psi Amarelo E Preto Tramontina 127v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_967617-MLU72748568765_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967617-MLU72748568765_112023-O.jpg",
      "price": 490.15
    },
    {
      "title": "Ácido Fosfórico 85% Alimentício - Hidroponia - 1kg",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_972975-MLB73640615647_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_972975-MLB73640615647_122023-O.jpg",
      "price": 39.59
    },
    {
      "title": "Bomba Claw Auto Aspirante Wmpa37h - 1/2cv",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_679442-MLU72728940912_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_679442-MLU72728940912_112023-O.jpg",
      "price": 288
    },
    {
      "title": "Bomba Submersível Água Suja Ou Limpa 1hp 110v/127v 750w Matsuyama",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_918161-MLU71478948854_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_918161-MLU71478948854_092023-O.jpg",
      "price": 320.4
    },
    {
      "title": "Bomba Submersa 900 Poço D'agua - 1 Polegada Top De Linha! 220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_641100-MLU73212563119_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_641100-MLU73212563119_122023-O.jpg",
      "price": 259.99
    },
    {
      "title": "Máquina Inversora De Solda Portatil Mma Eletrodo Mi150d 120a 220v The Black Tools",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_933912-MLU73992835680_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933912-MLU73992835680_012024-O.jpg",
      "price": 279.9
    },
    {
      "title": "Bomba Submersa Caneta Palito 1/4hp 2,5  Intech Machine Bsca2 Voltagem 127v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_891245-MLU74830790366_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_891245-MLU74830790366_032024-O.jpg",
      "price": 447.81
    },
    {
      "title": "Saco De Silagem Branco 100 Unidades 51x110 + 100 Abraçadeira",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_678338-MLU72536137652_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_678338-MLU72536137652_102023-O.jpg",
      "price": 144.49
    },
    {
      "title": "Gerador Portátil Toyama Tg3100cxr-bivolt 3.1 Kw Monofásico Com Tecnologia Avr 115v/230v",
      "condition_id": 1,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_898894-MLA42268757900_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_898894-MLA42268757900_062020-O.jpg",
      "price": 1693.18
    },
    {
      "title": "Nagano Nbv18cfm 110/220v",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_607491-MLU71876236049_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_607491-MLU71876236049_092023-O.jpg",
      "price": 543.54
    },
    {
      "title": "Máquina Solda Mig 150a Sem Gás 3 Em 1 Tig Lift Eletrodo 220v Cor Laranja Frequência 50 Hz/60 Hz",
      "condition_id": 2,
      "category_id": 2,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_964972-MLU72628083408_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964972-MLU72628083408_112023-O.jpg",
      "price": 876.96
    },
    {
      "title": "Sonho De Valsa Pacote 1kg",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_683332-MLU73453509111_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_683332-MLU73453509111_122023-O.jpg",
      "price": 44.99
    },
    {
      "title": "Água Mineral Sem Gás Minalba Garrafa 1,5l Com 6 Unidades",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_823635-MLU75419899482_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_823635-MLU75419899482_042024-O.jpg",
      "price": 17.09
    },
    {
      "title": "1kg Alho Granulado Frito - Paitá Alimentos",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_805132-MLU73907131607_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805132-MLU73907131607_012024-O.jpg",
      "price": 23.75
    },
    {
      "title": " Café Intenso Espresso En Cápsula Gimoka Sem Glúten",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_967651-MLU72565720380_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967651-MLU72565720380_112023-O.jpg",
      "price": 27.81
    },
    {
      "title": "Ovo De Páscoa Dreams Trufado Brigadeiro 400g Cacau Show",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_962607-MLB49627141121_042022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962607-MLB49627141121_042022-O.jpg",
      "price": 124.99
    },
    {
      "title": "Fanta Laranja Sem Açúcar 350ml -  6 Unidades",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_720370-MLU73338103956_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_720370-MLU73338103956_122023-O.jpg",
      "price": 31.89
    },
    {
      "title": "Açúcar Refinado União 1kg",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_678541-MLU72852767480_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_678541-MLU72852767480_112023-O.jpg",
      "price": 4.89
    },
    {
      "title": "Bombom Garoto Garotices Caixa 250g 17 Unidades",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_781917-MLU74136924680_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781917-MLU74136924680_012024-O.jpg",
      "price": 11.49
    },
    {
      "title": "Gin London Dry 750 Ml Tanqueray",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_723566-MLU75556721001_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_723566-MLU75556721001_042024-O.jpg",
      "price": 71.99
    },
    {
      "title": "Chá Twinings Limão Com Gengibre Em Sachê 15 G 10 U",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_844348-MLA74780660867_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844348-MLA74780660867_022024-O.jpg",
      "price": 12.87
    },
    {
      "title": "Doce De Leite La Serenissima Pote 400g",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_804378-MLU74015069204_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804378-MLU74015069204_012024-O.jpg",
      "price": 15.09
    },
    {
      "title": "1kg Semente De Abóbora Crua Sem Casca | Drasen",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_843803-MLB53456465345_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_843803-MLB53456465345_012023-O.jpg",
      "price": 44.9
    },
    {
      "title": "Refrigerante Guaraná Antarctica 2 Litros",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_849913-MLU74246688303_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_849913-MLU74246688303_012024-O.jpg",
      "price": 7.39
    },
    {
      "title": "Pirulito Florestal Morango Com Açucar Sem Glúten 500 G 50 U",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_844427-MLB47755562601_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844427-MLB47755562601_102021-O.jpg",
      "price": 6.99
    },
    {
      "title": "Chocolate Baton Ao Leite Garoto Caixa 30x16g - Atacado",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_626568-MLU72750080054_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_626568-MLU72750080054_112023-O.jpg",
      "price": 25.76
    },
    {
      "title": "Grão De Bico 1kg Casa Bela",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_862771-MLU73845987041_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_862771-MLU73845987041_012024-O.jpg",
      "price": 12.08
    },
    {
      "title": "Aperitivo Bitter Campari 748ml",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_878887-MLU75401265304_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878887-MLU75401265304_042024-O.jpg",
      "price": 49.9
    },
    {
      "title": "Cogumelo Champignon Fatiado Balde 2kg",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_978014-MLU73748019446_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_978014-MLU73748019446_012024-O.jpg",
      "price": 62.9
    },
    {
      "title": "Pasta De Amendoim Crocante Integral Power 1 One Pote 1,005kg",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_903322-MLU74259896515_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_903322-MLU74259896515_012024-O.jpg",
      "price": 20.5
    },
    {
      "title": "Café Em Pó Torrado E Moído Tradicional 500g Três Corações",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_768034-MLU75556099513_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768034-MLU75556099513_042024-O.jpg",
      "price": 22.91
    },
    {
      "title": "Refrigerante Pepsi Twist Pet 2 Litros",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_991212-MLU74966839495_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991212-MLU74966839495_032024-O.jpg",
      "price": 7.69
    },
    {
      "title": "Chocolate Tortuguita Caixa C/24 - Sabor Baunilha",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_618526-MLB51055178641_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_618526-MLB51055178641_082022-O.jpg",
      "price": 25.79
    },
    {
      "title": "Azeite Espanhol Extra Virgem Carbonell 500ml",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_934881-MLU74423756938_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_934881-MLU74423756938_022024-O.jpg",
      "price": 34.39
    },
    {
      "title": "Passata Rústica Cirio Vidro 700g",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_939230-MLU73956320733_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_939230-MLU73956320733_012024-O.jpg",
      "price": 12.49
    },
    {
      "title": "Licor Creme De Morango Com Tequila Ballena 750ml",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_609825-MLU73675457279_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_609825-MLU73675457279_122023-O.jpg",
      "price": 119.99
    },
    {
      "title": "Lichia Em Calda 567g Kit Com 8 Casa Bela",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_740376-MLU73420507233_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_740376-MLU73420507233_122023-O.jpg",
      "price": 220
    },
    {
      "title": "Goma De Mandioca Para Tapioca Da Terrinha 500g",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_936795-MLA74781252877_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936795-MLA74781252877_022024-O.jpg",
      "price": 8.21
    },
    {
      "title": "Bala Bolete Tutti Frutti Sem Glúten 600 G ",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_685847-MLA74651561670_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_685847-MLA74651561670_022024-O.jpg",
      "price": 11.57
    },
    {
      "title": "Água Mineral Lindoya Verão Com Gas Garrafa 510ml Fardo C/12u",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_913035-MLU73268409501_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913035-MLU73268409501_122023-O.jpg",
      "price": 21.58
    },
    {
      "title": "Chocolate Twix 15g Caixa Com 30 Unidades",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_600220-MLB54591857490_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600220-MLB54591857490_032023-O.jpg",
      "price": 21.05
    },
    {
      "title": " Café Clássico Espresso En Cápsula Illy Sem Glúten",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_909788-MLU74117530936_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909788-MLU74117530936_012024-O.jpg",
      "price": 22.79
    },
    {
      "title": "Pasta De Amendoim Integral Power 1 One Pote 1,005kg",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_826810-MLU74148809978_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826810-MLU74148809978_012024-O.jpg",
      "price": 19.95
    },
    {
      "title": "Vermute Aureah Rossa 750ml",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_964836-MLU74699014484_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964836-MLU74699014484_022024-O.jpg",
      "price": 83.99
    },
    {
      "title": "Aveia Em Flocos Finos 1 Kg Della Terra",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_933919-MLU72565372554_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933919-MLU72565372554_112023-O.jpg",
      "price": 11.9
    },
    {
      "title": "Vinagre Aceto Balsâmico Italiano P/ Saladas La Pastina 500ml",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_932486-MLB74245728821_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932486-MLB74245728821_012024-O.jpg",
      "price": 22.78
    },
    {
      "title": "Azeite De Oliva Bom Dia Português 2 Litros Casa Bela",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_877562-MLU74196170621_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_877562-MLU74196170621_012024-O.jpg",
      "price": 245.9
    },
    {
      "title": "Suco De Laranja Integral Natural One 1,5l",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_623388-MLU74960300039_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623388-MLU74960300039_032024-O.jpg",
      "price": 12.99
    },
    {
      "title": "Kinder Ovo Joy Harry Potter Display 16 Unidades De 20g",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_892058-MLB75097534323_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892058-MLB75097534323_032024-O.jpg",
      "price": 177.9
    },
    {
      "title": "Mistura Flocada Para Empanados Panko Alfa 1 Kg",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_768565-MLU73129844486_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768565-MLU73129844486_122023-O.jpg",
      "price": 22.5
    },
    {
      "title": "Chá Leão Camomila Em Sachê 25 G 25 U",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_714005-MLU49052686431_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714005-MLU49052686431_022022-O.jpg",
      "price": 5.79
    },
    {
      "title": "Vodka Destilada Smirnoff Garrafa 1,75l",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_978836-MLU75556711277_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_978836-MLU75556711277_042024-O.jpg",
      "price": 69.99
    },
    {
      "title": " Balas Butter Toffees 500g Arcor Chocolate - Recheio Cremoso",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_630994-MLB49004801654_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_630994-MLB49004801654_022022-O.jpg",
      "price": 20.02
    },
    {
      "title": "Embalagem P/ Frango Assado - Cx 100 Unidades.",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_775588-MLB52660005365_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_775588-MLB52660005365_112022-O.jpg",
      "price": 65.14
    },
    {
      "title": "Lacta Caixa De Bombons De Chocolate Sortidos Favoritos 250,6g ",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_932908-MLU74772299355_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932908-MLU74772299355_022024-O.jpg",
      "price": 12.91
    },
    {
      "title": "Saquê Seco Azuma Soft Garrafa 740ml",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_832304-MLU74221475579_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_832304-MLU74221475579_012024-O.jpg",
      "price": 24.98
    },
    {
      "title": "Tomate Pelado Sacciali Sem Glúten Em Lata 400g",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_629067-MLA74824478545_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629067-MLA74824478545_022024-O.jpg",
      "price": 6.74
    },
    {
      "title": "Polenguinho Caixa Com 72 Unidades",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_722339-MLB43826924624_102020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_722339-MLB43826924624_102020-O.jpg",
      "price": 76.89
    },
    {
      "title": "Creme De Avelã Nutella 650g",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_736723-MLU72567975410_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736723-MLU72567975410_112023-O.jpg",
      "price": 39.99
    },
    {
      "title": "Água De Coco Sococo 1 Litro",
      "condition_id": 1,
      "category_id": 3,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_853208-MLU74245728965_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_853208-MLU74245728965_012024-O.jpg",
      "price": 9.99
    },
    {
      "title": "Cápsulas De Café Guatemala Intensidade 7 Com 10 Unidades L'or",
      "condition_id": 2,
      "category_id": 3,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_656508-MLU74113070418_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_656508-MLU74113070418_012024-O.jpg",
      "price": 18.36
    },
    {
      "title": "Mirtz 2mg-12 Comprimidos - Agener ",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_685950-MLU72828375065_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_685950-MLU72828375065_112023-O.jpg",
      "price": 48.79
    },
    {
      "title": "Bifinho Petisco Para Cachorro Amiguitos Sabor Carne Pote 1kg",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_833099-MLB50068426774_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_833099-MLB50068426774_052022-O.jpg",
      "price": 24.31
    },
    {
      "title": "Condroplex Sticks 315g Articulação Avert C/ 45 Bastões",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_976480-MLB52918151796_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_976480-MLB52918151796_122022-O.jpg",
      "price": 112.58
    },
    {
      "title": "Apoquel Zoetis 16mg Anti Coceira Cães Com 20 Comprimidos",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_823635-MLA74676695088_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_823635-MLA74676695088_022024-O.jpg",
      "price": 363.5
    },
    {
      "title": "Viva Verde Areia Para Gatos Grãos Finos 4kg ",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_885447-MLU75618386643_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_885447-MLU75618386643_042024-O.jpg",
      "price": 59.99
    },
    {
      "title": "Tapete Higienico Good Pad P/ Cães E Gatos 60x60 Cm Com 30 Un",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_642959-MLU70775256664_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_642959-MLU70775256664_072023-O.jpg",
      "price": 37.47
    },
    {
      "title": "Tapete Higiênico Cachorro 50 Unidades - 1ª Linha (80x60)",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_724796-MLU73351456550_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_724796-MLU73351456550_122023-O.jpg",
      "price": 77.9
    },
    {
      "title": "Msd Bravecto Cachorro 20 Kg 40 Kg",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_812302-MLU75593876009_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_812302-MLU75593876009_042024-O.jpg",
      "price": 274.5
    },
    {
      "title": "Tapete Higienico Espaço De Bicho 50 Unidades -envio Imediato",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_813535-MLU74360326843_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_813535-MLU74360326843_022024-O.jpg",
      "price": 59.92
    },
    {
      "title": "Rampa Pet Antiderapante Regulavel Ajustavel Gato E Cachorro",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_907269-MLU72637230817_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_907269-MLU72637230817_112023-O.jpg",
      "price": 158
    },
    {
      "title": "Regenerador Osteoarticular Osteocart Plus - Kit C/ 2 Un",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_859795-MLU73129797428_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_859795-MLU73129797428_122023-O.jpg",
      "price": 189.9
    },
    {
      "title": "Kit Saúde Oral Virbac - C.e.t Pasta + Necessaire + Escova Sabor Frango",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_844817-MLU71188641826_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844817-MLU71188641826_082023-O.jpg",
      "price": 122.8
    },
    {
      "title": "Tapete Petix Super Secão Max Citrus 30 Unidades",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_709986-MLU74695503976_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_709986-MLU74695503976_022024-O.jpg",
      "price": 78.9
    },
    {
      "title": "Areia Higiênica Chalesco Micro Cristais Para Gatos -1,8kg X 1.8kg De Peso Neto",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_690455-MLU74827869551_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690455-MLU74827869551_022024-O.jpg",
      "price": 29.9
    },
    {
      "title": "Xô Bafinho: Diga Xô Para Mau Hálito, Tártaro,placa,gengivite Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_826152-MLU73856568438_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826152-MLU73856568438_012024-O.jpg",
      "price": 65.9
    },
    {
      "title": "5 M² Manta Acrílica Perlon Filtros Aquário Lago",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_897628-MLU73043187985_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_897628-MLU73043187985_112023-O.jpg",
      "price": 26.9
    },
    {
      "title": "Barrak Osmo Suplemento Para Corais 100ml",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_935413-MLU70392171928_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_935413-MLU70392171928_072023-O.jpg",
      "price": 175
    },
    {
      "title": "Seachem Prime 500ml - Trata 20000 Litros De Água",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_878933-MLU75593056179_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878933-MLU75593056179_042024-O.jpg",
      "price": 144.98
    },
    {
      "title": "Coleira Antipulgas E Carrapatos Seresto Acima De 8kg",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_953090-MLU73580948424_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_953090-MLU73580948424_122023-O.jpg",
      "price": 166
    },
    {
      "title": "Porta Portinha Gato Cachorro G 27,5cm X 24,5 Cm Cor Branco",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_729932-MLU72825281433_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729932-MLU72825281433_112023-O.jpg",
      "price": 68.01
    },
    {
      "title": "Kit 2 Biodex Com 20 Comprimido Cada Caixa - Biofarm",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_672012-MLB31545757850_072019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672012-MLB31545757850_072019-O.jpg",
      "price": 32.84
    },
    {
      "title": "Complet Balance 500g Biofarm Suplemento Para Cães E Gatos",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_867652-MLU72648681055_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_867652-MLU72648681055_112023-O.jpg",
      "price": 321
    },
    {
      "title": "3 Xô Bafinho + Bebedouro",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_673062-MLU73859959910_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673062-MLU73859959910_012024-O.jpg",
      "price": 131.9
    },
    {
      "title": "Aerador Chafariz Piscicultura 1.5cv 1.1kw Potente 220v",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_676370-MLU74098984514_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_676370-MLU74098984514_012024-O.jpg",
      "price": 884.74
    },
    {
      "title": "Tapete Higiênico Para Cães Mr. Dry 30 Unidades 80x60",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_997942-MLU73129762432_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_997942-MLU73129762432_122023-O.jpg",
      "price": 52.91
    },
    {
      "title": "Golden Premium Especial Castrados Alimento Para Gato Adulto Sabor Frango Em Sacola De 10.1kg",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_926877-MLA75234810061_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_926877-MLA75234810061_032024-O.jpg",
      "price": 156
    },
    {
      "title": "Tapete Higiênico Para Cães Ultra Pads 60x80 C/ 30 Un Lavanda",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_805470-MLU73363637650_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805470-MLU73363637650_122023-O.jpg",
      "price": 55.27
    },
    {
      "title": "Nexgard Spectra Antipulgas E Vermífugo Cães 3,6kg A 7,5kg",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_721968-MLU73471646520_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_721968-MLU73471646520_122023-O.jpg",
      "price": 92.44
    },
    {
      "title": "Osteocart Plus 30 Comprimidos",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_759856-MLA69391990665_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_759856-MLA69391990665_052023-O.jpg",
      "price": 99.92
    },
    {
      "title": "Renadvanced Dogs 70g - Bioctal",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_847992-MLB53190929174_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_847992-MLB53190929174_012023-O.jpg",
      "price": 214
    },
    {
      "title": "Bifinho Petitos Super Premium Cães Carne 500g",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_957110-MLU72650817943_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957110-MLU72650817943_112023-O.jpg",
      "price": 28.13
    },
    {
      "title": "Golden Premium Alimento Especial Castrados Para Gato Adulto Sabor Salmão Em Sacola De 10.1kg",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_961188-MLU72536698618_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961188-MLU72536698618_102023-O.jpg",
      "price": 159
    },
    {
      "title": "Shampoo Sebolytic Spherulites Virbac Para Cães 250ml Fragrância Sem Fragrância Tom De Pelagem Recomendado Todas As Pelagens",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_909060-MLU74797405468_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909060-MLU74797405468_032024-O.jpg",
      "price": 159
    },
    {
      "title": "Kit 3 Suplemento Nutricional Nuxcell Fel Para Gatos Felinos",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_670377-MLU72646669661_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_670377-MLU72646669661_112023-O.jpg",
      "price": 136.87
    },
    {
      "title": "Nutroplus Suplemento Para Cachorros Adultos Manutenção 500g",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_791541-MLB51057560240_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_791541-MLB51057560240_082022-O.jpg",
      "price": 184.99
    },
    {
      "title": "Manta Acrílica Lã Perlon Filtros Aquários Lagos 2m X 1,5 M",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_789184-MLU74320026235_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_789184-MLU74320026235_012024-O.jpg",
      "price": 13.26
    },
    {
      "title": "Bravecto Antipulgas E Carrapatos P/cães 10 A 20kg Msd",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_603992-MLA72915184259_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_603992-MLA72915184259_112023-O.jpg",
      "price": 225.16
    },
    {
      "title": "Bebedouro Fonte Gatos Cerâmica O Nº 1",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_978888-MLU73128474510_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_978888-MLU73128474510_122023-O.jpg",
      "price": 77.96
    },
    {
      "title": "Alimento Golden Premium Especial Formula Para Cão Adulto De Raça Pequena Sabor Carne E Arroz Em Sacola De 15kg",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_991095-MLA32041427357_092019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991095-MLA32041427357_092019-O.jpg",
      "price": 158.43
    },
    {
      "title": "10 M² * Manta Acrílica Perlon Filtros Aquário Lago Sump",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_877806-MLU72660857634_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_877806-MLU72660857634_112023-O.jpg",
      "price": 37.29
    },
    {
      "title": "Seachem Prime 325ml - Condicionador De Água P/ Aquário",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_829366-MLU73363192678_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_829366-MLU73363192678_122023-O.jpg",
      "price": 95
    },
    {
      "title": "Máquina Tosar Cortar Pelo Animais Cachorro Caes Sem Fio Cor Dourado E Rosa 110v/220v",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_699959-MLU71834608852_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_699959-MLU71834608852_092023-O.jpg",
      "price": 47.78
    },
    {
      "title": "Tapete Higiênico Treine Pet - 55x60 50 Unidades",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_763933-MLU72636559263_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_763933-MLU72636559263_112023-O.jpg",
      "price": 58.17
    },
    {
      "title": "Nuxcell Pufa Suplemento Vitamínico Para Cachorros Biosyn 2g",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_755188-MLU74960298157_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_755188-MLU74960298157_032024-O.jpg",
      "price": 36.5
    },
    {
      "title": "Petisco Churu Sabor Atum E Salmão Gatos 4 Tubos 56gr - Inaba",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_788843-MLB50202221288_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_788843-MLB50202221288_062022-O.jpg",
      "price": 22.57
    },
    {
      "title": "Antipulgas E Carrapatos Bravecto 1 Comprimido Cães 10 A 20kg",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_875497-MLU71764533323_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_875497-MLU71764533323_092023-O.jpg",
      "price": 238.49
    },
    {
      "title": "Bactericida Melaleuca (melafix) - Peixes. Corais E Aquários",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_672144-MLU74051467572_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672144-MLU74051467572_012024-O.jpg",
      "price": 44.1
    },
    {
      "title": "Néctar Beija Flor Alcon Club - 600g",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_933380-MLU73213485179_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933380-MLU73213485179_122023-O.jpg",
      "price": 50.42
    },
    {
      "title": "Longevi Mastigável - 1º Super Suplemento Para Cães Da Petvi 150g - 75 Comprimidos Mastigáveis",
      "condition_id": 1,
      "category_id": 4,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_900215-MLA74676491342_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_900215-MLA74676491342_022024-O.jpg",
      "price": 128
    },
    {
      "title": "Tapete Higiênico Para Cães Zee Pad Bambu 80x60 30 Unidades",
      "condition_id": 2,
      "category_id": 4,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_729216-MLU72637510093_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729216-MLU72637510093_112023-O.jpg",
      "price": 109
    },
    {
      "title": "Vitrola Raveo Sonetto Chrome Brown 10w Bluetooth Bivolt Cor Marrom 110v/220v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_765621-MLU72542370284_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_765621-MLU72542370284_112023-O.jpg",
      "price": 449
    },
    {
      "title": "Imagem De Santa Rita De Cassia Em Resina 20cm De Altura",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_954686-MLU75151893371_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_954686-MLU75151893371_032024-O.jpg",
      "price": 89
    },
    {
      "title": "Mini Espada Medieval Elmo Punhal Creme Aço Inox Com Bainha",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_886340-MLU72487922260_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_886340-MLU72487922260_102023-O.jpg",
      "price": 48.3
    },
    {
      "title": "50 Medalhas Redonda 5cm Acrílico Cristal 2mm C/ Fita Amarel",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_622499-MLU74825655733_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_622499-MLU74825655733_022024-O.jpg",
      "price": 41
    },
    {
      "title": "Cantil Inox Frasco 230ml Garrafa Whiskeira Whisky Bolso Bar Cor Prateado",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_695295-MLU74178838755_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_695295-MLU74178838755_012024-O.jpg",
      "price": 18.43
    },
    {
      "title": "Ventilador De Mesa Super Power Vsp-30-b 30cm 6 Pás Mondial Cor Da Estrutura Preto Cor Das Pás Prata 127v",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_776494-MLU72748459639_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776494-MLU72748459639_112023-O.jpg",
      "price": 146.2
    },
    {
      "title": "Toca Discos Raveo Sonetto Chrome Vitrola Gravação Usb Sand Cor Areia 110v/220v",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_770555-MLU72598795739_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770555-MLU72598795739_102023-O.jpg",
      "price": 429.19
    },
    {
      "title": "Imagem São Padre Pio 30cm Resina Santo Cor Tradicional",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_604124-MLU74859767362_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_604124-MLU74859767362_032024-O.jpg",
      "price": 149
    },
    {
      "title": "Presente Namorada Pôster Raspadinha 100 Encontros Em Casal",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_731009-MLU72636575467_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_731009-MLU72636575467_112023-O.jpg",
      "price": 45.06
    },
    {
      "title": "Ventilador De Mesa E Parede Arno Turbo Force Vf42 Preto Com 6 Pás De  Plástico, 40 cm De Diâmetro 110 v",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_739898-MLU72653652255_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_739898-MLU72653652255_112023-O.jpg",
      "price": 309
    },
    {
      "title": "Athame Metal Cobre Brilhante 19 Cm Pedras Amarelas E Strass",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_756986-MLU73049223725_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_756986-MLU73049223725_112023-O.jpg",
      "price": 28.99
    },
    {
      "title": "Álbum Pasta Para 240 Moedas",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_668047-MLB42270987426_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_668047-MLB42270987426_062020-O.jpg",
      "price": 62.9
    },
    {
      "title": "Bandeira Do Brasil 3 Panos Grande Dupla Face Pronta Entrega",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654364-MLB75391349018_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654364-MLB75391349018_042024-O.jpg",
      "price": 109.62
    },
    {
      "title": "Vitrola Bluetooth Vinil Cd Player Portátil Raveo Spazio- 25w 110v/220v",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_645422-MLB47148702562_082021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_645422-MLB47148702562_082021-O.jpg",
      "price": 1163
    },
    {
      "title": "Imagem São José Em Resina Especial - 30 Cm Cor Mista",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_913360-MLU71967646474_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913360-MLU71967646474_092023-O.jpg",
      "price": 128
    },
    {
      "title": "5 Troféu Acrílico Cristal Sem Personalização Liso 15x10cm ",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_759076-MLU70860291993_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_759076-MLU70860291993_082023-O.jpg",
      "price": 57.19
    },
    {
      "title": "Medalha Acrílico Cristal Redonda Lisa Kit 100 Un 5cm 2mm",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_968845-MLB54612017703_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_968845-MLB54612017703_032023-O.jpg",
      "price": 50.55
    },
    {
      "title": "Cantil Porta Bebida De Bolso 255ml Inox Revestido Em Couro Cor Preto - Cantil Revestido Em Couro Ecológico",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_969048-MLU71475376095_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969048-MLU71475376095_092023-O.jpg",
      "price": 34.19
    },
    {
      "title": "Bandeira Israel Oficial - 90 X 150 Cm - Dupla Face",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_833332-MLU73127090342_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_833332-MLU73127090342_122023-O.jpg",
      "price": 48.99
    },
    {
      "title": "Vitrola Raveo Studio Brown Bluetooth Disco E Usb",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_686240-MLU73675740167_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_686240-MLU73675740167_122023-O.jpg",
      "price": 629
    },
    {
      "title": "Imagem Sagrada Família 20cm Barroca Resina ",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_911457-MLB74527332353_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_911457-MLB74527332353_022024-O.jpg",
      "price": 120
    },
    {
      "title": "Adaga Cigana Metal Dourado Envelhecido Pedra Vermelha 19 Cm",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_808016-MLU74360361797_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808016-MLU74360361797_022024-O.jpg",
      "price": 28.99
    },
    {
      "title": "Troféu Jeb's 1029 Taça",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654025-MLB48011969654_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654025-MLB48011969654_102021-O.jpg",
      "price": 29.4
    },
    {
      "title": "Cantil Em Couro E Inox Frasco Garrafa Whiskeira Bolso Luxo Cor Marrom Cantil Revestido Em Couro Ecológico",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_845716-MLU71485561263_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_845716-MLU71485561263_092023-O.jpg",
      "price": 33.1
    },
    {
      "title": "Bandeira Do Brasil Grande 3 Panos (1,92x1,35)",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_852574-MLU72530073798_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852574-MLU72530073798_102023-O.jpg",
      "price": 170.2
    },
    {
      "title": "10 Folhas Plásticas Para Moedas 30 Divisões",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_859184-MLB69202567454_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_859184-MLB69202567454_052023-O.jpg",
      "price": 49.9
    },
    {
      "title": "Vitrola Raveo Sonetto Toca-discos Com Bt Usb Reproduz/grava Cor Madeira Voltagem Bivolt",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_854453-MLU75592382231_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_854453-MLU75592382231_042024-O.jpg",
      "price": 414.91
    },
    {
      "title": "Imagem Jesus Lava Pés 13 Cm X 10 Cm Cor Colorido",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_658022-MLU73438916468_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_658022-MLU73438916468_122023-O.jpg",
      "price": 78.89
    },
    {
      "title": "Faca Bolsonaro 10  Polegadas Vazada A Laser Cabo Artesanal ",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_712837-MLB75459774326_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_712837-MLB75459774326_042024-O.jpg",
      "price": 245
    },
    {
      "title": "Circulador De Ar Ventilador 40cm Preto 65w Fix 110v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_823374-MLB47691582415_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_823374-MLB47691582415_092021-O.jpg",
      "price": 200.9
    },
    {
      "title": "Ventilador De Parede E Mesa 180w 50cm 2 Em 1 Wap Flow Turbo 110v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_937857-MLU72629015640_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_937857-MLU72629015640_112023-O.jpg",
      "price": 228.81
    },
    {
      "title": "Chave De Algema - Algemas Brasil",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_682838-MLB71246809443_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_682838-MLB71246809443_082023-O.jpg",
      "price": 37
    },
    {
      "title": "Troféu Taça Dourado - Kit C/ 3 Troféus - 28, 24 E 19 Cm ",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_928441-MLB27028525082_032018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_928441-MLB27028525082_032018-O.jpg",
      "price": 78.9
    },
    {
      "title": "Vitrola Raveo Sonetto Chrome 10w Bluetooth Bivolt  Rádio Fm Cor Rose Gold Voltagem 110v/220v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_759692-MLU74696095200_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_759692-MLU74696095200_022024-O.jpg",
      "price": 390.1
    },
    {
      "title": "Imagem São José Dormindo 28 Cm - Borracha Inquebrável",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_756480-MLU75149351209_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_756480-MLU75149351209_032024-O.jpg",
      "price": 113
    },
    {
      "title": "Álbum Para 120 Moedas  - Para Moedas De Até 27mm",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_769215-MLB70492266112_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_769215-MLB70492266112_072023-O.jpg",
      "price": 39.9
    },
    {
      "title": "Punhal Metal Dourado Brilhante 19 Cm Pedra Vermelha E Preta",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_956302-MLU73129905528_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_956302-MLU73129905528_122023-O.jpg",
      "price": 28.99
    },
    {
      "title": " Vxn V60 Vcnd-02 Cor Preto Vcnd-02b-ex De Filtro",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_973822-MLU72636540173_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_973822-MLU72636540173_112023-O.jpg",
      "price": 210
    },
    {
      "title": "Kit Medalha Agel Mini 29mm 10 Peças",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_945834-MLB54078414433_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_945834-MLB54078414433_022023-O.jpg",
      "price": 30.4
    },
    {
      "title": "Chave De Algema Universal C/ Nota Fiscal",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_619179-MLB54743589198_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619179-MLB54743589198_032023-O.jpg",
      "price": 49.9
    },
    {
      "title": "Vitrola Raveo Sonetto Chrome Retrô Toca Discos Vinil Ligth Cor Azul 110v/220v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_687907-MLU73581302044_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_687907-MLU73581302044_122023-O.jpg",
      "price": 386.39
    },
    {
      "title": "Frete Grátis! 12x S/juros!cortador Isopor© Semi-profissional",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_847337-MLB69895874800_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_847337-MLB69895874800_062023-O.jpg",
      "price": 179.5
    },
    {
      "title": "Punhal Athame Celta - Sem Corte - Metal Zamac Cabo Madeira",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_696997-MLB75354452906_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_696997-MLB75354452906_032024-O.jpg",
      "price": 47.4
    },
    {
      "title": "10 Folhas Plásticas Para Moedas 42 Divisões Pccb",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_814752-MLB69202617340_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814752-MLB69202617340_052023-O.jpg",
      "price": 49.9
    },
    {
      "title": "Ferramenta Transferência De Perfume - Bomba De Dispensador ",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_690050-MLB73701749720_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690050-MLB73701749720_012024-O.jpg",
      "price": 30.23
    },
    {
      "title": "Cantil De Bolso Inox 210ml C/ 2 Copos E Funil Porta Bebidas Cor Prata Liso",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_766286-MLU74051508216_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766286-MLU74051508216_012024-O.jpg",
      "price": 34.99
    },
    {
      "title": "Ventilador De Mesa Mondial 40cm Super Power Vsp-40-b  Cor Da Estrutura Preto Cor Das Pás Prata 127v 140w",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_755021-MLA74779495387_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_755021-MLA74779495387_022024-O.jpg",
      "price": 234.98
    },
    {
      "title": "Vitrola Raveo Sonetto Toca-discos Com Bt Usb Reproduz/grava Cor Natural Wood 110v/220v",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_831676-MLU73124111754_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_831676-MLU73124111754_122023-O.jpg",
      "price": 477.48
    },
    {
      "title": "Imagem Nossa Senhora Aparecida 25cm - Resina/ Manto/ Coroa",
      "condition_id": 1,
      "category_id": 5,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_991141-MLB72596716633_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991141-MLB72596716633_102023-O.jpg",
      "price": 87.4
    },
    {
      "title": "Adaga Punhal Ritualística Maçônica Decorativa Com Bainha",
      "condition_id": 2,
      "category_id": 5,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_709780-MLB75510296363_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_709780-MLB75510296363_032024-O.jpg",
      "price": 62.91
    },
    {
      "title": "Caderno Universitário 10 Matérias Zip Preto Tilibra",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_624451-MLU74023183482_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_624451-MLU74023183482_012024-O.jpg",
      "price": 25.9
    },
    {
      "title": "Fita Lacre Bem Adesiva De Embalagem 100x45mm 10 Unidades Transparente",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_944897-MLA71899117366_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_944897-MLA71899117366_092023-O.jpg",
      "price": 59.16
    },
    {
      "title": "Revolver Pistola De Cola Quente Com 12 Bastões De Cola Bivolt",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_803721-MLU73748017078_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_803721-MLU73748017078_012024-O.jpg",
      "price": 27.99
    },
    {
      "title": "Oleoso Pentel Oil Pastels 50 Unidades X Kit",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_833466-MLA75156214885_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_833466-MLA75156214885_032024-O.jpg",
      "price": 49.89
    },
    {
      "title": "Big Giz De Cera - Gizão Jumbo Acrilex Com 12 Unidades",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_731503-MLU73983120640_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_731503-MLU73983120640_012024-O.jpg",
      "price": 11.49
    },
    {
      "title": "Papel Sulfite Branco A4 Pacote Com 500 Folhas Report",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_652814-MLU75401934790_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_652814-MLU75401934790_042024-O.jpg",
      "price": 31.8
    },
    {
      "title": "Caderno 1 Matéria 80fls Universitário Espiral Capa Dura Zip Tilibra - Preto",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_950774-MLU75135397883_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950774-MLU75135397883_032024-O.jpg",
      "price": 18.84
    },
    {
      "title": "Kit20 Fita Larga Transparente 500m Super Adesiva Atacado",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_672767-MLU73846497085_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672767-MLU73846497085_012024-O.jpg",
      "price": 206
    },
    {
      "title": "Lápis De Cor Ecolápis Faber-castell 24 Cores Sextavado",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_947138-MLU72558414940_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_947138-MLU72558414940_112023-O.jpg",
      "price": 32.29
    },
    {
      "title": "10 Refil Bastão Cola Quente 7mm Transparente Para Pistola",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_751846-MLU71834605646_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_751846-MLU71834605646_092023-O.jpg",
      "price": 13.06
    },
    {
      "title": "Tinta Tempera Guache Acrilex 12 Cores 15 Ml Crianças",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_681058-MLU72565795380_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_681058-MLU72565795380_112023-O.jpg",
      "price": 15.27
    },
    {
      "title": "Clips 4/0 Com 420 Unidades Cor Cromado",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_739225-MLU72635624691_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_739225-MLU72635624691_112023-O.jpg",
      "price": 22.49
    },
    {
      "title": "Lápis De Cor 50 Cores Supersoft Faber Castell",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_614811-MLU73331816270_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_614811-MLU73331816270_122023-O.jpg",
      "price": 99.9
    },
    {
      "title": "Ficha Pautada 5x8 100 Folhas 203x127 Sao Domingos",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_902450-MLU74033815114_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902450-MLU74033815114_012024-O.jpg",
      "price": 14.44
    },
    {
      "title": "Kit 10 Fita Adesiva Transparente 500 Metros Larga 1",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_680939-MLU70727468955_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680939-MLU70727468955_072023-O.jpg",
      "price": 112
    },
    {
      "title": "Calculadora Científica De 12 Dígitos 240 Funções E Frações",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_732292-MLU72606101124_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732292-MLU72606101124_112023-O.jpg",
      "price": 22.35
    },
    {
      "title": "Kit De Acessórios E Agulhas Para Crochê Kit Crochê - Lanmax",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_686650-MLU71950812453_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_686650-MLU71950812453_092023-O.jpg",
      "price": 43.93
    },
    {
      "title": "12 Fita Corretivas 6 Metros Escritorio Branquinho Escolar",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_673269-MLU72830318025_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673269-MLU72830318025_112023-O.jpg",
      "price": 56.39
    },
    {
      "title": "Kit 12 Pincéis Pintura Artesanato Ponta Fina Redonda E Chato",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_877838-MLB73616717704_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_877838-MLB73616717704_122023-O.jpg",
      "price": 19.85
    },
    {
      "title": "Lápis Preto Pote 72 Unidades Leo & Leo Grafite Hb Sextavado",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_683170-MLU74033833606_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_683170-MLU74033833606_012024-O.jpg",
      "price": 31.52
    },
    {
      "title": "Caderno De Discos Basic Inteligente A5 - Floresça - Moreih",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_933031-MLU73508965024_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933031-MLU73508965024_122023-O.jpg",
      "price": 31.95
    },
    {
      "title": "Lamina De Estilete Larga 18mm Masterprint Cx C/ 100 Unds",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_645358-MLU72635662967_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_645358-MLU72635662967_112023-O.jpg",
      "price": 33.13
    },
    {
      "title": "Autopel Caixa Com 30 Unidades De Bobinas 80x40 40 Metros Branco",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_603848-MLU74089488860_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_603848-MLU74089488860_012024-O.jpg",
      "price": 131
    },
    {
      "title": "Calculadora Cientifica Casio Fx-82ms 240 Funções Preto",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_782058-MLU72731729669_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782058-MLU72731729669_112023-O.jpg",
      "price": 58.28
    },
    {
      "title": "Kit Capa Encadernação A4 - Cristal Line + Preta 100un",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_698807-MLU72637287479_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_698807-MLU72637287479_112023-O.jpg",
      "price": 34.35
    },
    {
      "title": "30 Cxs De Giz De Cera - Mini - 05 Cores Atacado Lembrancinha",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_958871-MLU72093522612_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958871-MLU72093522612_102023-O.jpg",
      "price": 30.9
    },
    {
      "title": "Kit Bastidores Completo P/iniciante Bordado Pontocruz Lanmax Cor Laranja",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_674019-MLU74725822606_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_674019-MLU74725822606_032024-O.jpg",
      "price": 74.99
    },
    {
      "title": "Giz Pastel Com 18 Cores Basic Tecido/cabelo/ Desenhos",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_622217-MLU72637587213_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_622217-MLU72637587213_112023-O.jpg",
      "price": 28
    },
    {
      "title": "Livro Registro De Empregados Capa Dura - 100 Folhas",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_871152-MLB49775379250_042022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871152-MLB49775379250_042022-O.jpg",
      "price": 34.9
    },
    {
      "title": "Kit Estilete Precisão 16 Pçs Estojo Magnético Tipo Bisturi",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_990142-MLU72751587026_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_990142-MLU72751587026_112023-O.jpg",
      "price": 19.49
    },
    {
      "title": "Grampeador Papel Profissional Escritorio Preto 25 Folhas",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_775191-MLU72667915058_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_775191-MLU72667915058_112023-O.jpg",
      "price": 16.48
    },
    {
      "title": "Saco Plastico Envelope Sem Furos 24x33 0,06 A4 Ofício 100un",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_951591-MLU70894222033_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_951591-MLU70894222033_082023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Elástico Látex Borracha 1 Kg P/ Dinheiro N°18 1200 Unids ",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_686231-MLU72566140000_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_686231-MLU72566140000_112023-O.jpg",
      "price": 28.2
    },
    {
      "title": "Kit Step Defend 3 Escovas Para Limpar Tênis.",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_787500-MLU73748019822_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787500-MLU73748019822_012024-O.jpg",
      "price": 41.86
    },
    {
      "title": " Varias Redomma Livro De Registro De Correspondência Caderno De Protocolo De Correspondência Caderno De Registro De Correspondência Livro De Controle De Correspondência Caderno De Acompanhamento De Co",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_950254-MLU72648719599_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950254-MLU72648719599_112023-O.jpg",
      "price": 23.9
    },
    {
      "title": "Giz Pastel Oleoso Óleo Oil Pentel 25 Cores Com",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_888922-MLU72542112528_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_888922-MLU72542112528_112023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Fita Dupla Face 3m Extra Forte 2kg Uso Interno 5 Metros 12mm",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_912558-MLU72055150888_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_912558-MLU72055150888_102023-O.jpg",
      "price": 27.45
    },
    {
      "title": "Kit Pincel Caneta P/ Quadro Branco 4 Cores + Apagador - Bic",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_901346-MLU70653886823_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901346-MLU70653886823_072023-O.jpg",
      "price": 39.59
    },
    {
      "title": "Envelope Nº 32 Kraft 229x324  - 250 Unidades  Scrity 101634 Cor Kraft Nome Do Desenho Sem Desenho",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_851901-MLU70335026816_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_851901-MLU70335026816_072023-O.jpg",
      "price": 78.98
    },
    {
      "title": "Saco Zip Lock Hermético N1 - 5x7 - C/ 1000 Unid",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_664408-MLU70894221953_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_664408-MLU70894221953_082023-O.jpg",
      "price": 32.08
    },
    {
      "title": "Bobina Térmica 80x30 Pdv Cupom Fiscal Cx 30 Unidades Cor Amarelo Adegraf",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_631627-MLU75358164673_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631627-MLU75358164673_032024-O.jpg",
      "price": 78.97
    },
    {
      "title": "Refil Caderno Inteligente Grande Pautado 90g Compatível 100f",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_636555-MLU72566189978_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_636555-MLU72566189978_112023-O.jpg",
      "price": 29.85
    },
    {
      "title": "Fita Métrica Corporal Flexível 150cm P/ Medida - Trena Metro",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_666758-MLB75168596112_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666758-MLB75168596112_032024-O.jpg",
      "price": 10.99
    },
    {
      "title": "Verniz Madeira Base Água Incolor Brilhante 900ml Lukscolor",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_959671-MLU74432251971_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_959671-MLU74432251971_022024-O.jpg",
      "price": 43.9
    },
    {
      "title": "Guilhotina Papel A4 C/ 30 Cm P/ Até 10 Folhas C/ Travamen",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_803761-MLU74360360595_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_803761-MLU74360360595_022024-O.jpg",
      "price": 66.96
    },
    {
      "title": "Borracha Profissional Maleável Lyra (limpa Tipos) Germany",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_858770-MLU73127150274_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_858770-MLU73127150274_122023-O.jpg",
      "price": 15.5
    },
    {
      "title": "Envelope Saco Kraft Natural Scrity 162x229 - Cx C/ 250",
      "condition_id": 2,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_970951-MLU72830478781_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970951-MLU72830478781_112023-O.jpg",
      "price": 57.26
    },
    {
      "title": " Tamoio Neutro Universitário Espiral Cd 200 Folhas  Listradas 10 Assuntos Unidade X 1 27.5cm X 20cm Neutro",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_642220-MLU69972645197_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_642220-MLU69972645197_062023-O.jpg",
      "price": 30.44
    },
    {
      "title": "Papel Sulfite A4 Chamex 300 Folhas Premium 75g 210x297mm Cor Branco",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_801291-MLU72637230691_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801291-MLU72637230691_112023-O.jpg",
      "price": 26.69
    },
    {
      "title": "Papel Fotográfico Adesivo 130g A4 Glossy Masterprint 100 Fls Cor Branco",
      "condition_id": 1,
      "category_id": 6,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_810385-MLU75436572342_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810385-MLU75436572342_042024-O.jpg",
      "price": 43
    },
    {
      "title": "Lenços Umedecidos Huggies Max Clean Lv 4 Pg 3 - 192 Unidades",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_631794-MLU74423494126_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631794-MLU74423494126_022024-O.jpg",
      "price": 38.99
    },
    {
      "title": "Fórmula Infantil Danone Proexpert Pepti 800g Aptamil",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_628398-MLA73781791372_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_628398-MLA73781791372_012024-O.jpg",
      "price": 159
    },
    {
      "title": "Pack Creme Preventivo De Assaduras Huggies Supreme Care Caixa 3 Unidades 80g Cada Embalagem Econômica",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_947330-MLU74220054445_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_947330-MLU74220054445_012024-O.jpg",
      "price": 58.49
    },
    {
      "title": "Conjunto Travel System Toffy Ts Duo Com Carrinho De Bebê E Bebê Conforto Preto Cosco Kids",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_623233-MLU72675208210_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623233-MLU72675208210_112023-O.jpg",
      "price": 807.41
    },
    {
      "title": "Cosco Kids Smart Até 23 Kg Gelo",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_627362-MLU72748504643_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627362-MLU72748504643_112023-O.jpg",
      "price": 149.9
    },
    {
      "title": "Bebê Conforto Wizz Para Crianças Do Grupo 0+ Até Os Seus 13kg Cor Preto Cosco",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_834543-MLU72851297502_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834543-MLU72851297502_112023-O.jpg",
      "price": 290.99
    },
    {
      "title": "Bico Mamadeira Avent Pétala Nº4 - 6m+ 2 Unidades",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_908135-MLB74226083891_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_908135-MLB74226083891_012024-O.jpg",
      "price": 48.5
    },
    {
      "title": "Bolsa Maternidade Bebe Princesa Reborn",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_752316-MLB46649226941_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752316-MLB46649226941_072021-O.jpg",
      "price": 24.97
    },
    {
      "title": "Jogo De Lençol Queen 4 Peças Percal 400 Fios Ponto Palito Cor Fendi Desenho Do Tecido Cor",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_925061-MLA72506525043_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_925061-MLA72506525043_102023-O.jpg",
      "price": 127
    },
    {
      "title": "Carrinho De Bebê Toffy Cosco - 0 À 15 Kg - Preto Absoluto",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_604360-MLB50829663603_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_604360-MLB50829663603_072022-O.jpg",
      "price": 509.43
    },
    {
      "title": "Mobigu Colchão Solteiro Firme Espuma D33 Coala Certificado",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_989973-MLU75142694952_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_989973-MLU75142694952_032024-O.jpg",
      "price": 285.25
    },
    {
      "title": "Cosco Assento De Elevação Booster Teen Cor Cinza 900g",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_687775-MLU72675275158_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_687775-MLU72675275158_112023-O.jpg",
      "price": 118.21
    },
    {
      "title": "Bico Mamadeira Avent Anti-colic N.4 - 2 Unidades",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_988186-MLB47598727972_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_988186-MLB47598727972_092021-O.jpg",
      "price": 39.99
    },
    {
      "title": "Kit 10 Tatames 50x50 20 Mm Colorido Economico",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_727079-MLU73654176457_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_727079-MLU73654176457_122023-O.jpg",
      "price": 70.9
    },
    {
      "title": "Carrinho De Bebê Spot Voyage - Preto Geo Cor Preto-geo",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_623338-MLU69805298747_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623338-MLU69805298747_062023-O.jpg",
      "price": 499.9
    },
    {
      "title": "Ninho Redutor Berço Bebê Menino Nuvem Azul Bebê 2 Peças",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_866502-MLU71250829161_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866502-MLU71250829161_082023-O.jpg",
      "price": 79
    },
    {
      "title": "Kit Bico Mam - Fluxo Super Rápido (+6m) - 2 Un",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_786176-MLU71712615042_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_786176-MLU71712615042_092023-O.jpg",
      "price": 50.91
    },
    {
      "title": "Cadeira De Carro Infantil All Stages 2.0 Isofix Preto Litet",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_673808-MLU72542113844_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673808-MLU72542113844_112023-O.jpg",
      "price": 1079.1
    },
    {
      "title": "Absorventes Para Seios Mamypoko Absorvente Para Seios Adesivos 30 u",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_655304-MLU74246731963_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_655304-MLU74246731963_012024-O.jpg",
      "price": 18.51
    },
    {
      "title": "Bomba De Tirar Leite Materno Bebe",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_834162-MLB72082585891_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834162-MLB72082585891_102023-O.jpg",
      "price": 44.9
    },
    {
      "title": "Carrinho De Bebê Toffy Bege - Cosco Kids",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_670307-MLU72571923182_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_670307-MLU72571923182_112023-O.jpg",
      "price": 509.43
    },
    {
      "title": "Travesseiro Para Bebê Anatômico Urso Branco 16149 Buba",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_951770-MLU72612733073_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_951770-MLU72612733073_112023-O.jpg",
      "price": 63.9
    },
    {
      "title": "Voyage Legacy Kx-27 Cadeira Infantil Para Carro 0-36kg Preta ",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_784658-MLU74221477909_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_784658-MLU74221477909_012024-O.jpg",
      "price": 719.97
    },
    {
      "title": "Xo Febre Compressas Refrescantes Para Febre Likluc C/ 4 Uni Cor Branco",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_977892-MLU70610084076_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977892-MLU70610084076_072023-O.jpg",
      "price": 38.28
    },
    {
      "title": "Bico De Silicone Advanced Líquidos Grossos- Nuk First Choice",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_986999-MLU75238402695_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986999-MLU75238402695_032024-O.jpg",
      "price": 21.9
    },
    {
      "title": "Bicicleta De Equilíbrio 4 Rodas Buba Infantil Sem Pedal Cor Azul",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_647668-MLU73212552593_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647668-MLU73212552593_122023-O.jpg",
      "price": 219.79
    },
    {
      "title": "Bolsa Canguru Ergonômico Bebê Mamãe 12 Posições 3 Em 1 Cores Cor Cinza",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_776978-MLU75335342369_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776978-MLU75335342369_032024-O.jpg",
      "price": 171.47
    },
    {
      "title": "Carrinho De Bebê De Paseio Burigotto Zap Preto",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_905567-MLA51823506986_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_905567-MLA51823506986_102022-O.jpg",
      "price": 682.9
    },
    {
      "title": "Album Dental Porta Dentes De Leite Angie By Angelus Azul",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_960447-MLU74196172389_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_960447-MLU74196172389_012024-O.jpg",
      "price": 19.9
    },
    {
      "title": "Colher Dosadora Buba - Cor Azul",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_770035-MLU74113856357_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770035-MLU74113856357_012024-O.jpg",
      "price": 34
    },
    {
      "title": "Assento Infantil Para Carro Multikids Baby Safe Booster Con Funda Removible Preto",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_987217-MLA48799960804_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_987217-MLA48799960804_012022-O.jpg",
      "price": 78.9
    },
    {
      "title": "Grade Portão Proteção Pet 69 A 74 / 79 A 84 Cm Cachorro Cor Preto",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_917571-MLU74610751557_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917571-MLU74610751557_022024-O.jpg",
      "price": 78.2
    },
    {
      "title": "Bepantol Baby Creme Antiassaduras Pomada 120g",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_937116-MLA74780420661_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_937116-MLA74780420661_022024-O.jpg",
      "price": 46.72
    },
    {
      "title": "Kit 100 Unid. Protetor De Tomadas Padrão Atacado",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_888915-MLU72565718122_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_888915-MLU72565718122_112023-O.jpg",
      "price": 33.88
    },
    {
      "title": "Carrinho De Bebê De Paseio Chicco Juvenile Goody Graphite Com Chassi De Cor Prateado",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_980773-MLA74781929605_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_980773-MLA74781929605_022024-O.jpg",
      "price": 1410
    },
    {
      "title": "Coletor De Leite Materno Gentle Flow Multikids Bb1011",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_777820-MLB51078424646_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777820-MLB51078424646_082022-O.jpg",
      "price": 32.45
    },
    {
      "title": "Dental Álbum Porta Dentinhos + Álbum Recordação Azul - Angie Cor Azul-celeste Dental Friend",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_788542-MLU70920898487_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_788542-MLU70920898487_082023-O.jpg",
      "price": 41.9
    },
    {
      "title": "Cadeirinha Para Carro Tour 09 À 36kg Cinza E Rosa Cosco Kids",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_985350-MLA53970932238_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_985350-MLA53970932238_022023-O.jpg",
      "price": 426.53
    },
    {
      "title": "Pinico Mictorio Menino Sapo Sapinho Infantil Mais Resistente",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_899992-MLU70641041871_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899992-MLU70641041871_072023-O.jpg",
      "price": 25.37
    },
    {
      "title": "Extrator De Leite Elétrico Fisher Price",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_720692-MLU73338599172_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_720692-MLU73338599172_122023-O.jpg",
      "price": 329.9
    },
    {
      "title": "Carrinho De Bebê De Paseio Voyage Spot Rosa-geo Com Chassi De Cor Preto",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_932404-MLU73214144057_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932404-MLU73214144057_122023-O.jpg",
      "price": 498.42
    },
    {
      "title": "Kit 12 Tatames Eva Preto/cinza 50x50x 2 Cm (3,00 M2) Cor Preto E Cinza",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_695862-MLU71320454415_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_695862-MLU71320454415_082023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Fórmula Infantil Em Pó Sem Glúten Nestlé Ninho Fases 1+ En Lata De 800g",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_638343-MLA51061765145_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_638343-MLA51061765145_082022-O.jpg",
      "price": 39.91
    },
    {
      "title": "Album Dental Premium Porta Dente De Leite Angie Angelus Rosa",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_683876-MLU72565799386_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_683876-MLU72565799386_112023-O.jpg",
      "price": 41.9
    },
    {
      "title": "Bico Mamadeira Anti-colic - Nº4 (6m+) - Philips Avent",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_910290-MLU72462176422_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910290-MLU72462176422_102023-O.jpg",
      "price": 40.16
    },
    {
      "title": "Cadeira De Carro Litet Smart 360° Isofix Preta Multilaser Cor Preto",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_817577-MLU73992493020_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_817577-MLU73992493020_012024-O.jpg",
      "price": 1299
    },
    {
      "title": "Grade Portão Proteção Pet Cachorro 69 A 84 Cm Criança Cães Cor Branco",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_608235-MLU74247313753_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_608235-MLU74247313753_012024-O.jpg",
      "price": 77.96
    },
    {
      "title": "Conjunto Travel System Reverse Duo Preto Rajado Cosco Kids",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_922658-MLU72894561986_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_922658-MLU72894561986_112023-O.jpg",
      "price": 829
    },
    {
      "title": "Fraldas Pampers Confort Sec Xg",
      "condition_id": 2,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_717077-MLU75592757071_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_717077-MLU75592757071_042024-O.jpg",
      "price": 198.99
    },
    {
      "title": " Unik Elétrica Branca 110v/220v",
      "condition_id": 1,
      "category_id": 7,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_729460-MLB44042778238_112020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729460-MLB44042778238_112020-O.jpg",
      "price": 150
    },
    {
      "title": "Imecap Hair Cabelos E Unhas Pague 60 E Leve 90 Capsulas",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_852397-MLU73094336466_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852397-MLU73094336466_112023-O.jpg",
      "price": 47.99
    },
    {
      "title": "Truss Uso Obrigatório - Tratamento Reconstrutor 260ml",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_821087-MLU73662398299_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_821087-MLU73662398299_122023-O.jpg",
      "price": 99
    },
    {
      "title": "Papel Higiênico Supreme Folha Tripla 24 Rolos Neve",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_967903-MLA43465119543_092020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967903-MLA43465119543_092020-O.jpg",
      "price": 39.99
    },
    {
      "title": "Creme Hidratante Revitalift Laser X3 50ml L'oréal Paris Tipo De Pele Todos Os Tipos De Pele",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_916663-MLU74941615912_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_916663-MLU74941615912_032024-O.jpg",
      "price": 63.56
    },
    {
      "title": "Gold Spell Cosméticos Tônico Poderoso Reconstrucción",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_891684-MLA74781552499_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_891684-MLA74781552499_022024-O.jpg",
      "price": 137
    },
    {
      "title": "Intensy Color Máscara Matizadora Efeito Platinado 500ml Tom Platinum",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_981794-MLU75004326909_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_981794-MLU75004326909_032024-O.jpg",
      "price": 49.89
    },
    {
      "title": "Cola P/ Cílios Postiços Macrilan Cor Transparente",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_964633-MLU74855754633_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964633-MLU74855754633_032024-O.jpg",
      "price": 17.9
    },
    {
      "title": "Humor A Dois Natura Colônia Masculino - 75ml Volume Da Unidade 75 Ml",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_632056-MLU73715201644_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_632056-MLU73715201644_012024-O.jpg",
      "price": 75.48
    },
    {
      "title": "Líquido Acido Tricloroacético A 90% Beaty Tca/ata  Para Pele Todos Os Tipos De Pele De 10ml/20g",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_894376-MLU75338462172_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_894376-MLU75338462172_032024-O.jpg",
      "price": 57.9
    },
    {
      "title": "Lubrificante E Hidratante Gel Intimo Natural Feel 50ml",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_948853-MLU74199215765_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948853-MLU74199215765_012024-O.jpg",
      "price": 78.8
    },
    {
      "title": "Gel Incolor Para Cílios E Sobrancelhas Game On - Ruby Rose",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_860206-MLU75008026743_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_860206-MLU75008026743_032024-O.jpg",
      "price": 15.88
    },
    {
      "title": "Algodão Bellacotton Quadrado Para Bebê - 3 Pacotes",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_956562-MLU73049562787_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_956562-MLU73049562787_112023-O.jpg",
      "price": 58.41
    },
    {
      "title": "Perfume Empire Sport Deo Colonia Hinode 100ml",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654290-MLU72761446286_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654290-MLU72761446286_112023-O.jpg",
      "price": 57.45
    },
    {
      "title": "Sérum Principia Retinol 0,3% + Vitamina E - Rn-0,3 Skincare Tipo De Pele Todos",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_873871-MLU72699931693_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873871-MLU72699931693_112023-O.jpg",
      "price": 54
    },
    {
      "title": "Spray Rapunzel - Tônico Capilar 230ml Lola Cosmetics ",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_837429-MLU72642575761_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_837429-MLU72642575761_112023-O.jpg",
      "price": 43.99
    },
    {
      "title": "Algodão Bellacotton Quadrado Para Bebê - 6 Pacotes",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_761355-MLU72967454712_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761355-MLU72967454712_112023-O.jpg",
      "price": 125.72
    },
    {
      "title": "Night Caviar Paris Elysees Edt - Perfume Masculino 100ml",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_904371-MLU75210335312_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904371-MLU75210335312_032024-O.jpg",
      "price": 85.91
    },
    {
      "title": "Hidratei Shrp - Creme De Proteína Vegana Restauração Total",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_644184-MLU74197118689_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644184-MLU74197118689_012024-O.jpg",
      "price": 146.26
    },
    {
      "title": "Demaquilante Hada Labo Gokujyun Oil Cleansing Com 200ml",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_934307-MLU74247985299_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_934307-MLU74247985299_012024-O.jpg",
      "price": 72.08
    },
    {
      "title": "Kit Stella Milano Brow Lamination 3passos -15 G",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_715497-MLU74158927999_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_715497-MLU74158927999_012024-O.jpg",
      "price": 289.9
    },
    {
      "title": "Escova Secadora Bec07r Soft 4 Em 1 1300w Britânia Bivolt",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_644963-MLU75401310030_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644963-MLU75401310030_042024-O.jpg",
      "price": 116.99
    },
    {
      "title": "Pasta De Dente 90gr Sabor Menta E Melaleuca Creme Dental Sem Flúor E Antisséptico Boni Natural",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_627376-MLA74782718173_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627376-MLA74782718173_022024-O.jpg",
      "price": 14.5
    },
    {
      "title": "Parfums Grès Cabotine Edt 100ml Para Feminino",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_872098-MLA70517973036_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_872098-MLA70517973036_072023-O.jpg",
      "price": 131
    },
    {
      "title": "Tônico Poderoso Gold Spell 250ml Antiqueda E Preenche Falhas",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_995135-MLB52574887244_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_995135-MLB52574887244_112022-O.jpg",
      "price": 137
    },
    {
      "title": "Tend Skin 118ml - Loção Para Foliculite E Pelos Encravados Tipo De Embalagem Frasco Fragrância Não Tipos De Pele Todos",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_804101-MLU75006742611_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804101-MLU75006742611_032024-O.jpg",
      "price": 159
    },
    {
      "title": "Papel Higiênico Toque De Seda Folha Dupla 24 Unidades Neve",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_689119-MLU73105610326_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689119-MLU73105610326_122023-O.jpg",
      "price": 39.99
    },
    {
      "title": "Creme De Definição Anna Telles Mel Cola De 500ml 500g",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_843111-MLB50958296773_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_843111-MLB50958296773_082022-O.jpg",
      "price": 39.99
    },
    {
      "title": "Armaf Club De Nuit Intense Eau De Toilette Edt 105ml Para Masculino",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_840578-MLU72639039115_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_840578-MLU72639039115_112023-O.jpg",
      "price": 307
    },
    {
      "title": "Cola Adesivo One Cherry Lash Para Alongamento De Cílios 3g Cor Preto",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_701319-MLU72751878474_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_701319-MLU72751878474_112023-O.jpg",
      "price": 69.9
    },
    {
      "title": "3x Compressas De Gazes 9 Fios 500 Unidades Pacote Curativo",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_672008-MLB53300058140_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672008-MLB53300058140_012023-O.jpg",
      "price": 48.36
    },
    {
      "title": "Loção Hidratante Cerave Com Ácido Hialurônico Sem Perfume 473ml",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_998483-MLU72337795297_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_998483-MLU72337795297_102023-O.jpg",
      "price": 74.8
    },
    {
      "title": " Shampoo Redutor De Grisalhos Grecin Control Gx 118 Ml",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_946895-MLU72565889650_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_946895-MLU72565889650_112023-O.jpg",
      "price": 80.01
    },
    {
      "title": "Bolsa Colostomia Opaca Recortável 13-64mm Cx C15 Unid- Casex",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_792557-MLU71712001378_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_792557-MLU71712001378_092023-O.jpg",
      "price": 170.09
    },
    {
      "title": "Ulric De Varens Udv For Men Edt 100ml Para Masculino",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_646170-MLA47621827076_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_646170-MLA47621827076_092021-O.jpg",
      "price": 61.19
    },
    {
      "title": "Clareador Hidratante Capilar Cabelos Sun In Phytoervas 120ml",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_846562-MLU73363192570_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_846562-MLU73363192570_122023-O.jpg",
      "price": 16.82
    },
    {
      "title": "Polihexanida Solução Phmb 350ml (tipo Prontosan)",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_920637-MLU74117397450_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_920637-MLU74117397450_012024-O.jpg",
      "price": 65.32
    },
    {
      "title": "Lenço Umedecido Toque Da Seda Leve 4 Pague 3 Unidades Neve",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_715973-MLU72932990901_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_715973-MLU72932990901_112023-O.jpg",
      "price": 33.45
    },
    {
      "title": "Sérum Hidratante Principia 2% Ácidos Hialurônicos + B5 Tipo De Pele Todos",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_659077-MLU72628857726_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_659077-MLU72628857726_112023-O.jpg",
      "price": 49
    },
    {
      "title": "Cola Elite Hs16 3ml Extensão Cílios Fio Premium Black Glue Cor Preto",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_977363-MLU74161162961_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977363-MLU74161162961_012024-O.jpg",
      "price": 64.9
    },
    {
      "title": "Natura Homem Cor.agio Eau De Parfum 100ml Para Masculino",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_801512-MLU73128452386_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801512-MLU73128452386_122023-O.jpg",
      "price": 160
    },
    {
      "title": "Condicionador Professionnel Absolut Repair 750ml L'oréal",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_840386-MLU75400512550_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_840386-MLU75400512550_042024-O.jpg",
      "price": 183.9
    },
    {
      "title": "Kit Lola Cosmetics Cronograma Capilar Be(m) Dita Ghee 3x100g",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_721071-MLU73130174852_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_721071-MLU73130174852_122023-O.jpg",
      "price": 56.9
    },
    {
      "title": "Abaixador De Língua Em Madeira C/100 Un Talge",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_830406-MLU74843970234_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_830406-MLU74843970234_032024-O.jpg",
      "price": 5.74
    },
    {
      "title": "Loção Hidratante Cetaphil 473ml",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_940959-MLU72561035529_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940959-MLU72561035529_102023-O.jpg",
      "price": 76
    },
    {
      "title": "Perfume Diesel Plus Plus Eau De Toilette 75ml Para Homem",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_992874-MLB31150829008_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_992874-MLB31150829008_062019-O.jpg",
      "price": 113.98
    },
    {
      "title": "Teste Digital Mostra Quantas Semanas De Gravidez ",
      "condition_id": 1,
      "category_id": 8,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_963718-MLU73982592000_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_963718-MLU73982592000_012024-O.jpg",
      "price": 42.43
    },
    {
      "title": "Kit Completo Iniciante Para Extensão De Cílios",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_899700-MLU72637289583_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899700-MLU72637289583_112023-O.jpg",
      "price": 135.9
    },
    {
      "title": "Pasta De Dentes Oral-b 1.2.3 Anticáries  Em Creme Pacote X 12 70 G",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_940399-MLA45688022732_042021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940399-MLA45688022732_042021-O.jpg",
      "price": 29.23
    },
    {
      "title": "Xô Frizz Modelador De Fios 10g Forever Liss ",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_831648-MLU72627738386_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_831648-MLU72627738386_112023-O.jpg",
      "price": 44.99
    },
    {
      "title": "Sérum Renovador Principia 9,8% Ácido Glicólico + Aminoácidos Tipo De Pele Todos",
      "condition_id": 2,
      "category_id": 8,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_834546-MLU72700813871_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834546-MLU72700813871_112023-O.jpg",
      "price": 54
    },
    {
      "title": "Luva Lança Teia Homem Aranha Brinquedo Presente Meninos Top",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_830317-MLU75151874869_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_830317-MLU75151874869_032024-O.jpg",
      "price": 21.09
    },
    {
      "title": "Bicicleta Aro 29 Mtb Sense Rock Evo - Shimano Cor Aqua/preto Tamanho Do Quadro 17",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_736758-MLA73301103860_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736758-MLA73301103860_122023-O.jpg",
      "price": 3990
    },
    {
      "title": "Embaralhador Automático Misturador Cartas Baralho Jogo Truco",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_690823-MLU72604231282_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690823-MLU72604231282_112023-O.jpg",
      "price": 51.94
    },
    {
      "title": "Bebê Reborn Baby Boneca Cabelos Castanhos + Enxoval Completo",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_953442-MLU70583858462_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_953442-MLU70583858462_072023-O.jpg",
      "price": 182.67
    },
    {
      "title": "Patinete Infantil Dobravel 3 Rodas Base Scooter Até 70 Kg Cor Azul",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_979324-MLU75357534001_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_979324-MLU75357534001_032024-O.jpg",
      "price": 128.96
    },
    {
      "title": "Jogo De Mesa Crocodilo Dentista Polibrinq An0025",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_966076-MLA45305644637_032021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_966076-MLA45305644637_032021-O.jpg",
      "price": 15.83
    },
    {
      "title": "Piscina Inflável Redonda Mor 001053 De 2.4m X 63cm 2400l Azul Caixa",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_702491-MLA73663877482_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_702491-MLA73663877482_012024-O.jpg",
      "price": 185.3
    },
    {
      "title": "Boneco Mascote De Futebol Mosqueteiro Corinthians",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_844026-MLB50595398089_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844026-MLB50595398089_072022-O.jpg",
      "price": 47.49
    },
    {
      "title": "Bicicleta De Equilíbrio 4 Rodas Buba Infantil Sem Pedal Cor Azul",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_647668-MLU73212552593_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647668-MLU73212552593_122023-O.jpg",
      "price": 219.79
    },
    {
      "title": "Boneca Reborn Bebê 100% Silicone Princesa Rosa 55cm",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_873660-MLU54979534898_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873660-MLU54979534898_042023-O.jpg",
      "price": 277.98
    },
    {
      "title": "Figura De Acción  Mãozinha De Mpfestaecia Outro",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_899176-MLA71103208863_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899176-MLA71103208863_082023-O.jpg",
      "price": 26.54
    },
    {
      "title": "Kit Poker Profissional Lata 200 Fichas Numeradas Completo",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_647834-MLU71821846432_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647834-MLU71821846432_092023-O.jpg",
      "price": 58.77
    },
    {
      "title": "Quadro Branco 120x90 Moldura Aluminio C/ Apagador E 4 Caneta",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_926212-MLU70643017941_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_926212-MLU70643017941_072023-O.jpg",
      "price": 119
    },
    {
      "title": "Cubo Mágico Profissional 3x3x3 Moyu Meilong Stickerless",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_835638-MLU72676427841_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_835638-MLU72676427841_112023-O.jpg",
      "price": 13.4
    },
    {
      "title": "Tapete Tatame Infantil Emborrachado Dobrável Dupla Face Cor Floresta",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_699348-MLU73510001838_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_699348-MLU73510001838_122023-O.jpg",
      "price": 119.94
    },
    {
      "title": "Kit Cubo Mágico Especial Megaminx Pyraminx Square-1 Skewb Cor Da Estrutura Stickerless",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_914153-MLU73421002413_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_914153-MLU73421002413_122023-O.jpg",
      "price": 129.74
    },
    {
      "title": "Bicicleta Infantil Menina Aro 12 Nathor Flower 2 5 Anos Rosa",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_856643-MLU70103901683_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_856643-MLU70103901683_062023-O.jpg",
      "price": 226
    },
    {
      "title": "Dominó De Osso Profissional Com Maleta Couro 09 Milimetros",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_704569-MLB42739567176_072020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_704569-MLB42739567176_072020-O.jpg",
      "price": 36.85
    },
    {
      "title": "Bebê Reborn Boneca Menina Realista Pode Dar Banho E Itens",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_890236-MLU71433011727_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_890236-MLU71433011727_082023-O.jpg",
      "price": 97.2
    },
    {
      "title": "Tapete Tatame Infantil Emborrachado Dobrável Dupla Face Cor Circo",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_974997-MLU73381592525_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_974997-MLU73381592525_122023-O.jpg",
      "price": 119.94
    },
    {
      "title": "Piano Infantil Teclado Musical Para Criança Som Animais Bebê Cor Branco",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_696302-MLU70828081808_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_696302-MLU70828081808_082023-O.jpg",
      "price": 39.9
    },
    {
      "title": "Molas De 14cm Para Pula Pula De Alta Resistencia Kit De 50",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_857792-MLU72053702806_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_857792-MLU72053702806_102023-O.jpg",
      "price": 170.99
    },
    {
      "title": "Patinete Até 100kg 2 Rodas Grandes 200mm Adulto/juvenil Cor Branco",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_860473-MLU75357551601_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_860473-MLU75357551601_032024-O.jpg",
      "price": 169.97
    },
    {
      "title": "Veículo E Boneco Skye Patrulha Canina 2719 Sunny Brinquedos",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_711705-MLU73178427016_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_711705-MLU73178427016_122023-O.jpg",
      "price": 78.09
    },
    {
      "title": "Jogo De Torre Jenga Clássico A2120 Hasbro",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_985723-MLU70029609743_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_985723-MLU70029609743_062023-O.jpg",
      "price": 93.99
    },
    {
      "title": "Caranguejo Brinquedo Fujão Sensor Dança E Som Eletrônico Top",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_821351-MLU70718297385_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_821351-MLU70718297385_072023-O.jpg",
      "price": 55.17
    },
    {
      "title": "Boneco Articulado Madeira Desenho Manequim 32 Cm Modelo ",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_866947-MLB42734836291_072020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866947-MLB42734836291_072020-O.jpg",
      "price": 29.53
    },
    {
      "title": "Boneca Masha E O Urso Originais Em Vinil Macio E Articulado ",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_957099-MLB42185345461_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957099-MLB42185345461_062020-O.jpg",
      "price": 106.98
    },
    {
      "title": "Bicicleta Infantil De Equilibrio Sem Pedal Rosa - Buba",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_807428-MLU73753896439_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_807428-MLU73753896439_012024-O.jpg",
      "price": 218.33
    },
    {
      "title": "Zaramela Brinquedos Jogo Dama Xadrez Ludo Jogo Da Velha Trilha",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_786538-MLU72836536505_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_786538-MLU72836536505_112023-O.jpg",
      "price": 54
    },
    {
      "title": "Boneca De Pelúcia Bege Wan Emotion Alien Pou Furdiburb",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_634562-MLU73788522806_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_634562-MLU73788522806_012024-O.jpg",
      "price": 23.54
    },
    {
      "title": "Giz Master Preta 12 Unidades Sinuca Bilhar Snooker Promoção. Cor Preto",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_826497-MLU70602790026_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826497-MLU70602790026_072023-O.jpg",
      "price": 50
    },
    {
      "title": "Refil Munição 100 Unidades Balas Nerf",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_997822-MLU74220906746_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_997822-MLU74220906746_012024-O.jpg",
      "price": 39.77
    },
    {
      "title": "Patinete Adulto/juvenil Até 100kg 2 Rodas Grandes 200mm Cor Preto",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_966464-MLU73031211790_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_966464-MLU73031211790_112023-O.jpg",
      "price": 169.97
    },
    {
      "title": "Boneco Marvel Miles Morales Expression 20 Cm - Hasbro F6607",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_666155-MLU75635418687_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666155-MLU75635418687_042024-O.jpg",
      "price": 49.99
    },
    {
      "title": "Jogo Rummikub Grow",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_884676-MLU72972331781_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_884676-MLU72972331781_112023-O.jpg",
      "price": 192
    },
    {
      "title": "Boneco Tubacão Vinil 20 Cm - Rosita Nickelodeon Original",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_819853-MLB52589779726_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_819853-MLB52589779726_112022-O.jpg",
      "price": 66.63
    },
    {
      "title": "Tapete Atividades Ginasio Para Bebes Piano Musical Mobile Cor Azul",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_866965-MLU74127127620_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866965-MLU74127127620_012024-O.jpg",
      "price": 97.46
    },
    {
      "title": "Balde De Massinha De Modelar Acrilex 30 Massinhas Soft 1,5kg",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_703674-MLU72409984411_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_703674-MLU72409984411_102023-O.jpg",
      "price": 53.05
    },
    {
      "title": "Bicicleta Equilíbrio Andador Sem Pedal Infantil Bebê Da Buba Cor Vermelho",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_878996-MLU73213304881_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878996-MLU73213304881_122023-O.jpg",
      "price": 203.79
    },
    {
      "title": "Jogo Bingo Com 24 Cartelas E Dispenser De Bolinhas",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_848604-MLU73182714302_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848604-MLU73182714302_122023-O.jpg",
      "price": 28.51
    },
    {
      "title": "Kit Patrulha Canina 6 Carrinhos Fricção Brinquedos Coleção",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_965304-MLU74224542912_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965304-MLU74224542912_022024-O.jpg",
      "price": 46.74
    },
    {
      "title": "Jacaré Brinquedo Jogo Desafio Dentista Morde Dedo Crocodilo Cor Verde",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_822549-MLU72561165290_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_822549-MLU72561165290_112023-O.jpg",
      "price": 19
    },
    {
      "title": "Kit 50 Figurinhas Do Álbum Enaldinho A Lenda = 10 Envelopes Enaldinho A Lenda Da Internet E Rei Do Bafo",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_753437-MLU70651490519_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_753437-MLU70651490519_072023-O.jpg",
      "price": 32.83
    },
    {
      "title": "Patinete Analu Kids  Infantil Carros  Azul  Para Crianças",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_822047-MLA48850429790_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_822047-MLA48850429790_012022-O.jpg",
      "price": 116
    },
    {
      "title": "Kit Youtubers Maria Clara & João Pedro Jp Baby Brink",
      "condition_id": 1,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_814526-MLB44959360430_022021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814526-MLB44959360430_022021-O.jpg",
      "price": 260
    },
    {
      "title": "Dominó  De Osso Profissional Com Maleta Couro 10 Milimetros",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_606049-MLU72637333533_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_606049-MLU72637333533_112023-O.jpg",
      "price": 30.89
    },
    {
      "title": "Bolinhas De Ping Pong Laranja Pacote C/ 18 Unidades ",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_982226-MLU72636680203_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_982226-MLU72636680203_112023-O.jpg",
      "price": 29.48
    },
    {
      "title": "Piscina Inflável Redondo Mor 001052 1400l Azul",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_910290-MLU72836409283_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910290-MLU72836409283_112023-O.jpg",
      "price": 175
    },
    {
      "title": "Boneca Bebe Nenem My Love Super Soft Macia Infantil Menina Cor Variada",
      "condition_id": 2,
      "category_id": 9,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_804192-MLB48343483560_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804192-MLB48343483560_112021-O.jpg",
      "price": 21.92
    },
    {
      "title": "Tênis Para Feminino Olympikus Citrus Cor Preto - Adulto 34 Br",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_709481-MLA53527588608_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_709481-MLA53527588608_012023-O.jpg",
      "price": 165.64
    },
    {
      "title": "Mochilinha Lancheira Termica Pequeninos Barata Infantil Cor Azul/preto",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_743488-MLU73253130768_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_743488-MLU73253130768_122023-O.jpg",
      "price": 77.3
    },
    {
      "title": "Óculos De Sol Hype Retro Vintage Retangular Preto Unissex Uv",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_716712-MLU74383475225_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_716712-MLU74383475225_022024-O.jpg",
      "price": 10.2
    },
    {
      "title": "Suspensório Adulto Preto - Feminino Masculino Ajustável Cor Azul-turquesa",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_803449-MLU71707242096_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_803449-MLU71707242096_092023-O.jpg",
      "price": 13.99
    },
    {
      "title": "Tênis All Star Cano Alto 25/43 Botinha - Infantil E Adulto",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_711140-MLB73372419005_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_711140-MLB73372419005_122023-O.jpg",
      "price": 139.99
    },
    {
      "title": "Pochete Para Celular E Objetos Impermeável Esportiva Corrida Cor Preta Desenho Do Tecido Liso",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_826848-MLU72637280039_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826848-MLU72637280039_112023-O.jpg",
      "price": 18.51
    },
    {
      "title": "Guarda Chuva Grande Automático Contra Vento Cabe Na Bolsa Cor Preto Desenho Do Tecido Liso",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_694685-MLU69427860077_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694685-MLU69427860077_052023-O.jpg",
      "price": 33.38
    },
    {
      "title": "Chinelo Masculino E Feminino Havaianas Top - Opção De Cores",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_736825-MLB45888352223_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736825-MLB45888352223_052021-O.jpg",
      "price": 34.99
    },
    {
      "title": "Mala De Rodinha Para Viagem Férias Com Segredo - Media 23kg Cor Preto",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_659020-MLU73263239797_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_659020-MLU73263239797_122023-O.jpg",
      "price": 359.99
    },
    {
      "title": "Kit 10 Cuecas Box Boxer Microfibra Original Qualidade",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_795990-MLB50600174029_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_795990-MLB50600174029_072022-O.jpg",
      "price": 72.9
    },
    {
      "title": "Tênis Sem Gênero Olympikus Difuse 2 Cor Preto/branco - Adulto 40 Br",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_834607-MLA74676487636_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834607-MLA74676487636_022024-O.jpg",
      "price": 95
    },
    {
      "title": "Guarda Chuva Reforçado Automático Grande Cabe Bolsa Mochila Cor Preto Desenho Do Tecido Liso",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_897142-MLU72647633036_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_897142-MLU72647633036_112023-O.jpg",
      "price": 33.48
    },
    {
      "title": "Lanterna Holofote Recarregável 2km Laser Potente C Saída Usb",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_654413-MLU73783477930_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654413-MLU73783477930_012024-O.jpg",
      "price": 35.12
    },
    {
      "title": "50 Chaveiros Colorido Com Etiqueta Waleu ",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_757227-MLU71766896365_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_757227-MLU71766896365_092023-O.jpg",
      "price": 39.9
    },
    {
      "title": "6 Elásticos Faixa Cabelo Headband Tiara Masculina Afro Puff Cor Preto",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_760260-MLU73214037867_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_760260-MLU73214037867_122023-O.jpg",
      "price": 15.78
    },
    {
      "title": "Tênis Converse Chuck Taylor All Star Tradicional",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_843621-MLB49947218293_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_843621-MLB49947218293_052022-O.jpg",
      "price": 159
    },
    {
      "title": "Bellvolpe Slim Masculina Feminina Carteira Couro Preta",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_750202-MLA75266140003_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750202-MLA75266140003_032024-O.jpg",
      "price": 78.98
    },
    {
      "title": "Guarda Chuva Automático Reforçado Resistente Contra Vento Cor Preto",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_624009-MLA72964499470_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_624009-MLA72964499470_112023-O.jpg",
      "price": 31.41
    },
    {
      "title": "Kit 12 Pares Meia Cano Alto Unissex Atacado Cores Barato",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_632814-MLB75276252054_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_632814-MLB75276252054_032024-O.jpg",
      "price": 39.46
    },
    {
      "title": "Tenis Masculino Feminino Classico Sketista Retro Old School",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_819865-MLB71655082508_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_819865-MLB71655082508_092023-O.jpg",
      "price": 89.9
    },
    {
      "title": "Máscara 3d Tapa Olhos Ajustável Dormir Bem Anti Claridade Cor Preto",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_949385-MLU73202405619_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_949385-MLU73202405619_122023-O.jpg",
      "price": 19.94
    },
    {
      "title": "Lanterna Tática Indestrutível 4 Em1 Recarregável Potente Led Cor Da Luz Branco",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_620968-MLU71079222009_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_620968-MLU71079222009_082023-O.jpg",
      "price": 24.82
    },
    {
      "title": "Step Defend 2 - Impermeabilizante De Tênis E Calçados.",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_904479-MLB42305832473_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904479-MLB42305832473_062020-O.jpg",
      "price": 59
    },
    {
      "title": "Farol Lanterna Cabeça Led Recarregavel Sensor Movimento ",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_786113-MLA69586615677_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_786113-MLA69586615677_052023-O.jpg",
      "price": 18.78
    },
    {
      "title": "Palmilha Salto Interno Fique Maior Em 6 Cm Aumento De Altura",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_855367-MLB31122113989_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_855367-MLB31122113989_062019-O.jpg",
      "price": 24.61
    },
    {
      "title": "Sapatilha Ballet Meia Ponta Sintética Balé Infantil",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_854537-MLB72839839370_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_854537-MLB72839839370_112023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Mochila Masculina Impermeável Faculdade Alça Reforçada",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_885768-MLB71213799790_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_885768-MLB71213799790_082023-O.jpg",
      "price": 89.99
    },
    {
      "title": "Algema Metal Fantasia Policial Profissional Aço Corrente Cor Cromado",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_925893-MLU75592486491_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_925893-MLU75592486491_042024-O.jpg",
      "price": 12.72
    },
    {
      "title": "Kit Luxo Step Defend - Limpeza E Impermeabilização De Tênis.",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_813872-MLB53860598929_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_813872-MLB53860598929_022023-O.jpg",
      "price": 129
    },
    {
      "title": "Kit 5 Camisetas Básicas Masculina Dry Fit Lisa Tradicional ",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_729300-MLB69774420931_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729300-MLB69774420931_062023-O.jpg",
      "price": 74.95
    },
    {
      "title": "Manguito Manga Proteção Solar Braços Motoqueiro Ciclismo",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_866257-MLB31718329555_082019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866257-MLB31718329555_082019-O.jpg",
      "price": 13.09
    },
    {
      "title": "3 Pares De Palmilhas Anti Bacteriana Anti Odor Fina Leve",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_661716-MLB46505155554_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_661716-MLB46505155554_062021-O.jpg",
      "price": 19.13
    },
    {
      "title": "Kit 12 Pares Meia Masculino Cano Curto Soquete Varias Cores",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_699252-MLB69196796502_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_699252-MLB69196796502_052023-O.jpg",
      "price": 30.87
    },
    {
      "title": "Kit 12 Pares Meia Soquete Cano Curto Unissex Atacado Cores",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_623948-MLB75144147932_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623948-MLB75144147932_032024-O.jpg",
      "price": 30.15
    },
    {
      "title": "Bota Galocha Pvc Impermeável Acqua Boots + Brinde",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_958486-MLB50012825497_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958486-MLB50012825497_052022-O.jpg",
      "price": 49.4
    },
    {
      "title": "10 Faixas Para Cabelo Coloridas Handband Tamanho Único 5cm Cor Cores Variadas",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_924671-MLU72607358513_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924671-MLU72607358513_102023-O.jpg",
      "price": 26.9
    },
    {
      "title": "Tênis Feminino Olympikus Luna 2 Cor Rosa - Adulto 37 Br",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_741048-MLA74802944777_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_741048-MLA74802944777_022024-O.jpg",
      "price": 139.9
    },
    {
      "title": "Babador Em Silicone Com Pega-migalhas Azul Gumy Buba",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_630133-MLU71707365454_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_630133-MLU71707365454_092023-O.jpg",
      "price": 34.1
    },
    {
      "title": "Cinto Antialergico Preto Fivela De Engate Rapido Plastico Cor Preto Tamanho 120",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_620061-MLU70327355251_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_620061-MLU70327355251_072023-O.jpg",
      "price": 18.9
    },
    {
      "title": "Kit 3 Pares De Palmilha Anti Impacto Confortável Oferta",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_956384-MLB31082042227_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_956384-MLB31082042227_062019-O.jpg",
      "price": 20.84
    },
    {
      "title": "Pochete Feminina Moderna Bolsa Transversal Cintura Fashion Cor Preta",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_853525-MLB49736497013_042022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_853525-MLB49736497013_042022-O.jpg",
      "price": 15
    },
    {
      "title": "Tênis Casual Knu Skool Preto Branco ",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_784352-MLB75408356539_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_784352-MLB75408356539_032024-O.jpg",
      "price": 169.9
    },
    {
      "title": "Bolsa Mala Mochila T60 Academia Bagagem Viagem Top Cor Preto",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_820435-MLU75593656501_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_820435-MLU75593656501_042024-O.jpg",
      "price": 51.51
    },
    {
      "title": "Cinta Modeladora Colete 12 Barbatanas Corselet Redutora Ci16",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_834318-MLB43167882936_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834318-MLB43167882936_082020-O.jpg",
      "price": 69.9
    },
    {
      "title": "Guarda Chuva Bengala Transparente Automático Grande Adulto",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_953810-MLA69366560827_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_953810-MLA69366560827_052023-O.jpg",
      "price": 23.92
    },
    {
      "title": "100 Pçs Argolas Para Chaveiro C/ Corrente - 25mm Prata",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_898061-MLU75437501994_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_898061-MLU75437501994_042024-O.jpg",
      "price": 21.99
    },
    {
      "title": "Lacre De Mala Em Aço Com 35 Cm Dourado (kit Com 6 Unidades)",
      "condition_id": 1,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_755815-MLU72648891100_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_755815-MLU72648891100_112023-O.jpg",
      "price": 32.99
    },
    {
      "title": "Kit 10 Óculos Frases Cristal Fume Festa Casamento",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_846486-MLU75593919741_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_846486-MLU75593919741_042024-O.jpg",
      "price": 39.47
    },
    {
      "title": "Balança Mala Bagagem Viagem Medir Peso No Aeroporto Top",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_809847-MLU72660854826_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_809847-MLU72660854826_112023-O.jpg",
      "price": 37.99
    },
    {
      "title": "Meia Calça De Lã Térmica Translúcida Forrada Pelinho Pelúcia",
      "condition_id": 2,
      "category_id": 10,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_766369-MLB70176546237_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766369-MLB70176546237_062023-O.jpg",
      "price": 49.92
    },
    {
      "title": "Ring Light Iluminador Led Profissional 26cm + Tripé 2,10m Estrutura Preto Luz Branco-frio 110v/220v",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_729657-MLA74244419319_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729657-MLA74244419319_012024-O.jpg",
      "price": 37.13
    },
    {
      "title": "Câmera Instantânea Instax Instax Kit Mini 12 Verde",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_933205-MLA74676694806_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933205-MLA74676694806_022024-O.jpg",
      "price": 559
    },
    {
      "title": "Filme Instantâneo Fujifilm Instax Mini 40 Fotos - 705065388",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_767226-MLU73675742055_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_767226-MLU73675742055_122023-O.jpg",
      "price": 184.9
    },
    {
      "title": "Drone Landing Pad Pista De Pouso E Decolagem Para Drone 75cm",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_696301-MLU71903793947_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_696301-MLU71903793947_092023-O.jpg",
      "price": 70.3
    },
    {
      "title": "Ring Light Iluminador Led 18 Polegadas Tripé 2,1m + Controle Cor Da Estrutura Preto Cor Da Luz Branco-frio 110v/220v",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_901589-MLU54970101317_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901589-MLU54970101317_042023-O.jpg",
      "price": 189.9
    },
    {
      "title": "Cartão De Memória Sandisk 128gb Micro Sd Classe 10 Ultra ",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_770256-MLB52416244565_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770256-MLB52416244565_112022-O.jpg",
      "price": 39
    },
    {
      "title": "Bastão Pau Selfie Tripe Com Luz Controle Bluetooth P Celular Cor Preto",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_904443-MLU71314727586_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904443-MLU71314727586_082023-O.jpg",
      "price": 34.94
    },
    {
      "title": "Câmera Instantânea Instax Mini 12 Com 10 Filmes E Bolsa Branca",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_629337-MLA72942862785_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629337-MLA72942862785_112023-O.jpg",
      "price": 559
    },
    {
      "title": "Kit Lens Wipes Zeiss C/ 300 Lenços Umedecidos",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_785188-MLB46897566826_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_785188-MLB46897566826_072021-O.jpg",
      "price": 162.9
    },
    {
      "title": "Binóculo Diurno E Noturno Zoom 30x60 Até 1000m Profissional",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_797995-MLU73180788260_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797995-MLU73180788260_122023-O.jpg",
      "price": 44.89
    },
    {
      "title": "Bastão De Luz Preenchimento Rgb Fotográfico 3000k 6000k D595 Cor Da Estrutura Preto 110v/220v (bivolt)",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_803995-MLU73268035439_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_803995-MLU73268035439_122023-O.jpg",
      "price": 91.98
    },
    {
      "title": "Case Micro E Sd Aluminio Porta Cartão Memoria Estojo Prata Cor Prateado",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_654336-MLU71379756893_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654336-MLU71379756893_082023-O.jpg",
      "price": 42.9
    },
    {
      "title": "Lens Wipes Zeiss Com 50 Lenços Umedecidos",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_891870-MLB46895486814_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_891870-MLB46895486814_072021-O.jpg",
      "price": 33.2
    },
    {
      "title": "Pupilometro Digital Otica Laboratório Dp E Dnp Pupilar Duopt",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_735426-MLB75532678208_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_735426-MLB75532678208_042024-O.jpg",
      "price": 747
    },
    {
      "title": "Câmera Instantânea Instax Instax Kit Mini 12 Sky Blue",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_845389-MLA74807973167_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_845389-MLA74807973167_022024-O.jpg",
      "price": 559
    },
    {
      "title": "Kit Com 12 Pastilhas Anti Embaçantes Anti-fog Gopro 5 Black",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_702933-MLU73426545825_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_702933-MLU73426545825_122023-O.jpg",
      "price": 13.5
    },
    {
      "title": "Luz Fotografia Luxceo P400 Tripé 2.1 Rgb Controle",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_964369-MLU74334300987_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964369-MLU74334300987_012024-O.jpg",
      "price": 197.9
    },
    {
      "title": "Sílica Gel P/ Equip. Fotográfico 40g X 8 Reutilizável Bodout",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_761757-MLB54075751919_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761757-MLB54075751919_022023-O.jpg",
      "price": 139.96
    },
    {
      "title": "Cartão Memória Micro Sd Sandisk 128gb Classe 10 Ultra 100mb/s",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_901897-MLA54379262336_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901897-MLA54379262336_032023-O.jpg",
      "price": 59
    },
    {
      "title": "Cartão Memória Micro Sd Sandisk 128gb Classe10ultra Original",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_777607-MLB70095877635_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777607-MLB70095877635_062023-O.jpg",
      "price": 77.39
    },
    {
      "title": "Câmera Instantânea Instax Instax Kit Mini 12 Lilás",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_987365-MLA74676491088_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_987365-MLA74676491088_022024-O.jpg",
      "price": 549
    },
    {
      "title": "Suporte Fundo Infinito 2x2 Com Tecido Verde Chroma Key 2x3 M",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_897853-MLU71233733566_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_897853-MLU71233733566_082023-O.jpg",
      "price": 219
    },
    {
      "title": "Cartão De Memória Sandisk Ultra 100mb/s 64gb P/câmeras Wi-fi",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_862923-MLB51138735630_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_862923-MLB51138735630_082022-O.jpg",
      "price": 49.38
    },
    {
      "title": "Filtro Nd2 A Nd400 Variável - K&f - 77mm - Do Brasil",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_912594-MLU74432319127_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_912594-MLU74432319127_022024-O.jpg",
      "price": 209
    },
    {
      "title": "Cartão Memória Sandisk Ultra 32gb 100mb/s Classe 10 Microsd ",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_775454-MLB71321511059_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_775454-MLB71321511059_082023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Gimbal Portátil Celular Vertical Horizontal L7cpro 3 Eixos Cor Cinza",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_988100-MLU71713444632_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_988100-MLU71713444632_092023-O.jpg",
      "price": 395
    },
    {
      "title": "Telescópio Profissional Astronômico Refrator 675x Tripé 60mm Cor Prata",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_848778-MLU75051211312_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848778-MLU75051211312_032024-O.jpg",
      "price": 649.1
    },
    {
      "title": "Ringlinght Led Luz Flash Estudio Profissional Com Tripe 210m",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_748029-MLB45633107873_042021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_748029-MLB45633107873_042021-O.jpg",
      "price": 109.99
    },
    {
      "title": "Câmera Instantânea Instax Instax Kit Mini 12 Rosa",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_611915-MLA74676702928_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_611915-MLA74676702928_022024-O.jpg",
      "price": 559.67
    },
    {
      "title": "Uranum Venus 1 Prateado",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_838965-MLU72824953813_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_838965-MLU72824953813_112023-O.jpg",
      "price": 162.39
    },
    {
      "title": "Microscópio Tela Hd 4.3 Digital Vedo 1000x Usb Portátil Led",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_761541-MLU74163669669_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761541-MLU74163669669_012024-O.jpg",
      "price": 242
    },
    {
      "title": "Carregador Mh-24 P/ Bat. Nikon En-el14 - D5100, D5200, D3200",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_814036-MLB72363045223_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814036-MLB72363045223_102023-O.jpg",
      "price": 54
    },
    {
      "title": "Bastão De Luz Led De Preenchimento Rgb Controle Remoto Rgb Cor Da Estrutura Preto 110v/220v",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_984305-MLU69876044236_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984305-MLU69876044236_062023-O.jpg",
      "price": 84.75
    },
    {
      "title": "Tripé Profissional 2.1m + Suporte Para Celular Câmera ",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_910718-MLU74224871564_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910718-MLU74224871564_022024-O.jpg",
      "price": 35.65
    },
    {
      "title": "Câmera Infantil Criança Digital Fotográfica Fotografa Filma Cor Azul",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_996599-MLU72542374616_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_996599-MLU72542374616_112023-O.jpg",
      "price": 79
    },
    {
      "title": "Cartão De Memória Sandisk Sdsquar-064g-gn6mn  Ultra Com Adaptador Sd 64gb",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_607214-MLU74976044047_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_607214-MLU74976044047_032024-O.jpg",
      "price": 46.9
    },
    {
      "title": "Canon Lp-e6",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_878752-MLU73627626290_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878752-MLU73627626290_122023-O.jpg",
      "price": 143
    },
    {
      "title": "Álbum Fotográfico Nossa Família P/ 500 Fotos 10x15",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_979259-MLU72542359998_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_979259-MLU72542359998_112023-O.jpg",
      "price": 56.67
    },
    {
      "title": "Bastão De Luz De Preenchimento Rgb Luxceo-q508a",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_874918-MLB49026404169_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_874918-MLB49026404169_022022-O.jpg",
      "price": 289
    },
    {
      "title": "Bastão Boia Flutuante Gopro Bobber Floaty Mergulho",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_690783-MLU73268956741_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690783-MLU73268956741_122023-O.jpg",
      "price": 13.5
    },
    {
      "title": "Bat. En-el23 P/nikon Coolpix P600 P610 S810 S810c",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_646451-MLU73599232299_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_646451-MLU73599232299_122023-O.jpg",
      "price": 129
    },
    {
      "title": "Câmera Instantânea Instax Instax Kit Mini 12 Branca",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_730480-MLU74088594859_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730480-MLU74088594859_012024-O.jpg",
      "price": 520
    },
    {
      "title": "Suporte Clip Rotativo Celular, C Rosca 1/4 P Tripé Cor Preto",
      "condition_id": 2,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_638613-MLB74159154641_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_638613-MLB74159154641_012024-O.jpg",
      "price": 39.9
    },
    {
      "title": "Espada Bastão De Led Luxceo P200 Fotografia Rgb Powerbank Cor Da Estrutura Preto 5v",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_962044-MLB51651986471_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962044-MLB51651986471_092022-O.jpg",
      "price": 205
    },
    {
      "title": "Binoculo Profissional De Longo Alcance 20x50 Lelong Le-2052",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_945518-MLB70805369397_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_945518-MLB70805369397_072023-O.jpg",
      "price": 198.7
    },
    {
      "title": "Microfone De Lapela Simples By-m1- Boya",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_658712-MLA50145366793_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_658712-MLA50145366793_052022-O.jpg",
      "price": 85.5
    },
    {
      "title": "Filtro Polarizador Ultra-slim 49mm K&f - Do Brasil",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_831129-MLU73599596387_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_831129-MLU73599596387_122023-O.jpg",
      "price": 118.8
    },
    {
      "title": "Caixa 50 Lâminas P/ Microscópio Ponta Lisa Lapidada 26x76mm",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_874979-MLU74338116929_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_874979-MLU74338116929_022024-O.jpg",
      "price": 16.9
    },
    {
      "title": "Câmera Instantânea Instax Mini 12 Com 10 Filmes E Bolsa Lilás",
      "condition_id": 1,
      "category_id": 11,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_878292-MLA72942951101_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878292-MLA72942951101_112023-O.jpg",
      "price": 545.51
    },
    {
      "title": "Nissan March 2017 1.0 12v S 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_868966-MLB75533592880_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_868966-MLB75533592880_042024-O.jpg",
      "price": 39990
    },
    {
      "title": "Honda Hr-v 1.8  Flex Exl 2020",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_668346-MLB75532057980_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_668346-MLB75532057980_042024-O.jpg",
      "price": 97000
    },
    {
      "title": "Hyundai Santa Fé 3.3 Mpfi 4x4 V6 270cv 2015",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_669241-MLB75529046466_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_669241-MLB75529046466_042024-O.jpg",
      "price": 95890
    },
    {
      "title": "Vw T-cross 1.0 Tsi Flex Comfortline 2020 Branca Completa !!",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_621852-MLB75523869560_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621852-MLB75523869560_042024-O.jpg",
      "price": 93490
    },
    {
      "title": "Volkswagen Fox 1.6 Mi 8v Flex 4 Portas 2014",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_814048-MLB75523641274_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814048-MLB75523641274_042024-O.jpg",
      "price": 39600
    },
    {
      "title": "Mercedez Benz Gla-200 Style 1.6tb 2019!! Top!! Ipva Pago!!!!",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_600008-MLB75522883942_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600008-MLB75522883942_042024-O.jpg",
      "price": 139900
    },
    {
      "title": "Volkswagen Crossfox 1.6 Msi Flex 16v 4p Automatizado",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_666604-MLB75694408379_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666604-MLB75694408379_042024-O.jpg",
      "price": 52900
    },
    {
      "title": "Jeep Renegade 1.8 16v Flex 4p Automático",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_763170-MLB75693904143_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_763170-MLB75693904143_042024-O.jpg",
      "price": 67900
    },
    {
      "title": "Peugeot 207 1.4 Xr Sw 8v Flex 4p Manual",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_945779-MLB75693831779_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_945779-MLB75693831779_042024-O.jpg",
      "price": 24900
    },
    {
      "title": "Jeep Compass ",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_950303-MLB75692856389_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950303-MLB75692856389_042024-O.jpg",
      "price": 99990
    },
    {
      "title": "Sandero 2020 - Completo ",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_887151-MLB75672295217_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_887151-MLB75672295217_042024-O.jpg",
      "price": 46900
    },
    {
      "title": "Chevrolet/onix Lt 1.0 Flex ",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_787252-MLB75532696222_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787252-MLB75532696222_042024-O.jpg",
      "price": 54900
    },
    {
      "title": "Onix Joy 2020 - Black Edition ",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_973362-MLB75670851947_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_973362-MLB75670851947_042024-O.jpg",
      "price": 51900
    },
    {
      "title": "408 2.0 Allure 2012 Automático",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_782433-MLB75690476523_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782433-MLB75690476523_042024-O.jpg",
      "price": 33500
    },
    {
      "title": "Citroën C3 1.5 Origine 8v Flex 4p Manual 13/14 Prata",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_935454-MLB75690567431_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_935454-MLB75690567431_042024-O.jpg",
      "price": 34890
    },
    {
      "title": "Ford Ká 1.0 2013 Flex",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_867970-MLB75530760742_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_867970-MLB75530760742_042024-O.jpg",
      "price": 26900
    },
    {
      "title": "Nissan Kicks 1.6 16v Flexstart Sv 4p Xtronic",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_905517-MLB75530245670_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_905517-MLB75530245670_042024-O.jpg",
      "price": 82900
    },
    {
      "title": "Chevrolet Celta Lt 1.0 Flex Vhc-e 5p 2013 - Novíssimo!",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_818944-MLB75528344668_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_818944-MLB75528344668_042024-O.jpg",
      "price": 29900
    },
    {
      "title": "Honda Hr-v 1.8 16v Flex Ex 4p Automático",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_816538-MLB75528445658_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_816538-MLB75528445658_042024-O.jpg",
      "price": 109890
    },
    {
      "title": "Chevrolet Cruze 1.8 Ltz 16v Flex 4p Automático",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_747400-MLB75687570835_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_747400-MLB75687570835_042024-O.jpg",
      "price": 69890
    },
    {
      "title": "Jeep Renegade 1.8 16v",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_957657-MLB75527991192_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957657-MLB75527991192_042024-O.jpg",
      "price": 82990
    },
    {
      "title": "Reanult Sandero Stepway 2015 1.6 Manual Completo",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_925469-MLB75535447466_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_925469-MLB75535447466_042024-O.jpg",
      "price": 42970
    },
    {
      "title": "Peugeot 207 2013 1.4 Xr Sport Flex 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_917003-MLB75686835649_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917003-MLB75686835649_042024-O.jpg",
      "price": 21990
    },
    {
      "title": "Nissan March 1.0 S 16v Flex 4p Manual",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_895129-MLB75686759369_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895129-MLB75686759369_042024-O.jpg",
      "price": 35900
    },
    {
      "title": "Chevrolet Prisma 1.0 Mpfi Joy 8v Flex 4p Manual",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_994922-MLB75686620817_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_994922-MLB75686620817_042024-O.jpg",
      "price": 57900
    },
    {
      "title": "Fiat Mobi 2020 1.0 Like Flex 5p",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_698959-MLB75529291278_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_698959-MLB75529291278_042024-O.jpg",
      "price": 48900
    },
    {
      "title": "Ford Ka 1.5 Tivct Se Plus Sedan 2019",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_835235-MLB75526466710_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_835235-MLB75526466710_042024-O.jpg",
      "price": 57990
    },
    {
      "title": "Nissan Sentra 2.0 Sl 16v Flex 4p Automático",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_779599-MLB75685562821_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_779599-MLB75685562821_042024-O.jpg",
      "price": 55900
    },
    {
      "title": "Chevrolet Onix 1.0 Mpfi Joy 8v Flex 4p Manual 2017/2017",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_670444-MLB75666218263_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_670444-MLB75666218263_042024-O.jpg",
      "price": 47900
    },
    {
      "title": "Nissan Versa 1.0 Completo",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_876016-MLB75524771374_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_876016-MLB75524771374_042024-O.jpg",
      "price": 41900
    },
    {
      "title": "Chevrolet Classic",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_804272-MLB75683678101_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804272-MLB75683678101_042024-O.jpg",
      "price": 32900
    },
    {
      "title": "Hyundai Creta 1.6 16v Flex Attitude Automático 2019/2020",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_761329-MLB75506108070_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761329-MLB75506108070_042024-O.jpg",
      "price": 89900
    },
    {
      "title": "Jeep Compass 2.0 16v Sport 4x2",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_667971-MLB75682329679_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_667971-MLB75682329679_042024-O.jpg",
      "price": 96990
    },
    {
      "title": "Subaru Xv 2.0 16v I-s 4wd",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_623998-MLB75523160536_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623998-MLB75523160536_042024-O.jpg",
      "price": 79999
    },
    {
      "title": "Chevrolet Tracker 1.8 Mpfi Ltz 4x2 16v 2015",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_873849-MLB75663229755_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873849-MLB75663229755_042024-O.jpg",
      "price": 74790
    },
    {
      "title": "Volkswagen Gol 1.6 Flex 2020",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_637500-MLB75503558986_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_637500-MLB75503558986_042024-O.jpg",
      "price": 51970
    },
    {
      "title": "Ford Ka",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_880254-MLB75531674954_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_880254-MLB75531674954_042024-O.jpg",
      "price": 51990
    },
    {
      "title": "Hyundai Hb20s 2015 1.6 Premium Flex Aut. 4p",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_991636-MLB75690442609_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991636-MLB75690442609_042024-O.jpg",
      "price": 49900
    },
    {
      "title": "Vw T-cros 1.0 200 Tsi ",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_911490-MLB75690964923_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_911490-MLB75690964923_042024-O.jpg",
      "price": 95900
    },
    {
      "title": "Hyundai Hb20 2016 1.0 Comfort Flex 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_643986-MLA75690905535_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_643986-MLA75690905535_042024-O.jpg",
      "price": 41900
    },
    {
      "title": "Chevrolet Onix 2016 1.4 Ltz 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_750459-MLB75530950012_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750459-MLB75530950012_042024-O.jpg",
      "price": 53900
    },
    {
      "title": "Hyundai Hb20s 2015 1.6 Premium Flex Aut. 4p",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_799019-MLB75689862235_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_799019-MLB75689862235_042024-O.jpg",
      "price": 56900
    },
    {
      "title": "Hyundai Tucson",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_832858-MLB75689880781_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_832858-MLB75689880781_042024-O.jpg",
      "price": 105890
    },
    {
      "title": "Ford Fiesta 2016 1.5 Se Flex 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_857325-MLB75530104700_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_857325-MLB75530104700_042024-O.jpg",
      "price": 49900
    },
    {
      "title": "Prisma 1.4 Ltz Manual 2014 Apenas 97.263km",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_627591-MLB75529830098_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627591-MLB75529830098_042024-O.jpg",
      "price": 49900
    },
    {
      "title": "Audi Q3 Ambiente 1.4 Turbo Flex Automático 2017.",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_771714-MLB75530165130_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_771714-MLB75530165130_042024-O.jpg",
      "price": 111990
    },
    {
      "title": "Jeep Compass 2.0 16v Flex Longitude Automático 2018/2019",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_921792-MLB75501850566_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_921792-MLB75501850566_042024-O.jpg",
      "price": 104900
    },
    {
      "title": "Bmw X1",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_671227-MLB75501341956_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_671227-MLB75501341956_042024-O.jpg",
      "price": 149990
    },
    {
      "title": "Jeep Renegade 2018 1.8 Longitude Flex Aut. 5p",
      "condition_id": 2,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_744623-MLB75689190061_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_744623-MLB75689190061_042024-O.jpg",
      "price": 76900
    },
    {
      "title": "Mercedes-benz/gla 200 1.6 Cgi Style 16v Turbo",
      "condition_id": 1,
      "category_id": 12,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_961336-MLB75501635364_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961336-MLB75501635364_042024-O.jpg",
      "price": 114889
    },
    {
      "title": "Esponja De Limpeza Dupla Face Scotch Brite 3m - Pct 10 Unds.",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_761220-MLB51055424853_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761220-MLB51055424853_082022-O.jpg",
      "price": 12.16
    },
    {
      "title": "Água Sanitária Super Candida 5l",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_824307-MLU69483136030_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824307-MLU69483136030_052023-O.jpg",
      "price": 12.99
    },
    {
      "title": "Folha De Alumínio Em Rolo Wyda 30cm X 4,0m",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_801545-MLU75620445925_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801545-MLU75620445925_042024-O.jpg",
      "price": 5
    },
    {
      "title": "Kit Potes Herméticos Plásticos Cinza 12 Unidades Electrolux",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_730999-MLU72569136498_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730999-MLU72569136498_112023-O.jpg",
      "price": 109
    },
    {
      "title": "Baleiro Giratório De Vidro Bomboniere Decoração 5 Gomos Cor Tampa Prata",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_704489-MLU73785332914_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_704489-MLU73785332914_012024-O.jpg",
      "price": 134.98
    },
    {
      "title": "Armário Com Espelho Porta Gancho Para Toalha Banheiro Genova Cor Branco",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_882066-MLU72637655979_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_882066-MLU72637655979_112023-O.jpg",
      "price": 186.91
    },
    {
      "title": "Kit Cobre Leito London King 3pç Percal 400 Fios Bordado Cor Fendi",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_817433-MLU73427280969_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_817433-MLU73427280969_122023-O.jpg",
      "price": 291.3
    },
    {
      "title": "Apoio Ergonômico P Pés Polipropileno Massegeador Confortec",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_864844-MLU72412839991_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_864844-MLU72412839991_102023-O.jpg",
      "price": 56.95
    },
    {
      "title": "Sapateira Estocasa Armário Organizador Dobrável 9 Prateleiras Resistente",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_767279-MLU71482737999_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_767279-MLU71482737999_092023-O.jpg",
      "price": 101.9
    },
    {
      "title": "Jogo De Lençol Queen 4 Peças Percal 400 Fios Ponto Palito Cor Fendi Desenho Do Tecido Cor",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_925061-MLA72506525043_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_925061-MLA72506525043_102023-O.jpg",
      "price": 129
    },
    {
      "title": "Armário Com Espelho Porta Gancho Para Toalha Banheiro Genova Cor Cinza/ Cinamomo",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_895487-MLU72637286663_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895487-MLU72637286663_112023-O.jpg",
      "price": 197.91
    },
    {
      "title": "Torneira P/ Lavatório Banheiro Link 1/4 Volta Alta Soft Inox Metal",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_827198-MLA45167171857_032021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_827198-MLA45167171857_032021-O.jpg",
      "price": 59.92
    },
    {
      "title": "Sapateira Organizador Porta Sapatos 12 Pares C/ Ganchos Arp1",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_631737-MLU72247546670_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631737-MLU72247546670_102023-O.jpg",
      "price": 85.07
    },
    {
      "title": "Rechaud Inox 9 Litros 1/2 Panelas Banho Maria 2 Cuba Buffet",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_942097-MLB54834316102_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_942097-MLB54834316102_042023-O.jpg",
      "price": 224.99
    },
    {
      "title": "Kit 3 Spot Led Dicróica Embutir Direcionável 3w 3000k Cor Branco Quente 110v/220v",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_713513-MLU70525694749_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_713513-MLU70525694749_072023-O.jpg",
      "price": 29.99
    },
    {
      "title": "Cuba Pia Cozinha Gourmet Aço Inox 50x40 Tubrax C/ Acessórios",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_754295-MLU72700385519_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754295-MLU72700385519_112023-O.jpg",
      "price": 195
    },
    {
      "title": "Grade De Proteção Gaiola P/ Câmera Externa De Segurança Aço Cor Preto",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_882868-MLU72527709638_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_882868-MLU72527709638_102023-O.jpg",
      "price": 41.37
    },
    {
      "title": "Kit 2 Travesseiros Select Fibras Luxo Fibra Antialérgica 70x50 Branco",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_892511-MLU72347523256_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892511-MLU72347523256_102023-O.jpg",
      "price": 76.58
    },
    {
      "title": "Torneira Cozinha Gourmet Parede Metal Tubo Flexível Arejador Acabamento Brilhante Cor Prateado",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_705148-MLU72566095532_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_705148-MLU72566095532_112023-O.jpg",
      "price": 33.5
    },
    {
      "title": "Balança Digital De Cozinha Alta Precisão 10kg Nutrição Dieta",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_869168-MLB43846596748_102020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_869168-MLB43846596748_102020-O.jpg",
      "price": 13.58
    },
    {
      "title": "5 Rodinhas Rodízio Cadeira Escritório Giratória Anti Risco",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_732244-MLU71709045874_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732244-MLU71709045874_092023-O.jpg",
      "price": 26.04
    },
    {
      "title": "Dispensa Lavanderia Porta Vassouras Armário Alto Organizador",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_663604-MLU71499658345_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_663604-MLU71499658345_092023-O.jpg",
      "price": 265
    },
    {
      "title": "Campainha Eletrônica Sem Fio Cib 101 Preta Intelbras Cor Preto 110v/220v",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_738318-MLU72756431924_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738318-MLU72756431924_112023-O.jpg",
      "price": 68
    },
    {
      "title": "Sacos Organizadores A Vacuo Rl Market Vacuum Bag 5un 50x60 3un 60x80 2un 70x110",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_624123-MLU74311987897_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_624123-MLU74311987897_012024-O.jpg",
      "price": 78.99
    },
    {
      "title": "Gelo Artificial Flexível +gelo 15g Kit Com 100 Un",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_923667-MLU74126711341_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923667-MLU74126711341_012024-O.jpg",
      "price": 25.8
    },
    {
      "title": "Torneira Gourmet Com Filtro Cozinha Luxo Parede 1/4 De Volta Acabamento Cromado Cor Prateado",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_738966-MLU70365719563_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738966-MLU70365719563_072023-O.jpg",
      "price": 69.8
    },
    {
      "title": "Araújo Metais Gourmet Grifo De Cocina Monomando Torneira Negro",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_851031-MLU72761406178_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_851031-MLU72761406178_112023-O.jpg",
      "price": 48.87
    },
    {
      "title": "Estante Sapateira Porta Sapatos Organizador 8 Pares Multiuso",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_784928-MLU70140179039_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_784928-MLU70140179039_062023-O.jpg",
      "price": 22
    },
    {
      "title": "Genco Multipla Ação 3 Em 1 Balde 10kg Cloro Para Piscina",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_639604-MLU73882924143_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_639604-MLU73882924143_012024-O.jpg",
      "price": 247
    },
    {
      "title": "Papel Higiênico Supreme Folha Tripla 24 Rolos Neve",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_967903-MLA43465119543_092020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967903-MLA43465119543_092020-O.jpg",
      "price": 39.99
    },
    {
      "title": "Calha Gourmet Canal Organizador Umida Escorredor Inox Tubrax",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_899957-MLU75210995352_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899957-MLU75210995352_032024-O.jpg",
      "price": 360.54
    },
    {
      "title": "3 Saco Aspirador Pó Descartável Electrolux Hidrovac Original",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_839467-MLB47874489067_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_839467-MLB47874489067_102021-O.jpg",
      "price": 20.84
    },
    {
      "title": "Torneira Filtro Parede Preta Flexível Cone 2 Jatos Cor Preto",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_742356-MLU70846341463_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_742356-MLU70846341463_082023-O.jpg",
      "price": 108.9
    },
    {
      "title": "Jogo 6 Taças Modelo Diamante Transparente Em Vidro - 340ml",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_784574-MLU71208808866_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_784574-MLU71208808866_082023-O.jpg",
      "price": 45.9
    },
    {
      "title": "Kit 10 Pano De Chão Branco Grande Saco Duplo Algodão Atacado Cor Branco",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_910628-MLU70357064395_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910628-MLU70357064395_072023-O.jpg",
      "price": 33.47
    },
    {
      "title": "Kit Com 4 Rodízios Rodinhas Giratória 40mm Com Pino + Bucha",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_957351-MLU72637027165_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957351-MLU72637027165_112023-O.jpg",
      "price": 22
    },
    {
      "title": "Varal De Chão Grande Varal De Roupas 3 Andares Dobrável Cor Azul Kontuz Home",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_965083-MLU71268060419_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965083-MLU71268060419_082023-O.jpg",
      "price": 111.36
    },
    {
      "title": "Sapateira Desmontável Com 4 Pratelerias Top",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_884307-MLB49245788584_032022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_884307-MLB49245788584_032022-O.jpg",
      "price": 16
    },
    {
      "title": "Pano De Prato C/ Bainha Estampado 62x41 10 Unidades",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_729151-MLU72394223045_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729151-MLU72394223045_102023-O.jpg",
      "price": 22.32
    },
    {
      "title": "Varal Reforçado 60 Kg Retrátil Parede Alumínio Roupa De Cama",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_782904-MLU70655135867_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782904-MLU70655135867_072023-O.jpg",
      "price": 46.52
    },
    {
      "title": "Fita Veda Porta Fresta Multiuso Espuma Adesiva 10m 11x6mm",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_825271-MLU72612726621_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825271-MLU72612726621_112023-O.jpg",
      "price": 22.4
    },
    {
      "title": "Papel Higiênico Toque De Seda Folha Dupla 24 Unidades Neve",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_689119-MLU73105610326_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689119-MLU73105610326_122023-O.jpg",
      "price": 39.99
    },
    {
      "title": "Trava Porta Magnético Prendedor Fixador Batedor Adesivo 3m",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_750141-MLU75335661784_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750141-MLU75335661784_032024-O.jpg",
      "price": 19.81
    },
    {
      "title": "Saco Para Lixo 30l Embalixo 50 Unidades",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_920137-MLA74651993806_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_920137-MLA74651993806_022024-O.jpg",
      "price": 12.87
    },
    {
      "title": "Mola Aerea Para Porta Fechador Automatico Com Regulagem",
      "condition_id": 2,
      "category_id": 13,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_648035-MLU74360325325_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_648035-MLU74360325325_022024-O.jpg",
      "price": 64.99
    },
    {
      "title": "Torneira Cozinha Gourmet Misturador Monocomando 50cm Spray Acabamento Escovado Cor Inox Escovado",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_714509-MLU73738224626_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714509-MLU73738224626_012024-O.jpg",
      "price": 258
    },
    {
      "title": "Sapateira Porta Calçados Chinelo Tenis 12 Pares Multiuso",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_806402-MLU54972897894_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_806402-MLU54972897894_042023-O.jpg",
      "price": 30.8
    },
    {
      "title": "Raquete Elétrica Mata Mosquito Dengue Insetos Recarregável Cor Variada",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_723112-MLA72979183388_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_723112-MLA72979183388_112023-O.jpg",
      "price": 19.07
    },
    {
      "title": "Lixeira Metal Aramado Cesto Lixo Escritório 8 Litros Preto Cor Preto",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_716026-MLB46742464736_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_716026-MLB46742464736_072021-O.jpg",
      "price": 25.9
    },
    {
      "title": "Piscina Inflável Redonda Mor 001053 De 2.4m X 63cm 2400l Azul Caixa",
      "condition_id": 1,
      "category_id": 13,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_702491-MLA73663877482_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_702491-MLA73663877482_012024-O.jpg",
      "price": 185.3
    },
    {
      "title": "Apple iPhone 14 (128 Gb) - Meia Noite - Distribuidor Autorizado",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_881016-MLM51559383738_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_881016-MLM51559383738_092022-O.jpg",
      "price": 4299
    },
    {
      "title": "Motorola Moto G84 5g 256 Gb Viva Magenta 8 Gb Ram ",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_777159-MLU73140280377_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777159-MLU73140280377_112023-O.jpg",
      "price": 1579
    },
    {
      "title": "Smartphone Moto G24 Tela 6,6'' Dual Sim 128gb Verde Motorola",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_797432-MLU74622536118_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797432-MLU74622536118_022024-O.jpg",
      "price": 835
    },
    {
      "title": "Apple iPhone 14 Plus (128 Gb) - Meia-noite - Distribuidor Autorizado",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_902062-MLM51559388098_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902062-MLM51559388098_092022-O.jpg",
      "price": 4549
    },
    {
      "title": "Smartphone Moto G54 5g 128gb 4gb De Ram Grafite Motorola",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_646196-MLU74979395045_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_646196-MLU74979395045_032024-O.jpg",
      "price": 1046.52
    },
    {
      "title": "Samsung Galaxy A14 5g 128gb 4gb Ram Preto",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_724423-MLA54240685004_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_724423-MLA54240685004_032023-O.jpg",
      "price": 923
    },
    {
      "title": "Pulseira Metal 7 Elos Para Galaxy Watch 6 Classic 47mm R965 Cor Prata",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_922717-MLU73776495028_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_922717-MLU73776495028_012024-O.jpg",
      "price": 250.5
    },
    {
      "title": "Samsung Galaxy A34 5g 128gb 6gb Ram Preto",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_923648-MLA74676699752_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923648-MLA74676699752_022024-O.jpg",
      "price": 1397.72
    },
    {
      "title": "Smartphone Motorola Moto G14 4g 128gb Grafite 4gb Ram ",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_629121-MLA72550682668_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629121-MLA72550682668_112023-O.jpg",
      "price": 852.11
    },
    {
      "title": "Samsung Galaxy A15 256gb 8gb Ram Tela 6.5  90hz 5g Dual Chip",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_884452-MLU75408224083_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_884452-MLU75408224083_032024-O.jpg",
      "price": 1199
    },
    {
      "title": "Samsung Galaxy A34 5g 256 Gb 8 Gb Preto",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_923648-MLA74676699752_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923648-MLA74676699752_022024-O.jpg",
      "price": 1618.92
    },
    {
      "title": "Motorola Moto G54 5g 256 Gb Azul 8 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_757317-MLU74842567094_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_757317-MLU74842567094_032024-O.jpg",
      "price": 1249
    },
    {
      "title": " Apple iPhone 14 (128 Gb) - Amarelo - Distribuidor Autorizado",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_766596-MLA74805959311_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766596-MLA74805959311_022024-O.jpg",
      "price": 3999
    },
    {
      "title": "Cabo Adaptador Tipo C Otg Pendrive Usb Para Celular E Tablet",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_730251-MLB49040277635_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730251-MLB49040277635_022022-O.jpg",
      "price": 9.99
    },
    {
      "title": "Smartphone Moto G84 5g 6,55'' 256gb 8gb Grafite Motorola",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_764301-MLU73413980059_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_764301-MLU73413980059_122023-O.jpg",
      "price": 1579
    },
    {
      "title": "Motorola Moto G04 Grafite 128gb Dual Sim 4gb Ram Tela De 6.6",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_984507-MLU74799061201_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984507-MLU74799061201_022024-O.jpg",
      "price": 749
    },
    {
      "title": "Apple iPhone 13 (128 Gb) - Estelar - Distribuidor Autorizado",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_916682-MLA47782359266_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_916682-MLA47782359266_102021-O.jpg",
      "price": 3829
    },
    {
      "title": "Xiaomi Redmi 13c Dual Sim 128 Gb Glacier White 4 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_983170-MLA74039551407_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_983170-MLA74039551407_012024-O.jpg",
      "price": 820
    },
    {
      "title": "Samsung Galaxy A54 5g 6,4'' 128gb 8gb Ram Preto",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_909193-MLU75400447816_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909193-MLU75400447816_042024-O.jpg",
      "price": 1857.49
    },
    {
      "title": "Carregador Turbo 20w P/ iPhone 8 Plus X Xr 11 12 13 Pro Max",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_953634-MLB74678809329_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_953634-MLB74678809329_022024-O.jpg",
      "price": 38.48
    },
    {
      "title": "Galaxy S23 128gb 5g Processador Snapdragon Verde Samsung",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_714419-MLU75258026878_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714419-MLU75258026878_032024-O.jpg",
      "price": 3119.9
    },
    {
      "title": "Samsung Galaxy S23 256 Gb 5g Preto 8 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_969408-MLU75401927010_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969408-MLU75401927010_042024-O.jpg",
      "price": 3056
    },
    {
      "title": "Lenoxx Cx-904 Dual Sim 32 Mb Preto/vermelho",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_791433-MLA74652334764_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_791433-MLA74652334764_022024-O.jpg",
      "price": 82.99
    },
    {
      "title": "Multilaser E 2 Dual Sim 32 Gb Preto 1 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_682494-MLA50292557229_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_682494-MLA50292557229_062022-O.jpg",
      "price": 197
    },
    {
      "title": "Realme C55 8gb Ram 256gb Armazenamento Rainy Night",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_792711-MLA69945735757_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_792711-MLA69945735757_062023-O.jpg",
      "price": 1019
    },
    {
      "title": "Telefone Fixo Elgin Tcf 2000 Preto",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_998747-MLA32569078388_102019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_998747-MLA32569078388_102019-O.jpg",
      "price": 27.01
    },
    {
      "title": "Xiaomi Redmi Note 13 4g Dual Sim 256 Gb Preto 8 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_909752-MLA75257662226_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909752-MLA75257662226_032024-O.jpg",
      "price": 1226
    },
    {
      "title": "Multilaser G Max 2 (8 Mpx) Dual Sim 128 Gb Preto 2 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_921042-MLA74782476927_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_921042-MLA74782476927_022024-O.jpg",
      "price": 399
    },
    {
      "title": "Smartphone Motorola G34 5g 256 Gb Verde 8 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_601186-MLA73927862841_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_601186-MLA73927862841_012024-O.jpg",
      "price": 1169.01
    },
    {
      "title": "Celular Xiaomi Redmi 12 128gb 4gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_727890-MLU74071986708_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_727890-MLU74071986708_012024-O.jpg",
      "price": 828.92
    },
    {
      "title": "Realme C53 Dual Sim 256 Gb Mighty Black 8 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_825844-MLA70498088827_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825844-MLA70498088827_072023-O.jpg",
      "price": 935
    },
    {
      "title": "Adaptador Conector Tipo C Para Usb 3.0 Conversor Usb - C",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_843707-MLB49350150278_032022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_843707-MLB49350150278_032022-O.jpg",
      "price": 11
    },
    {
      "title": "Samsung Galaxy A54 5g 256gb Preto 8gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_850620-MLU75401311344_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_850620-MLU75401311344_042024-O.jpg",
      "price": 2104.92
    },
    {
      "title": "Samsung Galaxy A34 Dual Chip 5g 128gb Preto 6gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_606267-MLU72748493251_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_606267-MLU72748493251_112023-O.jpg",
      "price": 1399
    },
    {
      "title": "Apple iPhone 11 (128 Gb) - Branco",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-O.jpg",
      "price": 2139.99
    },
    {
      "title": "Samsung Galaxy A15 4g Dual Sim 128 Gb Azul Claro 4 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_909012-MLA74352948165_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909012-MLA74352948165_022024-O.jpg",
      "price": 899
    },
    {
      "title": "Realme C53 Dual Sim 128 Gb Mighty Black 6 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_825844-MLA70498088827_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825844-MLA70498088827_072023-O.jpg",
      "price": 809
    },
    {
      "title": "Xiaomi Pocophone Poco X6 Pro 5g Dual Sim 512 Gb Preto 12 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_660762-MLA74048129932_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660762-MLA74048129932_012024-O.jpg",
      "price": 2320
    },
    {
      "title": "Grandstream Gxp1610",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_690259-MLA72315246350_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690259-MLA72315246350_102023-O.jpg",
      "price": 215.68
    },
    {
      "title": "Xiaomi Redmi Note 13 Pro 256gb Verde-escuro 8gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_797559-MLU74199119875_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797559-MLU74199119875_012024-O.jpg",
      "price": 1730
    },
    {
      "title": "Apple iPhone XR 128 Gb - Branco",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_910401-MLA46545868460_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910401-MLA46545868460_062021-O.jpg",
      "price": 1624.99
    },
    {
      "title": "Realme C51 Dual Sim 128 Gb Verde 4 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_943649-MLA72117618942_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_943649-MLA72117618942_102023-O.jpg",
      "price": 760
    },
    {
      "title": "Xiaomi Pocophone Poco X5 5g Dual Sim 256 Gb Black 8 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_839412-MLA74807964831_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_839412-MLA74807964831_022024-O.jpg",
      "price": 1385
    },
    {
      "title": "Celular Positivo P26 Dual Chip 2g Tela 1,8 32mb Ram 32mb Cor Preto",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_623635-MLU75008641243_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623635-MLU75008641243_032024-O.jpg",
      "price": 96.67
    },
    {
      "title": "Cabo Adaptador Usb Tipo C 3.0 P/ Usb 3.0 Compativel Com Macbook E Android Cor Preto",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_750699-MLU72461975506_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750699-MLU72461975506_102023-O.jpg",
      "price": 9.78
    },
    {
      "title": "Realme Note 50 Dual Sim 128 Gb Azul 4 Gb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_800987-MLA74799319458_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800987-MLA74799319458_032024-O.jpg",
      "price": 745
    },
    {
      "title": "Multilaser Flip Vita Dual Sim 32 Mb Vermelho 32 Mb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_609545-MLA74782401507_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_609545-MLA74782401507_022024-O.jpg",
      "price": 169
    },
    {
      "title": "Multilaser Vita Iv Com Base Dual Sim 32 Mb Preto 24 Mb Ram",
      "condition_id": 1,
      "category_id": 14,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_917464-MLA44226460078_122020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917464-MLA44226460078_122020-O.jpg",
      "price": 142
    },
    {
      "title": "Samsung Galaxy S23 Fe 5g Dual Sim 128 Gb Verde 8 Gb Ram",
      "condition_id": 2,
      "category_id": 14,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_656379-MLU74071993014_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_656379-MLU74071993014_012024-O.jpg",
      "price": 2825
    },
    {
      "title": "Escada Articulada De Alumínio 16 Degraus 4,70 Metros Cor Cinza",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_724644-MLU69764634534_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_724644-MLU69764634534_062023-O.jpg",
      "price": 532.9
    },
    {
      "title": "Torre De Tomada Retrátil Multiplug Usb A Usb C 3 Tomadas 10a Cor Branco",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_910997-MLU72637189345_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910997-MLU72637189345_112023-O.jpg",
      "price": 241
    },
    {
      "title": "Cuba Pia Cozinha Gourmet Aço Inox 50x40 Tubrax C/ Acessórios",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_754295-MLU72700385519_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754295-MLU72700385519_112023-O.jpg",
      "price": 195
    },
    {
      "title": "Escada Alumínio 4 Degraus Mor 5102 Prateado/ Azul",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_782008-MLA48243381807_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782008-MLA48243381807_112021-O.jpg",
      "price": 165.3
    },
    {
      "title": "Armário Com Espelho Porta Gancho Para Toalha Banheiro Genova Cor Branco",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_882066-MLU72637655979_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_882066-MLU72637655979_112023-O.jpg",
      "price": 186.91
    },
    {
      "title": "Torre De Tomada Retrátil Multiplug Usb A Usb C 3 Tomadas 10a",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_629508-MLU72637333449_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629508-MLU72637333449_112023-O.jpg",
      "price": 269.06
    },
    {
      "title": "Supricasa Extensão Eletrica 30m Reforçada 10/20a Profissional127v/220v Cor Preto 127v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_756676-MLA74307842113_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_756676-MLA74307842113_012024-O.jpg",
      "price": 116.88
    },
    {
      "title": "Torre De Tomada Retrátil Multiplug Usb A Usb C 3 Tomadas 20a Cor Cinza",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_723612-MLU72542111032_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_723612-MLU72542111032_112023-O.jpg",
      "price": 329.95
    },
    {
      "title": "Torneira Cozinha Gourmet Parede Metal Tubo Flexível Arejador Acabamento Brilhante Cor Prateado",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_705148-MLU72566095532_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_705148-MLU72566095532_112023-O.jpg",
      "price": 33.5
    },
    {
      "title": "Escada Banqueta De Alumínio 3 Degraus Dobrável Mor Cor Azul",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_715310-MLU73130308104_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_715310-MLU73130308104_122023-O.jpg",
      "price": 164
    },
    {
      "title": "Kit Gabinete Banheiro Armário C/ Espelheira E Cuba Inclusa + Puxador Metálico Cobreado Cor: Preto Com Cobre Industrial",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_650293-MLU73178382719_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_650293-MLU73178382719_112023-O.jpg",
      "price": 423
    },
    {
      "title": "Kit 10 Lixa 180mm Menegotti Lixadeira Parede Mlp710, Mlp800h Quantidade De Cascalhos 180",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_942313-MLU74207862899_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_942313-MLU74207862899_012024-O.jpg",
      "price": 29
    },
    {
      "title": "Kit Gabinete Banheiro Armário+cuba+espelheira C/ Tampo Metal Cor Do Móvel Branco Com Cobre",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_931575-MLA54956217141_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_931575-MLA54956217141_042023-O.jpg",
      "price": 549.99
    },
    {
      "title": "Medidor De Energia 110v 127v 220v Monofásico Geração Consumo 110v/220v",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_984224-MLU73212776433_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984224-MLU73212776433_122023-O.jpg",
      "price": 108
    },
    {
      "title": "Transformador 5000va V&m Bivolt 110 220 E 220 110 12000 Btus",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_805369-MLU74968782257_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805369-MLU74968782257_032024-O.jpg",
      "price": 239.39
    },
    {
      "title": "Araújo Metais Gourmet Grifo De Cocina Monomando Torneira Negro",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_851031-MLU72761406178_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_851031-MLU72761406178_112023-O.jpg",
      "price": 48.87
    },
    {
      "title": "Kit 2 Adaptador Tomada Universal Para Viagem Internacional",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_914418-MLB72228148746_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_914418-MLB72228148746_102023-O.jpg",
      "price": 28.61
    },
    {
      "title": "Escada De Alumínio Tesoura Real Escadas 006 Prateado/azul",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_824443-MLA74652653142_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824443-MLA74652653142_022024-O.jpg",
      "price": 227.05
    },
    {
      "title": "Silicone Acetico Transparente Tubo 256g/270ml Tek Bond",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_621630-MLU74033843002_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621630-MLU74033843002_012024-O.jpg",
      "price": 13.8
    },
    {
      "title": "Válvula De Retenção De Esgoto 100mm Tigre",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_688499-MLU71759961589_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_688499-MLU71759961589_092023-O.jpg",
      "price": 85.56
    },
    {
      "title": "Iclamper Pocket 3p 10199 - Clamper 110v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_742137-MLU73129428800_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_742137-MLU73129428800_122023-O.jpg",
      "price": 35.9
    },
    {
      "title": "Extensão Tripolar Em Barra 5 Metros Br 5 Tom Forceline Cor Branco 127v/220v",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_776063-MLU74198706085_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776063-MLU74198706085_012024-O.jpg",
      "price": 34.38
    },
    {
      "title": "Calha Gourmet Canal Organizador Umida Escorredor Inox Tubrax",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_899957-MLU75210995352_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899957-MLU75210995352_032024-O.jpg",
      "price": 360.54
    },
    {
      "title": "Filtro De Linha Iclamper Energia 5 Tomadas Régua De Proteção Surtos Elétricos E Raios Dps",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_660750-MLU72677086429_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660750-MLU72677086429_112023-O.jpg",
      "price": 65.9
    },
    {
      "title": "Armário Com Espelho Porta Gancho Para Toalha Banheiro Genova Cor Cinza/ Cinamomo",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_895487-MLU72637286663_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895487-MLU72637286663_112023-O.jpg",
      "price": 197.91
    },
    {
      "title": "Escada Multifuncional 12 Degraus 7em1 Em Alumínio Evolux Cor Prateado",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_876431-MLU72972323761_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_876431-MLU72972323761_112023-O.jpg",
      "price": 507.3
    },
    {
      "title": "Pressurizador De Água 160w 13mca 2 A 3 Pontos 220v Mm House",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_793627-MLU74085597736_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793627-MLU74085597736_012024-O.jpg",
      "price": 279.92
    },
    {
      "title": "Régua 5 Tomada Com Proteção 5m Fusível Chave Liga Luz De Led Cor Preto 127v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_811166-MLU72828213089_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811166-MLU72828213089_112023-O.jpg",
      "price": 33.51
    },
    {
      "title": "Auto Trafo 5000va Bivolt Para Ar Até 18000btus",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_666664-MLU74328261818_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666664-MLU74328261818_022024-O.jpg",
      "price": 176.9
    },
    {
      "title": "Armario Cozinha 7 Portas E 2 Gavetas Juliete Cor Freijó/off White",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_999179-MLU74254111563_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_999179-MLU74254111563_012024-O.jpg",
      "price": 599
    },
    {
      "title": "Transformador 2000va Automático 110v/220v Bivolt",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_840922-MLU74996850115_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_840922-MLU74996850115_032024-O.jpg",
      "price": 149.39
    },
    {
      "title": "Clamper Front Mini 20ka 275v",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_816508-MLU72566097938_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_816508-MLU72566097938_112023-O.jpg",
      "price": 41.9
    },
    {
      "title": "Multímetro Digital Automotivo C/ Iluminação Bip Profissional",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_933616-MLU72847780555_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933616-MLU72847780555_112023-O.jpg",
      "price": 32.31
    },
    {
      "title": "Kit Caixa Acoplada Completo Reparo Saída Convencional Censi",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_977807-MLU72611566909_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977807-MLU72611566909_112023-O.jpg",
      "price": 112.47
    },
    {
      "title": "Temporizador Timer Digital Lcd Programável Tomada Bivolt",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_627611-MLU69397514820_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627611-MLU69397514820_052023-O.jpg",
      "price": 37.8
    },
    {
      "title": "Torneira Quadrada De Metal Gourmet Cozinha Bancada C/ Ducha Cor Cromada",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_887845-MLU72700361681_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_887845-MLU72700361681_112023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Extensão Filtro De Linha Com 6 Tomadas 10a Preto - Fiolux",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_716790-MLU74087450373_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_716790-MLU74087450373_012024-O.jpg",
      "price": 24
    },
    {
      "title": "Chave Boia Nível Elétrica Para Bomba De Água",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_701975-MLU72637735085_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_701975-MLU72637735085_112023-O.jpg",
      "price": 27.6
    },
    {
      "title": "Adaptador Tomada Plug Bob Love 10a 20a Até 250v Secador Top 110v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_768470-MLU74416175796_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768470-MLU74416175796_022024-O.jpg",
      "price": 8
    },
    {
      "title": "Caixa Proteção P/ Cam Cftv - Vbox 1100 Intelbras",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_868392-MLU72835308263_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_868392-MLU72835308263_112023-O.jpg",
      "price": 11.86
    },
    {
      "title": "Escada De Alumínio Reta Mor 005205 Prateado",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_824889-MLU75357563837_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824889-MLU75357563837_032024-O.jpg",
      "price": 561.69
    },
    {
      "title": "Cuba De Apoio Deca Slim 40x40 L.12040.22 Redonda Marrom Acabamento Fosco Cor Marrom-escuro",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_862552-MLU70481070335_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_862552-MLU70481070335_072023-O.jpg",
      "price": 902.04
    },
    {
      "title": "Fio Elétrico Cabo Flexível 4mm Rolo 100 Metros. Cobertura Preto",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_815948-MLU73983118720_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_815948-MLU73983118720_012024-O.jpg",
      "price": 149.99
    },
    {
      "title": "Tanque Lavanderia 55 X 45 Com Válvula Aço Inox 201 Tubrax",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_709776-MLU72855741740_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_709776-MLU72855741740_112023-O.jpg",
      "price": 284.05
    },
    {
      "title": "Kit 5 Plugs Adaptador De Tomada Bob Esponja 10a/20a 3/2pinos 110v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_893391-MLU71759080669_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_893391-MLU71759080669_092023-O.jpg",
      "price": 12.99
    },
    {
      "title": "Zapt Tinta Para Rejunte Branco Fortaleza 200ml",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_818743-MLU69726092410_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_818743-MLU69726092410_052023-O.jpg",
      "price": 34.09
    },
    {
      "title": "Fio Elétrico Cabo Flexível 2,5mm Rolo 100 Metros. C/inmetro",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_774552-MLB73823149952_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_774552-MLB73823149952_012024-O.jpg",
      "price": 67
    },
    {
      "title": "Adaptador Tomada 3 Pinos P/ 2 Benjamin 10 E 20 Amperes 110v/220v",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_764449-MLU74696058246_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_764449-MLU74696058246_022024-O.jpg",
      "price": 8.53
    },
    {
      "title": "Escada Telescópica Alumínio Multifuncional 5,80 M 18 Degraus Cor Prata",
      "condition_id": 2,
      "category_id": 15,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_922007-MLA73060759303_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_922007-MLA73060759303_112023-O.jpg",
      "price": 1219.83
    },
    {
      "title": "Kit Mecanismo Universal Caixa Descarga Acoplada Completo",
      "condition_id": 1,
      "category_id": 15,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_852668-MLU71447603448_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852668-MLU71447603448_092023-O.jpg",
      "price": 64.89
    },
    {
      "title": "Fritadeira Air Fryer Elétrica Start Fry 3,5l 110v Elgin",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_729187-MLA73278548999_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729187-MLA73278548999_122023-O.jpg",
      "price": 227
    },
    {
      "title": "Geladeira Electrolux Dc35 260l Com Freezer Cycle Defrost Branca 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_689998-MLA74780662857_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689998-MLA74780662857_022024-O.jpg",
      "price": 2099
    },
    {
      "title": "Suporte De Parede Triplo Controle Remoto Tv Ar Condicionado Cor Branco",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_658183-MLU72828380109_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_658183-MLU72828380109_112023-O.jpg",
      "price": 39.33
    },
    {
      "title": "Jarra Para Cafeteira Britânia Cp15 Inox Vidro 15 Cafés",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_945796-MLU74098978260_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_945796-MLU74098978260_012024-O.jpg",
      "price": 30.98
    },
    {
      "title": "Geladeira Re31 Cycle Defrost 240l Branca Electrolux 127v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_663541-MLA74781054727_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_663541-MLA74781054727_022024-O.jpg",
      "price": 2131.69
    },
    {
      "title": "Torradeira Elétrica Efficient Ets10 Cinza-escuro Electrolux 110v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_940963-MLU72759436894_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940963-MLU72759436894_112023-O.jpg",
      "price": 163
    },
    {
      "title": "Micro-ondas 32 Litros Branco- 127v - Cms46ab Consul",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_781806-MLA53393449772_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781806-MLA53393449772_012023-O.jpg",
      "price": 658.36
    },
    {
      "title": "Aspirador De Pó E Água 1600w 20 Litros Gtw Inox 20 Wap Cor Aço Inoxidável/preto 220v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_660441-MLU72748623311_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660441-MLU72748623311_112023-O.jpg",
      "price": 479.91
    },
    {
      "title": "Hélice Britânia 30cm 6 Pás Funda Cinza Escuro",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_984908-MLU73982206514_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984908-MLU73982206514_012024-O.jpg",
      "price": 18.87
    },
    {
      "title": "Geladeira Frost Free Electrolux Dfn41 Branca Com Freezer 371l 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_847641-MLU74110501276_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_847641-MLU74110501276_012024-O.jpg",
      "price": 2799
    },
    {
      "title": "Espremedor De Frutas Mondial Premium 110v E-02",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_639101-MLU72675272046_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_639101-MLU72675272046_112023-O.jpg",
      "price": 47.34
    },
    {
      "title": "Iogurteira Cinza + Livro De Receitas Bivolt",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_824815-MLU72438758392_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824815-MLU72438758392_102023-O.jpg",
      "price": 183.25
    },
    {
      "title": "Geladeira Consul Crd37 Branca Com Freezer 334l 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_781726-MLA74652300790_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781726-MLA74652300790_022024-O.jpg",
      "price": 2499
    },
    {
      "title": "Micro-ondas Nn-st25lwru 700w Branco Panasonic 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_736779-MLU72642516853_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736779-MLU72642516853_112023-O.jpg",
      "price": 509
    },
    {
      "title": "Desumidificador Elétrico Komeco Kdp 250 Branco 100v/240v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_730184-MLU74994075010_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730184-MLU74994075010_032024-O.jpg",
      "price": 254.81
    },
    {
      "title": "Descalcificante Líquido Saeco 250ml Ca6700 Philips",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_661051-MLU72828384167_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_661051-MLU72828384167_112023-O.jpg",
      "price": 33.8
    },
    {
      "title": "Geladeira Electrolux Re31 Branca 240l 220v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_663541-MLA74781054727_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_663541-MLA74781054727_022024-O.jpg",
      "price": 1799
    },
    {
      "title": "Batedeira Prática 400w 3,6 Litros B-44-b Preto Mondial Frequência 60 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_642222-MLU75401307930_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_642222-MLU75401307930_042024-O.jpg",
      "price": 99.83
    },
    {
      "title": "Micro-ondas Efficient 23 Litros Me23b Branco Electrolux 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_730005-MLU72338982707_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730005-MLU72338982707_102023-O.jpg",
      "price": 549
    },
    {
      "title": "Micro-ondas Com Menu Fácil 32 Litros Cms46ar Cinza Consul 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_622731-MLU75556100903_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_622731-MLU75556100903_042024-O.jpg",
      "price": 739
    },
    {
      "title": "Electrolux Saco Para Aspirador De Pó Descartável 3 Unidades",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_896843-MLA74781618373_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_896843-MLA74781618373_022024-O.jpg",
      "price": 20.09
    },
    {
      "title": "Geladeira Frost Free Brastemp Brm44h Branca Com Freezer 375l 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_791637-MLU74245600411_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_791637-MLU74245600411_012024-O.jpg",
      "price": 2899
    },
    {
      "title": "Fritadeira Industrial Elétrica Tacho 5 Litros Redondo Inox Cor Prateado 220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_694645-MLU72772454164_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694645-MLU72772454164_112023-O.jpg",
      "price": 187.42
    },
    {
      "title": "Controle Ar Condicionado Compatível Gree Split Yb1f Yb1f2 Yb",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_754039-MLU74139458695_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754039-MLU74139458695_012024-O.jpg",
      "price": 23.68
    },
    {
      "title": "Geladeira Frost Free Electrolux Tf39 Inox Com Freezer 310l 127v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_605195-MLA74782390309_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_605195-MLA74782390309_022024-O.jpg",
      "price": 2849
    },
    {
      "title": "Pipoqueira Popflix Pp-03 1200w Vermelha Mondial Cor Vermelho 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_690444-MLU72639810667_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690444-MLU72639810667_112023-O.jpg",
      "price": 172.49
    },
    {
      "title": "Fogão Cooktop Gás Mueller Cooktop 5 Bocas Preto 127v/220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_880334-MLA41828277260_052020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_880334-MLA41828277260_052020-O.jpg",
      "price": 594.9
    },
    {
      "title": "Micro-ondas Electrolux 34 Litros Meo44 110v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_688310-MLA51839213484_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_688310-MLA51839213484_102022-O.jpg",
      "price": 669
    },
    {
      "title": "Grill Sanduicheira Cadence Elétrica Chapa Misteira Tostex Tostequeira Hambúrguer Click 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_895016-MLU72677094015_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895016-MLU72677094015_112023-O.jpg",
      "price": 162
    },
    {
      "title": "Geladeira Frost Free Tf55 Duplex 431l Branca Electrolux 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_684223-MLA43051688344_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_684223-MLA43051688344_082020-O.jpg",
      "price": 3299
    },
    {
      "title": "Ventilador De Mesa Super Power Vsp-30-b 30cm 6 Pás Mondial Cor Da Estrutura Preto Cor Das Pás Prata 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_776494-MLU72748459639_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776494-MLU72748459639_112023-O.jpg",
      "price": 116.99
    },
    {
      "title": "Copo Liquidificador Mondial Turbo Inox L1000 L1200 Preto",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_785135-MLU72611762073_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_785135-MLU72611762073_112023-O.jpg",
      "price": 39.89
    },
    {
      "title": "Geladeira Frost Free Electrolux Freezer Tf55s Inox Com Freezer 431l 127v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_765183-MLA74651911808_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_765183-MLA74651911808_022024-O.jpg",
      "price": 5119.41
    },
    {
      "title": "Jarra Cafeteira Britania Cp30 / Cb30 / Cp30 Inox",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_742122-MLU74220866377_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_742122-MLU74220866377_012024-O.jpg",
      "price": 30.8
    },
    {
      "title": "Panificadora Automática Master Bread Npf-53 700w Preto Mondial 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_880320-MLU72637431543_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_880320-MLU72637431543_112023-O.jpg",
      "price": 561
    },
    {
      "title": "Micro-ondas Electrolux 34 Litros Meo44 220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_688310-MLA51839213484_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_688310-MLA51839213484_102022-O.jpg",
      "price": 669
    },
    {
      "title": "Geladeira Consul Crd37 Branca Com Freezer 334l 220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_781726-MLA74652300790_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781726-MLA74652300790_022024-O.jpg",
      "price": 2700.89
    },
    {
      "title": "Ventilador De Teto Ventisol Fenix Inverter Controle Remoto Branco Com 3 Pás De  Plástico, 960 mm De Diâmetro 127 v/220 v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_892670-MLA51543175059_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892670-MLA51543175059_092022-O.jpg",
      "price": 357
    },
    {
      "title": "Filtro Saco Papel 3 Peças Aspirador A10 Acqua Power Gt 2000",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_944226-MLU72754604998_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_944226-MLU72754604998_112023-O.jpg",
      "price": 19.57
    },
    {
      "title": "Micro-ondas Efficient 23 Litros Me23b Branco Electrolux 220v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_911021-MLU72275296416_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_911021-MLU72275296416_102023-O.jpg",
      "price": 549
    },
    {
      "title": "Grill Sanduicheira Cadence Eletrica Chapa Misteira Tostex Cor Preto 220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_886972-MLU72582889610_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_886972-MLU72582889610_112023-O.jpg",
      "price": 120
    },
    {
      "title": "Geladeira Frost Free Electrolux Tf39 Branca Com Freezer 310l 127v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_808170-MLA74652338040_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808170-MLA74652338040_022024-O.jpg",
      "price": 2956.47
    },
    {
      "title": "Cooktop Mueller 5 Bocas Com Queimador Ultra Chama Preto 127v/220v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_893172-MLA48185523968_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_893172-MLA48185523968_112021-O.jpg",
      "price": 553.9
    },
    {
      "title": "Copo Liquidificador Walita Problend 4 Ri2110",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_975093-MLU73331041290_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_975093-MLU73331041290_122023-O.jpg",
      "price": 43.28
    },
    {
      "title": "Controle Remoto Para Ar Condicionado Consul Split Bem Estar",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_828102-MLB75578820573_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_828102-MLB75578820573_042024-O.jpg",
      "price": 29.89
    },
    {
      "title": "Geladeira Frost Free Duplex Crm44ak 386l Inox Consul 110v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_774191-MLU74981050301_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_774191-MLU74981050301_032024-O.jpg",
      "price": 3536.83
    },
    {
      "title": "Batedeira Prática 400w 3,6 Litros B-44-b Preto Mondial Frequência 60 220v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_737013-MLU75555491031_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_737013-MLU75555491031_042024-O.jpg",
      "price": 99.83
    },
    {
      "title": "Fogão Cooktop Elétrica Epsilon Eps-c Prateado 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_981775-MLA72015989030_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_981775-MLA72015989030_102023-O.jpg",
      "price": 115.42
    },
    {
      "title": "Ferro De Passar A Vapor Júpiter Mallory Cor Azul-turquesa 110v",
      "condition_id": 2,
      "category_id": 16,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_649829-MLU69604876416_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649829-MLU69604876416_052023-O.jpg",
      "price": 66.64
    },
    {
      "title": "Geladeira Frost Free Consul Crb36a Branca 300l 110v",
      "condition_id": 1,
      "category_id": 16,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_969240-MLA51178613417_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969240-MLA51178613417_082022-O.jpg",
      "price": 2515.62
    },
    {
      "title": "Samsung Smart Tv 58'' Uhd 4k 58cu7700 2023",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_733256-MLU75135791885_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_733256-MLU75135791885_032024-O.jpg",
      "price": 2616
    },
    {
      "title": "Caixa De Som Bluetooth Tronsmart Trip Prova D'água Preto 10w Cor Vermelho",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_950300-MLU73665444925_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950300-MLU73665444925_122023-O.jpg",
      "price": 155
    },
    {
      "title": "Tv Smart LG Led 43 4k Al Thinq 43ur781c Wi-fi Bluetooth Alexa 100v/240v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_939364-MLU72612995933_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_939364-MLU72612995933_112023-O.jpg",
      "price": 1704.01
    },
    {
      "title": "Kz Edx Pro Sem Microfone Intrauricular Retorno De Palco",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_681246-MLU74827630025_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_681246-MLU74827630025_022024-O.jpg",
      "price": 60
    },
    {
      "title": "Smart Tv LG 50 Led 4k Uhd Wi-fi Bluetooth Hdr10 50ur871c0sa",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_957054-MLU72636721875_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957054-MLU72636721875_112023-O.jpg",
      "price": 2213.95
    },
    {
      "title": "Canhão Refletor Led Strobo 36 Leds 3w Rgb Dmx Bivolt 110v/220v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_761963-MLB53143483298_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761963-MLB53143483298_012023-O.jpg",
      "price": 58.38
    },
    {
      "title": "Caixinha De Som Portátil Resistente Água Bluetooth Completa",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_845669-MLB46518584123_062021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_845669-MLB46518584123_062021-O.jpg",
      "price": 45
    },
    {
      "title": "Fone De Ouvido Qcy T13 Com 4 Microfones E Bluetooth 5.1 Cor Preto",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_630478-MLU75210746968_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_630478-MLU75210746968_032024-O.jpg",
      "price": 169.45
    },
    {
      "title": "Smart Tv Led 32 S5400af Tcl Fhd Android Tv",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_999878-MLU72827092602_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_999878-MLU72827092602_112023-O.jpg",
      "price": 1049
    },
    {
      "title": "Receptor Digital Multimídia Vivensis Vx10 Tv Hd Sat",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_938435-MLU73792639515_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_938435-MLU73792639515_012024-O.jpg",
      "price": 149
    },
    {
      "title": "Smart Tv Samsung 32'' Hd Tizen T4300 Bivolt",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_873351-MLU75124807474_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_873351-MLU75124807474_032024-O.jpg",
      "price": 1141.94
    },
    {
      "title": "Processador De Áudio Digital Equalizador Stetsom Stx 2448 12v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_683384-MLU72651378733_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_683384-MLU72651378733_112023-O.jpg",
      "price": 286.49
    },
    {
      "title": "Caixa De Som Sem Fio Jbl Clip4 Black Ultraportátil Bluetooth 5v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_835614-MLU73536430844_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_835614-MLU73536430844_122023-O.jpg",
      "price": 373
    },
    {
      "title": "Espuma Compatível Com Hyperx Cloud Stinger Almofada",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_609244-MLB74111589911_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_609244-MLB74111589911_012024-O.jpg",
      "price": 45
    },
    {
      "title": "Samsung Smart Tv Qled 4k 55q65c 2023 Tela Sem Limites 55",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_727915-MLU74162431369_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_727915-MLU74162431369_012024-O.jpg",
      "price": 2999
    },
    {
      "title": "Cabo Adaptador Hdmi Para Vga Para Tv Pc Notebook Monitor",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_902618-MLU54959896677_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902618-MLU54959896677_042023-O.jpg",
      "price": 13.08
    },
    {
      "title": "Cabo Hdmi 2.0 4k Blindado 5m Ponta Gold 60hz Aquário",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_918615-MLB52591014813_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_918615-MLB52591014813_112022-O.jpg",
      "price": 29.57
    },
    {
      "title": "Caixa Caixinha De Som Bluetooth Portatil Radio Fm Potente Cor Preto",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_952264-MLU72633814165_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_952264-MLU72633814165_112023-O.jpg",
      "price": 79
    },
    {
      "title": "Fone De Ouvido Bluetooth Com Microfone Tune 510bt Cor Preto",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_958969-MLU72836483511_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958969-MLU72836483511_112023-O.jpg",
      "price": 119
    },
    {
      "title": "Smart Tv 50'' Ptv50g2sgtssbl 4k Google Tv Led Philco",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_947521-MLU75401927296_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_947521-MLU75401927296_042024-O.jpg",
      "price": 1899
    },
    {
      "title": "Mesa Mixer Placa De Som Teyun Q-12 Interface De Audio Usb Pc 5v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_666919-MLB50883024176_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666919-MLB50883024176_072022-O.jpg",
      "price": 135
    },
    {
      "title": "Kit Barras Led Compatível Para Tv 49uj6525 49uj6565 49uj6585",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_643171-MLU72636992317_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_643171-MLU72636992317_112023-O.jpg",
      "price": 75.12
    },
    {
      "title": "Caixa Amplificada Connect Lights Cm-400 Preta Mondial Bivolt Cor Preto 110v/220v",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_911951-MLU72748303299_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_911951-MLU72748303299_112023-O.jpg",
      "price": 523.86
    },
    {
      "title": "Smart Tv 32 Hd Roku Tv 32s5135/78g Preta Aoc Bivolt",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_879123-MLU75556090691_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_879123-MLU75556090691_042024-O.jpg",
      "price": 959
    },
    {
      "title": "Fone De Ouvido Sem Fio Jbl Tune 520bt Preto",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_986177-MLU73187129209_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986177-MLU73187129209_122023-O.jpg",
      "price": 243
    },
    {
      "title": "Smart Tv Philco Ptv32m8gagcmblh Led Android Tv Hd 32  110v/220v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_749064-MLU75210338310_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_749064-MLU75210338310_032024-O.jpg",
      "price": 999
    },
    {
      "title": "Interface De Áudio Usb Q-24 Gravação 24bits Placa De Som",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_984683-MLU73692405967_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984683-MLU73692405967_122023-O.jpg",
      "price": 319
    },
    {
      "title": "Cabo Hdmi 2.0 4k 3d Ultrahd 19 Pinos Chip Ps4 Xbox 2 Metros",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_630904-MLB44912682214_022021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_630904-MLB44912682214_022021-O.jpg",
      "price": 10.44
    },
    {
      "title": "Caixa De Som Boombox 3 Jblboombox3blkbr Classificação Ipx Ip67jbl",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_635357-MLU74111549087_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_635357-MLU74111549087_012024-O.jpg",
      "price": 2246.14
    },
    {
      "title": "Samsung Smart Tv 43'' Uhd 4k 43cu7700 2023",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_770353-MLU75401927058_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770353-MLU75401927058_042024-O.jpg",
      "price": 1996
    },
    {
      "title": "Fone De Ouvido Lenovo Gm2 Pro Gamer Music Bluetooth 5.3 Preto",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_895478-MLB52007199514_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895478-MLB52007199514_102022-O.jpg",
      "price": 50.36
    },
    {
      "title": "Kit 4 Barras De Led Ph39n91 Ph39n91dsgw Ph39e31 10 Leds",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_781003-MLA74480360430_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781003-MLA74480360430_022024-O.jpg",
      "price": 79.9
    },
    {
      "title": "Suporte  Braço Girafa  Para Microfone  Bestweei Bw-35 Preto",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_752674-MLA75079921379_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752674-MLA75079921379_032024-O.jpg",
      "price": 42.4
    },
    {
      "title": "Caixa De Som Amplificada Bluetooth Ca80 120w Lenoxx Cor Preto 110v/220v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_948689-MLU72849759732_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948689-MLU72849759732_112023-O.jpg",
      "price": 129.9
    },
    {
      "title": "Samsung Smart Tv 50 Polegadas Qled 4k Q60d 2024",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_869932-MLU75348528241_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_869932-MLU75348528241_032024-O.jpg",
      "price": 2697.05
    },
    {
      "title": "Fone De Ouvido Intra-auricular Com Fio Tune 110 Preto Jbl",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_791330-MLA40160480823_122019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_791330-MLA40160480823_122019-O.jpg",
      "price": 39.09
    },
    {
      "title": "Kit Barras De Led Tv 32l1800 32l2800 32l2900 L32s4900",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_635399-MLU74857873627_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_635399-MLU74857873627_032024-O.jpg",
      "price": 27.35
    },
    {
      "title": "Direct Box Wireconex Wdi-600",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_814498-MLU72078458704_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814498-MLU72078458704_102023-O.jpg",
      "price": 155.48
    },
    {
      "title": "Smart Tv Ptv43e3aagssblf 43 Led Android Dolby Audio Com Wi-fi Philco 100v/240v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_864191-MLU74526229681_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_864191-MLU74526229681_022024-O.jpg",
      "price": 1458
    },
    {
      "title": "Caixa Caixinha De Som Bluetooth Potente Pequena Portátil Tws Cor Preto",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_720727-MLU70779458260_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_720727-MLU70779458260_082023-O.jpg",
      "price": 34.24
    },
    {
      "title": "Fone Qcy Ht05 Melobuds Bluetooth 5.2 Com Cancelamento Anc Cor Preto",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_627370-MLU72700969039_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627370-MLU72700969039_112023-O.jpg",
      "price": 255
    },
    {
      "title": "Smart Tv 40'' Ptv40e3aagssblf Android Led Dolby Audio Processador Quad Core Philco 100v/240v",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_767442-MLU74814625726_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_767442-MLU74814625726_032024-O.jpg",
      "price": 1344.99
    },
    {
      "title": "Suporte Universal Fixo Painel Tv Led Lcd 14 À 84 Polegadas Aquario",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_821592-MLA51497641617_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_821592-MLA51497641617_092022-O.jpg",
      "price": 12.49
    },
    {
      "title": "Caixa De Som Go 3 Bluetooth Portátil Bateria Longa Duração",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_835320-MLU69345314158_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_835320-MLU69345314158_052023-O.jpg",
      "price": 83.69
    },
    {
      "title": "Smart Tv 43'' Full Hd Com Roku Tv 43s5135/78g Aoc Bivolt",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_602559-MLU75556707711_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_602559-MLU75556707711_042024-O.jpg",
      "price": 1234.88
    },
    {
      "title": "Microfone De Lapela Boya By-v20 Wireless Usb-c / 2mic",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_600464-MLB53497379572_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600464-MLB53497379572_012023-O.jpg",
      "price": 302.4
    },
    {
      "title": "Fone De Ouvido Anker Soundcore Sport X10 Cancelamento Ruído",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_907407-MLU74834847814_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_907407-MLU74834847814_032024-O.jpg",
      "price": 459
    },
    {
      "title": "Smart Tv S5400a 43 Led Fhd Android Tv Tcl Bivolt",
      "condition_id": 1,
      "category_id": 17,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_800267-MLA71801596129_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800267-MLA71801596129_092023-O.jpg",
      "price": 1652.27
    },
    {
      "title": "Conversor Adaptador De Vídeo Hdmi Macho Para Vga Femea",
      "condition_id": 2,
      "category_id": 17,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_834400-MLU71472010901_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834400-MLU71472010901_092023-O.jpg",
      "price": 16.1
    },
    {
      "title": "Creatina Monohidratada 250g  100% Pura  Soldiers Nutrition",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_991730-MLU75209648038_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991730-MLU75209648038_032024-O.jpg",
      "price": 57.39
    },
    {
      "title": "Bicicleta Motorizada 80cc Coroa 52 Rocket Cor Preto Tamanho Do Quadro 19",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_779822-MLU74553519809_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_779822-MLU74553519809_022024-O.jpg",
      "price": 1950
    },
    {
      "title": "Barraca De Acampamento Para Até 4 Pessoas Iglu - Mor",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_647506-MLU69293970888_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647506-MLU69293970888_052023-O.jpg",
      "price": 129.28
    },
    {
      "title": "Pula Corda Infantil Meninas Com Led Pisca Pisca Brinquedo Cor Colorido",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_692398-MLU71656881336_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_692398-MLU71656881336_092023-O.jpg",
      "price": 36.7
    },
    {
      "title": "Mountain Bike Sense Mtb Rock Evo 2021/22 2023 R29 M Freios A Disco Hidráulicos Shimano Deore M4100 E Shimano Deore M4120 Shadow Cinza/azul",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_945261-MLA72916515804_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_945261-MLA72916515804_112023-O.jpg",
      "price": 3990
    },
    {
      "title": "Colchão Inflável Casal Multiuso Bomba Embutida Acampamento Casa Viagem",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_794770-MLU74129720999_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_794770-MLU74129720999_012024-O.jpg",
      "price": 134.19
    },
    {
      "title": "Suplemento Em Pó Dark Lab Creatine Premium Creatina Em Pote De 300g",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_871276-MLU74554756383_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871276-MLU74554756383_022024-O.jpg",
      "price": 77.43
    },
    {
      "title": "Whey Protein Isolado Iso Blend Complex 2kg Pretorian Sabor Cookies E Cream",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_810625-MLA52733606403_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810625-MLA52733606403_122022-O.jpg",
      "price": 94.55
    },
    {
      "title": "Capa Impermeável Para Cobrir Bicicletas Hws Forrada Universa",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_967300-MLU72565646328_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967300-MLU72565646328_112023-O.jpg",
      "price": 33.23
    },
    {
      "title": "Inflador Elétrico Bomba Encher Colchão Boia Com Bicos Bivolt 110v/220v",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_632316-MLU71452583710_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_632316-MLU71452583710_092023-O.jpg",
      "price": 51.57
    },
    {
      "title": "Creatina Monohidratada 300g - 100% Pura Com Fórmula Exclusiva Produzida Com Matéria-prima Importada.",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_864209-MLU75457370568_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_864209-MLU75457370568_042024-O.jpg",
      "price": 71.77
    },
    {
      "title": "Bicicleta Aro 29 Mtb Sense Rock Evo - Shimano Cor Aqua/preto Tamanho Do Quadro 17",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_736758-MLA73301103860_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_736758-MLA73301103860_122023-O.jpg",
      "price": 3990
    },
    {
      "title": "Bola Society Uhlsport Attack + Bomba De Ar Cor Laranja",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_896739-MLU74417010306_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_896739-MLU74417010306_022024-O.jpg",
      "price": 68.9
    },
    {
      "title": "Creatina Monohidratada 600g - 100% Pura - Soldiers Nutrition",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_919189-MLU75209627490_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_919189-MLU75209627490_032024-O.jpg",
      "price": 119.9
    },
    {
      "title": "6 Cartelas Pastilha 10 Cada Purificadora Clorin Água Potável Cor Branco",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_801867-MLU74225164372_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801867-MLU74225164372_022024-O.jpg",
      "price": 39.9
    },
    {
      "title": "Suplemento Em Pó Black Skull Caveira Preta Turbo Polvo 300g",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_941774-MLA52624902588_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_941774-MLA52624902588_112022-O.jpg",
      "price": 36.25
    },
    {
      "title": "Bicicleta Ergométrica Vertical Gallant Trainer",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_995699-MLA49120281917_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_995699-MLA49120281917_022022-O.jpg",
      "price": 539
    },
    {
      "title": "Suplemento Em Cápsula Vitafor  Omegafor Plus Óleo De Peixe Plus Sabor  Without Flavor Em Pote De 240g 240 Un",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_738572-MLU75143558458_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738572-MLU75143558458_032024-O.jpg",
      "price": 228.4
    },
    {
      "title": "Corda De Pular Cross Speed Rope Rolamento Profissional Fit Pdo",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_857274-MLA71251808285_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_857274-MLA71251808285_082023-O.jpg",
      "price": 15.97
    },
    {
      "title": "Garrafa Térmica De Inox Com Termômetro 500ml Garrafinha Água Cor Garrafa Térmica Termômetro Cinza",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_768517-MLU74959616895_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768517-MLU74959616895_032024-O.jpg",
      "price": 31.51
    },
    {
      "title": "Freio A Disco Hidraulico Shimano Altus Bl-mt200/br-mt200 Tra",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_886510-MLU73588653017_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_886510-MLU73588653017_122023-O.jpg",
      "price": 227.48
    },
    {
      "title": "Fita Kinésio Tape Bandagem Auxilio Muscular Dores Academia Cor Pele",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_623580-MLU70607637474_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623580-MLU70607637474_072023-O.jpg",
      "price": 16.79
    },
    {
      "title": "Ômega Brain 60 Cápsulas Essential Nutrition Sabor Natural",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_899295-MLU75587640653_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899295-MLU75587640653_042024-O.jpg",
      "price": 178.41
    },
    {
      "title": "Strap Monster Profissional Com Munhequeira Musculação Cross Cor Preto Da Bulldozer",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_828430-MLU72757275498_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_828430-MLU72757275498_112023-O.jpg",
      "price": 39.98
    },
    {
      "title": "Summer Vara De Pesca Completa 2 Vara 2 Molinete E Itens",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_621101-MLU72565706740_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621101-MLU72565706740_112023-O.jpg",
      "price": 147
    },
    {
      "title": "Suporte Transbike Para 2 Bikes Apoio Fixo Sedan Hatch Aço True",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_707193-MLU74428269729_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_707193-MLU74428269729_022024-O.jpg",
      "price": 139
    },
    {
      "title": "Patinete Infantil Dobravel 3 Rodas Base Scooter Até 70 Kg Cor Azul",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_979324-MLU75357534001_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_979324-MLU75357534001_032024-O.jpg",
      "price": 128.96
    },
    {
      "title": "Creatina Turbo - 300g - Caveira Preta / Black Skull Sabor Sem Sabor",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_750774-MLU74553519739_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750774-MLU74553519739_022024-O.jpg",
      "price": 44.69
    },
    {
      "title": "Bola De Futebol De Campo Slick 2020 Topper",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_735756-MLB54078855256_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_735756-MLB54078855256_022023-O.jpg",
      "price": 50.35
    },
    {
      "title": "Kit Escovas Limpeza Bicicleta E Maquina Limpar Corrente 4 Pç",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_811405-MLU73123115682_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811405-MLU73123115682_122023-O.jpg",
      "price": 32.9
    },
    {
      "title": "Lanterna Militar Led Pesca E Camping Recarregável",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654413-MLU73783477930_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654413-MLU73783477930_012024-O.jpg",
      "price": 37.46
    },
    {
      "title": "Coenzima Q10 - 60 Cap (100mg P/ Porção) - Vitafor Sabor Sem Sabor",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_987962-MLA74808089177_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_987962-MLA74808089177_022024-O.jpg",
      "price": 73
    },
    {
      "title": "Silicone Lubrificante Líquido P/ Esteira 1 Litro ",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_828597-MLU74441219543_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_828597-MLU74441219543_022024-O.jpg",
      "price": 40.95
    },
    {
      "title": "Capa Bicicleta Impermeável Marca Hws Proteção Uv E Chuva",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_883611-MLU72826918671_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_883611-MLU72826918671_112023-O.jpg",
      "price": 29.51
    },
    {
      "title": "Bolsa Térmica Everbags Fitness Master Preto ",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_645979-MLU73140759925_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_645979-MLU73140759925_112023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Supradyn Ativa Cx 30 Comprimidos ",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_617786-MLU72612918407_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_617786-MLU72612918407_112023-O.jpg",
      "price": 66.93
    },
    {
      "title": "Touca De Silicone Para Natação Speedo Lisa Cor Preta Tamanho Único",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_627775-MLU72637333893_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627775-MLU72637333893_112023-O.jpg",
      "price": 31.52
    },
    {
      "title": "Smoove Chain Óleo Lubrificante Lube 125ml Cera Corrente",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_962792-MLU74123306729_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962792-MLU74123306729_012024-O.jpg",
      "price": 139
    },
    {
      "title": "Protetor Bucal Pro Spank Preto Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_620691-MLU72612995473_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_620691-MLU72612995473_112023-O.jpg",
      "price": 31.25
    },
    {
      "title": "Colchonete Acampamento Camping Casal 190x130 Colchão Dormir",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_896546-MLU72637628781_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_896546-MLU72637628781_112023-O.jpg",
      "price": 38.94
    },
    {
      "title": "Kit 3 Óleo De Semente De Abóbora 60 Capsulas Katigua",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_734781-MLU74668095768_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_734781-MLU74668095768_022024-O.jpg",
      "price": 115
    },
    {
      "title": "Bomba Penalty Sac Dupla Ação Enche Bola/bicicleta Ref.670023 Cor Branca",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_996302-MLU73787118758_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_996302-MLU73787118758_012024-O.jpg",
      "price": 35.47
    },
    {
      "title": "Suplemento Em Cápsulas Magnesio 500mg 120cps Bionutri",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_814694-MLU75290419325_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814694-MLU75290419325_032024-O.jpg",
      "price": 30.46
    },
    {
      "title": "Modulen Ibd 400g - Nestlé Sabor Neutro (sem Sabor)",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_933304-MLU72600888647_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933304-MLU72600888647_102023-O.jpg",
      "price": 319.12
    },
    {
      "title": "Bússola Mapa Com Régua 10cm Lente De Aumento Navegação",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_933104-MLA74715675214_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933104-MLA74715675214_032024-O.jpg",
      "price": 24.99
    },
    {
      "title": "Katigua Oleo De Semente De Abobora 120 Cápsulas",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_619358-MLU75593407999_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619358-MLU75593407999_042024-O.jpg",
      "price": 57.33
    },
    {
      "title": "Cadeado Com Chave Para Bike 8mm Diâmetro Aço Silicone Atrio Cor Preto",
      "condition_id": 2,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_719034-MLU74696029240_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_719034-MLU74696029240_022024-O.jpg",
      "price": 19.99
    },
    {
      "title": "2 Potes Vitamina B12 Metilcobalamina - 60caps Nutrify B 12",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_800982-MLB74086482413_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800982-MLB74086482413_012024-O.jpg",
      "price": 57.98
    },
    {
      "title": "Espessante Alimentar Espessa Mais Lata 400g - Mais Care Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_604043-MLB31885765210_082019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_604043-MLB31885765210_082019-O.jpg",
      "price": 52.5
    },
    {
      "title": "Lanterna Tática Militar X900 Recarregável Sinalizador Sos Led C/ Zoom Holofote Forte",
      "condition_id": 1,
      "category_id": 18,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_815709-MLA54248044553_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_815709-MLA54248044553_032023-O.jpg",
      "price": 34.66
    },
    {
      "title": "Esmerilhadeira Angular Lixadeira Disco Corte Desbaste 720w Cor Amarelo Frequência 60 Hz 110v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_989258-MLU75209979920_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_989258-MLU75209979920_032024-O.jpg",
      "price": 162.69
    },
    {
      "title": "Parafusadeira Furadeira 3/8 Bivolt A Bateria 12v Cor Amarelo Frequência 60hz 110v/220v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_623151-MLU72827854391_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623151-MLU72827854391_112023-O.jpg",
      "price": 104.8
    },
    {
      "title": "Jogo 46 Ferramentas Chaves Catraca Soquetes Crv Bits 1/4",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_822556-MLU72481764442_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_822556-MLU72481764442_102023-O.jpg",
      "price": 34.46
    },
    {
      "title": "Esmerilhadeira Angular Lixadeira Disco De Corte 720w 220v Cor Laranja Frequência 50hz",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_874424-MLU69974054897_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_874424-MLU69974054897_062023-O.jpg",
      "price": 162.69
    },
    {
      "title": "Kit 10 Lixa 180mm Menegotti Lixadeira Parede Mlp710, Mlp800h Quantidade De Cascalhos 180",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_942313-MLU74207862899_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_942313-MLU74207862899_012024-O.jpg",
      "price": 29
    },
    {
      "title": "Lavadora De Alta Pressão 1500w 1750psi Wap Ousada Plus 2200 110v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_927707-MLU71036964205_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927707-MLU71036964205_082023-O.jpg",
      "price": 465
    },
    {
      "title": "Parafusadeira Furadeira Sem Fio Bateria 12v P/ Madeira Metal Cor Amarelo/preto Frequência 60 110v/220v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_888295-MLU72826448469_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_888295-MLU72826448469_112023-O.jpg",
      "price": 169.9
    },
    {
      "title": "Hidrômetro Medidor De Água Unijato 3/4 Qn 1.5 115mm + Kit Co",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_694633-MLU71637164441_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694633-MLU71637164441_092023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Solda Estanho 1mm 60x40 (snxpb) C/ Fluxo Rolo 250g - Cobix 110v/220v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_973987-MLU73213306265_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_973987-MLU73213306265_122023-O.jpg",
      "price": 46
    },
    {
      "title": "Kit De Ferramentas Multiuso Com 46 Peças E Maleta",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_883016-MLU72401951665_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_883016-MLU72401951665_102023-O.jpg",
      "price": 32.73
    },
    {
      "title": "Catraca Com Cinta De Amarração Carga 3ton 9 Mts Gancho J Cor Laranja",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_726741-MLU71282857037_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_726741-MLU71282857037_082023-O.jpg",
      "price": 45.82
    },
    {
      "title": "Pistola Elétrica Pulverizadora Pintura Compressor 650w 110v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_997024-MLB52517853499_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_997024-MLB52517853499_112022-O.jpg",
      "price": 129
    },
    {
      "title": "Parafusadeira/furadeira C/ Impacto Vonder 12v Bivolt Pfv120i",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_768998-MLU72636722311_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768998-MLU72636722311_112023-O.jpg",
      "price": 224.03
    },
    {
      "title": "Pluviômetro Em Acrílico Transparente - 120 Ml",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_848108-MLU75592935059_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848108-MLU75592935059_042024-O.jpg",
      "price": 37.5
    },
    {
      "title": "Óculos De Solda Para Soldador C/ Escurecimento Automático Cor Preto Liso",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_860653-MLU73673558547_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_860653-MLU73673558547_122023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Pistola De Pintura Hvlp Mod 827 Bico 1.4mm Azul Gravidade Wwsoldas",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_732768-MLA72417796530_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732768-MLA72417796530_102023-O.jpg",
      "price": 97.21
    },
    {
      "title": "Moto Esmeril De Bancada 6 Pol. 360w 1/2cv Bivolt 110v/220v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_832081-MLU74419716566_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_832081-MLU74419716566_022024-O.jpg",
      "price": 205.99
    },
    {
      "title": "Ima Neodímio Super Imas Disco 6x2 Mm Suporta 600gr 100 Pçs",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_728340-MLU70609042466_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_728340-MLU70609042466_072023-O.jpg",
      "price": 39.65
    },
    {
      "title": "Kit Chave Fenda E Phillips Jogo 6 Peças Imantadas Ferramenta",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_912322-MLU72636563343_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_912322-MLU72636563343_112023-O.jpg",
      "price": 37.9
    },
    {
      "title": "Chave De Impacto 2 Bateria 38v Brushless Nakasaki",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_762921-MLA73431454611_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_762921-MLA73431454611_122023-O.jpg",
      "price": 443
    },
    {
      "title": "Pistola Elétrica Pulverizadora De Pintura Hlvp Compressor ",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_756211-MLB42611841155_072020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_756211-MLB42611841155_072020-O.jpg",
      "price": 149
    },
    {
      "title": "Paquimetro Profissional Digital Em Aço Com Estojo 150mm",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_653952-MLU69889820454_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_653952-MLU69889820454_062023-O.jpg",
      "price": 47.9
    },
    {
      "title": "Solda Estanho Cobix 1 Mm 60x40 500g Com Fluxo 110v/220v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_752887-MLU72530222105_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752887-MLU72530222105_102023-O.jpg",
      "price": 106.86
    },
    {
      "title": "Descascador De Fios Alicate 8 Polegadas Terminais Isolamento",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_759520-MLU71190993247_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_759520-MLU71190993247_082023-O.jpg",
      "price": 35.25
    },
    {
      "title": "Misturador De Argamassa E Tinta Elétrico 6 Velocidades 1300w Voltagem 220v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_661851-MLU70154008201_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_661851-MLU70154008201_062023-O.jpg",
      "price": 291.91
    },
    {
      "title": "Furadeira De Impacto 10mm Black Decker, Modelo Tm500, Furadeira Profissional, Potência De 550w, 220v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_700614-MLU72643267473_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_700614-MLU72643267473_112023-O.jpg",
      "price": 181
    },
    {
      "title": "Papel Indicador De Ph 0-14 Caixa - C/150 Fitas -",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_797001-MLU74139462197_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797001-MLU74139462197_012024-O.jpg",
      "price": 34.12
    },
    {
      "title": "Jogo De Ferramentas Profissional 200 Peças Titanium",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_635584-MLU75509526883_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_635584-MLU75509526883_032024-O.jpg",
      "price": 53
    },
    {
      "title": "Politriz Angular Automotiva 7 Polegadas 1200w 1000-4200rpm 220v Bpa1200 The Black Tools",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_988498-MLU73774323599_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_988498-MLU73774323599_012024-O.jpg",
      "price": 299.9
    },
    {
      "title": "Kit 4 Esquadro Magnetico Solda 12 Kg Soldador Serralheiro",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_733399-MLU74370030073_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_733399-MLU74370030073_022024-O.jpg",
      "price": 48.95
    },
    {
      "title": "Pistola De Pintura Elétrica Pulverizador Hvlp 550w 220v Deko",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_724961-MLU70133397722_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_724961-MLU70133397722_062023-O.jpg",
      "price": 252.9
    },
    {
      "title": "Alicate Abraçadeira Coifa Junta Homocinétic Zip Chave",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_741781-MLU72520018796_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_741781-MLU72520018796_102023-O.jpg",
      "price": 107.95
    },
    {
      "title": "Parafusadeira E Furadeira A Bateria 12v Bivolt Pfv120 Vonder",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_913837-MLU72636718967_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913837-MLU72636718967_112023-O.jpg",
      "price": 198.3
    },
    {
      "title": "Tesoura Elétrica Para Tecidos Papelão Couro Mapaseg",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_800138-MLU74971105787_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800138-MLU74971105787_032024-O.jpg",
      "price": 121
    },
    {
      "title": "Modus 45 Graus Guia Disco Corte Gabarito Serra Chanfro Porcelanato",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_848864-MLU75507482686_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848864-MLU75507482686_042024-O.jpg",
      "price": 69.42
    },
    {
      "title": "Batedor Misturador De Tinta Massa Argamassa Para Furadeira 110v/220v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_744574-MLU71573357980_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_744574-MLU71573357980_092023-O.jpg",
      "price": 16.56
    },
    {
      "title": "Kit Jogo De Ferramentas Completo C/ Soquetes E Chaves",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_820843-MLU74087764481_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_820843-MLU74087764481_012024-O.jpg",
      "price": 134
    },
    {
      "title": "Lavadora De Alta Pressão 1300 Libras Lav 1300 Vonder 127v",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_747245-MLU74057096088_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_747245-MLU74057096088_012024-O.jpg",
      "price": 325.06
    },
    {
      "title": "Furadeira De Impacto Elétrica De 13mm Bosch Gsb 13 Re 650w + Accesorios Com Caixa De Papelão 127v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_606344-MLA51146359144_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_606344-MLA51146359144_082022-O.jpg",
      "price": 363.24
    },
    {
      "title": "Multímetro Digital Automotivo C/ Iluminação Bip Profissional",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_933616-MLU72847780555_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933616-MLU72847780555_112023-O.jpg",
      "price": 32.31
    },
    {
      "title": "Paquimetro Digital Fibra De Carbono 150mm+bateria Extra",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_823568-MLU72630160161_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_823568-MLU72630160161_112023-O.jpg",
      "price": 30.99
    },
    {
      "title": "Kit Ferro De Solda Soldar Soldador 60w + Estanho",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_624349-MLB70839723449_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_624349-MLB70839723449_082023-O.jpg",
      "price": 33.95
    },
    {
      "title": "Paquimetro Digital 150mm Inox Profissional C/ Estojo Mtx",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_654072-MLU73856200260_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654072-MLU73856200260_012024-O.jpg",
      "price": 46.13
    },
    {
      "title": "Pistola De Pintura Gravidade 3 Bicos 600ml",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_952969-MLU69495669243_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_952969-MLU69495669243_052023-O.jpg",
      "price": 49.9
    },
    {
      "title": "Paquimetro Digital 150mm Inox Profissional C/ Estojo Mtx",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_949972-MLU69866324723_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_949972-MLU69866324723_062023-O.jpg",
      "price": 41.32
    },
    {
      "title": "Furadeira Industrial Impacto Rev 450w Gsb 450 Re Bosch + Kit 110v",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_948373-MLU70619836935_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948373-MLU70619836935_072023-O.jpg",
      "price": 334.4
    },
    {
      "title": "Jogo Chave Combinada 12 Pçs 6 A 22mm Boca Estrela Starfer",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_660867-MLU73331785852_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660867-MLU73331785852_122023-O.jpg",
      "price": 56.18
    },
    {
      "title": "Compressor De Ar Mini Elétrico Portátil Vonder Cav 150 120w 12v/127v/220v Preto/amarelo",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_714996-MLU73213831211_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714996-MLU73213831211_122023-O.jpg",
      "price": 289
    },
    {
      "title": "Pulverizador Borrifador Alta Pressão 1,5litros Pmh150 Hammer",
      "condition_id": 1,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_709987-MLU74359169400_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_709987-MLU74359169400_022024-O.jpg",
      "price": 23.54
    },
    {
      "title": "Lavadora De Alta Pressão 1300 Libras Lav1300 220v - Vonder Cor Amarelo Frequência 60 Hz",
      "condition_id": 2,
      "category_id": 19,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_967426-MLU74178520351_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967426-MLU74178520351_012024-O.jpg",
      "price": 318.5
    },
    {
      "title": "Pasta French Vanilla Sabor Baunilha 220g - Gustosia",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_686228-MLB46168599779_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_686228-MLB46168599779_052021-O.jpg",
      "price": 55.56
    },
    {
      "title": "10 Corantes Alimentício Líquido Confeitaria 10ml Mix Barato",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_693290-MLB41665284992_052020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_693290-MLB41665284992_052020-O.jpg",
      "price": 29.38
    },
    {
      "title": "Corante Dióxido De Titânio Branco 100g Gran Chef",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_940452-MLB74224853743_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940452-MLB74224853743_012024-O.jpg",
      "price": 30.02
    },
    {
      "title": "Bexiga Balão Metalizado Personalizado Happy Birthday Grande Cor Prata",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_796934-MLU71045449022_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_796934-MLU71045449022_082023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Kit 200 Pulseiras Neon Festa Balada Brilho Fluorescente Led ",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_660893-MLU72606097876_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660893-MLU72606097876_112023-O.jpg",
      "price": 48.61
    },
    {
      "title": "Copo Descartável 180ml Reforçado C/500 Uni Cor Transparente",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_705550-MLU72507392347_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_705550-MLU72507392347_102023-O.jpg",
      "price": 31.02
    },
    {
      "title": "Kit Arco Desconstruído Marfin Dourado Rose 200 Balões + Fita",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_927686-MLU75122950713_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927686-MLU75122950713_032024-O.jpg",
      "price": 78.9
    },
    {
      "title": "Eletric Ballon Pump Bomba Inflador Elétrico De Encher Balão",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_634796-MLU73996600082_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_634796-MLU73996600082_012024-O.jpg",
      "price": 78.99
    },
    {
      "title": "Pulseira Neon Alto Brilho Fluorescente - 100 Unidades Festa",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_737500-MLU71476710235_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_737500-MLU71476710235_092023-O.jpg",
      "price": 28.43
    },
    {
      "title": "Bomba Elétrica Inflador Encher Balões Bexigas Festa Amarelo",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_815696-MLU74180187119_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_815696-MLU74180187119_012024-O.jpg",
      "price": 74.05
    },
    {
      "title": "Canudo Colorido Flexivel Strawplast Para Drinks 100 Unidades Cor Variadas",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_933684-MLU74696150876_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933684-MLU74696150876_022024-O.jpg",
      "price": 12.97
    },
    {
      "title": "Balão Bubble Transparente 18 Polegadas 45cm Top Kit C\\50",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_819551-MLU72637345457_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_819551-MLU72637345457_112023-O.jpg",
      "price": 32.05
    },
    {
      "title": "Bomba Motor Compressor Inflador Elétrico De Encher Bexigas",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_927370-MLU73774638701_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927370-MLU73774638701_012024-O.jpg",
      "price": 78.9
    },
    {
      "title": "Kit 100 Un Saco Organza Tule Saquinho 10x15 Branco Atacado",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_631289-MLB74683629683_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631289-MLB74683629683_022024-O.jpg",
      "price": 38.16
    },
    {
      "title": "100 Canudos Coloridos De Papel Para Festa Drinks Refri Suco Cor Colorido (cores Diversas Ate 4 Opçoes)",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_732458-MLU73329510480_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732458-MLU73329510480_122023-O.jpg",
      "price": 18.75
    },
    {
      "title": "100 Un Pulseira Neon Adereços Balada Fluorescente Festa Led",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_949402-MLU73591055710_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_949402-MLU73591055710_122023-O.jpg",
      "price": 36.79
    },
    {
      "title": "Bexiga Balões Canudo Escultura São Roque Sortido C/50",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_681839-MLU70045165654_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_681839-MLU70045165654_062023-O.jpg",
      "price": 16.42
    },
    {
      "title": "Bomba Elétrica Inflador Encher Balões Bexigas Festa Amarelo 220v",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_691156-MLU73996922472_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_691156-MLU73996922472_012024-O.jpg",
      "price": 78.9
    },
    {
      "title": "Tnt 40g - 5,00 Metros Cores Cor Branco",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_957761-MLU71877265423_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_957761-MLU71877265423_092023-O.jpg",
      "price": 12.49
    },
    {
      "title": "Copo Plástico Descartável Transparente 200ml P/ Água - 100un",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_746331-MLU72803320991_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_746331-MLU72803320991_112023-O.jpg",
      "price": 11.99
    },
    {
      "title": "Kit Com 222 Balões D´água Guerrinha De Bexigas Water Balloon Cor Colorido Liso",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_663518-MLB48636099577_122021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_663518-MLB48636099577_122021-O.jpg",
      "price": 34.6
    },
    {
      "title": "Kit Carnaval, Colar Havaiano Tradicional - 24 Unidades",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_743811-MLA74640702652_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_743811-MLA74640702652_022024-O.jpg",
      "price": 28.56
    },
    {
      "title": "Inflador Compressor Automático Bomba Elétrica Bexigas Balões",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_966165-MLB32400337111_102019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_966165-MLB32400337111_102019-O.jpg",
      "price": 75.04
    },
    {
      "title": "Tnt 40g - 10 Metros Cores Cor Azul-claro",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_917956-MLU72232285999_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917956-MLU72232285999_102023-O.jpg",
      "price": 18.48
    },
    {
      "title": "50 Unidades Balao Bubble 24 Polegadas Silicone Transparente",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_787798-MLB47909524057_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787798-MLB47909524057_102021-O.jpg",
      "price": 63.2
    },
    {
      "title": "Corante Em Pó 1kg Azul ",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_948354-MLB42313964837_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948354-MLB42313964837_062020-O.jpg",
      "price": 63.92
    },
    {
      "title": "Tnt 40g - 10 Metros Cores Cor Azul Royal",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_897873-MLU72092670648_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_897873-MLU72092670648_102023-O.jpg",
      "price": 18.48
    },
    {
      "title": "Tnt 40g - 10 Metros Cores Cor Vermelho",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_951024-MLU71708994590_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_951024-MLU71708994590_092023-O.jpg",
      "price": 18.48
    },
    {
      "title": "Pulseira Neon 50 Und Fluorescente Alto Brilho Festa Balada",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_747063-MLU70643480597_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_747063-MLU70643480597_072023-O.jpg",
      "price": 26.67
    },
    {
      "title": "Balão Bexiga Liso Festa Decoração 9 Polegadas C/ 50 Und",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_639044-MLB48865156977_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_639044-MLB48865156977_012022-O.jpg",
      "price": 20.9
    },
    {
      "title": "Kit 2 Porta Balão Suporte Bexiga Balões De Chão Grande 1,60m",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_885413-MLU73214263697_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_885413-MLU73214263697_122023-O.jpg",
      "price": 61.23
    },
    {
      "title": "Tnt 40g - 5,00 Metros Cores Cor Verde Bandeira",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_617355-MLU71877266171_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_617355-MLU71877266171_092023-O.jpg",
      "price": 12.49
    },
    {
      "title": "Tnt 40g - 10 Metros Cores Cor Amarelo",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_876861-MLU72091350940_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_876861-MLU72091350940_102023-O.jpg",
      "price": 18.48
    },
    {
      "title": "50 Unidades Balão Bubble 10 Polegadas Silicone Transparente",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_655470-MLU70397489260_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_655470-MLU70397489260_072023-O.jpg",
      "price": 28.9
    },
    {
      "title": "Kit 10 Canudos Aco Inox Metal Reutilizável + Escova",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_680427-MLB51885648898_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680427-MLB51885648898_102022-O.jpg",
      "price": 36.9
    },
    {
      "title": "Peruca Black Power Fantasia",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_777622-MLU71305846237_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777622-MLU71305846237_082023-O.jpg",
      "price": 29.91
    },
    {
      "title": "Tnt 40g - 5,00 Metros Cores Cor Azul Royal",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_738366-MLU71877264739_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738366-MLU71877264739_092023-O.jpg",
      "price": 12.49
    },
    {
      "title": "Corante Em Pó Lipossolúvel Amarelo 30g Granchef",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_780024-MLB51714835680_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_780024-MLB51714835680_092022-O.jpg",
      "price": 45.4
    },
    {
      "title": "Kit C/50 Balão Bubble Bolha 24 Polegadas Decoração 60cm ",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_983706-MLU72677727963_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_983706-MLU72677727963_112023-O.jpg",
      "price": 64.69
    },
    {
      "title": "Cx 1200 Uni. Canudo Biodegradável P/ Drinks 8x205mm Atacado Cor Branco",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_644922-MLU72565805110_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644922-MLU72565805110_112023-O.jpg",
      "price": 130.38
    },
    {
      "title": "Napoles Inflador Compressor Elétrico Bomba Encher Balões Bexiga 110v",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_787067-MLU72153214561_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787067-MLU72153214561_102023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Perucas Festa Fantasia Cosplay Carnaval Modelo Cor Black Power Preto",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_643017-MLU72605847135_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_643017-MLU72605847135_102023-O.jpg",
      "price": 21.46
    },
    {
      "title": "Tnt 40g - 10 Metros Cores Cor Rosa-claro",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_718769-MLU71709290370_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_718769-MLU71709290370_092023-O.jpg",
      "price": 18.48
    },
    {
      "title": "6 Unidades Balão Bubble Atacado - 24 Polegadas - 60 Cm ",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_917152-MLU72728930376_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917152-MLU72728930376_112023-O.jpg",
      "price": 19.92
    },
    {
      "title": "Corante Em Pó Para Chocolate Lipossolúvel Azul 5g Mago",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_714659-MLU72611791323_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714659-MLU72611791323_112023-O.jpg",
      "price": 15.54
    },
    {
      "title": "Tnt 40g - 5,00 Metros Cores Cor Vermelho",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_719367-MLU71877197697_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_719367-MLU71877197697_092023-O.jpg",
      "price": 12.49
    },
    {
      "title": "Guardanapo De Papel Folha Dupla Scott Dia A Dia 24cm X 21,8cm Pacote 50 Unidades",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_947755-MLU50794599631_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_947755-MLU50794599631_072022-O.jpg",
      "price": 5.99
    },
    {
      "title": "Canudo Colher Mexedor Preto Strawplast Para Drinks 100 Und",
      "condition_id": 2,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_901869-MLU70485591477_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901869-MLU70485591477_072023-O.jpg",
      "price": 19
    },
    {
      "title": "50 Unidades Balão Bubble 24 Polegadas60cm Transparente Festa",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_984969-MLU70432961782_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984969-MLU70432961782_072023-O.jpg",
      "price": 66.78
    },
    {
      "title": "Kit 10 Óculos Vintage Retrô Escuro Festa Balada Casamento",
      "condition_id": 1,
      "category_id": 20,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_654568-MLB54960912925_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654568-MLB54960912925_042023-O.jpg",
      "price": 64.99
    },
    {
      "title": "Console Playstation®5 Slim Edição Digital 1tb - Sony",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_970771-MLA73347645092_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970771-MLA73347645092_122023-O.jpg",
      "price": 3709.9
    },
    {
      "title": "Carregador Fonte Bivolt Psp 1000 2000 3000 110v 220v Voltagem De Entrada 110v/220v (bivolt)",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_970775-MLU74275093016_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970775-MLU74275093016_022024-O.jpg",
      "price": 28.5
    },
    {
      "title": "Console Nintendo Switch Oled Edição Super Smash Bros",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_825395-MLU73783495514_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825395-MLU73783495514_012024-O.jpg",
      "price": 2302.8
    },
    {
      "title": "The Legend Of Zelda: Tears Of The Kingdom  Standard Edition Nintendo Switch Físico",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_850327-MLA54712581525_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_850327-MLA54712581525_032023-O.jpg",
      "price": 303.45
    },
    {
      "title": "Nintendo Nintendo Switch Switch Oled 64gb Standard Cor  Branco E Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_625423-MLA47920375564_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_625423-MLA47920375564_102021-O.jpg",
      "price": 2177.82
    },
    {
      "title": "Fonte Compatível Xbox 360 Super Slim Bivolt 1 Pino 110/220v Voltagem De Entrada 110v/220v (bivolt)",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_802551-MLU74084880719_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_802551-MLU74084880719_012024-O.jpg",
      "price": 59.99
    },
    {
      "title": "Nintendo Standart Super Mini Sfc Standard Cor  Cinza",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_811624-MLA48681114317_122021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811624-MLA48681114317_122021-O.jpg",
      "price": 98.28
    },
    {
      "title": "Controle Joystick Ps3 Black + Cabo Carregador Nf",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_941638-MLB73755209607_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_941638-MLB73755209607_012024-O.jpg",
      "price": 69
    },
    {
      "title": "Microsoft Xbox Series X 1tb Console Para Jogos",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_921694-MLU75357935691_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_921694-MLU75357935691_032024-O.jpg",
      "price": 3689.69
    },
    {
      "title": "Console Tectoy Sega Master System Evolution Standard Cor  Azul",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_755481-MLA32731813512_112019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_755481-MLA32731813512_112019-O.jpg",
      "price": 321
    },
    {
      "title": "Super Mario Bros Wonder Switch Midia Fisica",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_778144-MLU72835632111_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_778144-MLU72835632111_112023-O.jpg",
      "price": 339.91
    },
    {
      "title": "Sony Playstation 5 Marvel's Spider-man 2 825gb Standard",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_824975-MLU73186229353_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824975-MLU73186229353_122023-O.jpg",
      "price": 3899
    },
    {
      "title": "Kit 2 Controle Joystick Ps3 Black + Cabo Carregador",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_714048-MLB73660416928_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714048-MLB73660416928_012024-O.jpg",
      "price": 149
    },
    {
      "title": "Console Nintendo Switch Lite Animal Crossing: New Horizons  - Coral",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_805189-MLU73126303691_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805189-MLU73126303691_112023-O.jpg",
      "price": 1129.99
    },
    {
      "title": "Fonte Xbox One Slim Bivolt 100-220v 220w Voltagem De Entrada 110v/220v (bivolt)",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_894539-MLU73583364909_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_894539-MLU73583364909_122023-O.jpg",
      "price": 69.9
    },
    {
      "title": "Microsoft Xbox Series S 512gb Standard Cor Branco",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_707601-MLU72700966133_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_707601-MLU72700966133_112023-O.jpg",
      "price": 2170
    },
    {
      "title": "Console Nintendo Switch Lite Animal Crossing: New Horizons - Turquesa Cor Azul-celeste",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_673828-MLU72967802146_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673828-MLU72967802146_112023-O.jpg",
      "price": 1221.06
    },
    {
      "title": "Fonte Para Xbox 360 Slim 2 Pinos Bivolt Cabo De Energia Biv Voltagem De Entrada 110v/220v (bivolt)",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_858599-MLU73495602288_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_858599-MLU73495602288_122023-O.jpg",
      "price": 55.85
    },
    {
      "title": "Cabos Alimentação Usb V8 Carregar Controle Ps4 Xbox 2 Metros",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_929989-MLB40672456184_022020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_929989-MLB40672456184_022020-O.jpg",
      "price": 9.5
    },
    {
      "title": "Console Valve Steam Deck 64gb Standard",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_692966-MLU73202686767_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_692966-MLU73202686767_122023-O.jpg",
      "price": 3139
    },
    {
      "title": "Red Dead Redemption 2  Standard Edition Rockstar Games Ps4 Físico",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_667696-MLA46792682054_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_667696-MLA46792682054_072021-O.jpg",
      "price": 124.7
    },
    {
      "title": "Microsoft Xbox Series S 512gb Kit Extra Controller Cor  Branco",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_715703-MLA53125497654_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_715703-MLA53125497654_012023-O.jpg",
      "price": 2899
    },
    {
      "title": "Console Sony Playstation 5 Standard Edition 825gb",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_679399-MLU71038176907_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_679399-MLU71038176907_082023-O.jpg",
      "price": 3766.29
    },
    {
      "title": "Headset Gamer Para Consoles E Pc Driver 40mm Harman Jbl Quantum 100 Preto Jbl",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_860134-MLU72491709778_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_860134-MLU72491709778_102023-O.jpg",
      "price": 162
    },
    {
      "title": "Vídeo Game Portátil 9999 Jogos In 1 Mini Game Antigo Retrô ",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_829832-MLB50716386689_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_829832-MLB50716386689_072022-O.jpg",
      "price": 15.5
    },
    {
      "title": "Cabo Para Carregar Controle Ps4 Com Filtro Envio Imediato",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_966894-MLB52596378375_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_966894-MLB52596378375_112022-O.jpg",
      "price": 17.76
    },
    {
      "title": "Console Playstation 4 Slim 1tb Standard Sony Cor Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_645689-MLU72829561087_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_645689-MLU72829561087_112023-O.jpg",
      "price": 1999
    },
    {
      "title": "Pokémon Legends: Arceus  Standard Edition Nintendo Switch Físico",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_790729-MLA74782400619_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_790729-MLA74782400619_022024-O.jpg",
      "price": 305.91
    },
    {
      "title": "Microsoft Xbox Series S 512gb Branco  All Digital",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_614837-MLA69858029863_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_614837-MLA69858029863_062023-O.jpg",
      "price": 2152
    },
    {
      "title": "Adaptador Conversor Nintendo Wii Para Cabo Hdmi 1080p Fullhd",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_921351-MLU72451801835_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_921351-MLU72451801835_102023-O.jpg",
      "price": 16.71
    },
    {
      "title": "Console Valve Steam Deck 256gb Standard Cor  Preto",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_754639-MLU74964393713_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754639-MLU74964393713_032024-O.jpg",
      "price": 3730
    },
    {
      "title": "Base Carregador Duplo Dock Charge Controle Ps4 Top",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_932172-MLU73598951703_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932172-MLU73598951703_122023-O.jpg",
      "price": 62.79
    },
    {
      "title": "Nintendo Switch 32gb Mario Kart 8 Deluxe Cor  Vermelho-néon, Azul-néon E Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654805-MLA52129081328_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654805-MLA52129081328_102022-O.jpg",
      "price": 2083
    },
    {
      "title": "Console Playstation® 5,  Ea Sports Fc 24",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_961202-MLU74197144257_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961202-MLU74197144257_012024-O.jpg",
      "price": 3978.39
    },
    {
      "title": "Cabo Link Para Óculus Quest 1 E 2 -5metros Usb/usb-c - Preto",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_600139-MLU72751585758_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600139-MLU72751585758_112023-O.jpg",
      "price": 72.59
    },
    {
      "title": "Console Valve Steam Deck 512gb Standard Cor  Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_692966-MLU73202686767_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_692966-MLU73202686767_122023-O.jpg",
      "price": 4100
    },
    {
      "title": "Fone De Ouvido Over-ear Gamer Sem Fio Playstation Pulse 3d Cfi-zwh1 Branco E Preto",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_633796-MLA74650253218_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_633796-MLA74650253218_022024-O.jpg",
      "price": 539.22
    },
    {
      "title": "Valve Steam Deck Oled 1tb Cor Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_644664-MLA74331031659_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644664-MLA74331031659_012024-O.jpg",
      "price": 5927
    },
    {
      "title": "Jogo The Last Of Us Part Ii Remastered Midia Fisica Ps5",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_892277-MLU74135926638_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892277-MLU74135926638_012024-O.jpg",
      "price": 202.74
    },
    {
      "title": "Vídeo Game Portátil 9999 Jogos In 1 Mini Game Antigo Retrô + Pilhas",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_837443-MLU73722713297_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_837443-MLU73722713297_122023-O.jpg",
      "price": 14.99
    },
    {
      "title": "Memory Card 16mb Playstation 2 Cartão De Memória Ps2 Lacrado",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_940071-MLB45243752227_032021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940071-MLB45243752227_032021-O.jpg",
      "price": 25.7
    },
    {
      "title": "Console Nintendo Switch 32gb Mario Kart 8 Deluxe",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_986103-MLA73797277966_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986103-MLA73797277966_012024-O.jpg",
      "price": 2354
    },
    {
      "title": "Headset Gamer Hyperx Cloudx Stinger Xbox One Hx-hscscx-bk/ww",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_616998-MLU72821668721_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_616998-MLU72821668721_112023-O.jpg",
      "price": 193
    },
    {
      "title": "Ps3 Super Slim + 45 Jogos + 2 Controles Gta5, Fifa, Minecraft Cor Charcoal Black",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_872971-MLU72566187334_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_872971-MLU72566187334_112023-O.jpg",
      "price": 1198
    },
    {
      "title": "Adaptador Conversor Ps2 Audio Vídeo Av Para Cabo Hdmi ",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_717009-MLB50329971422_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_717009-MLB50329971422_062022-O.jpg",
      "price": 22.79
    },
    {
      "title": "Vídeo Game De Bolso Portátil Com Jogos Clássico Cobra Tétris Cor Preto",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_608562-MLU69656303461_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_608562-MLU69656303461_052023-O.jpg",
      "price": 13.03
    },
    {
      "title": "Mario Kart 8 Deluxe  Mario Kart Nintendo Switch Físico",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_981663-MLU72604138812_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_981663-MLU72604138812_112023-O.jpg",
      "price": 314.41
    },
    {
      "title": "Super Mini Game Portátil 9999 In 1 Brinck Game Antigo Retro Cor Preto",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_725886-MLU70816048037_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_725886-MLU70816048037_082023-O.jpg",
      "price": 19.99
    },
    {
      "title": "Cooler Ventoinha Ps4 Fat Chu-12xx / Chu-1215 + Pasta Térmica",
      "condition_id": 2,
      "category_id": 21,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_617204-MLU74996457085_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_617204-MLU74996457085_032024-O.jpg",
      "price": 160
    },
    {
      "title": "Nintendo Switch Oled 64gb Mario Red Cor  Vermelho",
      "condition_id": 1,
      "category_id": 21,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_780756-MLU73129984434_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_780756-MLU73129984434_122023-O.jpg",
      "price": 2099
    },
    {
      "title": "Duas Casas E Uma Sala Comercial Em 2 Terrenos, Preço Ocasião",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_810118-MLB75594866381_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810118-MLB75594866381_042024-O.jpg",
      "price": 790000
    },
    {
      "title": "Exclusivo Conjunto De Salas Comerciais Reformadas No Coração Do Rio De Janeiro  Prontas Para Seu Negócio Decolar!",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_609155-MLB75489686250_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_609155-MLB75489686250_042024-O.jpg",
      "price": 717200
    },
    {
      "title": "Casa Com 4 Quartos, Sendo 3 Suítes, 4 Vagas Na Garagem Etc",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_997457-MLB75445076382_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_997457-MLB75445076382_042024-O.jpg",
      "price": 2780000
    },
    {
      "title": "Sobrado Novo 02 Suítes E 03 Vagas Na Praia Do Massaguaçu - Caraguatatuba",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_679333-MLB75579304539_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_679333-MLB75579304539_042024-O.jpg",
      "price": 380000
    },
    {
      "title": "Casa Toda Mobiliada Ao Lado Do Shopping Iguatemi",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_665524-MLB75581490671_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_665524-MLB75581490671_042024-O.jpg",
      "price": 1300000
    },
    {
      "title": "Sobrado No Wanel Ville 4 Com 182m2, Por Tempo Limitado ",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_936347-MLB75474412508_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936347-MLB75474412508_042024-O.jpg",
      "price": 360000
    },
    {
      "title": "Clinica Odontológica - 2 Salas Completas",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_909342-MLB75610970175_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_909342-MLB75610970175_042024-O.jpg",
      "price": 175000
    },
    {
      "title": "Apartamento Com Sacada ",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_636957-MLB75504063336_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_636957-MLB75504063336_042024-O.jpg",
      "price": 230000
    },
    {
      "title": "Apartamento 2 Dorms - Granja Viana -sp - R$ 275.000",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_719990-MLB75577818891_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_719990-MLB75577818891_042024-O.jpg",
      "price": 275000
    },
    {
      "title": "Vende Se Casa Núcleo Residencial Nosso Teto Itatiba",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_852492-MLB75461868410_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852492-MLB75461868410_042024-O.jpg",
      "price": 300000
    },
    {
      "title": "Casa Vila Regina, Itaquera ",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_999402-MLB75532723754_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_999402-MLB75532723754_042024-O.jpg",
      "price": 440000
    },
    {
      "title": "Apartamento Mobiliado A Venda Em Guarulhos",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_859311-MLB75631149727_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_859311-MLB75631149727_042024-O.jpg",
      "price": 800000
    },
    {
      "title": "Imóvel Comercial Amplo Na Av Eng Antonio Francisco De Paula Souza 1179 Loja Estoque E Garagem",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_849986-MLB75455145110_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_849986-MLB75455145110_042024-O.jpg",
      "price": 6500
    },
    {
      "title": "Apartamento Espaçoso No Marapê Com Ampla Área De Lazer",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_918449-MLB75660821505_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_918449-MLB75660821505_042024-O.jpg",
      "price": 1350000
    },
    {
      "title": "Imóvel No Centro De Itaguaí",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_913853-MLB75418281732_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913853-MLB75418281732_042024-O.jpg",
      "price": 2900000
    },
    {
      "title": "Vendo Terreno Ninho Verde I, 100% Plano Com Escritura Definitiva",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_766344-MLB75658512401_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766344-MLB75658512401_042024-O.jpg",
      "price": 59999
    },
    {
      "title": "4 Chalés/casa ",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_654777-MLB75691017941_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654777-MLB75691017941_042024-O.jpg",
      "price": 500000
    },
    {
      "title": "Cafeteira Na Da Sé",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_969516-MLB75533577276_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969516-MLB75533577276_042024-O.jpg",
      "price": 85000
    },
    {
      "title": "Casa 3 Quartos Uma Suite Ouro Verde Bauru",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_959691-MLB75532127102_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_959691-MLB75532127102_042024-O.jpg",
      "price": 415000
    },
    {
      "title": "Sobrado Mobiliado De Condomínio 2 Suites Em Caragua",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_914543-MLB75577153799_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_914543-MLB75577153799_042024-O.jpg",
      "price": 478000
    },
    {
      "title": "Chácara Com Casa, Assude De Peixe, Frutas, Excelente Topografia, Linda, Fácil Acesso",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_965501-MLB75502238794_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965501-MLB75502238794_042024-O.jpg",
      "price": 350000
    },
    {
      "title": "Vendo Sitio - Em Monte Santo De Minas  ( 11 Alqueires )",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_802788-MLB75706216401_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_802788-MLB75706216401_042024-O.jpg",
      "price": 1300000
    },
    {
      "title": " Casa Comercial Com Sobrado Com Localização Estratégica Com 30 Vagas De Garagem",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_782976-MLB75419539230_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782976-MLB75419539230_042024-O.jpg",
      "price": 2500000
    },
    {
      "title": "Chácara Com Piscina E Rio Jaguari Ao Fundo Para Barcos Pesca",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_664575-MLB75439638448_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_664575-MLB75439638448_042024-O.jpg",
      "price": 1000000000
    },
    {
      "title": "Excelente Fazenda Agroecológica",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_682225-MLB75453300988_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_682225-MLB75453300988_042024-O.jpg",
      "price": 5500000
    },
    {
      "title": "Casa Bem Localizada, Com Móveis Planejados, Climatizada E Com Energia Solar.",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_806170-MLB75665554585_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_806170-MLB75665554585_042024-O.jpg",
      "price": 800000
    },
    {
      "title": "Galpão   Comercial",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_972493-MLB75683462775_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_972493-MLB75683462775_042024-O.jpg",
      "price": 10000
    },
    {
      "title": "Apartamento Tatuapé Frente Ao Shopping + 2 Vagas Cobertas",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_811241-MLB75643398619_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811241-MLB75643398619_042024-O.jpg",
      "price": 433000
    },
    {
      "title": "Passo Ponto Sorveteria Completa",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_694831-MLB75435827438_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694831-MLB75435827438_042024-O.jpg",
      "price": 120000
    },
    {
      "title": "Excelente Terreno De 250 M2 No Melhor Bairro De Embu Das Artes A 1 Km Da Prefeitura De Embu Das Artes, Bairro Top , Rua Sem Saída , Tem Previsão De Fechamento Da Rua",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_787363-MLB75475771272_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787363-MLB75475771272_042024-O.jpg",
      "price": 180000
    },
    {
      "title": "Vendo Hospital Veterinário Na Zona Sul De São Paulo",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_978836-MLB75504986356_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_978836-MLB75504986356_042024-O.jpg",
      "price": 200000
    },
    {
      "title": "Vende-se Uma Casa Com Três Cômodos Na Vila Guilh",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_900403-MLB75418298054_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_900403-MLB75418298054_042024-O.jpg",
      "price": 250000
    },
    {
      "title": "Terreno Condomínio Iguatemi 4 Com 1000m² Totalmente Plano E Pagamento Facilitado",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_987276-MLB75667799371_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_987276-MLB75667799371_042024-O.jpg",
      "price": 110000
    },
    {
      "title": "Jazigo Cemitério Gethsêmani Morumbi- Novo",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_923174-MLB75488568022_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923174-MLB75488568022_042024-O.jpg",
      "price": 19900
    },
    {
      "title": "Vendo Terreno Esquina Jacareí ",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_670255-MLB75630987485_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_670255-MLB75630987485_042024-O.jpg",
      "price": 150000
    },
    {
      "title": "Casa Com Quatro Quartos Sala Cozinha E Garagem Em Praia De Guarau-peruibe",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_626277-MLB75488277860_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_626277-MLB75488277860_042024-O.jpg",
      "price": 220000
    },
    {
      "title": "Aluguel De Chácara Em Suzano Piscina E Quadra Poliesportiva Forno A Lenha E Casa De Boneca ",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_649672-MLB30108733889_042019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649672-MLB30108733889_042019-O.jpg",
      "price": 400
    },
    {
      "title": "Casa Praia Nova Caraguatatuba. Em Condomínio Fechado Com Piscina, Compra Compartilhada. #casa Compartilhada. #casa Praia. #casa Caraguatatuba. #compra Compartilhada.",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_790841-MLB52231739094_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_790841-MLB52231739094_112022-O.jpg",
      "price": 74000
    },
    {
      "title": "Casa Praia Temporada Piscina Aquecida 36°jacuzzi Ar-condicio",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_857112-MLB54265892799_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_857112-MLB54265892799_032023-O.jpg",
      "price": 95
    },
    {
      "title": "Kitnet - Frente Mar - Praia Grande - Vila Guilhermina - Apto - Temporada - Locação",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_990462-MLB31135827805_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_990462-MLB31135827805_062019-O.jpg",
      "price": 90
    },
    {
      "title": "Quarto Cozinha Banheiro E Lavanderia Parque Guarani(zl)",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_706309-MLB47067771059_082021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_706309-MLB47067771059_082021-O.jpg",
      "price": 690
    },
    {
      "title": "Apartamento Duplex De 1 Dormitório ",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_962323-MLB73352884315_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962323-MLB73352884315_122023-O.jpg",
      "price": 150000
    },
    {
      "title": "Frente Para O Mar, 1 Dormitório, Ampla Sacada, Garagem, Mobiliado, Elevadores, R$ 330 Mil, Em Praia Grande - Ap1213",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_881774-MLB75111318392_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_881774-MLB75111318392_032024-O.jpg",
      "price": 330000
    },
    {
      "title": "Maravilhosa Casa Na Praia Grande Wifi Churrasqueira",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_741079-MLB43314001739_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_741079-MLB43314001739_082020-O.jpg",
      "price": 250
    },
    {
      "title": "Mansao Resort! 3 Andares +terraço 4 Paradas Elevador ",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_639061-MLB74383520760_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_639061-MLB74383520760_022024-O.jpg",
      "price": 15000000
    },
    {
      "title": "Belíssima Chácara Em Mairinque - Dona Catarina Sp",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_970654-MLB50185981260_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970654-MLB50185981260_062022-O.jpg",
      "price": 480000
    },
    {
      "title": "Grande Oportunidade!! Chácara Em Condominio Fechado!! Cod: 0828 R$ 490.000,00",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_833900-MLB72178001042_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_833900-MLB72178001042_102023-O.jpg",
      "price": 490000
    },
    {
      "title": "Temporada Casa Piscina C/hidromassagem Próxima A Praia",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_854388-MLA70454305797_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_854388-MLA70454305797_072023-O.jpg",
      "price": 99
    },
    {
      "title": "Casa Com Piscina À Venda Na Deslumbrante Praia De Peruíbe.",
      "condition_id": 2,
      "category_id": 22,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_823293-MLB74414865805_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_823293-MLB74414865805_022024-O.jpg",
      "price": 780000
    },
    {
      "title": "Chácara Ibiuna Aluguel Temporada Sitio Estoril",
      "condition_id": 1,
      "category_id": 22,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_932338-MLB27094040243_032018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932338-MLB27094040243_032018-O.jpg",
      "price": 750
    },
    {
      "title": "Caixa De Gordura Tigre 100mm Tratamento De Efluentes",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_959294-MLU70740648947_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_959294-MLU70740648947_072023-O.jpg",
      "price": 249
    },
    {
      "title": "10 Rolos Etiqueta M-14 Tarjada Etiquetadora Fixxar Cor Branco",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_980323-MLU72753497344_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_980323-MLU72753497344_112023-O.jpg",
      "price": 30.75
    },
    {
      "title": "Óculos De Proteção Ampla Visão De Sobrepor Marca Super Safety",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_948253-MLU70885134314_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948253-MLU70885134314_082023-O.jpg",
      "price": 14.51
    },
    {
      "title": "Mesa De Computador Notebook Suspensa Parede Com Prateleiras Cor Freijó",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_894425-MLU73111438994_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_894425-MLU73111438994_122023-O.jpg",
      "price": 140.04
    },
    {
      "title": "Chapa Eletrica De Lanches 40x35 Com Coletor De Gordura. Cor Prateado 110v",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_895148-MLU72645119709_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895148-MLU72645119709_112023-O.jpg",
      "price": 368.31
    },
    {
      "title": "Plástico Para Plastificação Mares A4 220x307 05 100 Folhas",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_753548-MLA73321714008_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_753548-MLA73321714008_122023-O.jpg",
      "price": 62.72
    },
    {
      "title": "Fixador De Etiqueta Máquina Pistola Aplicadora + 5000 Tagpin",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_844700-MLU72566255798_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844700-MLU72566255798_112023-O.jpg",
      "price": 34.31
    },
    {
      "title": "Kit C/ 10 Cone De Sinalização 75cm Pvc Laranja E Branco",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_966259-MLU71288231726_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_966259-MLU71288231726_082023-O.jpg",
      "price": 339.8
    },
    {
      "title": "Cartão Para Cartográfico Henry Vega - 100 Unidades",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_954517-MLU70773595440_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_954517-MLU70773595440_072023-O.jpg",
      "price": 21.17
    },
    {
      "title": "Campainha De Mesa Sino Sineta P/ Recepção Restaurante Balcão Cor Inox",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_716843-MLU72751454218_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_716843-MLU72751454218_112023-O.jpg",
      "price": 21.04
    },
    {
      "title": "Agulha HiPodérmica Descartável 20x0,55mm Medix Cx C/100 Unid",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_916244-MLB51718487776_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_916244-MLB51718487776_092022-O.jpg",
      "price": 16.36
    },
    {
      "title": "100 Tiras De Glicose On Call Plus Ii",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_619318-MLB51249396899_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619318-MLB51249396899_082022-O.jpg",
      "price": 57.3
    },
    {
      "title": "Kit 5 Fitas Plásticas 91201 Para Rotuladora Dymo Letratag Cor Branco",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_819490-MLU72828377503_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_819490-MLU72828377503_112023-O.jpg",
      "price": 46.32
    },
    {
      "title": "Agulhas Para Carboxiterapia E Ozonioterapia 13x0,30mm 100 Unidade",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_969909-MLU72032934470_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969909-MLU72032934470_102023-O.jpg",
      "price": 37.9
    },
    {
      "title": "Campainha Sino De Mesa Em Metal P Hotel Bar Cozinha Recepção",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_794666-MLU72637431213_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_794666-MLU72637431213_112023-O.jpg",
      "price": 18.43
    },
    {
      "title": "Secador De Mãos Automático Cr-119 Em Aço Inox Thindry 220v Brakey",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_996168-MLU72532694492_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_996168-MLU72532694492_102023-O.jpg",
      "price": 739
    },
    {
      "title": "Fragmentadora De Papel Até 6 Folhas 110v",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_607059-MLU72836350673_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_607059-MLU72836350673_112023-O.jpg",
      "price": 186.14
    },
    {
      "title": "150 Tiras De Glicose On Call Plus Ii",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_915318-MLB51249359706_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_915318-MLB51249359706_082022-O.jpg",
      "price": 102
    },
    {
      "title": "Rotuladora  Brother Pt-80 Azul-marinho/verde",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_929872-MLU72582890782_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_929872-MLU72582890782_112023-O.jpg",
      "price": 239
    },
    {
      "title": "Máquina Serra Fita Bancada Açougue Carne Osso 1,46m 1/3cv Bivolt",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_887117-MLU71217379750_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_887117-MLU71217379750_082023-O.jpg",
      "price": 1353
    },
    {
      "title": "Oxímetro De Pulso Para Dedo G-tech Led Branco/azul",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_961121-MLU72748852728_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961121-MLU72748852728_112023-O.jpg",
      "price": 71.88
    },
    {
      "title": "10 Pcs Pallet Estrado Plásticos Preto 25x50x2,5cm Piso Plástico Modular Marwell",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_754887-MLU72756711176_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754887-MLU72756711176_112023-O.jpg",
      "price": 59.41
    },
    {
      "title": "Oculos Segurança Sobrepor Ampla Visão Resistente Epi C/ Ca",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_601821-MLU73862756080_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_601821-MLU73862756080_012024-O.jpg",
      "price": 10.02
    },
    {
      "title": "Cartão De Ponto Relógio Cartográfico - 500 Unidades",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_863112-MLU71075799331_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_863112-MLU71075799331_082023-O.jpg",
      "price": 67.99
    },
    {
      "title": "Porta Comanda Prendex 100 Cm -  Restaurante, Bar, Pizzarias",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_964772-MLB54591439614_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964772-MLB54591439614_032023-O.jpg",
      "price": 69.5
    },
    {
      "title": "Leitor De Código De Barras Elgin Flash Usb 1d Preto 42flash",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_633765-MLA40867438168_022020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_633765-MLA40867438168_022020-O.jpg",
      "price": 150
    },
    {
      "title": "Máscara Descartável Tripla Clip Nasal Kit C/ 50 Und - Anvisa Cor Branco",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_924517-MLU74618669064_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924517-MLU74618669064_022024-O.jpg",
      "price": 12.16
    },
    {
      "title": "Agulha 40x1,20 18g Descartavel Esteril Hipodermica 100 Unids",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_740369-MLU74561900945_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_740369-MLU74561900945_022024-O.jpg",
      "price": 15.93
    },
    {
      "title": "Equipo Dieta/nutrição Enteral 1,5m Escalonado 20un",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_642285-MLU73529945479_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_642285-MLU73529945479_122023-O.jpg",
      "price": 33.33
    },
    {
      "title": "Sino Campainha Mesa Recepção Balcao Hotel Sineta Restaurante Cor Prateado",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_615446-MLU72753634520_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_615446-MLU72753634520_112023-O.jpg",
      "price": 36.25
    },
    {
      "title": "Óculos Proteção Segurança Rj Incolor Kit 10 Peças",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_776860-MLU73684325903_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776860-MLU73684325903_122023-O.jpg",
      "price": 35.24
    },
    {
      "title": "Point Mini Nfc - A Maquininha De Cartões Do Mercado Pago",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_666352-MLB74171603934_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_666352-MLB74171603934_012024-O.jpg",
      "price": 22.8
    },
    {
      "title": "Relógio De Ponto Biométrico Digital Impressão Eletrônico ",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_649613-MLB75436993431_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649613-MLB75436993431_032024-O.jpg",
      "price": 228
    },
    {
      "title": "Sino Campainha Chamada Garçom Hotel Recepção Portaria 2unid",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_898419-MLU70610000982_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_898419-MLU70610000982_072023-O.jpg",
      "price": 31.49
    },
    {
      "title": "Fotopolimerizador Sem Fio Odontologico Intensidade 2000 Mw Cor Preto",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_662215-MLU74360360225_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_662215-MLU74360360225_022024-O.jpg",
      "price": 299
    },
    {
      "title": "Equipo Macrogotas Flexível Respiro Descarpack - 20 Unidades",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_627171-MLU72011091967_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627171-MLU72011091967_092023-O.jpg",
      "price": 22.68
    },
    {
      "title": "Kit Com 10 Canetas P/ Identificar Notas Dinheiro Falsas Cor Azul/roxo",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_776868-MLU74430894412_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776868-MLU74430894412_022024-O.jpg",
      "price": 49.89
    },
    {
      "title": "Capacete Segurança 3m H700 C/ Jugular Eletricista Engenheiro",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_990711-MLU71759967435_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_990711-MLU71759967435_092023-O.jpg",
      "price": 54.9
    },
    {
      "title": "Lixeira Inox C/ Pedal E Balde Removível 12l Banheiro Cozinha Cor Cinza",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_827735-MLB44612931660_012021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_827735-MLB44612931660_012021-O.jpg",
      "price": 78.94
    },
    {
      "title": "Máquina De Gelo 15kg Eos Ice Compact Emg02s Prata 220v",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_927814-MLU74825743279_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927814-MLU74825743279_022024-O.jpg",
      "price": 807.12
    },
    {
      "title": "Eletrodo Ecg Adul/infantil Caixa Com 500 Unidades - Solidor 110v/220v",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_793609-MLU72148584176_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793609-MLU72148584176_102023-O.jpg",
      "price": 164.03
    },
    {
      "title": "1000 Borracha Colorida Aparelho Elastico Ortodontico Bengala",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_865130-MLU72704080417_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_865130-MLU72704080417_112023-O.jpg",
      "price": 8.9
    },
    {
      "title": "Etiquetadora Manual De Preços 8 Dígitos + Refil + Etiquetas",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_881030-MLU71764780235_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_881030-MLU71764780235_092023-O.jpg",
      "price": 28.14
    },
    {
      "title": "Máquina De Gelo Titanium 15kg Ice Compact Emg02t 127v - Eos Voltagem 127v",
      "condition_id": 2,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_984543-MLU72601166595_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984543-MLU72601166595_102023-O.jpg",
      "price": 699
    },
    {
      "title": "Detector De Gás Natural E Glp Li 618f Bivolt 110/220v",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_717781-MLU74449979635_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_717781-MLU74449979635_022024-O.jpg",
      "price": 120.65
    },
    {
      "title": "Tiras Para Medição De Glicose - On Call Plus Ii - 50un Cor Azul",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_671543-MLU72584275834_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_671543-MLU72584275834_112023-O.jpg",
      "price": 32.17
    },
    {
      "title": "Fragmentadora De Papel Até 6 Folhas 220v",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_872393-MLU72609365901_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_872393-MLU72609365901_112023-O.jpg",
      "price": 186.14
    },
    {
      "title": "Seringa Descartável 10ml Bico Lock Caixa Com 100 Unidades Descarpack",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_979197-MLU69594048223_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_979197-MLU69594048223_052023-O.jpg",
      "price": 31.89
    },
    {
      "title": "Evitra Chapa De Lanche Para Hamburger Profissional A Gás 70x35 Industrial Em Inox",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_895642-MLU73207994715_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895642-MLU73207994715_122023-O.jpg",
      "price": 454.02
    },
    {
      "title": "Mercado Pago: Point Pro2 - A Maquininha De Cartão + Completa",
      "condition_id": 1,
      "category_id": 23,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_872054-MLB74283541675_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_872054-MLB74283541675_012024-O.jpg",
      "price": 119.9
    },
    {
      "title": "Notebook Samsung Galaxy Book2, Intel Core I3-1215u, 4gb, 256gb Ssd, Windows 11 Home, Tela 15.6  - Np550xed-kt3br",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_898626-MLU69502728718_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_898626-MLU69502728718_052023-O.jpg",
      "price": 2099
    },
    {
      "title": "Placa De Captura Hdmi Usb 4k E 1080p",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_797594-MLU71966603452_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797594-MLU71966603452_092023-O.jpg",
      "price": 38.2
    },
    {
      "title": "Notebook Acer Aspire 5 A515-57-55b8 Intel Core I5 8gb 256gb Ssd 15,6'' W11",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_629974-MLU72755866665_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629974-MLU72755866665_112023-O.jpg",
      "price": 2779
    },
    {
      "title": "Impressora A Cor Multifuncional Epson Ecotank L3250 Com Wifi Preta 110v",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_984266-MLA48196101433_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_984266-MLA48196101433_112021-O.jpg",
      "price": 1109.9
    },
    {
      "title": "Papel Sulfite Branco A4 Pacote Com 500 Folhas Report",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_652814-MLU75401934790_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_652814-MLU75401934790_042024-O.jpg",
      "price": 31.8
    },
    {
      "title": "Notebook Lenovo Ideapad 1i Intel Core I5-1235u 8gb 512gb 15.6'' W11",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_612240-MLU73056682168_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_612240-MLU73056682168_112023-O.jpg",
      "price": 2850
    },
    {
      "title": "Cabo Adaptador Displayport Para Dvi Macho 1,8m Cor Preto",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_870244-MLU73980602560_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_870244-MLU73980602560_012024-O.jpg",
      "price": 21.2
    },
    {
      "title": "Autopel Caixa Com 30 Unidades De Bobinas 80x40 40 Metros Branco",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_603848-MLU74089488860_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_603848-MLU74089488860_012024-O.jpg",
      "price": 131
    },
    {
      "title": "Notebook Asus Vivobook Core I5 12450h 8gb 256ssd 15,6 Fhd",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_788558-MLU73440888999_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_788558-MLU73440888999_122023-O.jpg",
      "price": 2391.08
    },
    {
      "title": "Suporte Carrinho Para Cpu E No-break Preto Com Rodinhas",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_676471-MLU74178522609_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_676471-MLU74178522609_012024-O.jpg",
      "price": 29.99
    },
    {
      "title": "Cabo Adaptador Hdmi Para Vga Para Tv Pc Notebook Monitor",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_902618-MLU54959896677_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902618-MLU54959896677_042023-O.jpg",
      "price": 18.08
    },
    {
      "title": "Notebook Acer Asp3 A315-510p-34xc I3 8gb 256gb Ssd 15.6 W11",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_752542-MLU72675212578_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752542-MLU72675212578_112023-O.jpg",
      "price": 2324
    },
    {
      "title": "Cabo Hdmi 2.0 4k Blindado 5m Ponta Gold 60hz Aquário",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_918615-MLB52591014813_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_918615-MLB52591014813_112022-O.jpg",
      "price": 29.57
    },
    {
      "title": "Todaytec Tdw108 110mmx74m 24 Unidades",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_868671-MLU73491390248_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_868671-MLU73491390248_122023-O.jpg",
      "price": 122.41
    },
    {
      "title": "Notebook Asus Vivobook Ryzen 5 8gb 512gb 15,6 W11 M1502ia-ej378w",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_826934-MLU72893248290_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826934-MLU72893248290_112023-O.jpg",
      "price": 2667.08
    },
    {
      "title": "Kit 100 Conector Rj45 Utp Cat5e Banho De Ouro Cabo De Rede",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_851254-MLU74236543397_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_851254-MLU74236543397_012024-O.jpg",
      "price": 20.71
    },
    {
      "title": "Creality Ender-3 V3 Ke - Upgrade Se, S1 Pro, V2, Neo 500mm/s Cor Preto 110v 220v (chaveada)",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_977055-MLU73866420472_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977055-MLU73866420472_012024-O.jpg",
      "price": 1959
    },
    {
      "title": "Notebook Acer A315-24p-r611 R5 8gb 256gb Ssd 15.6'' W11h Cor Prateado",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_703797-MLU72748269271_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_703797-MLU72748269271_112023-O.jpg",
      "price": 2551.92
    },
    {
      "title": "Teclado Notebook Samsung Essentials E30 Np350xaa-kf3br Com",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_924324-MLB74195167249_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924324-MLB74195167249_012024-O.jpg",
      "price": 49.89
    },
    {
      "title": "Adaptador Sata 3 Ssd Hd Externo Notebook Usb 3.0 Cabo Veloz",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_824100-MLB49638462206_042022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_824100-MLB49638462206_042022-O.jpg",
      "price": 24.77
    },
    {
      "title": "Notebook Asus Vivobook M1502ia-ej251 R5 8gb 256ssd Linux Cor Icelight Silver",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_733784-MLA54712296033_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_733784-MLA54712296033_032023-O.jpg",
      "price": 2253.08
    },
    {
      "title": "Switch 5 Portas Gigabit Não Gerenciável Ls1005g Tp-link",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_986085-MLA74781352601_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986085-MLA74781352601_022024-O.jpg",
      "price": 99
    },
    {
      "title": "Suporte De Notebook Articulado Aluminio Dobrável Ergonomico",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_722911-MLB47428694761_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_722911-MLB47428694761_092021-O.jpg",
      "price": 22
    },
    {
      "title": "Notebook Samsung Galaxy Book2 I5-1235u Windows 11 Home 8gb 256gb Ssd Grafite",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_965443-MLA72983129822_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965443-MLA72983129822_112023-O.jpg",
      "price": 2870
    },
    {
      "title": "Cabo Usb 2.0 Impressora Universal 5 Metros Tomate",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_959697-MLU72828213219_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_959697-MLU72828213219_112023-O.jpg",
      "price": 16.48
    },
    {
      "title": "Pasta Térmica Implastec Ts Cold 4g, Espátula + Sachê Cleaner",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_667338-MLU71707224136_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_667338-MLU71707224136_092023-O.jpg",
      "price": 43.48
    },
    {
      "title": "Notebook 2 Em 1 Positivo Duo C4128b-3 4gb 128gb W11 Cor Cinza-escuro",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_687349-MLU72675217150_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_687349-MLU72675217150_112023-O.jpg",
      "price": 1594.86
    },
    {
      "title": "Leitor De Cartão Ugreen Usb 3.0 Sd Micro Sd Tf 20250 5gbps",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_917268-MLA75159908575_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917268-MLA75159908575_032024-O.jpg",
      "price": 89.1
    },
    {
      "title": "50 Mídia Virgem Dvd-r Multilaser Logo 4.7gb Dvdr",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_807932-MLU73226246166_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_807932-MLU73226246166_122023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Macbook Pro Macbook Pro 14  M3 Pro Space Black 14 , Apple M3 M3 Pro  18gb De Ram 512gb Ssd, Apple M3 Pro 14-core Gpu 120 Hz 3024x1964px Macos",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_755622-MLA73279643202_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_755622-MLA73279643202_122023-O.jpg",
      "price": 15100
    },
    {
      "title": "Testador Medidor De Pilha E Bateria 1.5v E 9v Bt-2 Western",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_906041-MLU72637224717_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_906041-MLU72637224717_112023-O.jpg",
      "price": 29.99
    },
    {
      "title": "Conversor Adaptador De Vídeo Hdmi Macho Para Vga Femea",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_834400-MLU71472010901_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834400-MLU71472010901_092023-O.jpg",
      "price": 16.1
    },
    {
      "title": "Notebook Loq I5-12450h 16gb 512gb Ssd Rtx 2050 15.6 Fhd W11",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_825280-MLU74128485729_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825280-MLU74128485729_012024-O.jpg",
      "price": 4379
    },
    {
      "title": "Dock Thunderbolt Hdmi 4k Tipo C Usb 3.0 Hub Macbook Pro Air",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_789306-MLU73204443364_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_789306-MLU73204443364_122023-O.jpg",
      "price": 61.11
    },
    {
      "title": "Kit Teclado E Mouse Sem Fio Mk235 Com Conexão Usb E Layout Abnt2 Cor Cinza Logitech",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_749802-MLU73453340409_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_749802-MLU73453340409_122023-O.jpg",
      "price": 139
    },
    {
      "title": "Notebook Samsung Galaxy Book Go Np340xla-k06br Snapdragon 4gb 128gb Ssd Ufs Windows 11 Home",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_836238-MLU72557834180_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_836238-MLU72557834180_112023-O.jpg",
      "price": 1599
    },
    {
      "title": "Bobina Térmica 80x30 Pdv Cupom Fiscal Cx 30 Unidades Cor Amarelo Adegraf",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_631627-MLU75358164673_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_631627-MLU75358164673_032024-O.jpg",
      "price": 78.97
    },
    {
      "title": "Teclado Notebook Acer Aspire 5 A515-51 A515-51-51ux Br Com Ç Cor Preto Idioma Português Brasil",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_766175-MLU75437358590_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766175-MLU75437358590_042024-O.jpg",
      "price": 48.33
    },
    {
      "title": "Notebook Vaio Fe15 Full Hd I5-1235u 8gb Ssd 256gb Windows 11 Home",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_764214-MLA54863992522_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_764214-MLA54863992522_042023-O.jpg",
      "price": 2848.56
    },
    {
      "title": "Cabo Adaptador Usb 3.0 Para Hd E Ssd 2.5 Premium+ Cor Preto",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_779636-MLB47381740426_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_779636-MLB47381740426_092021-O.jpg",
      "price": 37.9
    },
    {
      "title": "Teclado Para Notebook Dell Inspiron P53g 14 3000 3442 3443 Cor Preto Idioma Português Brasil",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_753260-MLB31200590043_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_753260-MLB31200590043_062019-O.jpg",
      "price": 49.62
    },
    {
      "title": "Notebook Gamer Acer An515-57-76va I7 8gb 512gb Ssd 15.6 W11 Cor Preto Com Detalhes Em Vermelho",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_793526-MLU72748262233_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793526-MLU72748262233_112023-O.jpg",
      "price": 4689
    },
    {
      "title": "Cabo Dvi-d Dvi D 24+1 Com Filtro Dual Link 2 Metros",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_936218-MLU74084888459_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936218-MLU74084888459_012024-O.jpg",
      "price": 24.47
    },
    {
      "title": "Papel Sulfite A4 Chamex 300 Folhas Premium 75g 210x297mm Cor Branco",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_801291-MLU72637230691_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_801291-MLU72637230691_112023-O.jpg",
      "price": 26.69
    },
    {
      "title": "Notebook Asus M1502ia-ej251w R5 8gb 256gb W11 15,60  Fhd Cor Prateado",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_855919-MLU72628078436_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_855919-MLU72628078436_112023-O.jpg",
      "price": 2667.08
    },
    {
      "title": "Teclado P/ Dell Inspiron 15-3000 Modelo 15-3567 Pk1313g1a32",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_847086-MLB46917064701_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_847086-MLB46917064701_072021-O.jpg",
      "price": 47.53
    },
    {
      "title": "Papel Fotográfico Adesivo 130g A4 Glossy Masterprint 100 Fls Cor Branco",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_810385-MLU75436572342_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810385-MLU75436572342_042024-O.jpg",
      "price": 43
    },
    {
      "title": "Galaxy Book2 Intel Core I5-1235u, 8gb, 512gb Ssd, 15.6''",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_866133-MLB51178778354_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_866133-MLB51178778354_082022-O.jpg",
      "price": 3739.99
    },
    {
      "title": "Kit 40 Clips Organizador Fixador Adesivo De Cabo Fios Parede Cor Transparente",
      "condition_id": 1,
      "category_id": 24,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_811516-MLU75587194311_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811516-MLU75587194311_042024-O.jpg",
      "price": 13.09
    },
    {
      "title": "Case Para Hd Externo Interno Notebook Pc Sata 2.5 Usb 3.0",
      "condition_id": 2,
      "category_id": 24,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_728091-MLU72180476264_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_728091-MLU72180476264_102023-O.jpg",
      "price": 19.99
    },
    {
      "title": "5000 Ingressos Papel Moeda - 10x5cm - Shows - Eventos",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_821881-MLB74575172127_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_821881-MLB74575172127_022024-O.jpg",
      "price": 874.9
    },
    {
      "title": "Copo 10ml Acrilico C/1000 Doce Ou Ceia, Degustação",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_965248-MLB27387036991_052018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965248-MLB27387036991_052018-O.jpg",
      "price": 345.5
    },
    {
      "title": "Link It 6 - Student Pack - Third Edition, De Thacker, Claire. Editora Oxford University Press Do Brasil, Capa Mole Em Inglês",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_965956-MLU70779277388_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965956-MLU70779277388_082023-O.jpg",
      "price": 190
    },
    {
      "title": "Papel Manteiga 25x35 Pacote C/ 1.600 Folhas  ",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_673629-MLB52105102088_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673629-MLB52105102088_102022-O.jpg",
      "price": 190
    },
    {
      "title": "Cédulas Dinheirinho P/ Eventos Festas Bares - Kit 1.000 Un",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_646531-MLA73106452013_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_646531-MLA73106452013_112023-O.jpg",
      "price": 172
    },
    {
      "title": "Ingresso Flamengo X Guarani - Semi Final Brasileiro 82 - ",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_714349-MLB54078218560_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714349-MLB54078218560_022023-O.jpg",
      "price": 300
    },
    {
      "title": "Papel Manteiga 25x35 C/1600 Folhas Artesanato Lanche Porção",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_807823-MLB31201930803_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_807823-MLB31201930803_062019-O.jpg",
      "price": 239.99
    },
    {
      "title": "Kit 528 Fichas De Valores P/ Festas Eventos Bares - Cédulas",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_730397-MLB73062292183_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_730397-MLB73062292183_112023-O.jpg",
      "price": 75
    },
    {
      "title": "Caixa Térmica D Isopor Capacidade 165 Litros C/dreno Isoterm",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_789898-MLB73170505453_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_789898-MLB73170505453_112023-O.jpg",
      "price": 258.9
    },
    {
      "title": "Colherzinha - Mini Colher Para Brigadeiro C/ 2.500",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_717131-MLB31122271589_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_717131-MLB31122271589_062019-O.jpg",
      "price": 152.8
    },
    {
      "title": "400 Fls Papel Manteiga 40cm Octogonal Forrar Caixa De Pizza ",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_901068-MLB73978985482_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901068-MLB73978985482_012024-O.jpg",
      "price": 184.95
    },
    {
      "title": "Marmita Fitness Freezer/ Micro Galvanotek G331 Preta C/100",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_996348-MLB71965767824_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_996348-MLB71965767824_092023-O.jpg",
      "price": 365
    },
    {
      "title": "Soda Escama 10 Kilos Para Sabão Liquido Envio Rapido",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_924449-MLB74622004443_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924449-MLB74622004443_022024-O.jpg",
      "price": 244.63
    },
    {
      "title": "Caixa 5.000 Papel Toalha Interfolha Branco Luxo Promoção",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_680436-MLB31064511209_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680436-MLB31064511209_062019-O.jpg",
      "price": 145.9
    },
    {
      "title": "Espeto Lanche E Degustação Golf 9cm Bambu C/ 500 Unid",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_875531-MLB29274271095_012019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_875531-MLB29274271095_012019-O.jpg",
      "price": 58.9
    },
    {
      "title": "Ingresso Antigo Maracana Fluminense X Botafogo (2) 1974",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_924826-MLB25792071306_072017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924826-MLB25792071306_072017-O.jpg",
      "price": 50
    },
    {
      "title": "Kit 10.032 Fichas De Valores P/ Festas Eventos Bar - Cédulas",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_601158-MLA73106658723_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_601158-MLA73106658723_112023-O.jpg",
      "price": 469
    },
    {
      "title": "Papel Manteiga 25x35 C/400 Embalar Lanches Fast Food Etc",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_929691-MLB31180231363_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_929691-MLB31180231363_062019-O.jpg",
      "price": 74.99
    },
    {
      "title": "Hidróxido De Sódio 99% Soda Cáustica Em Escamas 10 Kg",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_741195-MLB54934779999_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_741195-MLB54934779999_042023-O.jpg",
      "price": 236.25
    },
    {
      "title": "Papel Manteiga 35x50 C/800 Folhas Gramatura 35g Cristal",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_981268-MLB31194261927_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_981268-MLB31194261927_062019-O.jpg",
      "price": 209.95
    },
    {
      "title": "5000 Folhas Toalha Interfolha Papel Branco Luxo Fardo",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_616059-MLB31033565914_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_616059-MLB31033565914_062019-O.jpg",
      "price": 172.8
    },
    {
      "title": "Açúcar União Sachê 5g C/400",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_891618-MLB31203774716_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_891618-MLB31203774716_062019-O.jpg",
      "price": 34.6
    },
    {
      "title": "5.000unid Papel Toalha Interfolha Branco Luxo Secar Mãos",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_680436-MLB31064511209_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680436-MLB31064511209_062019-O.jpg",
      "price": 139.8
    },
    {
      "title": "Embalagem Slice Pega Pizza Individual Pedaço Fatia C/ 100un.",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_672364-MLB71626989784_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672364-MLB71626989784_092023-O.jpg",
      "price": 44
    },
    {
      "title": "400 Papel Manteiga N.20 Hexagonal Pizza Brotinho Empada",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_999675-MLB45884987577_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_999675-MLB45884987577_052021-O.jpg",
      "price": 44.99
    },
    {
      "title": "800 Folhas Papel Manteiga 20x20 Cristal Granapel Glasspel",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_991970-MLB31173358445_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991970-MLB31173358445_062019-O.jpg",
      "price": 78.99
    },
    {
      "title": "3200un Saco Para Coleta Amostra Alimentos 12x25",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_906456-MLB31029973186_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_906456-MLB31029973186_062019-O.jpg",
      "price": 398.8
    },
    {
      "title": "Álcool 92% Líquido Uso Profissional Limpeza Geral 10unid",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_660432-MLB51757926403_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660432-MLB51757926403_092022-O.jpg",
      "price": 214.8
    },
    {
      "title": "4 Kg Papel De Seda 35x45 Canelinha Branco",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_700121-MLB43763332955_102020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_700121-MLB43763332955_102020-O.jpg",
      "price": 119.99
    },
    {
      "title": "Papel Manteiga 25x35 C/400 Embalar Lanches Fast Truck Food",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_723125-MLB31144278873_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_723125-MLB31144278873_062019-O.jpg",
      "price": 74.99
    },
    {
      "title": "1.000unid Embalagem P/ Bem Casado Celofane Incolor 15x15 Cm",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_914330-MLB72849196576_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_914330-MLB72849196576_112023-O.jpg",
      "price": 80
    },
    {
      "title": "Copo 10ml Acrilico C/200 Doce Ou Ceia, Degustação",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_647129-MLB72158946419_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647129-MLB72158946419_102023-O.jpg",
      "price": 64.2
    },
    {
      "title": "Controle De Mão P/ Atuador 2 Botões Avanço E Recuo",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_665364-MLB40539934028_012020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_665364-MLB40539934028_012020-O.jpg",
      "price": 219
    },
    {
      "title": "Taça De Champagne Em Acrilico Descartavel 150ml 150 Unidades",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_726667-MLB72668863389_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_726667-MLB72668863389_112023-O.jpg",
      "price": 314.5
    },
    {
      "title": "Álcool Líquido 70% Proteção,limpeza 1 Galões 5 Litros",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_793201-MLB52142809302_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793201-MLB52142809302_102022-O.jpg",
      "price": 48.92
    },
    {
      "title": "20 Reguladores  Passador 20 Argolas Metal Alças Tiara #",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_697157-MLB71857305572_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_697157-MLB71857305572_092023-O.jpg",
      "price": 18.13
    },
    {
      "title": "Saco Para Lixo 100l Super Reforçado 5kg (0,15)",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_906004-MLB31204109690_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_906004-MLB31204109690_062019-O.jpg",
      "price": 78.9
    },
    {
      "title": "Caixa 5.000 Papel Toalha Interfolha Branco Luxo Promoção",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_618115-MLB50018146614_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_618115-MLB50018146614_052022-O.jpg",
      "price": 173.9
    },
    {
      "title": "Sacola Papel P/01 Garrafa 10x35x10 C/50 Preta Vinho Bebida",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_936601-MLB43176524637_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936601-MLB43176524637_082020-O.jpg",
      "price": 198
    },
    {
      "title": "Papel Manteiga 20x20 C/400 Folhas Cristal Granapel Glasspel",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_857967-MLB31168611842_062019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_857967-MLB31168611842_062019-O.jpg",
      "price": 49.99
    },
    {
      "title": "Copo 10ml Acrilico C/200 Doce Ou Ceia, Degustação",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_969548-MLB72098875148_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969548-MLB72098875148_102023-O.jpg",
      "price": 64.2
    },
    {
      "title": "2400 Papel Acoplado 30x37 Colorido - Embalar Frios E Lanches",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_871548-MLB73547762355_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871548-MLB73547762355_122023-O.jpg",
      "price": 229.99
    },
    {
      "title": "1250uni Espetos Palitos Finger Food Petisco Bambu Laço 9cm",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_950019-MLB51230871866_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950019-MLB51230871866_082022-O.jpg",
      "price": 299.8
    },
    {
      "title": "Prato Acrílico Redondo 22cm C/ 150un.",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_703812-MLB50784777500_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_703812-MLB50784777500_072022-O.jpg",
      "price": 255
    },
    {
      "title": "400 Folha Papel Manteiga N.25 Formato Caixa De Pizza 25cm",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_657685-MLB45885075553_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_657685-MLB45885075553_052021-O.jpg",
      "price": 69.9
    },
    {
      "title": "Papel Manteiga  -  35x35  C/ 2000 Folhas",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_521725-MLB25474238744_032017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_521725-MLB25474238744_032017-O.jpg",
      "price": 379.9
    },
    {
      "title": "Papel  Manteiga  30x30 C/3.000 Folhas Granapel Glasspel",
      "condition_id": 1,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_734176-MLB26906827119_022018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_734176-MLB26906827119_022018-O.jpg",
      "price": 410
    },
    {
      "title": "Papel Manteiga  -  35x40  C/ 1000 Folhas",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_521725-MLB25474238744_032017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_521725-MLB25474238744_032017-O.jpg",
      "price": 189
    },
    {
      "title": "800 Folha Papel Manteiga Forrar Caixa Pizza N.35 Octogonal",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_641650-MLB45884681913_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_641650-MLB45884681913_052021-O.jpg",
      "price": 214.99
    },
    {
      "title": "4.000unid Papel Toalha Interf Folha Dupla Ouroppel Macio",
      "condition_id": 2,
      "category_id": 25,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_901115-MLB50078874386_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901115-MLB50078874386_052022-O.jpg",
      "price": 230
    },
    {
      "title": "Violão Clássico Queen's Acústico Conthey D13751 Para Destros Natural Verniz",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_649434-MLA74781618001_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_649434-MLA74781618001_022024-O.jpg",
      "price": 250.74
    },
    {
      "title": "Guitarra Elétrica Stratocaster Queen's 6 Cordas Cor Preto Material Do Diapasão Madeira De Lei",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_670398-MLU74542977631_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_670398-MLU74542977631_022024-O.jpg",
      "price": 593.93
    },
    {
      "title": "Pedal Sustain Compatível P Teclado Piano Yamaha Roland Casio",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_782914-MLU73409035365_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782914-MLU73409035365_122023-O.jpg",
      "price": 41.46
    },
    {
      "title": "Encordoamento Giannini Cobra 010 P/ Violão Aço",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_993798-MLU74486426778_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_993798-MLU74486426778_022024-O.jpg",
      "price": 29.9
    },
    {
      "title": "Microfones Arcano Quarter-a Dinâmico Cardioide Cor Preto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_826631-MLA71525839125_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826631-MLA71525839125_092023-O.jpg",
      "price": 1529.99
    },
    {
      "title": "Violão Clássico Queen's Conthey D13751 Para Destros Preta Verniz",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_901027-MLU72564529154_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901027-MLU72564529154_112023-O.jpg",
      "price": 259.97
    },
    {
      "title": "Guitarra Elétrica Waldman Gte-300 Telecaster Cp Cor Amarelo Escuro",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_717011-MLU73010337602_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_717011-MLU73010337602_112023-O.jpg",
      "price": 1029.73
    },
    {
      "title": "Suporte De Parede Para Pendurar Violão Violino Ukulele Cor Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_632500-MLU71821974232_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_632500-MLU71821974232_092023-O.jpg",
      "price": 12.7
    },
    {
      "title": "Teclado Musical Queens D157281m 54 Teclas Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_675728-MLA74652303956_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_675728-MLA74652303956_022024-O.jpg",
      "price": 248.03
    },
    {
      "title": "Microfone Sem Fio Duplo Lapela Profissional iPhone Android",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_964587-MLB70806874883_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_964587-MLB70806874883_072023-O.jpg",
      "price": 55.28
    },
    {
      "title": "Capotraste Braçadeira Queens Guitarra E Violão Aço E Nylon Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_860147-MLU73129416002_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_860147-MLU73129416002_122023-O.jpg",
      "price": 16.9
    },
    {
      "title": "Violão Eletroacústica Giannini Start Nf-14 Ceq Para Destros Natural Bordo Escurecido Verniz Brilhante",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_729852-MLA74650424996_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_729852-MLA74650424996_022024-O.jpg",
      "price": 441.93
    },
    {
      "title": "Guitarra Elétrica Queen's D137561 Stratocaster De  Hardwood Vermelha E Branca Com Diapasão De Bordo-açucareiro",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_743994-MLA74780415171_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_743994-MLA74780415171_022024-O.jpg",
      "price": 593.93
    },
    {
      "title": "Xilofone / Metalofone Vanguarda Infantil Com 8 Notas Cor Colorido",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_950148-MLU72533805377_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_950148-MLU72533805377_102023-O.jpg",
      "price": 49
    },
    {
      "title": "Canhão Refletor Led Strobo 36 Leds 3w Rgb Dmx Bivolt 110v/220v",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_761963-MLB53143483298_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761963-MLB53143483298_012023-O.jpg",
      "price": 58.38
    },
    {
      "title": "Processador De Áudio Digital Equalizador Stetsom Stx 2448 12v",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_683384-MLU72651378733_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_683384-MLU72651378733_112023-O.jpg",
      "price": 286.49
    },
    {
      "title": "Suporte Para Teclado Ibox X20 Regulável Preto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_609533-MLU71759310429_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_609533-MLU71759310429_092023-O.jpg",
      "price": 78.99
    },
    {
      "title": "Violão Acústico Seven Sv-17 Para Destros Dark Black Pau-rosa Fosco",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_876932-MLA74780589351_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_876932-MLA74780589351_022024-O.jpg",
      "price": 317
    },
    {
      "title": "Microfone Com Fio Dinâmico Profissional Metal 5mts Sm-58 ",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_786989-MLU73206980593_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_786989-MLU73206980593_122023-O.jpg",
      "price": 37
    },
    {
      "title": "Guitarra Fender Squier Affinity Stratocaster Sienna Sunburst",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_882234-MLB74054792756_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_882234-MLB74054792756_012024-O.jpg",
      "price": 3344
    },
    {
      "title": "Kit Com 10 Palhetas Fender 0,71mm Para Violão E Guitarra",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_888132-MLU73210713183_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_888132-MLU73210713183_122023-O.jpg",
      "price": 35
    },
    {
      "title": "Flauta Doce Germanica Soprano - Tipo Yamaha Cor Marfim",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_777180-MLU72577252640_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777180-MLU72577252640_112023-O.jpg",
      "price": 24.49
    },
    {
      "title": "Suporte De Parede Para Violão Guitarra Baixo Ukulele Gancho Cor Preto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_980911-MLU71707369006_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_980911-MLU71707369006_092023-O.jpg",
      "price": 33.58
    },
    {
      "title": "Violão Clássico Giannini Start N-14 Para Destros Preta Sabina Sólida Verniz Brilhante",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_644857-MLU74118244678_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644857-MLU74118244678_012024-O.jpg",
      "price": 352.99
    },
    {
      "title": "Suporte Teclado Musical Yamaha Casio Roland Ask X10sp Em X",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_886377-MLU74129693097_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_886377-MLU74129693097_012024-O.jpg",
      "price": 101
    },
    {
      "title": "Guitarra Elétrica Tagima Tw Series Tg-520 De  Tília Black Metálico Com Diapasão De Madeira Técnica",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_903687-MLA74781903209_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_903687-MLA74781903209_022024-O.jpg",
      "price": 940.1
    },
    {
      "title": "Suporte  Braço Girafa  Para Microfone  Bestweei Bw-35 Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_752674-MLA75079921379_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752674-MLA75079921379_032024-O.jpg",
      "price": 42.4
    },
    {
      "title": "Pandeiro Profissional Izzo Pele Preta 10 Corpo Abs 6480 Cor Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_883973-MLU72565803472_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_883973-MLU72565803472_112023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Encordoamento Cordas Violão Aço 010 Giannini Acústico",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_844872-MLU72828548399_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844872-MLU72828548399_112023-O.jpg",
      "price": 29.5
    },
    {
      "title": "Violão Eletroacústica Giannini Start Sf-14 Ceq Para Destros Preta Verniz Brilhante",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_749357-MLA74651539240_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_749357-MLA74651539240_022024-O.jpg",
      "price": 519.9
    },
    {
      "title": "Jogo De Cordas Violino 4/4 Mauro Calixto R0407",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_770119-MLU73983030282_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770119-MLU73983030282_012024-O.jpg",
      "price": 41.95
    },
    {
      "title": "Suporte De Chão Dolphin Para Violão Guitarra Baixo",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_891863-MLU74129731849_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_891863-MLU74129731849_012024-O.jpg",
      "price": 48
    },
    {
      "title": "Guitarra Elétrica Jackson Js Series King V Js32 De  Choupo Matte Army Drab Brilhante Com Diapasão De Amaranto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_870140-MLA74652494858_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_870140-MLA74652494858_022024-O.jpg",
      "price": 3773.44
    },
    {
      "title": "Carregador Bivolt 9v Compatível Vários Teclado Casio Ca110",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_645554-MLB48050173812_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_645554-MLB48050173812_102021-O.jpg",
      "price": 29.3
    },
    {
      "title": "Kit Violão Com Afinador E Capa Queens Para Destros Em Verniz Cor Preto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_993689-MLU73533538835_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_993689-MLU73533538835_122023-O.jpg",
      "price": 350.08
    },
    {
      "title": "Cubo Amplificador Meteoro Space Junior 35gs 35w P/ Guitarra Cor Preto 110v/220v",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_780457-MLA54333899863_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_780457-MLA54333899863_032023-O.jpg",
      "price": 517
    },
    {
      "title": "Pedal De Efeito Cuvave Cube Baby  Preto",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_913206-MLA51152491728_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_913206-MLA51152491728_082022-O.jpg",
      "price": 254
    },
    {
      "title": "Encordoamento Solez Guitarra Cordas 010 Slg10",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_754797-MLU74847535128_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_754797-MLU74847535128_032024-O.jpg",
      "price": 46.4
    },
    {
      "title": "Guitarra Elétrica Tagima Tw Series Tg-530 Stratocaster Lake Placid Blue Lpd",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_654401-MLA74652406898_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_654401-MLA74652406898_022024-O.jpg",
      "price": 928
    },
    {
      "title": "Tarraxa Tarracha Mxt Pino Grosso Para Violão Nylon Cromada",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_904513-MLU74113951750_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904513-MLU74113951750_012024-O.jpg",
      "price": 28.02
    },
    {
      "title": "Violão Acústico Seven Sv-17 Para Destros Natural Pau-rosa Fosco",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_634474-MLA74651887806_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_634474-MLA74651887806_022024-O.jpg",
      "price": 299
    },
    {
      "title": "Pedal Sustain P Korg Yamaha Roland Kurzweil Casio Universal",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_939205-MLB52591057534_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_939205-MLB52591057534_112022-O.jpg",
      "price": 66.27
    },
    {
      "title": "Cordas Violão Giannini Canário Aço C/ Bolinha - Geswb",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_627477-MLA54581282311_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627477-MLA54581282311_032023-O.jpg",
      "price": 19.87
    },
    {
      "title": "Cabo Santo Angelo Ninja 3,05m Guitarra Baixo Violão",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_848336-MLU74727078602_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848336-MLU74727078602_032024-O.jpg",
      "price": 48.6
    },
    {
      "title": "Mini Violão Madeira Infantil Semi Profissional Cordas Aço",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_738085-MLB74087594337_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738085-MLB74087594337_012024-O.jpg",
      "price": 99
    },
    {
      "title": "Microfone Sem Fio Lightning Hollyland Lark C1 Preto Para Ios",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_732070-MLU70945634196_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732070-MLU70945634196_082023-O.jpg",
      "price": 1339.1
    },
    {
      "title": "Guitarra Elétrica Tagima Tw Series Tg-510 De  Tília White Com Diapasão De Madeira Técnica",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_811596-MLA74782402067_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_811596-MLA74782402067_022024-O.jpg",
      "price": 900
    },
    {
      "title": "Violão Eletroacústica Giannini Start Nf-14 Ceq Para Destros Preta Bordo Escurecido Verniz Brilhante",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_610565-MLU74117534344_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_610565-MLU74117534344_012024-O.jpg",
      "price": 384.48
    },
    {
      "title": " Ocarina Legend Of Zelda 12 Buracos Ocarina Alto Dó Manual",
      "condition_id": 1,
      "category_id": 26,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_687069-MLU72635660501_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_687069-MLU72635660501_112023-O.jpg",
      "price": 124.41
    },
    {
      "title": "Banco Piano Teclado Almofadado Banqueta Regulável Saty Bt10 Cor Preto",
      "condition_id": 2,
      "category_id": 26,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_719993-MLU75436819220_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_719993-MLU75436819220_042024-O.jpg",
      "price": 158
    },
    {
      "title": "Relógio Masculino De Pulso Skmei Digital A Prova Dágua Top Cor Da Correia Preto Cor Do Bisel Preto Skm-1251 Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_845493-MLU70461134627_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_845493-MLU70461134627_072023-O.jpg",
      "price": 60.42
    },
    {
      "title": "Relógio Feminino Technos Ceramic Sapphire 1n12acpai/1p",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_793705-MLB74128458877_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_793705-MLB74128458877_012024-O.jpg",
      "price": 735.91
    },
    {
      "title": "Relógio Casio Feminino Lw-203-8avdf Original Nf-e",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_623677-MLB44846644162_022021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_623677-MLB44846644162_022021-O.jpg",
      "price": 192.19
    },
    {
      "title": "My Style Life Charms Deluxe 100 Berloques Multikids-br1276 Comprimento 35 Cm Diâmetro 5.5 Cm",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_644571-MLU74054788834_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644571-MLU74054788834_012024-O.jpg",
      "price": 73.49
    },
    {
      "title": "Relógio Technos Masculino Golf Classic Analógico Aço Dourado",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_770966-MLU74249300777_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770966-MLU74249300777_012024-O.jpg",
      "price": 432.31
    },
    {
      "title": "Relógio De Pulso Saint Germain Houston Full Black 40mm Com Corpo Preto,  Analógico, Fundo  Preto Cor Preto, Agulhas Cor Prateado, Subdials De Cor Prateado, Bisel Cor Preto E Fivela De Gancho",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_808189-MLA52429292469_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808189-MLA52429292469_112022-O.jpg",
      "price": 163.22
    },
    {
      "title": "Relógio Saint Germain Nolita Rosé Gold 32mm Cor Do Fundo Branco",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_735792-MLU74182495951_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_735792-MLU74182495951_012024-O.jpg",
      "price": 165.52
    },
    {
      "title": "Relógio De Pulso Skmei 1251 Com Corpo Preto,  Digital, Para Masculino, Fundo  Preto, Com Correia De Poliuretano Cor Preto, Subdials De Cor Cinza, Ponteiro De Minutos/segundos Vermelho E Branco, Bisel ",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_822690-MLA47631351942_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_822690-MLA47631351942_092021-O.jpg",
      "price": 58.44
    },
    {
      "title": "Relogio Masculino Dk11200-5 Daniel Klein Exclusive",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_846478-MLU73513448209_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_846478-MLU73513448209_122023-O.jpg",
      "price": 169
    },
    {
      "title": "Japamala 108 Contas Turquesa Com Pingente Dizeres Masculino",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_897481-MLU70679393752_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_897481-MLU70679393752_072023-O.jpg",
      "price": 22.9
    },
    {
      "title": "Relógio Feminino Rose Quebec Original Lançamento Show Lindo Cor Da Correia Rosa-claro Cor Do Bisel Rosa-claro Cor Do Fundo Rosa-claro",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_900389-MLU72958063864_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_900389-MLU72958063864_112023-O.jpg",
      "price": 77
    },
    {
      "title": "Relógio De Pulso Nibosi Ni2309 Com Corpo Dourado,  Analógico, Para Masculino, Fundo  Preto, Com Correia De Aço Inoxidável Cor Dourado, Agulhas Cor Dourado E Branco, Subdials De Cor Dourado E Branco, S",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_828233-MLA47631222684_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_828233-MLA47631222684_092021-O.jpg",
      "price": 162
    },
    {
      "title": "Relógio Citizen Masculino Aqualand Cor Da Correia Preto Cor Do Bisel Dourado Cor Do Fundo Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_640115-MLU74428810843_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_640115-MLU74428810843_022024-O.jpg",
      "price": 135
    },
    {
      "title": "Relógio Masculino Retro Soki Homem Pulseira Couro Cor Da Correia Marrom-claro Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_971636-MLU75437498482_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_971636-MLU75437498482_042024-O.jpg",
      "price": 39.65
    },
    {
      "title": "Relógio Saint Germain Harlem Silver 40mm",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_990517-MLU74057135626_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_990517-MLU74057135626_012024-O.jpg",
      "price": 129.4
    },
    {
      "title": "Relógio De Parede Led Digital Grande Termometro Recepção Cor Da Estrutura Preto Cor Do Fundo Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_727014-MLU69602335094_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_727014-MLU69602335094_052023-O.jpg",
      "price": 91.33
    },
    {
      "title": "Relógio Feminino Digital Champion Original Ch40142s Cor Da Correia Prata Redondo Cor Do Bisel Prata Cor Do Fundo Led Branco",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_662745-MLU70775020030_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_662745-MLU70775020030_072023-O.jpg",
      "price": 258
    },
    {
      "title": "Relógios Masculinos Nibosi Dourado Aço Inox Com Cronógrafo Cor Da Correia Dourado Mesh Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_934450-MLU72637256043_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_934450-MLU72637256043_112023-O.jpg",
      "price": 159
    },
    {
      "title": "Relógio Masculino Skmei Digital 1142",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_703828-MLU74161152903_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_703828-MLU74161152903_012024-O.jpg",
      "price": 69.29
    },
    {
      "title": "Pulseira De Prata 925 Masculina Legítima Grumet Italiana",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_882603-MLB69498807487_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_882603-MLB69498807487_052023-O.jpg",
      "price": 37.49
    },
    {
      "title": "Relógio Saint Germain Murray Black Rosé Gold 32mm",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_951727-MLU70852278358_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_951727-MLU70852278358_082023-O.jpg",
      "price": 129.51
    },
    {
      "title": "Relógio Mormaii Masculino Mo3415aa/8p Digital Prova Da Agua Cor Da Correia Preto Cor Do Bisel Preto Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_735957-MLU74085736334_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_735957-MLU74085736334_012024-O.jpg",
      "price": 168.15
    },
    {
      "title": "Relógio Casio Masculino Preto Digital Original Nota Fiscal",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_893136-MLU72533704162_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_893136-MLU72533704162_102023-O.jpg",
      "price": 126.14
    },
    {
      "title": "Relógio Saint Germain Bronx Black Silver 40mm Cor Da Correia Marrom Cor Do Bisel Prateado Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_947766-MLU73980595370_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_947766-MLU73980595370_012024-O.jpg",
      "price": 128.91
    },
    {
      "title": "Relógio Masculino Couro Saint Germain Murray Full Black 40mm Cor Da Correia Preta Cor Do Fundo Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_652517-MLU72564875068_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_652517-MLU72564875068_112023-O.jpg",
      "price": 128.03
    },
    {
      "title": "Relógio A Prova Dagua Contra Respingos Masculino De Pulso Cor Da Correia P Cor Do Bisel Dourado Fundo Dourado",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_681811-MLU70718002927_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_681811-MLU70718002927_072023-O.jpg",
      "price": 29.5
    },
    {
      "title": "6 Pares Brincos Ponto De Luz Zircônia Tamanhos Variados Cor Prata",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_863441-MLU72338774278_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_863441-MLU72338774278_102023-O.jpg",
      "price": 25.84
    },
    {
      "title": "Relógio Esportivo Digital Led M4 A Prova D Água Unissex Cor Da Correia Marinho",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_644431-MLU54977735207_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_644431-MLU54977735207_042023-O.jpg",
      "price": 12.64
    },
    {
      "title": "Relógio Seculus Masculino Long Life Prata Original Cor Da Correia Prateado",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_989785-MLB44654321793_012021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_989785-MLB44654321793_012021-O.jpg",
      "price": 222.63
    },
    {
      "title": "Relógio De Pulso Diesel Mega Chief Dz4318 Com Corpo Preto,  Analógico, Para Masculino, Fundo  Preto, Com Correia De Aço Cor Preto, Agulhas Cor Azul E Preto, Subdials De Cor Azul, Subesferas Cor Preto ",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_863001-MLA48091449619_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_863001-MLA48091449619_112021-O.jpg",
      "price": 375
    },
    {
      "title": "Relógio Technos Style Bicolor Pulseira Mesh Aço Inoxidável Cor Da Correia Prata Cor Do Bisel Rosê Cor Do Fundo Prata",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_831859-MLU75050099348_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_831859-MLU75050099348_032024-O.jpg",
      "price": 339.32
    },
    {
      "title": "1 Limpa Prata Monzi 35 Ml + 1 Flanela Magica",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_776674-MLB42076043413_062020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_776674-MLB42076043413_062020-O.jpg",
      "price": 20
    },
    {
      "title": "Relógio Masculino Nibosi 2309 Preto Pulseira Malha De Aço",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_965594-MLB51813109670_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965594-MLB51813109670_102022-O.jpg",
      "price": 165
    },
    {
      "title": "Relógio Feminino Champion Digital Ch40106p - Rose",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_810419-MLU75007210620_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810419-MLU75007210620_032024-O.jpg",
      "price": 264
    },
    {
      "title": "Relógio Masculino São Paulo Sport Bel Spfc-004-3 Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_970404-MLB52992779654_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970404-MLB52992779654_122022-O.jpg",
      "price": 289
    },
    {
      "title": "Relógio Masculino Crrju Funcional Casual Luxo Com Pulseira Cor Da Correia Preto Cor Do Bisel Preto Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_999447-MLU71482742029_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_999447-MLU71482742029_092023-O.jpg",
      "price": 189.9
    },
    {
      "title": "Japamala 108 Contas Bete Russo Tassel Top Meditação",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_852476-MLB72444473692_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852476-MLB72444473692_102023-O.jpg",
      "price": 27.51
    },
    {
      "title": "Relógio Casio, Esportivo, Resistente A Água, Modelo F-91w Na Cor Preta",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_871177-MLA47615183726_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871177-MLA47615183726_092021-O.jpg",
      "price": 94.37
    },
    {
      "title": "Relógio De Pulso Diesel Mega Chief Dz4360 Com Corpo Dourado,  Analógico, Para Masculino, Fundo  Dourado, Com Correia De Aço Inoxidável Cor Dourado, Agulhas Cor Dourado E Branco, Subdials De Cor Dourad",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_962092-MLA48818437946_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962092-MLA48818437946_012022-O.jpg",
      "price": 363
    },
    {
      "title": "Relógio Champion Troca Pulseiras Sortidas Mod: Cp38086x",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_688395-MLU74410279330_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_688395-MLU74410279330_022024-O.jpg",
      "price": 269
    },
    {
      "title": "Relógio Infantil Prova Dagua Digital Camuflado Original Top Cor Da Correia Preto E Vermelho",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_919373-MLU75437930822_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_919373-MLU75437930822_042024-O.jpg",
      "price": 39.68
    },
    {
      "title": "Relógio Casio Retro Vintage Gold Para Mulheres La-670wga-9df Cor De Fundo: Pulseira De Café Clara, Cor Dourada, Moldura, Cor Dourada",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_626831-MLU70102176379_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_626831-MLU70102176379_062023-O.jpg",
      "price": 342.81
    },
    {
      "title": "Pulseira Compatível Com G-shock Ga-100 Ga-110 Ga-120 Gr-8900 Cor Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_828156-MLU74696060106_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_828156-MLU74696060106_022024-O.jpg",
      "price": 22.71
    },
    {
      "title": "Relógio Masculino Nibosi 2309 Aço Inox Cronógrafo Funcional Cor Da Correia Preto Cor Do Bisel Preto Cor Do Fundo Preto",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_738004-MLU72760525298_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738004-MLU72760525298_112023-O.jpg",
      "price": 164
    },
    {
      "title": "Kit 10 Relógios Esportivo Led Digital Unisex Adulto Infantil Cor Do Fundo Preto",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_867737-MLU54959619999_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_867737-MLU54959619999_042023-O.jpg",
      "price": 58.85
    },
    {
      "title": "Relógio De Pulso Casio Youth W-218h Com Corpo Preto,  Digital, Para Masculino, Fundo  Cinza, Com Correia De Resina Cor Vermelho, Subdials De Cor Preto, Ponteiro De Minutos/segundos Preto, Bisel Cor Pr",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_782079-MLU72567983326_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_782079-MLU72567983326_112023-O.jpg",
      "price": 160
    },
    {
      "title": "Relógio Cronógrafo Luminoso À Prova D'água De Quartzo Smael Cor Da Correia Azul",
      "condition_id": 1,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_935411-MLU69915473060_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_935411-MLU69915473060_062023-O.jpg",
      "price": 62.96
    },
    {
      "title": "Relógio Masculino Original Couro Yazole De Pulso Quartzo Cor Da Correia 336 Marrom Branco",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_832927-MLU73214262635_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_832927-MLU73214262635_122023-O.jpg",
      "price": 129.99
    },
    {
      "title": "Relógio Digital Infantil Sonic Resistente À Água",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_993867-MLU73513676221_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_993867-MLU73513676221_122023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Relógio Masculino Yazole 332 Total Black Pulseira Marrom",
      "condition_id": 2,
      "category_id": 27,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_834083-MLB47368127301_092021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_834083-MLB47368127301_092021-O.jpg",
      "price": 99.99
    },
    {
      "title": "Café Com Deus Pai - Porções Diárias De Paz, Junior Rostirola - Editora Vélos, Edição 2024",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_751336-MLA74421152354_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_751336-MLA74421152354_022024-O.jpg",
      "price": 62.5
    },
    {
      "title": "Consagração A São José - As Glórias De Nosso Pai Espiritual",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_768233-MLB50234458156_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_768233-MLB50234458156_062022-O.jpg",
      "price": 49.5
    },
    {
      "title": "A Experiência Da Mesa (nova Capa): O Segredo Para Criar Relacionamentos Profundos, De Titus, Devi. Associação Religiosa Editora Mundo Cristão, Capa Mole Em Português, 2021",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_988367-MLU72592260379_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_988367-MLU72592260379_102023-O.jpg",
      "price": 27.84
    },
    {
      "title": "O Ato Criativo, De Rick Rubin. Editora Sextante, Capa Mole Em Português",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_636316-MLU73636251237_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_636316-MLU73636251237_122023-O.jpg",
      "price": 48.13
    },
    {
      "title": "O Mistério Da Casa Verde, De Scliar, Moacyr. Série Descobrindo Os Clássicos Editora Somos Sistema De Ensino, Capa Mole Em Português, 2008",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_630277-MLU50419153822_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_630277-MLU50419153822_062022-O.jpg",
      "price": 54.1
    },
    {
      "title": "Vade Mecum Saraiva - Tradicional - 37ª Edição 2024: Tradicional, De A Saraiva. Série Vade Mecum Editora Saraiva Jur, Capa Dura, Edição 37 Em Português, 2024",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_704462-MLU74142625124_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_704462-MLU74142625124_012024-O.jpg",
      "price": 149
    },
    {
      "title": "Café Com Deus Pai: Porções Diárias De Renovação, De Junior Rostirola. Editora Vida, Capa Mole Em Português, 2023",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_805508-MLA71411520880_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_805508-MLA71411520880_092023-O.jpg",
      "price": 37.97
    },
    {
      "title": "Corajosas - Maria S. Araujo, Queren Ane, Arlene Diniz, Thais Oliveira, De Pat Müller. Editora Mundo Cristão, Capa Mole Em Português, 2023",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_735398-MLU74416795698_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_735398-MLU74416795698_022024-O.jpg",
      "price": 36.31
    },
    {
      "title": "Como Fazer Amigos E Influenciar Pessoas: Não Aplica, De : Dale Carnegie. Série Não Aplica, Vol. Não Aplica. Editora Sextante, Capa Mole, Edição Não Aplica Em Português, 2021",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_863720-MLU72590202223_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_863720-MLU72590202223_102023-O.jpg",
      "price": 41.1
    },
    {
      "title": "Divinamente, De Jonatas Leonio., Vol. 1. Editora Jesuscopy, Capa Mole Em Português, 2023",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_968495-MLU70815031252_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_968495-MLU70815031252_082023-O.jpg",
      "price": 49.9
    },
    {
      "title": "A Metamorfose De Franz Kafka Editora Ibc Em Português",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_880180-MLU50534789835_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_880180-MLU50534789835_062022-O.jpg",
      "price": 10
    },
    {
      "title": "Livro - O Menino Negro",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_848266-MLB48745218865_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_848266-MLB48745218865_012022-O.jpg",
      "price": 45.42
    },
    {
      "title": "Revista - Lições Bíblicas Ebd 2º Trimestre Adulto Aluno Cpad",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_792851-MLU75338142485_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_792851-MLU75338142485_032024-O.jpg",
      "price": 8
    },
    {
      "title": "Menino Que Aprendeu A Ver, O",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_870342-MLB48692344030_122021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_870342-MLB48692344030_122021-O.jpg",
      "price": 50.67
    },
    {
      "title": "Livro Orgulho E Orgulho E Preconceito - Jane Austen",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_659097-MLU54967468167_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_659097-MLU54967468167_042023-O.jpg",
      "price": 11.96
    },
    {
      "title": "Artes Com As Mãos, De Ciranda Cultural. Série Artes Com As Mãos Editora Ciranda Cultural, Capa Mole, Edição 1 Em Português, 2021",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_844896-MLU50457168780_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844896-MLU50457168780_062022-O.jpg",
      "price": 8
    },
    {
      "title": "Código De Defesa Do Consumidor Versão Bolso, De Editora Capri. Editora Capri, Capa Mole, Edição 6 Em Português, 2024",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_704144-MLU74280178306_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_704144-MLU74280178306_022024-O.jpg",
      "price": 14.88
    },
    {
      "title": "Apostila Caixa 2024 - Técnico Bancário Novo",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_986487-MLU74731697953_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986487-MLU74731697953_022024-O.jpg",
      "price": 84.91
    },
    {
      "title": "O Animal Social, De Elliot Aronson. Editora Goya, Capa Mole, Edição 1 Em Português, 2023",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_806003-MLU74077101878_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_806003-MLU74077101878_012024-O.jpg",
      "price": 78.99
    },
    {
      "title": "O Alquimista, De Paulo Coelho. Editora Paralela, Capa Mole Em Português, 2019",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_651390-MLU50698768601_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_651390-MLU50698768601_072022-O.jpg",
      "price": 33.9
    },
    {
      "title": "A Morte É Um Dia Que Vale A Pena Viver, De Ana Claudia Quintana Arantes. Editora Sextante, Capa Mole, Edição 1 Em Português, 2019",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_603051-MLU69146528279_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_603051-MLU69146528279_042023-O.jpg",
      "price": 35.8
    },
    {
      "title": "Experiências Com Deus - Devocional - Henry & Richard Blackaby: Henry E Richard Blackaby, De Henry & Richard Blackaby. Editorial Associação Editora Inspire, Tapa Mole En Português, 2023",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_612201-MLU75620045637_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_612201-MLU75620045637_042024-O.jpg",
      "price": 41.9
    },
    {
      "title": "Livro Outlive Peter Attia Intrínseca",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_619723-MLB70704699919_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619723-MLB70704699919_072023-O.jpg",
      "price": 74.9
    },
    {
      "title": "A Arte Da Sedução, De Robert Greene. Editora Rocco, Capa Dura Em Português, 2022",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_898115-MLU75134706373_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_898115-MLU75134706373_032024-O.jpg",
      "price": 69.47
    },
    {
      "title": "A Coragem De Não Agradar: Não Aplica, De Tradução: Ivo Korytowski. Série Não Aplica, Vol. Não Aplica. Editora Sextante, Capa Mole, Edição Não Aplica Em Português, 2021",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_826050-MLU72592260257_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_826050-MLU72592260257_102023-O.jpg",
      "price": 36.23
    },
    {
      "title": "Livro Fisico Extraordinário De R.j. Palacio",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_939632-MLB74220109467_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_939632-MLB74220109467_012024-O.jpg",
      "price": 39.9
    },
    {
      "title": "Livro Código De Defesa Do Consumidor Atualizado 2024 - 35ª Edição",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_958490-MLB71922465952_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958490-MLB71922465952_092023-O.jpg",
      "price": 27.21
    },
    {
      "title": "Bíblia Infantil (letras Grandes), De © Todolivro Ltda.. Editora Todolivro Distribuidora Ltda., Capa Dura Em Português, 2019",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_940576-MLU74118458326_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940576-MLU74118458326_012024-O.jpg",
      "price": 12.5
    },
    {
      "title": "Essencialismo: Não Aplica, De : Greg Mckeown. Série Não Aplica, Vol. Não Aplica. Editora Sextante, Capa Mole, Edição Não Aplica Em Português, 2020",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_748328-MLU50420539637_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_748328-MLU50420539637_062022-O.jpg",
      "price": 43.64
    },
    {
      "title": "A Psicologia Financeira: Lições Atemporais Sobre Fortuna, Ganância E Felicidade, De Housel, Morgan. Casa Dos Livros Editora Ltda, Capa Mole Em Português, 2021",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_751273-MLU50465103725_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_751273-MLU50465103725_062022-O.jpg",
      "price": 28.2
    },
    {
      "title": "Deus Casamento Família Reconstruindo O Fundamento Bíblico, De Andreas Köstenberger E David W. Jones. Editora Vida Nova Em Português, 2017",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_600269-MLB44269121755_122020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600269-MLB44269121755_122020-O.jpg",
      "price": 59.74
    },
    {
      "title": "Gatilhos Mentais: Não Aplica, De : Gustavo Ferreira. Série Não Aplica, Vol. Não Aplica. Editora Dvs Editora, Capa Mole, Edição Não Aplica Em Português, 2021",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_956177-MLU72592258359_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_956177-MLU72592258359_102023-O.jpg",
      "price": 35.4
    },
    {
      "title": "Droga Da Obediencia  A  5 Ed - Moderna",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_998310-MLB50612551267_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_998310-MLB50612551267_072022-O.jpg",
      "price": 54.72
    },
    {
      "title": "Kit Sem Esforço + Essencialismo: Não Aplica, De : Greg Mckeown. Não Aplica, Vol. Não Aplica. Editorial Sextante, Tapa Mole, Edición Não Aplica En Português, 2021",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_807779-MLU72591481601_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_807779-MLU72591481601_102023-O.jpg",
      "price": 71.8
    },
    {
      "title": "Evangelho Segundo O Espiritismo (o) - Normal Espiral",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_600948-MLB50925609615_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_600948-MLB50925609615_072022-O.jpg",
      "price": 29.19
    },
    {
      "title": "Bíblia Sagrada Nvi Feminina Capa Dura Letra Média Magnolia",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_844454-MLB48321446361_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_844454-MLB48321446361_112021-O.jpg",
      "price": 35.9
    },
    {
      "title": "Caminho Da Alfabetização, De © Todolivro Ltda.. Editora Todolivro Distribuidora Ltda., Capa Mole Em Português, 2021",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_742749-MLU74227174373_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_742749-MLU74227174373_012024-O.jpg",
      "price": 8.02
    },
    {
      "title": "Acolhendo Sua Criança Interior: Uma Abordagem Inovadora Para Curar As Feridas Da Infância, De Stahl, Stefanie. Gmt Editores Ltda.,editora Sextante,editora Sextante, Capa Mole Em Português, 2022",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_787174-MLU72972259625_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_787174-MLU72972259625_112023-O.jpg",
      "price": 45.33
    },
    {
      "title": "A Hora Da Estrela (edição Comemorativa), De Lispector, Clarice. Editora Rocco Ltda, Capa Mole Em Português, 2020",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_779905-MLU74993915490_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_779905-MLU74993915490_032024-O.jpg",
      "price": 26.18
    },
    {
      "title": "Chega De Regras, De Larry Crabb., Vol. 1. Editora Jesuscopy, Capa Mole Em Português, 2022",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_696078-MLB54078756920_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_696078-MLB54078756920_022023-O.jpg",
      "price": 43.9
    },
    {
      "title": "O Ceticismo Da Fé: Deus: Uma Dúvida, Uma Certeza, Uma Distorção, De Silva, Rodrigo. Novo Século Editora E Distribuidora Ltda., Capa Mole Em Português, 2018",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_917858-MLU74226084093_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_917858-MLU74226084093_012024-O.jpg",
      "price": 49.9
    },
    {
      "title": "Mentiras Em Que As Mulheres Acreditam E A Verdade Que As Liberta, De Nancy Leigh Demoss. Editora Vida Nova, Capa Mole Em Português, 2022",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_867089-MLB26170780577_102017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_867089-MLB26170780577_102017-O.jpg",
      "price": 40.82
    },
    {
      "title": "As Crônicas De Nárnia: O Leão, A Feiticeira E O Guarda-roupa.",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_888289-MLB53458157412_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_888289-MLB53458157412_012023-O.jpg",
      "price": 43.56
    },
    {
      "title": "Os Caminhos Levam A Roma ( Scott Hahn )",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_661406-MLB50233283846_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_661406-MLB50233283846_062022-O.jpg",
      "price": 40.26
    },
    {
      "title": "100 Revistas Caça Palavras Passatempos Atacado ",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_678585-MLB49431718233_032022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_678585-MLB49431718233_032022-O.jpg",
      "price": 75
    },
    {
      "title": "Maquiavel Pedagogo ( Pascal Bernardin )",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_833734-MLB50236933858_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_833734-MLB50236933858_062022-O.jpg",
      "price": 26.35
    },
    {
      "title": "Livro Ilha Perdida, A",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_901899-MLB49841644432_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_901899-MLB49841644432_052022-O.jpg",
      "price": 39.9
    },
    {
      "title": "Livro Fisico Os Segredos Da Mente Milionária De T. Harv Eker",
      "condition_id": 2,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_958059-MLB51616879105_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958059-MLB51616879105_092022-O.jpg",
      "price": 33.66
    },
    {
      "title": "O Príncipe Maquiavel - Edição De Luxo",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_812562-MLU74315657681_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_812562-MLU74315657681_012024-O.jpg",
      "price": 19.96
    },
    {
      "title": "9 Meses Com Maria, De Erlin, Padre Luís. Editora Ação Social Claretiana, Capa Mole Em Português, 2020",
      "condition_id": 1,
      "category_id": 28,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_867389-MLU50423731174_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_867389-MLU50423731174_062022-O.jpg",
      "price": 33.36
    },
    {
      "title": "Cd Joel Hoekstra's 13 (whitesnake) -running Games (slipcase)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_878654-MLU54977522875_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_878654-MLU54977522875_042023-O.jpg",
      "price": 52
    },
    {
      "title": "Obras Primas Do Terror Horror Asiático - 6 Filmes 6 Cards",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_910846-MLU73670853889_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_910846-MLU73670853889_122023-O.jpg",
      "price": 114.9
    },
    {
      "title": "Limpador De Lentes Cd Dvd Bluray Aparelho Newness Original",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_804803-MLU71287439823_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_804803-MLU71287439823_082023-O.jpg",
      "price": 35.99
    },
    {
      "title": "Novo Vinil Arctic Monkeys Tranquility Base Hotel+casino",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_998612-MLU72763620938_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_998612-MLU72763620938_112023-O.jpg",
      "price": 284.99
    },
    {
      "title": "Soundgarden Badmotorfinger Lp",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_924216-MLC41363846284_042020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924216-MLC41363846284_042020-O.jpg",
      "price": 299
    },
    {
      "title": "Dvd 60 Segundos - Original & Lacrado",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_902975-MLU70354978707_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902975-MLU70354978707_072023-O.jpg",
      "price": 109.9
    },
    {
      "title": "Canudo Lax Vox Respiratoria Voz Tubo Ressonância 35cmx9mm Or",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_667186-MLB52896480214_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_667186-MLB52896480214_122022-O.jpg",
      "price": 19.99
    },
    {
      "title": "Lp Vinil Raimundos Raimundos 1994 180g Lacrado Lavô Tá Novo",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_660331-MLU73801753567_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_660331-MLU73801753567_012024-O.jpg",
      "price": 249
    },
    {
      "title": "Tubo Ressonância Lax Vox Original Etvso 35cmx9 Translucido",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_777606-MLB70716867677_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_777606-MLB70716867677_072023-O.jpg",
      "price": 22.99
    },
    {
      "title": "Cd Deep Purple In Rock Original Novo Lacrado",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_876171-MLU69251301709_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_876171-MLU69251301709_052023-O.jpg",
      "price": 39.9
    },
    {
      "title": "Cd Pearl Jam - Ten (lacrado)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_633380-MLU71431770198_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_633380-MLU71431770198_092023-O.jpg",
      "price": 32.68
    },
    {
      "title": "O Incrível Homem Que Encolheu - Dvd - Grant Williams - Jack Arnold",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_634053-MLU70357063805_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_634053-MLU70357063805_072023-O.jpg",
      "price": 42.9
    },
    {
      "title": "Cd Sambas Enredo Carnaval Sp 2024 (cd Triplo Digipack)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_740425-MLU73268827073_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_740425-MLU73268827073_122023-O.jpg",
      "price": 82.9
    },
    {
      "title": "Lp Cartola - Verde Que Te Quero Rosa | Novo, Lacrado",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_875169-MLU54981202904_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_875169-MLU54981202904_042023-O.jpg",
      "price": 272.91
    },
    {
      "title": "Tubo Ressonância Lax Vox Original",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_648247-MLB49409903707_032022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_648247-MLB49409903707_032022-O.jpg",
      "price": 20.93
    },
    {
      "title": "Cd Amon Amarth The Pursuit Of Vikings 25 Years (2dvd1cd)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_637455-MLU54970096827_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_637455-MLU54970096827_042023-O.jpg",
      "price": 110
    },
    {
      "title": "Blu-ray Filme O Mistério Do Relógio Na Parede - Dublado",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_726359-MLU74323773738_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_726359-MLU74323773738_022024-O.jpg",
      "price": 25
    },
    {
      "title": "Cd - Vanusa Santos Flores",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_743002-MLU69146130511_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_743002-MLU69146130511_042023-O.jpg",
      "price": 18.84
    },
    {
      "title": "Dvd João Neto E Frederico Ao Vivo Versão Do Álbum Estandar",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_923607-MLU69802748766_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923607-MLU69802748766_062023-O.jpg",
      "price": 44
    },
    {
      "title": "Um Homem Só - Dvd - Vladimir Brichta - Mariana Ximenes",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_689067-MLU71099061347_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689067-MLU71099061347_082023-O.jpg",
      "price": 19
    },
    {
      "title": "O Álbum De Vinil Anderson Paak Malibu É Importado",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_694695-MLU69233688035_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694695-MLU69233688035_052023-O.jpg",
      "price": 494
    },
    {
      "title": "Cd Viper - To Live Again - Live In São Paulo (2014) Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_924057-MLU69775204892_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924057-MLU69775204892_062023-O.jpg",
      "price": 46
    },
    {
      "title": "Placa Seja Educado Recolha As Fezes  Do Seu Animal",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_608602-MLB46915650699_072021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_608602-MLB46915650699_072021-O.jpg",
      "price": 19.7
    },
    {
      "title": "F.r. David Greatest Hits Cd Remaster Anos 80",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_892095-MLB40598229067_012020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892095-MLB40598229067_012020-O.jpg",
      "price": 27.5
    },
    {
      "title": "Dvd Sambô - Ao Vivo - Original E Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_648763-MLU69233687353_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_648763-MLU69233687353_052023-O.jpg",
      "price": 18.19
    },
    {
      "title": "Caixinha Caixa De Música Cant Help Felling In Love",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_962242-MLB69658041857_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_962242-MLB69658041857_052023-O.jpg",
      "price": 69.99
    },
    {
      "title": "Dvd Marcelo Camelo Mormaço (2013) - 1ª Prensagem Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_959255-MLU69771914481_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_959255-MLU69771914481_062023-O.jpg",
      "price": 99
    },
    {
      "title": "Spiritual Beggars - Earth Blues (slipcase) (cd Lacrado)",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_625496-MLU69251301719_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_625496-MLU69251301719_052023-O.jpg",
      "price": 33.9
    },
    {
      "title": "Dvd - Volte Para Casa, Snoopy - ( 1972 ) - Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_727953-MLU70847787703_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_727953-MLU70847787703_082023-O.jpg",
      "price": 19.9
    },
    {
      "title": "Entrails - Rise Of The Reaper (slipcase) (cd Lacrado)",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_766954-MLU69916206362_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_766954-MLU69916206362_062023-O.jpg",
      "price": 47
    },
    {
      "title": "Harakiri For The Sky - Mmxxii Cd",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_726016-MLU72549745797_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_726016-MLU72549745797_102023-O.jpg",
      "price": 51.9
    },
    {
      "title": "Tubo Ressonância Lax Vox + Respiron  E Skaker Classic Kit",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_923285-MLB53548648295_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_923285-MLB53548648295_012023-O.jpg",
      "price": 134.6
    },
    {
      "title": "Cd Ana Carolina - Estampado (2003) Original Novo",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_885953-MLU69842860308_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_885953-MLU69842860308_062023-O.jpg",
      "price": 18.54
    },
    {
      "title": "Bluray Retroceder Nunca Render-se Jamais Cards L A C R A D O",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_784774-MLU74605434483_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_784774-MLU74605434483_022024-O.jpg",
      "price": 99.9
    },
    {
      "title": "Cd - Motörhead Welcome To The Bear Trap",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_680069-MLU54989888464_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_680069-MLU54989888464_052023-O.jpg",
      "price": 28
    },
    {
      "title": "Dvd Gian & Giovani - Uma História De Sucesso",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_621781-MLU69275038484_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621781-MLU69275038484_052023-O.jpg",
      "price": 27.98
    },
    {
      "title": "Embalagem Papelão Para Correio - Lp - Vinil - 10 Unidades",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_694092-MLB53314079676_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_694092-MLB53314079676_012023-O.jpg",
      "price": 34.9
    },
    {
      "title": "Sílica Gel Branca - Pacote De 1 Kg - Grânulos De 4 A 8 Mm",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_894517-MLA52612758687_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_894517-MLA52612758687_112022-O.jpg",
      "price": 55
    },
    {
      "title": "Cd - Kreator  Gods Of Violence (cd + Dvd)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_965875-MLU70680491140_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_965875-MLU70680491140_072023-O.jpg",
      "price": 65.15
    },
    {
      "title": "Você E As Nuvens - Dvd - Miguel Aceves Mejía",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_977426-MLU74516543565_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977426-MLU74516543565_022024-O.jpg",
      "price": 19.9
    },
    {
      "title": "Blackberry Smoke - Holding All The Roses",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_606328-MLU69268318503_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_606328-MLU69268318503_052023-O.jpg",
      "price": 52
    },
    {
      "title": "Dvd Scorpions - Em Dobro: S. Basel 2009 & Super Rock 1984",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_676640-MLU69750052228_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_676640-MLU69750052228_062023-O.jpg",
      "price": 14.69
    },
    {
      "title": "Box Dvd: Arrow - 4 Temporada Completa - Com 5 Dvd's",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_971665-MLU70654300034_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_971665-MLU70654300034_072023-O.jpg",
      "price": 30.89
    },
    {
      "title": "Cd / Luiz Gonzaga E Outros = Duetos Com O Mestre Lua Lacrad",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_827454-MLU70683722741_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_827454-MLU70683722741_072023-O.jpg",
      "price": 24
    },
    {
      "title": "Orquestra Dos Meninos Dvd Novo Original Frete Grátis",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_706216-MLU71702656614_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_706216-MLU71702656614_092023-O.jpg",
      "price": 14.94
    },
    {
      "title": "Cd - Adriana Calcanhotto O Microbio Do Samba Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_796086-MLB32634782365_102019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_796086-MLB32634782365_102019-O.jpg",
      "price": 15.58
    },
    {
      "title": "Nestor-kids In A Ghost Town(slipcase/hard Sueco+bônus)",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_689368-MLB75177377912_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689368-MLB75177377912_032024-O.jpg",
      "price": 65
    },
    {
      "title": "Cd Ramones - Cd Halfway To Sanity 1987 - Origem Usa",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_690823-MLU54981216068_042023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_690823-MLU54981216068_042023-O.jpg",
      "price": 34.24
    },
    {
      "title": "Dvd Filme De Acordo Com Spencer - Original Lacrado ",
      "condition_id": 1,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_961862-MLU70675313458_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961862-MLU70675313458_072023-O.jpg",
      "price": 19.9
    },
    {
      "title": "Dvd Peter Gabriel - New Blood Live - Lacrado",
      "condition_id": 2,
      "category_id": 29,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_889268-MLU70654301664_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_889268-MLU70654301664_072023-O.jpg",
      "price": 16.72
    },
    {
      "title": "Creatina Monohidratada 250g  100% Pura  Soldiers Nutrition",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_991730-MLU75209648038_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_991730-MLU75209648038_032024-O.jpg",
      "price": 57.39
    },
    {
      "title": "Lubrificante E Hidratante Gel Intimo Natural Feel 50ml",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_948853-MLU74199215765_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_948853-MLU74199215765_012024-O.jpg",
      "price": 78.8
    },
    {
      "title": "Suplemento Em Pó Dark Lab Creatine Premium Creatina Em Pote De 300g",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_871276-MLU74554756383_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871276-MLU74554756383_022024-O.jpg",
      "price": 77.43
    },
    {
      "title": "Whey Protein Isolado Iso Blend Complex 2kg Pretorian Sabor Cookies E Cream",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_810625-MLA52733606403_122022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_810625-MLA52733606403_122022-O.jpg",
      "price": 94.55
    },
    {
      "title": "G-tech Gp400 Branco Medidor De Pressão Arterial Digital",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_967605-MLU72579698542_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_967605-MLU72579698542_112023-O.jpg",
      "price": 71.62
    },
    {
      "title": "3x Suplemento Em Cápsulas Katigua Óleo Semente De Abóbora Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_850130-MLU73980598170_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_850130-MLU73980598170_012024-O.jpg",
      "price": 118.2
    },
    {
      "title": "Creatina Monohidratada 600g - 100% Pura - Soldiers Nutrition",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_919189-MLU75209627490_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_919189-MLU75209627490_032024-O.jpg",
      "price": 119.9
    },
    {
      "title": "Algodão Bellacotton Quadrado Para Bebê - 3 Pacotes",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_956562-MLU73049562787_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_956562-MLU73049562787_112023-O.jpg",
      "price": 58.41
    },
    {
      "title": "Suplemento Em Pó Black Skull Caveira Preta Turbo Polvo 300g",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_941774-MLA52624902588_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_941774-MLA52624902588_112022-O.jpg",
      "price": 36.25
    },
    {
      "title": "Algodão Bellacotton Quadrado Para Bebê - 6 Pacotes",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_761355-MLU72967454712_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_761355-MLU72967454712_112023-O.jpg",
      "price": 125.72
    },
    {
      "title": "Suplemento Em Cápsula Vitafor  Omegafor Plus Óleo De Peixe Plus Sabor  Without Flavor Em Pote De 240g 240 Un",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_738572-MLU75143558458_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_738572-MLU75143558458_032024-O.jpg",
      "price": 228.4
    },
    {
      "title": "Agulha HiPodérmica Descartável 20x0,55mm Medix Cx C/100 Unid",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_916244-MLB51718487776_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_916244-MLB51718487776_092022-O.jpg",
      "price": 16.36
    },
    {
      "title": "Ômega Brain 60 Cápsulas Essential Nutrition Sabor Natural",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_899295-MLU75587640653_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899295-MLU75587640653_042024-O.jpg",
      "price": 178.41
    },
    {
      "title": "Creatina Turbo - 300g - Caveira Preta / Black Skull Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_750774-MLU74553519739_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_750774-MLU74553519739_022024-O.jpg",
      "price": 44.69
    },
    {
      "title": "Palmilha De Gel Anatomica Confortável",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_714634-MLB44104992796_112020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_714634-MLB44104992796_112020-O.jpg",
      "price": 23.9
    },
    {
      "title": "Coenzima Q10 - 60 Cap (100mg P/ Porção) - Vitafor Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_987962-MLA74808089177_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_987962-MLA74808089177_022024-O.jpg",
      "price": 73
    },
    {
      "title": "100 Tiras De Glicose On Call Plus Ii",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_619318-MLB51249396899_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619318-MLB51249396899_082022-O.jpg",
      "price": 57.3
    },
    {
      "title": "Supradyn Ativa Cx 30 Comprimidos ",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_617786-MLU72612918407_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_617786-MLU72612918407_112023-O.jpg",
      "price": 66.93
    },
    {
      "title": "Medidor De Pressão Arterial Automatico De Braço Gtech La800 Cor Branco",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_895208-MLU72760181302_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_895208-MLU72760181302_112023-O.jpg",
      "price": 130.12
    },
    {
      "title": "Colágeno Hidrolisado Sabor Baunilha 400g Stem Pharmaceutical",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_902126-MLB43802524015_102020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_902126-MLB43802524015_102020-O.jpg",
      "price": 159.9
    },
    {
      "title": "Kit 3 Óleo De Semente De Abóbora 60 Capsulas Katigua",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_734781-MLU74668095768_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_734781-MLU74668095768_022024-O.jpg",
      "price": 115
    },
    {
      "title": "Agulhas Para Carboxiterapia E Ozonioterapia 13x0,30mm 100 Unidade",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_969909-MLU72032934470_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_969909-MLU72032934470_102023-O.jpg",
      "price": 37.9
    },
    {
      "title": "Suplemento Em Cápsulas Magnesio 500mg 120cps Bionutri",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_814694-MLU75290419325_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814694-MLU75290419325_032024-O.jpg",
      "price": 30.46
    },
    {
      "title": "150 Tiras De Glicose On Call Plus Ii",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_915318-MLB51249359706_082022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_915318-MLB51249359706_082022-O.jpg",
      "price": 102
    },
    {
      "title": "Modulen Ibd 400g - Nestlé Sabor Neutro (sem Sabor)",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_933304-MLU72600888647_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_933304-MLU72600888647_102023-O.jpg",
      "price": 319.12
    },
    {
      "title": "Katigua Oleo De Semente De Abobora 120 Cápsulas",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_619358-MLU75593407999_042024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_619358-MLU75593407999_042024-O.jpg",
      "price": 57.33
    },
    {
      "title": "Oxímetro De Pulso Para Dedo G-tech Led Branco/azul",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_961121-MLU72748852728_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_961121-MLU72748852728_112023-O.jpg",
      "price": 71.88
    },
    {
      "title": "2 Potes Vitamina B12 Metilcobalamina - 60caps Nutrify B 12",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_800982-MLB74086482413_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800982-MLB74086482413_012024-O.jpg",
      "price": 57.98
    },
    {
      "title": "Nebulizador E Inalador De Rede Vibratória Nebmesh2 G-tech Cor Branco 110v/220v",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_698278-MLU72675256832_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_698278-MLU72675256832_112023-O.jpg",
      "price": 129.99
    },
    {
      "title": "Espessante Alimentar Espessa Mais Lata 400g - Mais Care Sabor Sem Sabor",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_604043-MLB31885765210_082019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_604043-MLB31885765210_082019-O.jpg",
      "price": 52.5
    },
    {
      "title": "Máscara Descartável Tripla Clip Nasal Kit C/ 50 Und - Anvisa Cor Branco",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_924517-MLU74618669064_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_924517-MLU74618669064_022024-O.jpg",
      "price": 12.16
    },
    {
      "title": "Body Protein Equaliv 600g Frutas Vermelhas. Sabor Frutos Vermelhos",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_651220-MLA48355610708_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_651220-MLA48355610708_112021-O.jpg",
      "price": 198
    },
    {
      "title": "Albumina Naturovos 1kg - Baunilha",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_871341-MLA54760733259_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871341-MLA54760733259_032023-O.jpg",
      "price": 89.67
    },
    {
      "title": "Agulha Acupuntura 25x30 1000 Un Pcte Lautz(importada)",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_788407-MLU73992713502_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_788407-MLU73992713502_012024-O.jpg",
      "price": 171.81
    },
    {
      "title": "Suplemento Em Sachês Central Nutrition Aminnu Aminoácidos Sabor Tangerina Em Caixa De 300ml 30 Un",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_627960-MLA51698833010_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627960-MLA51698833010_092022-O.jpg",
      "price": 212.9
    },
    {
      "title": "3x Compressas De Gazes 9 Fios 500 Unidades Pacote Curativo",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_672008-MLB53300058140_012023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_672008-MLB53300058140_012023-O.jpg",
      "price": 48.36
    },
    {
      "title": "Suplemento Em Pó Essential Nutrition  Collagen Skin Colágeno Sabor Cranberry Em Lata De 330g",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_808257-MLU74827630101_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_808257-MLU74827630101_022024-O.jpg",
      "price": 173.13
    },
    {
      "title": "Purificador/esterilizador De Ar Sterilair Str4 Bivolt Branco 110v/220v",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_932953-MLU72637279431_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_932953-MLU72637279431_112023-O.jpg",
      "price": 497
    },
    {
      "title": "Albumina Naturovos 1kg - Chocolate",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_605171-MLA54764145336_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_605171-MLA54764145336_032023-O.jpg",
      "price": 90
    },
    {
      "title": "Suplemento Em Cápsula Black Skull  Caveira Preta Thermoflame Cafeína Thermoflame Em Pote De 96g 120 Un",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_687340-MLA49783983643_042022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_687340-MLA49783983643_042022-O.jpg",
      "price": 27.84
    },
    {
      "title": "Soluções De Limpeza De Lentes De Contato  Bausch + Lomb Solução Multiação Simplus 120ml",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_904854-MLA72596354001_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904854-MLA72596354001_102023-O.jpg",
      "price": 46.7
    },
    {
      "title": "Clinical Labs Colageno Tipo 2 + Vitaminas Joelho E Articulação 60 Capsulas Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_648816-MLU75457007463_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_648816-MLU75457007463_032024-O.jpg",
      "price": 27.67
    },
    {
      "title": "Bolsa Colostomia Opaca Recortável 13-64mm Cx C15 Unid- Casex",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_792557-MLU71712001378_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_792557-MLU71712001378_092023-O.jpg",
      "price": 170.09
    },
    {
      "title": "Multivitamínico Growth Supplements 120 Caps 700mg Original",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_825653-MLB45583896975_042021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_825653-MLB45583896975_042021-O.jpg",
      "price": 59.05
    },
    {
      "title": "Nac 60 Cápsulas Vitafor",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_673727-MLA74780657605_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_673727-MLA74780657605_022024-O.jpg",
      "price": 68.64
    },
    {
      "title": "Polihexanida Solução Phmb 350ml (tipo Prontosan)",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_920637-MLU74117397450_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_920637-MLU74117397450_012024-O.jpg",
      "price": 65.32
    },
    {
      "title": "True Vegan Proteina Vegana Sabor Doce De Leite 837g True Source",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_889615-MLB48024018732_102021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_889615-MLB48024018732_102021-O.jpg",
      "price": 168
    },
    {
      "title": "Bolsa Gelo Ortopédica Joelho Costas Universal 1400ml",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_952061-MLU70627239235_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_952061-MLU70627239235_072023-O.jpg",
      "price": 29.72
    },
    {
      "title": "2 Potes Do Morosil Original. Galena 500mg Fórmula Exclusiva Com 60 Doses",
      "condition_id": 1,
      "category_id": 30,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_778650-MLA53833558567_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_778650-MLA53833558567_022023-O.jpg",
      "price": 121.35
    },
    {
      "title": "Purificador/esterilizador De Ar Sterilair Str-4 Bivolt Cor Preto 110v/220v",
      "condition_id": 2,
      "category_id": 30,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_896847-MLU72612725951_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_896847-MLU72612725951_112023-O.jpg",
      "price": 497
    },
    {
      "title": "Aluguel De Van Micro Onibus 15 A 31 Lugares A Partir R$ 200",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_781031-MLB74109066053_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_781031-MLB74109066053_012024-O.jpg",
      "price": null
    },
    {
      "title": "Cabine De Foto Ou Spinner 360° Aluguel 4h São Paulo E Região",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_737382-MLB41098424133_032020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_737382-MLB41098424133_032020-O.jpg",
      "price": 980
    },
    {
      "title": "Certificação De Rede Fluke Calibrado Dsx-5000  Aluguefluke",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_664314-MLB50528046195_062022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_664314-MLB50528046195_062022-O.jpg",
      "price": 5
    },
    {
      "title": "Aluguel Mesas, Cadeiras E Toalhas - Lapa, Pirituba E Região",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_927387-MLB40180746082_122019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_927387-MLB40180746082_122019-O.jpg",
      "price": 10
    },
    {
      "title": "Totem De Foto E Cabine De Fotos Para Festa E Vídeo 360",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_647995-MLB31499751322_072019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_647995-MLB31499751322_072019-O.jpg",
      "price": 200
    },
    {
      "title": "Locacao De Cadeiras De Ferro Madeira E Plastico E Mesas",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_852154-MLB40983355800_032020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_852154-MLB40983355800_032020-O.jpg",
      "price": 8
    },
    {
      "title": "Buffet Em Domicílio - Crepe Frances",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_627882-MLB26711949700_012018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_627882-MLB26711949700_012018-O.jpg",
      "price": 50
    },
    {
      "title": "Locação Mesas, Cadeiras, Toalhas, Fliperama Zona Leste",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_13028-MLB20071675089_032014-I.jpg",
      "picture": "http://http2.mlstatic.com/D_13028-MLB20071675089_032014-O.jpg",
      "price": 7
    },
    {
      "title": "Dj,som,iluminação,telão,fumaça,tapete Xadrez,festa,dj Jaba",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_199115-MLB25165967652_112016-I.jpg",
      "picture": "http://http2.mlstatic.com/D_199115-MLB25165967652_112016-O.jpg",
      "price": 600
    },
    {
      "title": "Impressão Digital Pintura Mídia Rígido Flexível Cmyk+branco",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_653089-MLB51900241263_102022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_653089-MLB51900241263_102022-O.jpg",
      "price": null
    },
    {
      "title": "Mateus Mudancas - Fretes, Mudancas E Transportes Em Geral",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_842709-MLB49287016074_032022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_842709-MLB49287016074_032022-O.jpg",
      "price": null
    },
    {
      "title": "Aluguel Videokê Karaokê São Paulo E Guarulhos Som Dj Telão ",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_980296-MLB50725295258_072022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_980296-MLB50725295258_072022-O.jpg",
      "price": null
    },
    {
      "title": "Locação Cesto Aéreo Isolado",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_770284-MLB29644744939_032019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_770284-MLB29644744939_032019-O.jpg",
      "price": null
    },
    {
      "title": "Cama Maca Aluguel Quick Massagem Shiatsu Pós Cirurgia Of Sp",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_767659-MLB49018936984_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_767659-MLB49018936984_022022-O.jpg",
      "price": null
    },
    {
      "title": "Montador De Móveis",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_671913-MLB48742078137_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_671913-MLB48742078137_012022-O.jpg",
      "price": null
    },
    {
      "title": "Som E Luz Pequenos Eventos/festas/bandas/ Corporativos",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_791125-MLB25384126539_022017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_791125-MLB25384126539_022017-O.jpg",
      "price": null
    },
    {
      "title": "Montador De Móveis Zona Sul E Toda São Paulo",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_886160-MLB48108939581_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_886160-MLB48108939581_112021-O.jpg",
      "price": null
    },
    {
      "title": "Frete Carreto Mudança Zona Centro Norte Sul Leste Litoral Sp",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_720201-MLB52669745957_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_720201-MLB52669745957_112022-O.jpg",
      "price": null
    },
    {
      "title": "Recuperação De Hd Dados, Recuperar Ssd Corrompido, Queimado.",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_6272-MLB5040738063_092013-I.jpg",
      "picture": "http://http2.mlstatic.com/D_6272-MLB5040738063_092013-O.jpg",
      "price": null
    },
    {
      "title": "Forro De Isopor Instalado, (11)985746085 Whats (11) 41160771",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_695800-MLB70916711876_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_695800-MLB70916711876_082023-O.jpg",
      "price": 50
    },
    {
      "title": "Cama Hospitalar  - Locação Aluguel - Mensal",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_751191-MLB49138859269_022022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_751191-MLB49138859269_022022-O.jpg",
      "price": 420
    },
    {
      "title": "Montador De Móveis Zona Norte, Zona Leste E Guarulhos ",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_650837-MLB48108587340_112021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_650837-MLB48108587340_112021-O.jpg",
      "price": null
    },
    {
      "title": "Conserto Modulo E Painel Volvo L60 L70 L90 Ec210",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_892987-MLB25594821294_052017-I.jpg",
      "picture": "http://http2.mlstatic.com/D_892987-MLB25594821294_052017-O.jpg",
      "price": 3600
    },
    {
      "title": "Pente De Piaçava Para Cobertura De Quiosques",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_19857-MLB20179460873_102014-I.jpg",
      "picture": "http://http2.mlstatic.com/D_19857-MLB20179460873_102014-O.jpg",
      "price": 27
    },
    {
      "title": "Locação De Mesas E Cadeiras De Madeira E Bistrô Zona Norte",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_669306-MLB43147590648_082020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_669306-MLB43147590648_082020-O.jpg",
      "price": null
    },
    {
      "title": "Aluguel De Tendas Campinas, 3x3 4x4 5x5 6x6 8x8 10x10",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_622128-MLB26616743836_012018-I.jpg",
      "picture": "http://http2.mlstatic.com/D_622128-MLB26616743836_012018-O.jpg",
      "price": null
    },
    {
      "title": "Gmp Retífica Peças Pistões Anéis Motor Popa Náutica Hélices",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_14002-MLB2846565124_062012-I.jpg",
      "picture": "http://http2.mlstatic.com/D_14002-MLB2846565124_062012-O.jpg",
      "price": null
    },
    {
      "title": "Aluguel De Mesas Cadeiras, Toalhas E Brinquedos Zona Sul",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_883578-MLB69532893513_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_883578-MLB69532893513_052023-O.jpg",
      "price": 8
    },
    {
      "title": "Locacao De Mesas E Cadeiras Plastico Ferro E Madeira",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_693463-MLB40983527986_032020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_693463-MLB40983527986_032020-O.jpg",
      "price": 16
    },
    {
      "title": "Aluguel De Vans C/motorista 11 99376-5513 A Partir De R$ 190",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_820358-MLB71321786999_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_820358-MLB71321786999_082023-O.jpg",
      "price": 190
    },
    {
      "title": "Piaçava, Sape Para Quiosque",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_889036-MLB32580435695_102019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_889036-MLB32580435695_102019-O.jpg",
      "price": 27
    },
    {
      "title": "Conserto Painel Caterpillar 924h 938h",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_615291-MLB41563097835_042020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_615291-MLB41563097835_042020-O.jpg",
      "price": 3600
    },
    {
      "title": "Aluguel Vans E Microônibus-aeroportos,festas,viagens,feiras",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_771863-MLB45928416971_052021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_771863-MLB45928416971_052021-O.jpg",
      "price": null
    },
    {
      "title": "Cabine Fotográfica, Totem Fotográfico, Plataforma 360 +",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_940096-MLB29654568964_032019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_940096-MLB29654568964_032019-O.jpg",
      "price": null
    },
    {
      "title": "Locacao De Vans A Partir R$200,00 Micro Onibus 15 A 33 Lug.",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_640662-MLB52319182694_112022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_640662-MLB52319182694_112022-O.jpg",
      "price": null
    },
    {
      "title": "Cabine Fotográfica, Totem Fotográfico, Espelho, Plataforma",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_921440-MLB70421520004_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_921440-MLB70421520004_072023-O.jpg",
      "price": null
    },
    {
      "title": "Aluguel Projetor 15.000 Lumens, Aluguel Caixa De Som, Telão ",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_653521-MLB54455629712_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_653521-MLB54455629712_032023-O.jpg",
      "price": 99.99
    },
    {
      "title": "Algodão Doce E  Pipoca Locacao",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_800242-MLB49824402295_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800242-MLB49824402295_052022-O.jpg",
      "price": null
    },
    {
      "title": "Mudanças, Carretos, Fretes, Ajudante Montador De Móveis Zona",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_850739-MLB50045974440_052022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_850739-MLB50045974440_052022-O.jpg",
      "price": 1
    },
    {
      "title": "Locação De Caminhão Com Cabine Suplementar Aluguel",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_675092-MLB48828255032_012022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_675092-MLB48828255032_012022-O.jpg",
      "price": null
    },
    {
      "title": "Compramos Tvs Lcd Led Telas Quebradas Compro Tv Quebrada",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_629026-MLB53688578400_022023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629026-MLB53688578400_022023-O.jpg",
      "price": null
    },
    {
      "title": "Locação De Kombi De 09 Lugares Belo Horizonte ",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_726958-MLB70479728121_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_726958-MLB70479728121_072023-O.jpg",
      "price": null
    },
    {
      "title": "Espaço Tiarlinda Eventos. (festas E Eventos Mooca)",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_946632-MLB29851971560_042019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_946632-MLB29851971560_042019-O.jpg",
      "price": null
    },
    {
      "title": "Conserto Do Modulo  Injeção Ecu Xt660 Ou Mt03 Erro 19",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_732778-MLB54480813872_032023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_732778-MLB54480813872_032023-O.jpg",
      "price": null
    },
    {
      "title": "Grafiato E Textura(partir De R$ 30,00 M2 Mat. E Mão De Obra)",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_412201-MLB20269478394_032015-I.jpg",
      "picture": "http://http2.mlstatic.com/D_412201-MLB20269478394_032015-O.jpg",
      "price": null
    },
    {
      "title": "Mudança Fretes E Carretos Transporte De Moto E 11-980616839",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_13939-MLB439103471_8369-I.jpg",
      "picture": "http://http2.mlstatic.com/D_13939-MLB439103471_8369-O.jpg",
      "price": null
    },
    {
      "title": "Locação Aluguel De Máquina De Neve Gelo Artificial - Frozen",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_958694-MLB31856817329_082019-I.jpg",
      "picture": "http://http2.mlstatic.com/D_958694-MLB31856817329_082019-O.jpg",
      "price": 230
    },
    {
      "title": "Gmp Retifica Peças Motor Popa Pistao Aneis Biela Helices Cdi",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_971332-MLB47145573857_082021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_971332-MLB47145573857_082021-O.jpg",
      "price": null
    },
    {
      "title": "Bobinadeira Cnc Manutenção & Vendas De Placas Digmotor Mega",
      "condition_id": 1,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_865844-MLB43824862958_102020-I.jpg",
      "picture": "http://http2.mlstatic.com/D_865844-MLB43824862958_102020-O.jpg",
      "price": null
    },
    {
      "title": "Karaokê Para Alugar |  Aluguel De Videokê Em São Paulo",
      "condition_id": 2,
      "category_id": 31,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_764494-MLB47011809150_082021-I.jpg",
      "picture": "http://http2.mlstatic.com/D_764494-MLB47011809150_082021-O.jpg",
      "price": null
    },
    {
      "title": "Bolador Enrolador Automático Seda Bolar Fácil Metal 110 Mm Cor Preto",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_664372-MLU71780441765_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_664372-MLU71780441765_092023-O.jpg",
      "price": 25.59
    },
    {
      "title": "Tinta Dynamic Blk Black Tatuagem /tattoo 240 Ml Eua",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_693064-MLA75288557659_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_693064-MLA75288557659_032024-O.jpg",
      "price": 289.52
    },
    {
      "title": "No Plastic 200g + Seal Up 30ml Mboah Tattoo Plastico Filme",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_635890-MLU74111587899_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_635890-MLU74111587899_012024-O.jpg",
      "price": 48.72
    },
    {
      "title": "Hidratante Para Tatuagem -restaurador Dérmico Neoskin",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_977987-MLU74128457579_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_977987-MLU74128457579_012024-O.jpg",
      "price": 79.99
    },
    {
      "title": "Vaselina Tattoo Jelly 730g Special Vaseline Tatuagem Amazon",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_658450-MLU74863686693_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_658450-MLU74863686693_032024-O.jpg",
      "price": 77.99
    },
    {
      "title": "Caixa De Filtro Aleda Azul Slim Extra Long - 10 Bags Sabor Sem Sabor",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_903319-MLU74192181725_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_903319-MLU74192181725_012024-O.jpg",
      "price": 54.99
    },
    {
      "title": "Apoio Suporte De Braço Tattoo Largo Mesa Regulagem + Cor Preto",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_814736-MLU72542354722_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_814736-MLU72542354722_112023-O.jpg",
      "price": 299.9
    },
    {
      "title": "Folhas Papel Hectográfico Roxo U20 Decalque Estencil Tattoo",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_629369-MLU72033690684_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_629369-MLU72033690684_102023-O.jpg",
      "price": 24.18
    },
    {
      "title": "Hidratante Para Tatuagem - Restaurador Dérmico Neoskin",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_806524-MLU72565812996_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_806524-MLU72565812996_112023-O.jpg",
      "price": 113
    },
    {
      "title": "Vela Votiva Prata 7 Dias 320g Tam Gg Kit Com 12un Cor Branco Fragrância Nenhuma Liso",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_759232-MLU72067669546_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_759232-MLU72067669546_102023-O.jpg",
      "price": 178.9
    },
    {
      "title": "Isquueiro Transparente Hiper Caixa C/ 50 Unidades",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_783209-MLU70360499891_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_783209-MLU70360499891_072023-O.jpg",
      "price": 48
    },
    {
      "title": "Incenso Massala Nag Champa Satya Sai Baba 12 Caixas De 15 Gr",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_952285-MLU72637230217_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_952285-MLU72637230217_112023-O.jpg",
      "price": 78.9
    },
    {
      "title": "Espuma Limpeza Tattoo Clean Up 200ml Electric Ink Tatuagem",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_715685-MLU73654179289_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_715685-MLU73654179289_122023-O.jpg",
      "price": 30.25
    },
    {
      "title": "Stencil Transfer It Para Tatuagem Electric Ink 120ml",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_988770-MLU73570002940_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_988770-MLU73570002940_122023-O.jpg",
      "price": 49
    },
    {
      "title": "Papel Hectografico U-20 Roxo 22x33 Hc-101 Hardcopy 10 Uni",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_908646-MLU74249306645_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_908646-MLU74249306645_012024-O.jpg",
      "price": 19
    },
    {
      "title": "Batoque Para Tatuagem Tamanho P - 500 Peças-",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_662832-MLU71851263386_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_662832-MLU71851263386_092023-O.jpg",
      "price": 36.66
    },
    {
      "title": "Seda King Paper Brown King Size Caixa C/ 20 Livretos",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_771011-MLU73552969827_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_771011-MLU73552969827_122023-O.jpg",
      "price": 29.9
    },
    {
      "title": "Tinta Electric Ink 30ml Tattoo Tatuagem Cor Preto Linha",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_800770-MLU71759962121_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_800770-MLU71759962121_092023-O.jpg",
      "price": 68
    },
    {
      "title": "Tinta Preta Tattoo Electric Ink Easy Glow Ultra Liner Black",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_879684-MLU73983280142_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_879684-MLU73983280142_012024-O.jpg",
      "price": 80
    },
    {
      "title": "Pomada Black Bee Para Tattoo Aftercare 20un Com 15g Tatuagem",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_931256-MLU70624988729_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_931256-MLU70624988729_072023-O.jpg",
      "price": 118.57
    },
    {
      "title": "Fonte Tatuagem Profissional Tattoo Hurricane Power Hp-2 Cor Preto",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_797708-MLU71978270352_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_797708-MLU71978270352_092023-O.jpg",
      "price": 195.44
    },
    {
      "title": "Caixa De Piteira Evening Neutral Tips Large",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_659757-MLU72840560571_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_659757-MLU72840560571_112023-O.jpg",
      "price": 37.36
    },
    {
      "title": "1 Porta Batoque De Acrílico Para Pigmento Micro E Tatuagem",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_936986-MLU73213606645_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936986-MLU73213606645_122023-O.jpg",
      "price": 22.9
    },
    {
      "title": "Kit 05 Biqueiras Bico + 05 Agulhas Tatuagem Tattoo Anvisa",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_904187-MLB74746132311_022024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_904187-MLB74746132311_022024-O.jpg",
      "price": 34.2
    },
    {
      "title": "Adesivo Cicatrizante De Tatuagem Tropical Derm 5cmx5m Tattoo",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_633606-MLU73123340059_112023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_633606-MLU73123340059_112023-O.jpg",
      "price": 60.9
    },
    {
      "title": "Tinta Inkdraw Stencil 150ml Para Decalque",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_978557-MLU74015138264_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_978557-MLU74015138264_012024-O.jpg",
      "price": 458
    },
    {
      "title": "Caixa Seda Zomo Perfect Pink Rosa C/25 Livretos Atacado Smok",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_775312-MLU73205972209_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_775312-MLU73205972209_122023-O.jpg",
      "price": 31.18
    },
    {
      "title": "Adesivo De Proteção Tatuagem Recente Cicatrização Perfeita",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_752310-MLA73110270838_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_752310-MLA73110270838_122023-O.jpg",
      "price": 196.62
    },
    {
      "title": "Espuma Electric Ink Clean Up Refil 1l - Limpeza Tattoo",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_968697-MLU74178621599_012024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_968697-MLU74178621599_012024-O.jpg",
      "price": 32.7
    },
    {
      "title": "Tinta Refil Inkdraw 100ml Tatuagem Stencil",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_986841-MLU71760217693_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_986841-MLU71760217693_092023-O.jpg",
      "price": 339
    },
    {
      "title": "Electric Ink Slimer Tattoo Gel - 400g",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_851088-MLU72536268560_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_851088-MLU72536268560_102023-O.jpg",
      "price": 35
    },
    {
      "title": "Máquina Rotativa Electra Pop Electric Ink Tatuagem Preta Cor Preto",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_838994-MLU72605522385_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_838994-MLU72605522385_102023-O.jpg",
      "price": 374
    },
    {
      "title": "1 Caixa De Seda Zomo Orgânica Com 50 Livretos Marrom",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_919195-MLU70139375436_062023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_919195-MLU70139375436_062023-O.jpg",
      "price": 46.5
    },
    {
      "title": "Impermeabilizante Corato 1l",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_751219-MLB72186123323_102023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_751219-MLB72186123323_102023-O.jpg",
      "price": 189.11
    },
    {
      "title": "Cleaner Antisséptico Mboah - 1000ml Tatuagem Tattoo",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 4,
      "thumbnail": "http://http2.mlstatic.com/D_926424-MLU70983843931_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_926424-MLU70983843931_082023-O.jpg",
      "price": 35.49
    },
    {
      "title": "Vaselina Tatuagem 150g Tattoo Hidratante",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_719912-MLU71046585172_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_719912-MLU71046585172_082023-O.jpg",
      "price": 27.9
    },
    {
      "title": "Stencil Transfer It Electric Ink 240ml - Tatuagem Tattoo",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_790505-MLU74730178746_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_790505-MLU74730178746_032024-O.jpg",
      "price": 57
    },
    {
      "title": "Filtro Piteira Aleda Slim Classico 2 Unid 150 Filtros Cada",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_708209-MLU71821973246_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_708209-MLU71821973246_092023-O.jpg",
      "price": 18.53
    },
    {
      "title": "Espuma Limpeza Clean Up 200ml Electric Ink Tattoo Tatuagem",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_658436-MLU74856573225_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_658436-MLU74856573225_032024-O.jpg",
      "price": 35.75
    },
    {
      "title": "Incenso Special Blend Sortidos 25 Caixas C/200 Varetas Total",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_871788-MLB51669914946_092022-I.jpg",
      "picture": "http://http2.mlstatic.com/D_871788-MLB51669914946_092022-O.jpg",
      "price": 37.99
    },
    {
      "title": "Vasigel Refrescante Tts Hamamelis+amêndoas 250g Tattoo",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_936269-MLU70624989057_072023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_936269-MLU70624989057_072023-O.jpg",
      "price": 32.49
    },
    {
      "title": "Kit 10 Pele Artificial Treino Tattoo Tatuagem Atacado",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_864304-MLU75113514643_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_864304-MLU75113514643_032024-O.jpg",
      "price": 37.69
    },
    {
      "title": "Caixa De Seda Lion Rolling Circus Edição Brasil",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_970427-MLU70810111117_082023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_970427-MLU70810111117_082023-O.jpg",
      "price": 45.49
    },
    {
      "title": "Kit 10 Caixas Incenso Vareta Indiano Legítimo Aromas Sortido Fragrância Sortidas",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_863642-MLU73331035048_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_863642-MLU73331035048_122023-O.jpg",
      "price": 27.9
    },
    {
      "title": "Bong De Vidro King Bong Afrika + Tela De Vidro",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_677764-MLU74993424649_032024-I.jpg",
      "picture": "http://http2.mlstatic.com/D_677764-MLU74993424649_032024-O.jpg",
      "price": 107.52
    },
    {
      "title": "20 Cartucho Tatuagem Traço E Pintura 3/5/7/9/11/13/15/23/27",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_621155-MLB73373967017_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_621155-MLB73373967017_122023-O.jpg",
      "price": 150
    },
    {
      "title": "Transfer Stick Amazon Bastão 50g Tatuagem Tattoo",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 2,
      "thumbnail": "http://http2.mlstatic.com/D_818836-MLU73474779754_122023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_818836-MLU73474779754_122023-O.jpg",
      "price": 49.75
    },
    {
      "title": "Incenso Senko Horyuko Japonês Budista 500 Bastonetes Fragrância Cedro",
      "condition_id": 1,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_865954-MLU69616031365_052023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_865954-MLU69616031365_052023-O.jpg",
      "price": 37.99
    },
    {
      "title": "Vaselina Coconut 440g Tattoo Vegana Tatuagem Óleo De Coco",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 3,
      "thumbnail": "http://http2.mlstatic.com/D_689497-MLU71711998070_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_689497-MLU71711998070_092023-O.jpg",
      "price": 54.75
    },
    {
      "title": "Tattoo Vaselina Slip - 800g",
      "condition_id": 2,
      "category_id": 32,
      "seller_id": 1,
      "thumbnail": "http://http2.mlstatic.com/D_899833-MLU71572914524_092023-I.jpg",
      "picture": "http://http2.mlstatic.com/D_899833-MLU71572914524_092023-O.jpg",
      "price": 63.59
    }
  ]
  , {}),

  down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};