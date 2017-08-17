'use strict';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacancySchema = new Schema({
  title: {type: String},
  dateOfPublication: {type: Date},
  city: {type: String},
  companyName: {type: String},
  descriptionOfCompany: {type: String},
  adressOfCompany: {type: String},
  typeOfEmployment: {type: String},
  workHours: {type: String},
  vacancyId: {type: String},
  urlOfVacancy: {type: String},
  favoriteVacancy: {type: Boolean}
});

module.exports = mongoose.model('Vacancy', vacancySchema);
