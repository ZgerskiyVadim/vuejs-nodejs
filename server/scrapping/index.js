'use strict';
const cheerio = require('cheerio');
const Vacancy = require('../models/vacancy');
const config = require('../../config');
const helper = require('../libs/helper');

async function main(urll, numberOfPage) {
  try {
    const bodyOfMainPage = await helper.sendRequset(urll + numberOfPage);
    const $ = cheerio.load(bodyOfMainPage);
    const arrayOfVacancies = helper.converObjectToArray($('.search-result-item__name'));

    const arrayOfPageOfVacancies = [];
    arrayOfVacancies.forEach(some => {
      if ($(some).attr('href')) {
        arrayOfPageOfVacancies.push(helper.sendRequset($(some).attr('href')));
      }
    });

    const arrayOfbodyOfVacancies = await Promise.all(arrayOfPageOfVacancies);
    const parsedArray = arrayOfbodyOfVacancies.map(parseVacancy);

    const arrayOfModels = parsedArray.map(item => {
      const vacancyObject = {
        title: item.title,
        dateOfPublication: item.dateOfPublication,
        city: item.city,
        companyName: item.companyName,
        descriptionOfCompany: item.descriptionOfCompany,
        adressOfCompany: item.adressOfCompany,
        workHours: item.workHours,
        typeOfEmployment: item.typeOfEmployment,
        vacancyId: item.vacancyId,
        urlOfVacancy: item.urlOfVacancy,
        favoriteVacancy: false
      };
      return Vacancy.findOne({vacancyId: item.vacancyId})
        .then(objectOfVacancy => {
          if (objectOfVacancy) {
            if (objectOfVacancy.dateOfPublication !== item.dateOfPublication) {
              return Vacancy.update({_id: objectOfVacancy._id}, {
                $set: vacancyObject
              });
            }
          } else {
            return new Vacancy(vacancyObject).save();
          }
        });
    });

    Promise.all(arrayOfModels).then(result => {
      (numberOfPage + 1) <= helper.nextPage(bodyOfMainPage) ?
        main(config.url, numberOfPage + 1) :
        setTimeout(() => main(config.url, 0), 36000000);
    })
      .catch(err => console.log('ERROR', err));


  } catch (exaption) {
    console.log(exaption);
  }
}

function parseVacancy(bodyOfVacancy) {
  const $ = cheerio.load(bodyOfVacancy, {decodeEntities: false});
  const title = $('.b-vacancy-title').text();
  const dateOfPublication = new Date($('.vacancy-sidebar__publication-date').attr('datetime'));
  const city = $('td.l-content-colum-2.b-v-info-content div')[0].children[0].data.replace(',', '');
  const companyName = $('.companyname').text();
  const descriptionOfCompany = $('div .b-vacancy-desc-wrapper').html();
  const adressOfCompany = $('.vacancy-address-text').text();
  const typeOfEmployment = $('.l-content-paddings span').first().text();
  const workHours = $('.l-content-paddings span').last().text();
  const vacancyId = $('.b-select-icon').attr('data-id');
  const urlOfVacancy = 'https://jobs.tut.by/vacancy/' + vacancyId + '?query=it';
  return {
    title,
    dateOfPublication,
    city,
    companyName,
    descriptionOfCompany,
    adressOfCompany,
    typeOfEmployment,
    workHours,
    vacancyId,
    urlOfVacancy
  };
}

function startGetInformation() {
  main(config.url, 0);
}

module.exports = {startGetInformation};
