const express = require('express');
const router = express.Router();
const SignInController = require('../controllers/SignIncontroller');
const RegistrationController = require('../controllers/RegistrationController');


router.post('/signIn', SignInController.signIn);

router.post('/registration', RegistrationController.register);
router.get('/registration/verify', RegistrationController.verify);

module.exports = router;
