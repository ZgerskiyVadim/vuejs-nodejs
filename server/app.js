'use strict';
const express = require('express');
const config = require('../config');
const log = require('./libs/logger');
const dbConnection = require('./libs/mongoose');
const bodyParser = require('body-parser');
const userApi = require('./routers/user');
const vacancyApi = require('./routers/vacancy');
const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('./middleWares/webpackMiddleWare');
const webpackConfig = require('../webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);
webpackMiddleware(app, compiler, webpackConfig);

const startGetInformation = require('./scrapping').startGetInformation;
// startGetInformation();  //запуск парсинга

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(userApi);
app.use(vacancyApi);
app.use((err, req, res, next) => res.status(err.status ? err.status : 500).json(err));
dbConnection.once('open', () => {
  app.listen(config.port, () => log.info(`Server listen on port ${config.port}`));
});
module.exports = app;
