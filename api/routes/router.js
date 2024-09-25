const express = require=('express');
const router = express.Router();
const { getUser } = require('../controllers/userController');

const userValidator = require('../validators/userValidator');
const productValidator = require('../validators/userValidator');
const agentValidator = require('../validators/userValidator');
const categoryValidator = require('../validators/userValidator');
const couponValidator = require('../validators/userValidator');
const marketValidator = require('../validators/userValidator');
const messageValidator = require('../validators/userValidator');
const orderValidator = require('../validators/userValidator');
const workshopValidator = require('../validators/userValidator');
const shoppingCartValidator = require('../validators/userValidator');


router.get('/:id', getUser);

module.exports = router;