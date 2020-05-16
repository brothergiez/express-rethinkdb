const express = require('express');
const router = express.Router();

router.get('/user/:username', async (req, res) => {
  const { UserDbConnector } = res.locals;
  const username = req.params.username;
  const user = await UserDbConnector.findWithFilter({username});
  res.send(user);
});

module.exports = router;
