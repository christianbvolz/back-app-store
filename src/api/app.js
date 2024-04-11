const cors = require('cors');
const express = require('express');

const UserRouter = require('../Routes/UserRouter');
const ProductRouter = require('../Routes/ProductRouter');
const CategoryRouter = require('../Routes/CategoryRouter');
const { StatusCodes } = require('http-status-codes');

const MiddlewareError = require('../Middlewares/MiddlewareError');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/user', UserRouter);
app.use('/categories', CategoryRouter);
app.use('/', ProductRouter);
app.use(MiddlewareError);

app.get('/coffee', (_req, res) => res.status(StatusCodes.IM_A_TEAPOT).end());


module.exports = app;
