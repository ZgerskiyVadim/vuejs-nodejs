'use strict';
const express = require('express');
const router = express.Router();
const VacancyCtrl = require('../controllers/vacancy');

router.get('/vacancies', VacancyCtrl.getAllVacancies);

router.get('/vacancies/:id', VacancyCtrl.getVacancyById);

module.exports = router;
