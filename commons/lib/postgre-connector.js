'use strict';

const PostgreConnector = pg => config => {
  const { Pool } = pg;

  const connString = `postgres://${config.server}:${config.port}/${config.database_name}`; 

  const pool = new Pool({
    connectionString: connString,
  });

  pool.on('connect', () => {
    console.log('Base de Dados conectado com sucesso!');
  });

  return pool;
}

module.exports = PostgreConnector;