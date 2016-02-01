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

const popSpaces = month => {
  if (month[month.length-1].length === 0) {
    month.pop();
  }
};

const checkLength = month => {
  let lastIndex = month.length-1;
  let indexLength = month[lastIndex].length;
  let space = " ";
  if (indexLength < 20) {
    month[lastIndex] += space.repeat(20-indexLength);
  }
};

const buildRows = (month, year) => {
  let row = [];
  let month1 = generateMonth.makeMonth(month, year).split('\n');
  let month2 = generateMonth.makeMonth(month + 1, year).split('\n');
  let month3 = generateMonth.makeMonth(month + 2, year).split('\n');
  popSpaces(month1);
  popSpaces(month2);
  popSpaces(month3);
  //console.log('before', month2[month2.length-1].length);
  checkLength(month1);
  checkLength(month2);
  checkLength(month3);
  //console.log('after', month2[month2.length-1].length);
  row = _.zip(month1, month2, month3);

  row =	_.map(row, chunk => chunk.join("  "));

  row = row.join("\n");

  if (row.length < 414) {
    row += "\n";
  }
  console.log('row', row.length);
  return row;

};



exports.getYear = year => {
  let yearCal = `                             ${year}

${centerMonths("January","February","March")}
${buildRows(1,year)}
${centerMonths("April","May","June")}
${buildRows(4,year)}
${centerMonths("July","August","September")}
${buildRows(7,year)}
${centerMonths("October","November","December")}
${buildRows(10,year)}`;

  return yearCal;
};

