const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middlewares/auth'); 
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
const { getProductFavorites, addProductToFavorites, removeProductFromFavorites } = require('../controllers/productFavoritesController');
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
const { getAllItemsShopCar, saveOrder, addToCar, deleteAllUserProducts } = require('../controllers/shopCarController');
const { getAllPurchaseOrderByUser } = require('../controllers/ordersController');

const userValidator = require('../validators/userValidator');
const shoppingCartValidator = require('../validators/userValidator');

router.get('/discounts',isAuthenticated, getProductDiscount)
router.get('/discounts/category', isAuthenticated,getCategory)
router.get('/discounts/product/:id', isAuthenticated,getProductIdDiscount)
router.get('/favorites/:id', isAuthenticated,getProductFavorites)
router.post('/product/favorite', addProductToFavorites)
router.delete('/product/favorite/delete', removeProductFromFavorites)
router.get('/workshop/:id',isAuthenticated, getWorkshopId)
router.get('/workshops/info/:id', isAuthenticated,getWorkshopInfo)
router.get('/markets',isAuthenticated,getAllMarkets);
router.get('/workshops',isAuthenticated, getAllWorkshops)
router.get('/coupon/:userid', isAuthenticated,getCoupoonUser)
router.get('/user/:id', isAuthenticated,getUserById);
router.post('/signup/phoneNumber', userValidator, registerUserNumber)
router.post('/signup/email', userValidator, registerUserEmail)
router.post('/login/user', userValidator, loginUser)
router.get('/markets/:marketId/products',isAuthenticated,getAllproductsByMarket);
router.get('/product/details/:id',isAuthenticated,getProduct);
router.get('/products',isAuthenticated,getAllproducts);
router.get('/shop/:userId',isAuthenticated,getAllItemsShopCar);
router.post('/new-shop',isAuthenticated,shoppingCartValidator,saveOrder);
router.post('/items/car/:productId',isAuthenticated,addToCar)
router.get('/orders/user/:userId',isAuthenticated,getAllPurchaseOrderByUser);
router.get('/sidebar/:userId',isAuthenticated,getuserProfileSidebar);
router.get('/search-email/:email',isAuthenticated,searchUserId);
router.delete('/items/car/:userId/:productId',deleteAllUserProducts);
router.patch('/user/:id', updateUserById);
router.post('/user/:id/image', upload.single('image'), updateUserImage);

module.exports = router;