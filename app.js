'use strict';

const request = require('request');

const API_KEY = 'http://api.wunderground.com/api/cc8285fae724e71a/conditions/q/WA/Seattle.json';

module.exports = function (callback) {
        request.get(API_KEY, function (error, response, body) {
            if (error)
                callback(error);
            else
                callback(null, {
                    status: response.statusCode,
                    length: body.length,
                    SeattleForecast: response.body,
                });
        });
    }
