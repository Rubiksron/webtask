'use strict';
var request = require('request');

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
                });
        });
    }
