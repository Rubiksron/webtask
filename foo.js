'use strict';

const request = require('request');

let api = 'http://wttr.in/Seattle';
module.exports = function (callback) {
        request.get(api, function (error, response, body) {
            if (error)
                callback(error);
            else
                callback(null, {
                    status: response.statusCode,
                    length: body.length,
                    SeattleForecast: response.body
                });
        });
    }
