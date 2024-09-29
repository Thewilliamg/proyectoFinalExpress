const express = require('express');
const router = express.Router();

const { getUser } = require('../controllers/userController');
const {getAllMarkets} = require('../controllers/marketsController');
const {getAllproductsByMarket,getProduct,getAllproducts,addToCar} = require('../controllers/productsController');
const {getAllItemsShopCar, saveOrder} = require('../controllers/shopCarController');

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


// router.get('/:id', getUser);
router.get('/markets',getAllMarkets);
router.get('/markets/:marketId/products',getAllproductsByMarket);
router.get('/product/details/:id',getProduct);
router.get('/products',getAllproducts);
router.get('/shop/:userId',getAllItemsShopCar);
router.post('/new-shop',shoppingCartValidator, saveOrder);
router.post('/items/car/:productId',addToCar)


module.exports = router;