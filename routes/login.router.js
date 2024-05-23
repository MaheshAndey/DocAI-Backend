const express = require('express');

const loginRouter = express.Router();

const { getLoginDetails } = require('./login.controller');

loginRouter.get('/login', getLoginDetails);


module.exports = loginRouter;