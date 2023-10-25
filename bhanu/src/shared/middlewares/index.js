const errorHandler = require("./errorHandler.middleware");
const morganMiddleware = require("./morgan.middleware");
const AuthMiddleware = require("./auth.middleware");

const authMiddleware = new AuthMiddleware();

module.exports = {
  errorHandler,
  morganMiddleware,
  authMiddleware,
};
