'use strict';
//This is an example from Auth0 that I am setting up.
var request = require('request-promise');

const googlePlacesUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/';
const keyword = 'food';
const output = 'json';

module.exports = function(context, cb) {
    var lat = context.body.latitude || '0.0';
    var long = context.body.longitude || '0.0';

    var radius = context.body.radius || '100';
    var location = `${lat},${long}`;
    var key = context.secrets.gpakey;

    var request_url = `${googlePlacesUrl}${output}?location=${location}&radius=${radius}&keyword=${keyword}&key=${key}&opennow=true`;

    request(request_url, { json: true })
        .then( function(data) {
            if(data && (data.status == 'OK' || data.status == 'ZERO_RESULTS') ) {
                var response = {
                    timestamp: new Date(),
                    latitude: lat,
                    longitude: long,
                    radius: radius,
                    results: data.results || []
                };
                cb(null, response);
            } else {
                var error = new Error(`${data.status}${data.error_message ? ':'+data.error_message : ''}`);
                return cb(error);
            }
        })
        .catch( function(error) {
            cb(error);
        });
};
