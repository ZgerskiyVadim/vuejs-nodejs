'use strict';
const request = require('request');
const cheerio = require('cheerio');

function sendRequset(options) {
  return new Promise((resolve, reject) => {
    request(options, (err, response, html) => {
      return err ? reject(err) : resolve(html);
    });
  });
}

function converObjectToArray(object) {
  return Object.keys(object).map(prop => object[prop]);
}

function nextPage(html) {
  const $ = cheerio.load(html);
  const lengthOfPagination = $('.b-pager ul').children().length;
  return lengthOfPagination;
}

module.exports = {
  sendRequset,
  converObjectToArray,
  nextPage
};
