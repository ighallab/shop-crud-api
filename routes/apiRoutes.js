const express = require('express');
const mainRouter = express.Router();
const userRoute = require('./apiUser')
const categoryRoute = require('./apiCategory');
const productRoute = require('./apiProduct');


mainRouter.use('/user',userRoute);
mainRouter.use('/category',categoryRoute);
mainRouter.use('/product',productRoute);


module.exports = mainRouter;