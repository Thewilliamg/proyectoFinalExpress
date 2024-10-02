const express = require('express');
const router = express.Router();

const { getProductDiscount, getProductIdDiscount } = require('../controllers/productDiscountController');
const { getCategory } = require('../controllers/categoryController');
const { getProductFavorites } = require('../controllers/productFavoritesController');
const { getWorkshopId } = require('../controllers/workshopsIdController');
const {getAllMarkets} = require('../controllers/marketsController');
const { registerUserNumber, registerUserEmail, loginUser, getCoupoonUser, getUserById, getuserProfileSidebar } = require('../controllers/userController');
const {getAllWorkshops, getWorkshopInfo} = require('../controllers/workshopsController');
const {getAllproductsByMarket,getProduct,getAllproducts} = require('../controllers/productsController');
const {getAllItemsShopCar, saveOrder, addToCar, deleteAllUserProducts} = require('../controllers/shopCarController');
const {getAllPurchaseOrderByUser} = require('../controllers/ordersController');
const {searchUserId} = require('../controllers/userController');

const userValidator = require('../validators/userValidator');
// const productValidator = require('../validators/userValidator');
// const agentValidator = require('../validators/userValidator');
// const categoryValidator = require('../validators/userValidator');
// const couponValidator = require('../validators/userValidator');
// const marketValidator = require('../validators/userValidator');
// const messageValidator = require('../validators/userValidator');
// const orderValidator = require('../validators/userValidator');
// const workshopValidator = require('../validators/userValidator');
const shoppingCartValidator = require('../validators/userValidator');

router.get('/discounts', getProductDiscount)
router.get('/discounts/category', getCategory)
router.get('/discounts/product/:id', getProductIdDiscount)
router.get('/favorites/:id', getProductFavorites)
router.get('/workshop/:id', getWorkshopId)
router.get('/workshops/info/:id', getWorkshopInfo)
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
router.post('/new-shop',shoppingCartValidator,saveOrder);
router.post('/items/car/:productId',addToCar)
router.get('/orders/user/:userId',getAllPurchaseOrderByUser);
router.get('/sidebar/:userId',getuserProfileSidebar);
router.get('/search-email/:email',searchUserId);
router.delete('/items/car/:userId/:productId',deleteAllUserProducts);

module.exports = router;