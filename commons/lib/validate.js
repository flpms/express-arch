'use strict';

module.exports = schema => (data, onSuccess, onError) => {
  const {error, value} = schema.validate(data);

  return error ? onError(error): onSuccess(value);
}