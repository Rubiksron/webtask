'use strict';

const request = require('request');
let api = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=66c6eb2324630cbc6b86964538afee04';
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
