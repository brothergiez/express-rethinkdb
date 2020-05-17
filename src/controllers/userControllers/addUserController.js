const addUserController = async (req, res) => {
  const data = req.body;
  const { UserDbConnector } = res.locals;

  const createUser = await UserDbConnector.insertOne(data);
  res.send(createUser);
}

module.exports = addUserController;