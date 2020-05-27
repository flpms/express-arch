'use strict';

module.exports = (dependencies) => {
  const {
    db,
    Router,
    useCase,
    controller,
    repository,
    schema: { post, get },
  } = dependencies;

  const router = new Router({
    prefix: '/v1'
  });

  const {
    findUserController,
    postUserController,
    validation,
  } = controller({
    ...dependencies,
    ...useCase({
      ...repository(dependencies),
      ...dependencies,
    }),
  });

  router.post('/user', validation(post.user), postUserController);
  router.get('/user/:id', validation(get.user), findUserController);

  return router;
};
