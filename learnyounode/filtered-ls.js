'use strict'
const fs = require('fs'),
    path = require('path')

const folder = process.argv[2],
    ext = '.' + process.argv[3]


fs.readdir(folder, (err, files) => {
    if (err) return console.log(err)
    files.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file);
        }
    })
})
// console.log(folder, ext);