const { Sequelize } = require("sequelize");
const logger = require("../logger");

const db = new Sequelize("sqlite::memory:", {
  logging: (sql) => logger.debug(sql),
});

function syncTables() {
  const models = require("./models");
  return Promise.all([Object.values(models).map((model) => model.sync())]);
}

module.exports = {
  db,
  syncTables,
};
