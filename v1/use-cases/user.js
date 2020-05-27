'use strict';

const User = dependencies => {
  const { cryptograph, userRepository } = dependencies;

  const findUser = async request => {
    const { id, onSuccess, onError} = request;
    try {
      const result = await userRepository.find(id);

      if (!result.length) {
        return onError(404, err);
      }

      result.senha = null;
      return onSuccess(200, result);
    } catch(err) {
      return onError(503, err);
    }
  }

  const createUser = async request => {
    const { user, onSuccess, onError} = request;

    try {
      const cryptoPass = await cryptograph.gen(user.senha);

      user.senha = cryptoPass;

      const {rows:[{_id}]} = await userRepository.insertOne(user);

      user._id = _id;
      user.senha = null;

      return onSuccess(200, user);
    } catch(err) {
      return onError(503, err);
    }
  }

  return {
    createUser,
    findUser,
  }
}

module.exports = User;