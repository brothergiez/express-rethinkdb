const { BaseModel } = require('../models');
const { userSchema } = require('../schemas');

const setupMiddleware = (app, config, db) => {
  const user = userSchema(db);
  return async (req, res, next) => {
    res.locals.config = config;
    res.locals.UserDbConnector = new BaseModel({ db, model: user });
    next();
  }
}

module.exports = setupMiddleware;