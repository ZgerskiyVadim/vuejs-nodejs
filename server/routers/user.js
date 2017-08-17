'use strict';
const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/user');

router.get('/users', UserCtrl.getAllUsers);

router.get('/users/:id', UserCtrl.getUserById);

router.post('/users', UserCtrl.createUser);

router.put('/users/:id', UserCtrl.updateUser);

router.delete('/users/:id', UserCtrl.removeUser);

router.post('/login', UserCtrl.loginUser);

module.exports = router;
