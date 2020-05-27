'use strict';

const http = require('http');
const crypto = require('crypto');
// const express = require('express');
const bodyParser = require('koa-bodyparser');
const koa = require('koa');

// const DB = require('simple-connection');
const pg = require('pg');
// const {ObjectId} = require('mongodb');

// const router = require('express').Router();

const Router = require('@koa/router');

const config = require('./config');
const routesV1 = require('./v1/');

const {
  cryptograph,
  PostgreConnector,
  responseHandler,
  validate,
} = require('./commons/lib');

const app = new koa(); // express();

const db = PostgreConnector(pg)(config.env.db);
// const db = new DB(config.env.db);

app.use(bodyParser());

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

//   if (req.method === 'OPTIONS') {
//     return res.status(204).send();
//   }

//   return next();
// });

const routerV1 = routesV1({
  cryptograph: cryptograph({ crypto }),
  config,
  db,
  // ObjectId,
  responseHandler,
  Router,
  validate,
});

app.use(routerV1.routes());
app.use(routerV1.allowedMethods());

app.listen(3001);

// const server = http.createServer(app);
// server.listen(3001);
// server.on('error', (err) => console.error(err));
// process.on('error', (err) => console.error(err));
console.info('serve start 3001');
