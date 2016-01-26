#!/usr/bin/env node
'use strict';

let modMonth = (month) => {
  if (month < 3) {
   month += 12;
  }
  return month;
};

let modYear = (year, month) => {
  if (month < 3) {
    year -= 1;
  }
  return year;
};

let getD = (year, month, day) => {
  let q = day; //day of month
  let m = modMonth(month); //month
  let y = modYear(year); //year
  let k = y % 100;//century
  let j = Math.floor(y/100);
  let h = (q + Math.floor((13*(m+1))/5) + k + Math.floor(k/4) + Math.floor(j/4) + (5*j)) % 7;
  return h-1;
}


module.exports = {

  modifiedMonth: modMonth,

  modifiedYear: modYear,

  getDay: getD

};
