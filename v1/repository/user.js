'use strict';

const UserRepository = dependencies => {
  const {
    db,
    config: {
      env: { db: {userTable} } 
    }
  } = dependencies;

  // const usersCollection = db.collection(userCollection);

  return {
    find: async query => {
      const { rows: [result] } = await db.query(`SELECT * FROM ${userTable} WHERE _id=$1;`, [query]);
      return result;
    },
    insertOne: user => db.query(
      `INSERT INTO ${userTable}(name, email, senha) VALUES ($1, $2, $3) RETURNING _id;`,
      [
        user.name,
        user.email,
        user.senha
      ]),
  };
};

module.exports = UserRepository;