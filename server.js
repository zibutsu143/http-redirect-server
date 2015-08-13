var http = require('http');

var destinationUrl = 'http://holmwell.com';
var port = 30200;

var server = http.createServer(function (req, res) {
    res.writeHead(302, {'Location': destinationUrl + req.url});
    res.end();
});

server.listen(port);
