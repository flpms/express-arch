'use strict';

const controller = require('./controller');
const repository = require('./repository');
const routesV1 = require('./routes');
const schema = require('./schemas');
const useCase = require('./use-cases');

module.exports = dependencies => routesV1({
  controller,
  repository,
  schema,
  useCase,
  ...dependencies,
});