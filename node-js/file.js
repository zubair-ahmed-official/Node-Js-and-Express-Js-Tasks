const fs = require('fs');

const readText = fs.readFileSync('./texts/text.txt', 'utf-8')

const writeText = fs.writeFileSync('./texts/write.txt', readText + 'writer')
console.log(writeText);