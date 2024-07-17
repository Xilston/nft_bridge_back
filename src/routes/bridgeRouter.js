'use strict';

const { Router } = require('express');
const solanaController = require('../controllers/solanaController');

const router = Router();

router.post('/', solanaController.create);

module.exports = {
  bridgeRouter: router,
};
