const getAllUsersController = async (req, res) => {
  const { UserDbConnector } = res.locals;
  const getAllUsers = await UserDbConnector.find();
  res.send(getAllUsers);
}

module.exports = getAllUsersController;