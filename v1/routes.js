'use strict';

module.exports = (dependencies) => {
  const {
    db,
    router,
    useCase,
    controller,
    repository,
    schema: { post, get },
  } = dependencies;

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
