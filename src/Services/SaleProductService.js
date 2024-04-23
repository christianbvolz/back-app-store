const { SaleProduct, Product } = require("../Database/models");

const updateDeliveryStatus = async (changes) => {
  const saleProduct = await SaleProduct.update(changes, {
    where: { id: changes.deliveryStatusId },
  });

  return saleProduct;
};

const getSalesProducts = async (sellerId) => {
  const salesProducts = await SaleProduct.findAll({
    attributes: { exclude: ['saleId', 'productId'] },
    include : {
      model: Product,
      as: 'product',
      where: { sellerId },
      attributes: { exclude: ['sellerId', 'categoryId', 'conditionId', 'createdAt', 'updatedAt'] },
    }
  });

  return salesProducts;
};

module.exports = {
  updateDeliveryStatus,
  getSalesProducts,
};
