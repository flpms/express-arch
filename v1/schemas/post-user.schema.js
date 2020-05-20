'use strict';

const Joi = require('@hapi/joi');

module.exports = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  senha: Joi.string().required(),
});
