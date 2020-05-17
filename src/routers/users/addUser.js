const express = require('express');
const router = express.Router();

const {
  handlers: { createHandler } 
} = require('custom-error-exceptions');

const { addUserController: handler } = require('../../controllers')

router.post('/user', createHandler(handler));

module.exports = router;
