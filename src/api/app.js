const cors = require('cors');
const express = require('express');

const UserRouter = require('../Routes/UserRouter');
const ProductRouter = require('../Routes/ProductRouter');
const CategoryRouter = require('../Routes/CategoryRouter');
const FavoriteRouter = require('../Routes/FavoriteRouter');
const ProductReviewRouter = require('../Routes/ProductReviewRouter');

const { StatusCodes } = require('http-status-codes');

const MiddlewareError = require('../Middlewares/MiddlewareError');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);
app.use('/favorites', FavoriteRouter);
app.use('/products', ProductRouter);
app.use('/reviews', ProductReviewRouter);
app.use(MiddlewareError);

app.get('/coffee', (_req, res) => res.status(StatusCodes.IM_A_TEAPOT).end());


module.exports = app;
