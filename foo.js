'use strict';
const request = require('request');
const json = require('body-parser').json;

let view = (function view() {/*
    <html>
    <head>
      <title>Welcome to Webtasks</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
    </html>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/)[1];


module.exports =
    function (callback) {
        request.get('http://wttr.in/seattle', function (error, res, body) {
            if (error)
                callback(error);
            else
                callback(null, {
                    status: res.statusCode,
                    length: body.length,
                    response: res.body
                });
        });
    }
