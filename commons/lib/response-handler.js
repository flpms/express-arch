'use strict';

const responseHandler = (con = console) => (request, response) => ({
  onError: (statusCode, err) => {
    con.error(`[${statusCode}] ${request.baseUrl}${request.path}`);
    response.status = statusCode;
    response.body = { message: err };
    return response;
  },
  onSuccess: (statusCode, data) => {
    con.info(`[${statusCode}] ${request.baseUrl}${request.path}`);

    response.status = statusCode;
    response.body = data;

    return response;
  }
});

module.exports = responseHandler;
