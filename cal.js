#!/usr/bin/env node --harmony_destructuring
'use strict';


const generateMonth = require('./lib/month.js');

console.log(generateMonth);

const [,,...args] = process.argv;
console.log(args);

if (args.length === 2) {
  const [month, year] = args;
  console.log(`month`);
} else if (args.length === 1) {
  const [year] = args;
  console.log(`year`);
} else {
  console.log('broke');
  process.exit(64);
}
//console.log(generateMonth(2016, 1);
