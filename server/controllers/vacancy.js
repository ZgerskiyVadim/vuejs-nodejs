'use strict';
const Vacancy = require('../models/vacancy');

function getAllVacancies(req, res, next) {
  const options = {};
  for (const key in req.query) {
    options[key] = req.query[key];
  }
  //workHours grafic
  delete options.limit;
  delete options.numberOfPage;
  const limit = +req.query.limit;
  const skip = (+req.query.numberOfPage - 1) * limit;

  Vacancy.find(options, null, {skip, limit, sort: {
    dateOfPublication: -1
  }
  })
    .then(vacancies => {
      Vacancy.count(options).then(count => {
        res.json({vacancies, count});
      });
    })
    .catch(next);
}

function getVacancyById(req, res, next) {
  Vacancy.findOne({vacancyId: req.params.id})
    .then(vacancy => res.json(vacancy))
    .catch(err => err);
}

// function selectedFavoriteVacancy() {
//
// }

module.exports = {
  getAllVacancies,
  getVacancyById
};
