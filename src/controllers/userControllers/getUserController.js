const getUserController = async (req, res) => {
  const username = req.params.username;
  const { UserDbConnector } = res.locals;
  const user = await UserDbConnector.findWithFilter({username});
  res.send(user);
}

module.exports = getUserController;