"use strict";

exports = module.exports = {};
//center the line
exports.centerLinux = (line) => {
	while (line.length < 22) {
	 	line += " ";
	 	if (line.length < 22) {
	 	line = " " + line;
 	 	}
	}
	return line;
}

exports.centerMac = (line) => {
  let headerSpaces = ((20 - line.length) / 2) + 1;
  // setting space string
  let space = " ";
  // concatenate header
  let header = space.repeat(headerSpaces)+line;
  return header;
}
