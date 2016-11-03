var http = require('http');
var port = 4000;
var counter = 0;

var app = http.createServer(function (request, response) {
    counter++;
    if (counter % 3 === 0) {
        response.writeHead(500);
        response.end();
        
    } else {
        response.writeHead(200, {
            'Content-Type': 'application/json'
        });

        response.end(JSON.stringify({
            now: new Date().toLocaleTimeString()
        }));
    }
});

app.listen(port, function () {
    console.info('The API server is listening at port ' + port);
});