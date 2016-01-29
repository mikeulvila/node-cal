#!/usr/bin/env node --harmony_destructuring
'use strict';

const generateMonth = require('./lib/month.js');
const generateYear = require('./lib/fullYearCal.js');

//console.log(generateMonth(1, 2016));

const [,,...args] = process.argv;

// check for two arguments
if (args.length === 2) {

  // assign command line arguments to const month and year and convert string to number
  const [month, year] = args.map(num => +num);
    // check that year is between 1753 - 9999
    if (year >= 1753 && year <= 9999) {
      //console.log(typeof month);
      console.log(generateMonth.monthToString(month, year));
    } else {
      console.log('Please pick a year between 1753 and 9999');
    }
  // run full year cal
} else if (args.length === 1) {
  const [year] = args.map(num => +num);
  console.log(generateYear.getYear(year));
  // run cal with today date
} else if (args.length === 0) {
  let date = new Date();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  console.log(generateMonth.monthToString(month, year));
  // fail
} else {
  process.exit(64);
}

