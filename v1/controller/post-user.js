'use strict';

const postUserController = ({
  createUser,
  responseHandler,
}) => (req, res) => createUser({
  user: req.validBody,
  ...responseHandler(req, res),
});

module.exports = postUserController; 
