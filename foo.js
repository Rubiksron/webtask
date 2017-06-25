'use strict';

const request = require('request');
let api = 'http://api.wunderground.com/api/cc8285fae724e71a/conditions/q/CA/Seattle.json';
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
