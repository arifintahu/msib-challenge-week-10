const { body, query } = require("express-validator");

const requirements = {
  register: [
    body("email").isEmail(),
    body("password").isString().isLength({ min: 5 }),
    body("role")
      .isString()
      .isIn(["admin", "general"])
      .default("general")
      .optional({ nullable: true }),
  ],
  login: [
    body("email").isEmail(),
    body("password").isString().isLength({ min: 5 }),
  ],
  getUsers: [
    query("page").isInt({ min: 1 }).optional({ nullable: true }),
    query("limit").isInt({ min: 10, max: 50 }).optional({ nullable: true }),
  ],
};

module.exports = requirements;
