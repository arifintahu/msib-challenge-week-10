const BaseController = require("../../../shared/BaseController");
const UserService = require("../services/user.service");
const { validateRequest } = require("../../../shared/validator");
const requirements = require("../requirements");

class UserController extends BaseController {
  #userService;
  constructor() {
    super();
    this.#userService = new UserService();
  }

  register = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.register);
      const result = await this.#userService.register(req.body);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };

  login = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.login);
      const result = await this.#userService.login(req.body);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };

  getUsers = async (req, res, next) => {
    try {
      await validateRequest(req, requirements.getUsers);
      const result = await this.#userService.getUsers(req.query);
      this.handleSuccessResponse(res, result);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = UserController;
