'use strict';
var inspect = require('util').inspect;

var color = false;
if (typeof process.env.NODE_ENV === 'string' &&
    process.env.NODE_ENV.toLowerCase() === 'development') {
    color = true;
}


function inspect_1_line(v) {
    var depth = 2;
    var showHidden = false;
    if (arguments.length > 0)  {
        if (typeof arguments[1] === 'boolean')
            showHidden = arguments[1];
        if (typeof arguments[1] === 'number' || arguments[1] === null)
            depth = arguments[1];
    }
    if (arguments.length > 1)  {
        if (typeof arguments[2] === 'boolean')
            showHidden = arguments[2];
        if (typeof arguments[2] === 'number' || arguments[2] === null)
            depth = arguments[2];
    }
    var str = inspect(v, {showHidden: showHidden, depth: depth, colors: color});
    return str.replace(/[\n\r]/g, '').replace(/\s\s+/g, ' ');
}

module.exports = global.inspect = inspect_1_line;

