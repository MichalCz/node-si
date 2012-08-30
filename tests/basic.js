var si = require('../'),
    number = si.parse(process.argv[2]);
    
console.log('Your number is: ', number);
console.log('The square of it is: ', si.format(Math.pow(number, 2)));
console.log('The square root on the other hand is: ', si.format(Math.pow(number, 0.5)));
