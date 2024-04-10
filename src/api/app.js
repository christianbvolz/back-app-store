const cors = require('cors');
const express = require('express');

const UserRouter = require('../Routes/UserRouter');
const ProductsRouter = require('../Routes/ProductsRouter');

const MiddlewareError = require('../Middlewares/MiddlewareError');

const app = express();

app.use(express.json());

app.use(cors());


app.use('/user', UserRouter);
app.use('/', ProductsRouter);
app.use(MiddlewareError);

app.get('/coffee', (_req, res) => res.status(418).json('coffee'));


module.exports = app;
