#!/usr/bin/env node
'use strict';
module.exports = (year) => {
  
	if (year % 4 === 0) {
    //leap year
		return true;
	} else if (year % 100 === 0) {
		// not leap year
		return false;
	} else if (year % 400 === 0) {
		// leap year
		return true;
	} else {
		// not leap year
		return false;
	}
};
