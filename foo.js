'use strict';

const request = require('request');
let api = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key=b196ed93029a432dab6121920172506&q=48.85,2.35&num_of_days=2&tp=3&format=json';
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
