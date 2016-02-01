'use strict';
const _ = require('lodash');
const generateMonth = require('./month.js');
const centerHeader = require('./centerHeader.js');
var exports = module.exports = {};

// center header
const centerMonths = (month1, month2, month3) => {
		let string;
    if (process.platform === "linux") {
      string = centerHeader.centerLinux(month1) + centerHeader.centerLinux(month2) + centerHeader.centerLinux(month3);
    } else if (process.platform === "darwin") {
      string = centerHeader.centerLinux(month1) + centerHeader.centerLinux(month2) + centerHeader.centerMac(month3);
    }
		string = string.split("");
    string[0] = "";
    //console.log('string', string);
		return string.join("");
	};

const popSpaces = month => {
  if (month[7]) {
    month.pop();
  }
};

const checkLength = month => {
  let line6 = month[6].length;
  let line5 = month[5].length;
  let line4 = month[4].length;
  let space = " ";
  if (line4 < 20) {
    month[4] += space.repeat(20-line4);
    month[5] += space.repeat(20-line5);
    month[6] += space.repeat(20-line6);

  } else if (line5 < 20) {
    month[5] += space.repeat(20-line5);
    month[6] += space.repeat(20-line6);

  } else if (line6 < 20) {
    month[6] += space.repeat(20-line6);
  }
};

const buildRows = (month, year) => {
  let row = [];
  let month1 = generateMonth.makeMonth(month, year).split('\n');
  let month2 = generateMonth.makeMonth(month + 1, year).split('\n');
  let month3 = generateMonth.makeMonth(month + 2, year).split('\n');
  //console.log('MONTH 1', month1);
  popSpaces(month1);
  popSpaces(month2);
  popSpaces(month3);
  //console.log('before', month2[month2.length-1].length);
  if (process.platform === "linux") {
    checkLength(month1);
    checkLength(month2);
    checkLength(month3);
  } else if (process.platform === "darwin") {
    //console.log('I AM A MAC BITCH!');
    checkLength(month1);
    checkLength(month2);
  }
  //console.log('MONTH AFTER CHECK', month1);
  //console.log('after', month2[month2.length-1].length);
  row = _.zip(month1, month2, month3);
  row =	_.map(row, chunk => chunk.join("  "));

  row = row.join("\n");

  //if (row.length < 414) {
    //row += "\n";
  //}

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

