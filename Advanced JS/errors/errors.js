const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
});

var n = 0;

console.log('Please enter your age');

reader.on('line', function (line) {
  try {
    if (isNaN(line)) throw new TypeError('The input must be a number');
    if (line < 1) throw new RangeError('The number must be bigger that 0');
    if (line > 999) throw new RangeError('The number must be lower than 1000');
  } catch (error) {
    console.log(error);
    return;
  }
  n = line;
  console.log('Your age is ', n);
  process.exit(0);
});
