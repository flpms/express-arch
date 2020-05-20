'use strict';

const findUserController = require('./find-user');
const postUserController = require('./post-user');
const validation = require('./validation');

module.exports = dependencies => ({
  findUserController: findUserController(dependencies),
  postUserController: postUserController(dependencies),
  validation: validation(dependencies),
})