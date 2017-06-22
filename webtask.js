'use strict';

module.exports = function(ctx, cb) {
  cb(null, { hello: ctx.data.name || 'Huckleberry' });
};
