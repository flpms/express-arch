'use strict';

const User = require('./user');

module.exports = dependencies => ({
  ...User({
    ...dependencies,
  }),
});
