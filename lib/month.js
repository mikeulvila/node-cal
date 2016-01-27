'use strict';

const zellers = require('./zellers.js');
const leapYear = require('./leapYear.js');

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
  let monthLength = month===2 && leapYear(year) ? monthNames[month][1] + 1 : monthNames[month][1];

  // header (month and year)
	let monthYear = `${monthNames[month][0]} ${year}`;
	// spaces preceding header
	let headerSpaces = (20 - monthYear.length) / 2;
  // setting space string
  let space = " ";
  // concatenate header
  let header = space.repeat(headerSpaces)+monthYear;

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

  let calendar = `${header}\n${dayNames}\n${calDays}`;
  return calendar;
};

module.exports = monthToString;
