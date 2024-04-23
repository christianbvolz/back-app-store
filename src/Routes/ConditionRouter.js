const { Router } = require('express');
const ConditionController = require('../Controllers/ConditionController');

const route = Router();

route.get('/', ConditionController.getConditions);

module.exports = route;
