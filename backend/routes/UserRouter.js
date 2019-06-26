const express = require('express');
const router = express.Router();

var controller = require('../controller/controller');

//Login
router.post('/login', controller.user.login);

//create new User
router.post('/users', controller.user.createUser);

module.exports = router;