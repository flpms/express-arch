'use strict';

const postUserController = ({
  findUser,
  ObjectId,
  responseHandler,
}) => (req, res) => findUser({
  id: ObjectId(req.validData.id),
  ...responseHandler(req, res),
});

module.exports = postUserController; 
