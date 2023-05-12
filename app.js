const http = require('http');
const fs = require('fs');

// function rqListener(req, res){
// }

// http.createServer(rqListener);

// ALT syntax

const server =  http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location',  '/')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);