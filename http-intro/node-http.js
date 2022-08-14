import http from 'http';
import url from 'url';
let counter = 0;

const requestListener = function (req, res) {
    counter++;
    const queryObject = url.parse(req.url, true).query;
    console.log(queryObject);
    res.writeHead(200);
    res.end(`${counter}`);
}

const server = http.createServer(requestListener);
server.listen(8080);