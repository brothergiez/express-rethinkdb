const express = require('express');
const router = express.Router();

const {
  handlers: { createHandler } 
} = require('custom-error-exceptions');

const { getAllUsersController: handler } = require('../../controllers')

router.get('/users', createHandler(handler));

module.exports = router;
