'use strict';

const zellers = require('./zellers.js');
const leapYear = require('./leapYear.js');
const centerHeader = require('./centerHeader.js');
var exports = module.exports = {};

// months key
exports.monthNames = {
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

let headerToString = (month, year) => {
  // header (month and year)
	let monthYear = `${exports.monthNames[month][0]} ${year}`;
  let space = " ";
  let header;

  if (process.platform === 'darwin') {
	// spaces preceding header
    let headerSpaces = (20 - monthYear.length) / 2;
    // concatenate header
    header = space.repeat(headerSpaces)+monthYear;

  } else if (process.platform === 'linux') {
    header = centerHeader.centerLinux(monthYear);
  }
  return header;
}

exports.makeMonth = (month, year) => {
  // month length
  let monthLength = month===2 && leapYear(year) ? exports.monthNames[month][1] + 1 : exports.monthNames[month][1];

  let dayNames = "Su Mo Tu We Th Fr Sa";

  // get day month starts on
  let startDay = zellers.getDay(year, month, 1);

  // build week string
  let calDays = "";
  // keep track of blocks of the dates to insert \n after 1 week of block (7 blocks)
  let blockCount = 0;
  // add space blocks before startDay
  for (var i = 0; i < startDay; i++) {
    calDays += "   ";
    blockCount += 1;
  }
  // loop to generate date numbers
  for (var j = 1; j <= monthLength; j++) {
    calDays += (j<10) ? " "+j+" " : j+" ";
    blockCount += 1;
    if (blockCount % 7===0) {
      calDays = calDays.slice(0, -1);
      calDays += "\n";
    }
  }
  calDays = calDays.slice(0, -1);
  //console.log(calDays.match(/\n/g).length);
  // check number of line breaks and add extra if needed
  if (calDays.match(/\n/g).length === 4) {
    calDays += "\n";
  } else if (calDays.match(/\n/g).length === 3) {
    calDays += "\n\n";
  }
  let monthBody = `${dayNames}\n${calDays}`;
  return monthBody;
};

// concatenate header and monthBody
exports.monthToString = (month, year) => {
  // call functions to make header and cal body
  let header = headerToString(month, year);
  let monthBody = exports.makeMonth(month, year);
  // concatenate final calendar string using es6 template strings
  let calendar = `${header}\n${monthBody}`;
  //console.log('lastIndex', typeof calendar.lastIndexOf('\n'));
  return calendar;
};


