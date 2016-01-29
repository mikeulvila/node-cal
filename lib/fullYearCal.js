'use strict';
const _ = require('lodash');
const generateMonth = require('./month.js');
const centerHeader = require('./centerHeader.js');
var exports = module.exports = {};

// center header
const centerMonths = (month1, month2, month3) => {
		let string = centerHeader.center(month1) + centerHeader.center(month2) + centerHeader.center(month3);
		string = string.split("");
		string[0] = "";
		return string.join("");
	};

const buildRows = (month, year) => {
  let row = [];
  let month1 = generateMonth.makeMonth(month, year).split('\n');
  let month2 = generateMonth.makeMonth(month + 1, year).split('\n');
  let month3 = generateMonth.makeMonth(month + 2, year).split('\n');

  row = _.zip(month1, month2, month3);

  row =	_.map(row, chunk => chunk.join("  "));

  row = row.join("\n") + "\n";

  row += "\n";

  return row;

}



exports.getYear = year => {
  let yearCal = `                             ${year}

${centerMonths("January","February","March")}
${buildRows(1,year)}`;

  return yearCal;
}


//let string = '     jsdkfl\njasdklfkdsfj\nkladflsdfj\nalskdfjld\n';
//let splitArray = _.split(string, '\n');
//console.log('lodash test', splitArray);

