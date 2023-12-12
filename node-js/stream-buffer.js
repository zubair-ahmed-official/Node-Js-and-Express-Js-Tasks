const http = require('http');
const server = http.createServer();
const fs = require('fs');

server.on('request', (req, res) => {
    if (req.url === './read-file' && req.method === 'GET');
    const readableStream = fs.createReadStream(process.cwd() + '/texts/text.txt')
    readableStream.on('data', (buffer) => {
        res.statusCode === 200;
        res.write(buffer)
    })

    readableStream.on('end', () => {
        res.statusCode === 200;
        res.end('\n Server is running')
    })

    readableStream.on('error', (error)=>
    {
        console.log(error);
        res.statusCode === 200;
        res.end('Error is showing')
    })
})

server.listen(5000, () => {
    console.log('Server is listening on portal 5000');
})