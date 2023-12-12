const fs = require('fs');

fs.readFile('./texts/text.txt', 'utf-8', (err, data) => {
    if (err) {
        throw Error("Error reading")
    }
    console.log(data);

    fs.writeFile('./texts/write2.txt', data, 'utf-8', (err, data2) => {
        if (err) {
            throw Error('This is an error')
        }
    })
})