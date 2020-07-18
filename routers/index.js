const productsRouters = require('./product');
const categorysRouters = require('./category');
const childrenCategorysRouters = require('./category');
const express = require('express');

const routers = express.Router();

routers.use('/products', productsRouters);
routers.use('/categorys', categorysRouters);
routers.use('/childrenCategorys', childrenCategorysRouters);

module.exports = routers;