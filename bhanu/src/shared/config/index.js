require("dotenv").config();

const config = {
  PORT: parseInt(process.env.PORT) || 3000,
  API: process.env.API || "api/v1",
  IS_DEVELOPMENT: ["development", "dev", "local"].includes(process.env.SERVER),
  SECRET_KEY: process.env.SECRET_KEY,
};

module.exports = config;
