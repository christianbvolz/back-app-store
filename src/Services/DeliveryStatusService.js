const { DeliveryStatus } = require('../Database/models');


const getDeliveryStatus = async () => {
  const deliveryStatus = await DeliveryStatus.findAll();

  return deliveryStatus;
};

module.exports = {
  getDeliveryStatus,
};