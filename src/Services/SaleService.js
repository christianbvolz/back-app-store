const { StatusCodes } = require("http-status-codes");
const { Sale, SaleProduct, sequelize } = require("../Database/models");

const getSaleByPk = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    includes: 'salesProduct',
  });

  return sale;
};

const createSale = async ({
  userId,
  deliveryAddress,
  deliveryNumber,
  totalPrice,
  products,
}) => {
  const transaction = await sequelize.transaction();
  try {
    const createdSale = await Sale.create(
      { userId, deliveryAddress, deliveryNumber, totalPrice },
      { transaction }
    );

    const saleId = createdSale.id;

    Promise.all(
      products.map(
        async ({ productId, quantity }) =>
          await SaleProduct.create(
            { saleId, productId, quantity },
            { transaction }
          )
      )
    ).then(async () => await transaction.commit());

    return createdSale;
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    return { error: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
  }
};

const updateSale = async (changes) => {
  const updatedSale = await Sale.update(changes, {
    where: { id: changes.saleId },
  });
  
  return updatedSale;
};

const deleteSale = async (id) => {
  const sale = await Sale.destroy({ where: { id } });

  return sale;
};

module.exports = {
  getSaleByPk,
  createSale,
  updateSale,
  deleteSale,
};
