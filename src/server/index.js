const express = require('express');
const {
  handlers: { errorHandler }
} = require('custom-error-exceptions');

const config = require('../../config');
const thinky = require('thinky')(config.rethinkDb);

const { setupMiddleware } = require('../middlewares');
const routes = require('../routers');

const app = express();
const db = setupMiddleware(app, config, thinky);
app.use(db);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);
app.use(errorHandler);
app.listen(config.httpPort, () => console.log(`server run at http://localhost:${config.httpPort}`));