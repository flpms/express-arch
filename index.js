'use strict';

const http = require('http');
const crypto = require('crypto');

const express = require('express');
const DB = require('simple-connection');

const {ObjectId} = require('mongodb');

const router = require('express').Router();

const config = require('./config');
const routesV1 = require('./v1/');

const {
  cryptograph,
  responseHandler,
  validate,
} = require('./commons/lib');

const app = express();

const db = new DB(config.env.db);

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }

  return next();
});

app.use('/v1', routesV1({
  cryptograph: cryptograph({ crypto }),
  config,
  db,
  ObjectId,
  responseHandler,
  router,
  validate,
}));

const server = http.createServer(app);
server.listen(3001);
server.on('error', console.error);

console.info('serve start 3001');
