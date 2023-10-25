const { verify } = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const UserService = require("../../modules/user/services/user.service");

class AuthMiddleware {
  #userService;
  constructor() {
    this.#userService = new UserService();
  }

  authenticate = async (req, res, next) => {
    const authorization = String(req.headers.authorization);
    if (!authorization || !authorization.includes("Bearer")) {
      res.sendStatus(401);
      return;
    }

    const token = authorization?.slice(7);
    const payload = verify(token, SECRET_KEY);
    if (!payload) {
      res.sendStatus(401);
      return;
    }

    const user = await this.#userService.getUserById(payload.id);
    if (!user) {
      res.sendStatus(401);
      return;
    }
    req.userdata = user;

    next();
  };

  authorize = (...roles) => {
    return async (req, res, next) => {
      const userdata = req.userdata;
      if (!userdata) {
        res.sendStatus(403);
        return;
      }

      const isRoleValid = roles.includes(userdata.role);
      if (!isRoleValid) {
        res.sendStatus(403);
        return;
      }
      next();
    };
  };
}

module.exports = AuthMiddleware;
