'use strict';
var view = (function view() {/*
    <html>
    <head>
      <title>Welcome to Webtasks</title>
    </head>
    <body>
      <h1>Hello, <%= name %></h1>
    </body>
    </html>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/)[1];


var request = require('request');

module.exports =
    function (cb) {
        var start = Date.now();
        request.get('http://api.wunderground.com/api/cc8285fae724e71a/conditions/q/WA/Seattle.json', function (error, res, body) {
            if (error)
                cb(error);
            else
                cb(null, {
                    status: res.statusCode,
                    length: body.length,
                    latency: Date.now() - start,
                    response: res.body
                });
        });
    }
