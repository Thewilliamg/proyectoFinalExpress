const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Configuración de multer para la carga de imágenes
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Asegúrate de que este directorio exista
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) // Añade la extensión original del archivo
    }
});

const upload = multer({ storage: storage });

const { getProductDiscount, getProductIdDiscount } = require('../controllers/productDiscountController');
const { getCategory } = require('../controllers/categoryController');
const { getProductFavorites } = require('../controllers/productFavoritesController');
const { getWorkshopId } = require('../controllers/workshopsIdController');
const { getAllMarkets } = require('../controllers/marketsController');
const { 
    registerUserNumber, 
    registerUserEmail, 
    loginUser, 
    getCoupoonUser, 
    getUserById, 
    getuserProfileSidebar,
    searchUserId,
    updateUserById,
    updateUserImage
} = require('../controllers/userController');
const { getAllWorkshops, getWorkshopInfo } = require('../controllers/workshopsController');
const { getAllproductsByMarket, getProduct, getAllproducts } = require('../controllers/productsController');
const { getAllItemsShopCar, saveOrder, addToCar } = require('../controllers/shopCarController');
const { getAllPurchaseOrderByUser } = require('../controllers/ordersController');

const userValidator = require('../validators/userValidator');
const shoppingCartValidator = require('../validators/userValidator');

router.get('/discounts', getProductDiscount);
router.get('/discounts/category', getCategory);
router.get('/discounts/product/:id', getProductIdDiscount);
router.get('/favorites/:id', getProductFavorites);
router.get('/workshop/:id', getWorkshopId);
router.get('/workshops/info/:id', getWorkshopInfo);
router.get('/markets', getAllMarkets);
router.get('/workshops', getAllWorkshops);
router.get('/coupon/:userid', getCoupoonUser);
router.get('/user/:id', getUserById);
router.post('/signup/phoneNumber', userValidator, registerUserNumber);
router.post('/signup/email', userValidator, registerUserEmail);
router.post('/login/user', userValidator, loginUser);
router.get('/markets/:marketId/products', getAllproductsByMarket);
router.get('/product/details/:id', getProduct);
router.get('/products', getAllproducts);
router.get('/shop/:userId', getAllItemsShopCar);
router.post('/new-shop', shoppingCartValidator, saveOrder);
router.post('/items/car/:productId', addToCar);
router.get('/orders/user/:userId', getAllPurchaseOrderByUser);
router.get('/sidebar/:userId', getuserProfileSidebar);
router.get('/search-email/:email', searchUserId);
router.patch('/user/:id', updateUserById);
router.post('/user/:id/image', upload.single('image'), updateUserImage);

module.exports = router;