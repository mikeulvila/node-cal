'use strict';
const _ = require('lodash');
const generateMonth = require('./month.js');
var exports = module.exports = {};

let headerToString = (month, year) => {
  // header (month and year)
	let monthYear = `${generateMonth.monthNames[month][0]}`;
	// spaces preceding header
	let headerSpaces = (20 - monthYear.length) / 2;
  // setting space string
  let space = " ";
  // concatenate header
  let header = space.repeat(headerSpaces)+monthYear;
  return header;
}


  // concatenate header and monthBody
  exports.monthToString = (month, year) => {
    // call functions to make header and cal body
    let header = headerToString(month, year);
    let monthBody = generateMonth.makeMonth(month, year);
    // concatenate final calendar string using es6 template strings
    let monthCalendar = `${header}\n${monthBody}`;
    //console.log('lastIndex', typeof calendar.lastIndexOf('\n'));
    return monthCalendar;
  };


//let string = '     jsdkfl\njasdklfkdsfj\nkladflsdfj\nalskdfjld\n';
//let splitArray = _.split(string, '\n');
//console.log('lodash test', splitArray);
