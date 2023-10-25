const { validationResult } = require("express-validator");

const validateRequest = async (req, validations) => {
  await Promise.all(validations.map((validation) => validation.run(req)));
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return;
  }

  throw new Error("Invalid form");
};

module.exports = {
  validateRequest,
};
