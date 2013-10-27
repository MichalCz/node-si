Node Si
=========

The goal of this project is to provide a simple module that parses and formats
numbers to be human readable - like:
* "10gb" -> 1e10 
* "4 days 7:30:01.444" -> 372601.444
* "64Kb" -> 65536

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

Time intervals
----------------

As of version 2.0.0 you can use node-si to read time intervals. In 2.0.0 only
"n days hh:mm:dd" format is recognized.

To read it, use something like this:

    var hms = require('si').hms, 
        time = si.parse(process.argv.slice(2).join(' '));

    console.log('This program will self destruct in ' + hms.format(time));
    setTimeout(function() { console.log('thanks for waiting...'); }, time);

Should you want to format the time on the other hand:

    var hms = require('si').hms,
        time = +process.argv[2];

    console.log('This program will self destruct in ' + hms.format(time));
    setTimeout(function() { console.log('thanks for waiting...'); }, time);

More implementations will follow (see "Future").

Binary vs. decimal prefixes
-----------------------------

You may use either decimal or binary prefixing:

	var si = require('si'), 
		binNum = 8 << 20,
		decNum = 8e6;
		
	console.log(si.si.format(binNum) + 'bytes vs. ' + si.bin.format(binNum) + 'bytes'); 
	// will output: 8.338Mbytes vs. 8Mbytes

	console.log(si.si.format(decNum) + 'bytes vs. ' + si.bin.format(decNum) + 'bytes'); 
	// will output: 8Mbytes vs. 7.629Mbytes

This might be quite handy for reading command line numbers like bitrate or byte offsets in files.

Future
--------

I will be bringing some more parsers/formatters in later releases, like:

Numbers:
* IEC compliant binary multipliers like "MiB"
* Case sensitive Mbytes/mbytes (decimal vs. binary)
* Fractional SI multipliers like centi/mili etc.

Time:
* ISO 8601 time intervals (P1Y2M10DT2H30M/2008-05-11T15:30:00Z)
* Reading days and months

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
