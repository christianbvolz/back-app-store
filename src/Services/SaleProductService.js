const { SaleProduct } = require("../Database/models");

const updateDeliveryStatus = async (changes) => {
  const saleProduct = await SaleProduct.update(changes, {
    where: { id: changes.deliveryStatusId },
  });

  return saleProduct;
};


module.exports = {
  updateDeliveryStatus,
};