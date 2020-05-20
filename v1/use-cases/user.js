'use strict';

const User = dependencies => {
  const { cryptograph, userRepository } = dependencies;

  const findUser = async request => {
    const { id, onSuccess, onError} = request;
    try {
      const [result] = await userRepository.find({ _id: id });
      result.senha = null;
      return onSuccess(200, result);
    } catch(err) {
      return onError(err);
    }
  }

  const createUser = async request => {
    const { user, onSuccess, onError} = request;

    try {
      const cryptoPass = await cryptograph.gen(user.senha);

      user.senha = cryptoPass;

      const {ops:[result]} = await userRepository.insertOne(user);

      result.senha = null;

      return onSuccess(200, result);
    } catch(err) {
      return onError(err);
    }
  }

  return {
    createUser,
    findUser,
  }
}

module.exports = User;