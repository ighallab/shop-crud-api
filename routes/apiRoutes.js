const express = require('express');
const mainRouter = express.Router();
const userRoute = require('./apiUser')
const categoryRoute = require('./apiCategory');


mainRouter.use('/user',userRoute);
mainRouter.use('/category',categoryRoute);


module.exports = mainRouter;