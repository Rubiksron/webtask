'use strict';

var view = (function view() {/*
    <html>
    <head>
      <title>Welcome to Webtasks</title>
    </head>
    <body>
      <h1>Hello, <%= name %></h1>
    </body>
    </html>
*/}).toString().match(/[^]*\/\*([^]*)\*\/\s*\}$/)[1];

module.exports = function(ctx, cb) {
  cb(null, { hello you should hire: ctx.data.name || 'Ron Dunphy' });
};
