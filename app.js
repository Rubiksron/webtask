'use strict';
//This is an example from Auth0 that I am setting up.
var request = require('request');

module.exports =
    function (cb) {
        var start = Date.now();
        request.get('https://auth0.com', function (error, res, body) {
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
