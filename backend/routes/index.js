const express = require('express');
const router = express.Router();
const SignInController = require('../controllers/SignIncontroller');
const RegistrationController = require('../controllers/RegistrationController');
const ProductController = require('../controllers/ProductController');

router.post('/signIn', SignInController.signIn);

router.post('/registration', RegistrationController.register);
router.get('/registration/verify', RegistrationController.verify);

router.get('/product', ProductController.selectProducts);

module.exports = router;
