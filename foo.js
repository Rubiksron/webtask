'use strict';
var request = require('request');

// var view = (function view() {/*
//     <html>
//     <head>
//       <title>Welcome to Webtasks</title>
//     </head>
//     <body>
//       <h1>{res.body}</h1>
//     </body>
//     </html>
// */}).toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/)[1];
//

module.exports =
    function (cb) {
        var start = Date.now();
        request.get('http://wttr.in/seattle', function (error, res, body) {
            if (error)
                cb(error);
            else
                cb(null, {
                    status: res.statusCode,
                    length: body.length,
                    latency: Date.now() - start,
                    response: res.body,
                }).toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/)[1];
        });
    }
