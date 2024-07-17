'use strict';

const solanaService = require('../services/solanaService');
const codeStatus = require('../constants/codeStatuses');

const create = (req, res) => {
  const { tsx } = req.body;

  if (!tsx) {
    res.sendStatus(codeStatus.BAD_REQUEST);

    return;
  }

  res.statusCode = codeStatus.CREATED;
  res.send(solanaService.create(tsx));
};

module.exports = {
  create,
};
