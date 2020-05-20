'use strict';

const UserRepository = dependencies => {
  const {
    db,
    config: {
      env: { db: {userCollection} } 
    }
  } = dependencies;

  const usersCollection = db.collection(userCollection);

  return {
    find: async query => {
      const result = await usersCollection('find', query);
      return result.toArray();
    },
    insertOne: user => usersCollection('insertOne', user),
  };
};

module.exports = UserRepository;