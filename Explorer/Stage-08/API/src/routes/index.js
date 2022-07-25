const { Router } = require('express');

const usersRouter = require('./user.routes');

const routes = Router();

routes.use('/user', usersRouter);

module.exports = routes;