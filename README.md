inspect-1-line
===
This modules makes insert from the Node.js utils easier for me to use by:

* adding it to the global object as global.insert, callable as `insert()`
* adding colors automatically if `NODE_ENV` is development (case unimportant)
* removes `\r`'s and `\n`'s from the string, making the output exist on 1-line (hence the name)
* optional args for depth or show hiiden that are detected by argument type
    * if the type is `bool`, it assumes the argument is `showHidden`
    * if the type is `number` or `null`, it assumes the argument is `depth`

## Installation
To install inspect-1-line, type:

  $ npm install --save inspect-1-line

## Usage

```javascript
inspect(val [ ,depth ]  [, showHidden ])
```

The arguments `depth` and `showHidden` are detected by type, not order. So,
order is not important.

```javascript
require('inspect-1-line');

var a = {
    b: 22,
    c: 'hello',
    d: true,
    e: {
        f: 'nesting',
        g: null,
    },
    h: {
        i: 'hello',
        j: {
            k: {
                l: 'we must go deeper',
                m: {
                    n: 'we must go deeper'
                }
            }
        }
    }
};
Object.defineProperty(a, 'e', { enumerable: false });  // hide property 'e'

console.log(inspect(a));
console.log(inspect(a, 3));
console.log(inspect(a, null, true));
```

The above has the following output:

```javascript
{ b: 22,  c: 'hello',  d: true,  h: { i: 'hello', j: { k: [Object] } } }
{ b: 22,  c: 'hello',  d: true,  h:    { i: 'hello',     j: { k: { l: 'we must go deeper', m: [Object] } } } }
{ b: 22,  c: 'hello',  d: true,  [e]: { f: 'nesting', g: null },  h:    { i: 'hello',     j: { k: { l: 'we must go deeper', m: { n: 'we must go deeper' } } } } }
```

## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
