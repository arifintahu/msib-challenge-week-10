const { Router } = require("express");
const { UserController } = require("../modules/user/controllers");
const { authMiddleware } = require("../shared/middlewares");
const { ROLES } = require("../shared/constants");

const router = Router();
const userController = new UserController();

router.route("/register").post(userController.register);

router.route("/login").post(userController.login);

router
  .route("/")
  .get(
    [authMiddleware.authenticate, authMiddleware.authorize(ROLES.ADMIN)],
    userController.getUsers,
  );

module.exports = router;
