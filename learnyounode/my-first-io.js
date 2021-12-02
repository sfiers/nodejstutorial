'use strict'
const fs = require('fs')

let buf = fs.readFileSync(process.argv[2])

// console.log(buf);
const lines = buf.toString().split('\n').length - 1
console.log(lines);

// 'use strict'
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)