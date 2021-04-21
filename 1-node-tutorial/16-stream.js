const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt');

//default buffer = 64kb
// last buffe - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 9000, encoding: 'utf8' })

stream.on('data', result => {
  console.log(result);
});

stream.on('error', err => {
  console.log(err);
});
