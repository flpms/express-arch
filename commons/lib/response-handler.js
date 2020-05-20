'use strict';

const responseHandler = (con = console) => (request, response) => ({
  onError: (statusCode, err) => {
    con.error(`[${statusCode}] ${request.baseUrl}${request.path}`);
    return response.status(statusCode).send({ message: err });
  },
  onSuccess: (statusCode, data) => {
    con.error(`[${statusCode}] ${request.baseUrl}${request.path}`);
    return response.status(statusCode).send(data);
  }
});

module.exports = responseHandler;
