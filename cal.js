#!/usr/bin/env node --harmony_destructuring
'use strict';


const generateMonth = require('./lib/month.js');

console.log(generateMonth(1, 2016));

//const [,,...args] = process.argv;

//if (args.length === 2) {
  //const [month, year] = args;
//} else if (args.length === 1) {
  //const [year] = args;
//} else {
  //process.exit(64);
//}

