const { hash, compare } = require("bcryptjs");

class PasswordManager {
  hashPassword = (password) => {
    return hash(password, 12);
  };

  compare = (password, hashedPassword) => {
    return compare(password, hashedPassword);
  };
}

module.exports = PasswordManager;
