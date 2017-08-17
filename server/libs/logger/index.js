'use strict';
const config = require('../../../config');
const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: `${config.loggerFileName}`})
  ]
});

module.exports = logger;
