var si = require('../'),
    number = si.parse(process.argv[2]);
    
console.log('Your number is: ', number);
console.log('The square of it is: ', si.format(Math.pow(number, 2)));
console.log('The square root on the other hand is: ', si.format(Math.pow(number, 0.5)));

console.log('The number in binary prefix is: ', si.bin.format(number));
console.log('Not a lot of people know that a 1.44MB floppy hadn\'t had', si.bin.parse('1.44M'), 'bytes');
console.log('In fact it had exatcly 1.44 x 1024 x 1000 bytes, so', si.bin.format(1.44 * 1024 * 1e3), 'bytes');
