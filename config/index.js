require('dotenv').config();

const config = {
  httpPort: process.env.HTTP_PORT,
  rethinkDb: {
    host: process.env.RETHINK_HOST,
    port: process.env.RETHINK_PORT,
    db: process.env.RETHINK_DB_NAME,
    auth: process.env.RETHINK_AUTH,
  }
};

module.exports = config;