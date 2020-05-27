'use strict';

const postUserController = ({
  findUser,
  ObjectId,
  responseHandler,
}) => (ctx) => findUser({
  id: ctx.validData.id,
  ...responseHandler(ctx.request, ctx.response),
});

module.exports = postUserController; 
