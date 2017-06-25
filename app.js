'use strict';

var request = require('request');

module.exports = function (callback) {
        request.get('http://api.wunderground.com/api/cc8285fae724e71a/conditions/q/WA/Seattle.json', function (error, response, body) {
            if (error)
                callback(error);
            else
                callback(null, {
                    status: response.statusCode,
                    length: body.length,
                    SeattleForecast : response.body
                });
                data = JSON.parse(response.body)
                console.log('data:', data);

        });
    }
