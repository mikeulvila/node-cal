#!/usr/bin/env node
'use strict';
const zellers = require('./zellers.js');
const leapYear = require('./leapYear.js');
console.log('leapYear', leapYear(2012));
// months key
const monthNames = {
	1: ["January", 31],
	2: ["February", 28],
	3: ["March", 31],
	4: ["April", 30],
	5: ["May", 31],
	6: ["June", 30],
	7: ["July", 31],
	8: ["August", 31],
	9: ["September", 30],
	10: ["October", 31],
	11: ["November", 30],
	12: ["December", 31]
};

let monthToString = (month, year) => {
  // month length
  let monthLength = leapYear(year) ? months[month][1] + 1 : months[month][1];
  // header (month and year)
	let monthYear = `${monthNames[month][0]} ${year}`;
	// spaces preceding header
	let headerSpaces = (20 - monthYear.length) / 2;
  // setting space string
  let space = " ";
  // concatenate header
  let header = space.repeat(headerSpaces)+monthYear;
  console.log(header);
  let dayNames = "Su Mo Tu We Th Fr Sa";

  let week = "";
  let calendar = "    January 2016\nSu Mo Tu We Th Fr Sa\n                1  2\n 3  4  5  6  7  8  9\n10 11 12 13 14 15 16\n17 18 19 20 21 22 23\n24 25 26 27 28 29 30\n31";

};
monthToString(1, 2015);
module.exports = monthToString;
