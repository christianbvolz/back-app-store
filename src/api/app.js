const cors = require('cors');
const express = require('express');

const SaleRouter = require('../Routes/SaleRouter');
const UserRouter = require('../Routes/UserRouter');
const ProductRouter = require('../Routes/ProductRouter');
const CategoryRouter = require('../Routes/CategoryRouter');
const FavoriteRouter = require('../Routes/FavoriteRouter');
const ConditionRouter = require('../Routes/ConditionRouter');
const ProductReviewRouter = require('../Routes/ProductReviewRouter');
const DeliveryStatusRouter = require('../Routes/DeliveryStatusRouter');

const { StatusCodes } = require('http-status-codes');

const MiddlewareError = require('../Middlewares/MiddlewareError');

const app = express();

app.use(cors());

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static('src/images'));
app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);
app.use('/favorites', FavoriteRouter);
app.use('/products', ProductRouter);
app.use('/reviews', ProductReviewRouter);
app.use('/sales', SaleRouter);
app.use('/conditions', ConditionRouter);
app.use('/deliverystatus', DeliveryStatusRouter);

app.get('/coffee', (_req, res) => res.status(StatusCodes.IM_A_TEAPOT).end());

app.use(MiddlewareError);

module.exports = app;
