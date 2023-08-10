const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');

const router = Router();

router.post('/login', UsersController.index);
router.post('/createUser', UsersController.createUser);
router.get('/users', UsersController.getUsers);

module.exports = router;
