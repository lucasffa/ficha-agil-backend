const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');

const router = Router();

router.post('/login', UsersController.index);

module.exports = router;
