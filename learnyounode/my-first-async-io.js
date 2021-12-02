'use strict'
const fs = require('fs');

// console.log(process.argv);

const file = process.argv[2];

// console.log(file);

fs.readFile(file,(err, contents) => {
    if (err) {
        return console.log(err)
    }
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
});

// console.log(buf);
// const lines = buf.toString().split('\n').length - 1
// console.log(lines);

// 'use strict'
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)