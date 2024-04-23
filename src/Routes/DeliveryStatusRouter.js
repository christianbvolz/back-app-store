const { Router } = require('express');
const DeliveryStatusController = require('../Controllers/DeliveryStatusController');

const route = Router();

route.get('/', DeliveryStatusController.getDeliveryStatus);

module.exports = route;
