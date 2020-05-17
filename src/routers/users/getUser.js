const express = require('express');
const router = express.Router();
const {
  handlers: { createHandler } 
} = require('custom-error-exceptions');

const { getUserController: handler } = require('../../controllers')

router.get('/user/:username', createHandler(handler));

module.exports = router;
