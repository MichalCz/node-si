Node Si
=========

The goal of this project is to provide a simple module that parses and formats
numbers to be human readable - like "10gb" -> 1e10.

This might be especially useful in command line arguments and configuration 
directives where you don't want the user to pass the whole number or use the 
scientific notation.

Usage
-------

Write a simple code, like:

    var si = require('si'),
        number = si.parse(process.argv[2]);
        
    console.log('Your number is: ', 
                    number);
    console.log('The square of it is: ', 
                    si.format(Math.pow(number, 2)));
    console.log('The square root on the other hand is: ', 
                    si.format(Math.pow(number, 0.5)));

Now run it:

    $ node tests/basic.js 1G
    Your number is:  1000000000
    The square of it is:  1E
    The square root on the other hand is:  31.62k

Fairly straightforward I hope.

Future
--------

I will be bringing some more parsers/formatters in later releases, like:

* IEC compliant binary multipliers like "MiB"
* Case sensitive Mbytes/mbytes (decimal vs. binary)
* Fractional SI multipliers like centi/mili etc.

Feel free to post feature requests in issues. :)

License
=========

(The MIT License)

Copyright (c) 2012 Michał Czapracki budleigh.salterton@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
