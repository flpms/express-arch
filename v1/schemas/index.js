'use strict';

const postUser = require('./post-user.schema');
const getUser = require('./get-user.schema');

module.exports = {
  post: {
    user: postUser,
  },
  get: {
    user: getUser
  }
}