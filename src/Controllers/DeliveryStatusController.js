const DeliveryStatusService = require('../Services/DeliveryStatusService');
const { StatusCodes } = require('http-status-codes');


const getDeliveryStatus = async (_req, res, next) => { 

  const deliveryStatus = await DeliveryStatusService.getDeliveryStatus();
  
  if (deliveryStatus.length === 0) return next({ error: StatusCodes.NO_CONTENT, message: 'DeliveryStatus do not exist' });

  return res.status(StatusCodes.OK).json(deliveryStatus);
};


module.exports = {
  getDeliveryStatus,
};
