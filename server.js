var http = require('http');

var destinationUrl = 'https://storage.googleapis.com/d.kingsforext.com/appsheet/data/Client_5706982/downloads';
var port = 30200;

var server = http.createServer(function (req, res) {
    res.writeHead(302, {'Location': destinationUrl + req.url});
    res.end();
});

server.listen(port);
