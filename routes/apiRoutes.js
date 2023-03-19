const express = require('express');
const mainRouter = express.Router();
const userRoute = require('./apiUser')


mainRouter.use('/user',userRoute);


module.exports = mainRouter;