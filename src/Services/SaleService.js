const { StatusCodes } = require("http-status-codes");
const { Sale, SaleProduct, sequelize } = require("../Database/models");

const getSaleByPk = async (id) => {
  const sale = await Sale.findByPk(id);

  return sale;
};

const createSale = async ({
  userId,
  deliveryAddress,
  deliveryNumber,
  status,
  totalPrice,
  products,
}) => {
  const transaction = await sequelize.transaction();
  try {
    const createdSale = await Sale.create(
      { userId, deliveryAddress, deliveryNumber, status, totalPrice },
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

const deleteSale = async (id) => {
  const sale = await Sale.destroy({ where: { id } });

  return sale;
};

const updateSale = async (changes) => {
  const updatedSale = await Sale.update(changes, {
    where: { id: changes.saleId },
  });

  return updatedSale;
};

module.exports = {
  getSaleByPk,
  createSale,
  deleteSale,
  updateSale,
};
