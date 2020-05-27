'use strict';

const postUserController = ({
  createUser,
  responseHandler,
}) => (ctx) => createUser({
  user: ctx.validData,
  ...responseHandler(ctx.request, ctx.response),
});

module.exports = postUserController; 
