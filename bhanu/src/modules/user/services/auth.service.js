const { sign } = require("jsonwebtoken");
const { addMinutes } = require("date-fns");

class AuthService {
  #expiry;
  #secretKey;

  constructor(expiry, secretKey) {
    this.#expiry = expiry;
    this.#secretKey = secretKey;
  }

  createToken = (userId) => {
    const expiresIn = Math.floor(
      addMinutes(new Date(), this.#expiry).getTime() / 1000,
    );
    const authUser = { id: userId, exp: expiresIn };
    return sign(authUser, this.#secretKey);
  };
}

module.exports = AuthService;
