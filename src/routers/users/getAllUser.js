const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
  const { UserDbConnector } = res.locals;

  const getAllUsers = await UserDbConnector.find();
  res.send(getAllUsers);
});

module.exports = router;
