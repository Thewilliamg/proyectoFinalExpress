const express = require('express');
const router = express.Router();
const { registerUserNumber, registerUserEmail, loginUser } = require('../controllers/userController');

const userValidator = require('../validators/userValidator');
// const productValidator = require('../validators/userValidator');
// const agentValidator = require('../validators/userValidator');
// const categoryValidator = require('../validators/userValidator');
// const couponValidator = require('../validators/userValidator');
// const marketValidator = require('../validators/userValidator');
// const messageValidator = require('../validators/userValidator');
// const orderValidator = require('../validators/userValidator');
// const workshopValidator = require('../validators/userValidator');
// const shoppingCartValidator = require('../validators/userValidator');

// !! Method example

// router.get('/:id', getUser);

router.post('/signup/phoneNumber', userValidator, registerUserNumber)
router.post('/signup/email', userValidator, registerUserEmail)
router.post('/login/user', userValidator, loginUser)

module.exports = router;