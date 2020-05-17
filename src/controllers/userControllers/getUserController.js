const { errors: { NotFoundError } } = require('custom-error-exceptions');

const getUserController = async (req, res) => {
  const username = req.params.username;
  const { UserDbConnector } = res.locals;
  const user = await UserDbConnector.findWithFilter({ username });
  if (!user || !user.length) {
    throw new NotFoundError();
  }
  res.send(user);
}

module.exports = getUserController;