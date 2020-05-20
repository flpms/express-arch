'use strict';

const UserRepository = require('./user.js');

module.exports = dependencies => ({
  userRepository: UserRepository(dependencies),
});