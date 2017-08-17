'use strict';
const mongoose = require('mongoose');
const config = require('../../../config');
const log = require('../logger');

mongoose.connect(config.dbName, {}, connect);
const db = mongoose.connection;
function connect() {
  mongoose.Promise = global.Promise;
  return mongoose.connection;
}

db.on('error', err => log.error(`Connection error: ${err.message}`));

db.once('open', () => log.info('Connected to DB!'));

module.exports = db;
