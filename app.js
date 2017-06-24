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

module.exports = function(ctx, cb) {
  cb(null, { hire: ctx.data.name || 'Ron Dunphy' });
};

var request = require('request');

module.exports =
    function (cb) {
        var start = Date.now();
        request.get('http://api.wunderground.com/api/Your_Key/conditions/q/CA/Seattle.json', function (error, res, body) {
            if (error)
                cb(error);
            else
                cb(null, {
                    status: res.statusCode,
                    length: body.length,
                    latency: Date.now() - start
                });
        });
    }





    //This is an example from Auth0 that I am setting up.
    // var request = require('request');
    //
    // module.exports =
    //     function (cb) {
    //         var start = Date.now();
    //         request.get('https://auth0.com', function (error, res, body) {
    //             if (error)
    //                 cb(error);
    //             else
    //                 cb(null, {
    //                     status: res.statusCode,
    //                     length: body.length,
    //                     latency: Date.now() - start
    //                 });
    //         });
    //     }
