'use strict';

require('dotenv').config();
const { name,version } = require('../package.json');

const {
  NODE_ENV,
  PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_SERVER,
  DB_PORT,
  DB_NAME,
  DB_COLLECTION_USERS,
  DB_TABLE_USER,
} = process.env;

const config = {
  app: {
    name,
    version,
    port: PORT,
    nodeEnv: NODE_ENV
  },
  db: {
  //   username: DB_USERNAME || '',
  //   password: DB_PASSWORD || '',
    server: DB_SERVER,
    port: DB_PORT,
    database_name: DB_NAME,
    userTable: DB_TABLE_USER,
  //   userCollection: DB_COLLECTION_USERS,
  },
}

module.exports = Object.freeze(config);
