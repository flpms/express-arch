'use strict';

const cryptograph = ({ crypto }) => ({
  gen(value) {
    return new Promise((resolve, reject) => 
      crypto.pbkdf2(value, 'as90j90jj90jj', 4, 32, 'sha512', 
        (err, key) => err ? 
          reject(err) : 
          resolve(key.toString('hex'))));
  }
});

module.exports = cryptograph