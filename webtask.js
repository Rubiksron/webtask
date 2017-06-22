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
  cb(null, { hire: ctx.data.name || 'Ron Dunphy' });
};


// https://wt-6d054f0b626b5cb45efa677522eed1be-0.run.webtask.io/webtask-url
// https://wt-6d054f0b626b5cb45efa677522eed1be-0.run.webtask.io/webstack-url
