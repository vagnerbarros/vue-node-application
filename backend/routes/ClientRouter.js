const express = require('express');
const router = express.Router();

let controller = require('../controller/controller');
let checkToken = require('../util/checkToken');

//save client
router.post('/clients', checkToken, controller.client.save);

//list clients
router.get('/clients', checkToken, controller.client.list);

//update client
router.put('/clients', checkToken, controller.client.update);

//remove client
router.delete('/clients', checkToken, controller.client.remove);

module.exports = router;