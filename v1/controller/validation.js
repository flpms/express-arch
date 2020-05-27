const validation = ({ validate }) => schema => (ctx, next) => {
  const { params } = ctx;
  const { body, query } = ctx.request;

  const [data] = [body, params, query]
    .filter(Boolean)
    .filter(item => 
      Boolean(Object.keys(item).length));

  const onError = (error) => {
    ctx.status = 400;
    ctx.response.body = error.name;
    return ctx;
  }

  const onSuccess = value => (ctx.validData = value, next());

  return validate(schema)(data, onSuccess, onError);
};

module.exports = validation;