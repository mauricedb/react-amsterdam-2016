var http = require('http');
var url = require('url');
var port = 4000;
var counter = 0;

function apiTime(request, response) {
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
}

function apiChaos(request, response) {
    var rnd = 0;
    if (counter % 3 === 0) {
        rnd = Math.random();
    }
    console.log('Delay:', rnd);

    setTimeout(function() {
        response.end();
    }, 1000 * rnd);
}

var app = http.createServer(function (request, response) {
    counter++;

    switch (url.parse(request.url).pathname) {
        case '/api/time':
            return apiTime(request, response);
        case '/api/chaos':
            return apiChaos(request, response);
    }

    response.writeHead(400);
    response.end();
});

app.listen(port, function () {
    console.info('The API server is listening at port ' + port);
});