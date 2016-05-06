require('./index');

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

Object.defineProperty(a, 'e', { enumerable: false });
console.log(inspect(a));
console.log(inspect(a, 3));
console.log(inspect(a, null, true));
