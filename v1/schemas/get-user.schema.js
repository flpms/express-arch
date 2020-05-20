'use strict';

const Joi = require('@hapi/joi');

module.exports = Joi.object({
  id: Joi.string().required(),
});
