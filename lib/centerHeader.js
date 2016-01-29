"use strict";
exports = module.exports = {};
//center the line
exports.center = (line) => {

	while (line.length < 22) {
	 	line += " ";
	 	if (line.length < 22) {
	 	line = " " + line;
 	 	}
	}

	return line;
}


