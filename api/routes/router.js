const express = require('express');
const router = express.Router();

const {getAllMarkets} = require('../controllers/marketsController');
const {getAllWorkshops} = require('../controllers/workshopsController');
const { registerUserNumber, registerUserEmail, loginUser, getCoupoonUser, getUserById } = require('../controllers/userController');
const {getAllproductsByMarket,getProduct,getAllproducts} = require('../controllers/productsController');
const {getAllItemsShopCar, saveOrder} = require('../controllers/shopCarController');

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

router.get('/markets',getAllMarkets);
router.get('/workshops', getAllWorkshops)
router.get('/coupon/:userid', getCoupoonUser)
router.get('/user/:id', getUserById);
router.post('/signup/phoneNumber', userValidator, registerUserNumber)
router.post('/signup/email', userValidator, registerUserEmail)
router.post('/login/user', userValidator, loginUser)
router.get('/markets/:marketId/products',getAllproductsByMarket);
router.get('/product/details/:id',getProduct);
router.get('/products',getAllproducts);
router.get('/shop/:userId',getAllItemsShopCar);
router.post('/new-shop',/*shoppingCartValidator*/saveOrder);

module.exports = router;