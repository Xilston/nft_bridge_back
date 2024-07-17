'use strict';

const express = require('express');

const { bridgeRouter } = require('./routes/bridgeRouter');
const solanaService = require('./services/solanaService');

function createServer() {
  solanaService.init();

  const app = express();

  app.use(express.json());

  app.use('/bridge', bridgeRouter);

  return app;
}

module.exports = {
  createServer,
};
