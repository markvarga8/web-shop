const express = require('express');
const router = express.Router();
const SignInController = require('../controllers/SignIncontroller');

router.post('/signIn', SignInController.signIn);

module.exports = router;
