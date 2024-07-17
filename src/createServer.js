'use strict';

const express = require('express');

const { usersRouter } = require('./routes/usersRouter');
const userService = require('./services/usersService');

function createServer() {
  userService.init();

  const app = express();

  app.use(express.json());

  app.use('/users', usersRouter);

  return app;
}

module.exports = {
  createServer,
};
