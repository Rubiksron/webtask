'use strict';
const request = require('request');
const json = require('body-parser').json;

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
