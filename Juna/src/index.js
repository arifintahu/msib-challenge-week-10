const createServer = require("./server");
const { PORT } = require("./shared/config");
const { db, syncTables } = require("./shared/database");
const logger = require("./shared/logger");

function startServer() {
  const app = createServer();
  return app.listen(PORT, async () => {
    try {
      await db.authenticate();
      await syncTables();
      logger.info(`Server is listening on port ${PORT}`);
    } catch (err) {
      logger.error(`Cannot start server, error: ${err.message}`);
      process.exit(1);
    }
  });
}

startServer();
