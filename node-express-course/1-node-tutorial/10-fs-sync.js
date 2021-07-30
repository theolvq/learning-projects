const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);
writeFileSync(
  './content/resut-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
console.log('end of first task');
console.log('starting second task');
