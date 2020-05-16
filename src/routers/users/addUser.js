const express = require('express');
const router = express.Router();

router.post('/user', async (req, res) => {
  const data = req.body;
  const { UserDbConnector } = res.locals;

  const createUser = await UserDbConnector.insertOne(data);
  res.send(createUser);
});

module.exports = router;
