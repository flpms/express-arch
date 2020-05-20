const validation = ({ validate }) => schema => (req, res, next) => {
  const { body, params, query } = req;
  
  const [data] = [body, params, query]
    .filter(Boolean)
    .filter(item => 
      Boolean(Object.keys(item).length));

  const onError = (error) => {
    console.warn('error', error);
    return res.status(400).send(error.name);
  }

  const onSuccess = value => (req.validData = value, next());

  return validate(schema)(data, onSuccess, onError);
};

module.exports = validation;