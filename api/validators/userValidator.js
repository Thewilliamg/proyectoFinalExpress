const { body,check } = require('express-validator');

const productValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres'),
    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto')
        .not().isEmpty().withMessage('La descripción es requerida')
        .isLength({ min: 10, max: 300 }).withMessage('La descripción debe tener entre 10 y 300 caracteres'),
    body('price')
        .optional()
        .isFloat({ min: 0.01 }).withMessage('El precio debe ser un número mayor a 0'),
    body('picture')
        .optional()
        .isString().withMessage('La imagen debe ser una cadena de texto')
        .matches(/\.(jpg|jpeg|png|gif)$/i).withMessage('La imagen debe ser un archivo con una extensión válida (jpg, jpeg, png, gif)'),
    body('stock')
        .optional()
        .isInt({ min: 0 }).withMessage('El stock debe ser un número entero mayor o igual a 0'),
    body('size')
        .optional()
        .isInt({ min: 1 }).withMessage('El tamaño debe ser un número entero mayor a 0'),
    body('marketId')
        .optional()
        .isString().withMessage('El ID del mercado debe ser una cadena de texto válida'),
    body('discount')
        .optional()
        .isString().withMessage('El ID del descuento debe ser una cadena de texto válida'),
    body('categoryId')
        .optional()
        .isString().withMessage('El ID de la categoría debe ser una cadena de texto válida')
];

const userValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres'),
    body('email')
        .optional()
        .isEmail().withMessage('Debe ser un email válido')
        .normalizeEmail(),
    body('password')
        .optional()
        .isString().withMessage('La contraseña debe ser una cadena de texto')
        .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
    body('urlPicture')
        .optional()
        .isString().withMessage('La URL de la imagen debe ser una cadena de texto')
        .matches(/\.(jpg|jpeg|png|gif)$/i).withMessage('La imagen debe ser un archivo con una extensión válida (jpg, jpeg, png, gif)'),
    body('numberPhone')
        .optional()
        .isString().withMessage('El número de teléfono debe ser una cadena de texto')
        .matches(/^\d{10}$/).withMessage('El número de teléfono debe tener exactamente 10 dígitos'),
    body('gender')
        .optional()
        .isIn(['masculino', 'femenino', 'otro']).withMessage('El género debe ser "masculino", "femenino" o "otro"'),
    body('favorites')
        .optional()
        .isArray().withMessage('Favoritos debe ser un arreglo de IDs de productos'),
    body('coupon')
        .optional()
        .isArray().withMessage('Los cupones deben ser un arreglo de IDs de cupones'),
    body('birthDate')
        .optional()
        .isISO8601().withMessage('La fecha de nacimiento debe ser una fecha válida en formato ISO8601')
];


const agentValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 50 }).withMessage('El nombre debe tener entre 2 y 50 caracteres')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage('El nombre solo debe contener letras'),
    body('category')
        .optional()
        .isString().withMessage('La categoría debe ser una cadena de texto')
        .not().isEmpty().withMessage('La categoría es requerida')
        .isIn(['AI', 'Human', 'Bot']).withMessage('La categoría debe ser "AI", "Human" o "Bot"')
];

const categoryValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres')
        .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/).withMessage('El nombre solo debe contener letras y espacios')
];

const couponValidator = [
    body('code')
        .optional()
        .isString().withMessage('El código debe ser una cadena de texto')
        .not().isEmpty().withMessage('El código es requerido')
        .isLength({ min: 5, max: 20 }).withMessage('El código debe tener entre 5 y 20 caracteres'),
    body('discount')
        .optional()
        .isInt({ min: 1, max: 100 }).withMessage('El descuento debe ser un número entero entre 1 y 100'),
    body('dateExpiration')
        .optional()
        .isISO8601().withMessage('La fecha de expiración debe ser una fecha válida en formato ISO8601 (YYYY-MM-DD)')
        .isAfter(new Date().toISOString().split('T')[0]).withMessage('La fecha de expiración debe ser posterior a la fecha actual'),
    body('productId')
        .optional()
        .isString().withMessage('El ID del producto debe ser una cadena de texto válida')
        .not().isEmpty().withMessage('El ID del producto es requerido'),
    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto')
        .not().isEmpty().withMessage('La descripción es requerida')
        .isLength({ min: 10, max: 200 }).withMessage('La descripción debe tener entre 10 y 200 caracteres')
];

const marketValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres'),
    body('picture')
        .optional()
        .isString().withMessage('La imagen debe ser una cadena de texto')
        .not().isEmpty().withMessage('La imagen es requerida')
        .matches(/\.(jpg|jpeg|png|gif)$/i).withMessage('La imagen debe ser un archivo con una extensión válida (jpg, jpeg, png, gif)'),
    body('location')
        .optional()
        .isString().withMessage('La ubicación debe ser una cadena de texto')
        .not().isEmpty().withMessage('La ubicación es requerida')
        .isLength({ min: 5, max: 200 }).withMessage('La ubicación debe tener entre 5 y 200 caracteres'),
    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto')
        .not().isEmpty().withMessage('La descripción es requerida')
        .isLength({ min: 10, max: 300 }).withMessage('La descripción debe tener entre 10 y 300 caracteres')
];

const messageValidator = [
    body('agentId')
        .optional()
        .isString().withMessage('El ID del agente debe ser una cadena de texto válida')
        .not().isEmpty().withMessage('El ID del agente es requerido'),
    body('userId')
        .optional()
        .isString().withMessage('El ID del usuario debe ser una cadena de texto válida')
        .not().isEmpty().withMessage('El ID del usuario es requerido'),
    body('content')
        .optional()
        .isArray({ min: 1 }).withMessage('El contenido debe ser un arreglo con al menos un mensaje'),
    check('content.*.type')
        .optional()
        .isIn(['agent', 'user']).withMessage('El tipo de mensaje debe ser "agent" o "user"'),
    check('content.*.message')
        .optional()
        .isString().withMessage('El mensaje debe ser una cadena de texto')
        .not().isEmpty().withMessage('El mensaje es requerido'),
    check('content.*.date')
        .optional()
        .isISO8601().withMessage('La fecha debe ser una fecha válida en formato ISO8601')
];

const orderValidator = [
    body('userId')
        .optional()
        .isString().withMessage('El ID del usuario debe ser una cadena de texto válida')
        .not().isEmpty().withMessage('El ID del usuario es requerido'),
    body('products')
        .optional()
        .isArray({ min: 1 }).withMessage('La lista de productos debe ser un arreglo con al menos un producto'),
    check('products.*.productId')
        .optional()
        .isString().withMessage('El ID del producto debe ser una cadena de texto válida')
        .not().isEmpty().withMessage('El ID del producto es requerido'),
    check('products.*.quantity')
        .optional()
        .isInt({ min: 1 }).withMessage('La cantidad debe ser un número entero mayor o igual a 1'),
    check('products.*.purchasePrice')
        .optional()
        .isFloat({ min: 0.01 }).withMessage('El precio de compra debe ser un número mayor a 0'),
    body('total')
        .optional()
        .isFloat({ min: 0.01 }).withMessage('El total debe ser un número mayor a 0'),
    body('orderDate')
        .optional()
        .isISO8601().withMessage('La fecha del pedido debe ser una fecha válida en formato ISO8601'),
    body('status')
        .optional()
        .isIn(['pendiente', 'procesada', 'enviada', 'completada', 'cancelada']).withMessage('El estado debe ser uno de los siguientes: "pendiente", "procesada", "enviada", "completada", "cancelada"')
];

const workshopValidator = [
    body('name')
        .optional()
        .isString().withMessage('El nombre debe ser una cadena de texto')
        .not().isEmpty().withMessage('El nombre es requerido')
        .isLength({ min: 2, max: 100 }).withMessage('El nombre debe tener entre 2 y 100 caracteres'),
    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de texto')
        .not().isEmpty().withMessage('La descripción es requerida')
        .isLength({ min: 10, max: 300 }).withMessage('La descripción debe tener entre 10 y 300 caracteres'),
    body('modality')
        .optional()
        .isIn(['presencial', 'virtual']).withMessage('La modalidad debe ser "presencial" o "virtual"'),
    body('picture')
        .optional()
        .isString().withMessage('La imagen debe ser una cadena de texto')
        .matches(/\.(jpg|jpeg|png|gif)$/i).withMessage('La imagen debe ser un archivo con una extensión válida (jpg, jpeg, png, gif)'),
    body('startDate')
        .optional()
        .isISO8601().withMessage('La fecha de inicio debe ser una fecha válida en formato ISO8601'),
    body('duration')
        .optional()
        .isString().withMessage('La duración debe ser una cadena de texto')
        .not().isEmpty().withMessage('La duración es requerida'),
    body('schedule')
        .optional()
        .isString().withMessage('El horario debe ser una cadena de texto')
        .not().isEmpty().withMessage('El horario es requerido'),
    body('materialsProvided')
        .optional()
        .isArray().withMessage('Los materiales proporcionados deben ser un arreglo'),
    body('requiredMaterials')
        .optional()
        .isArray().withMessage('Los materiales requeridos deben ser un arreglo'),
    body('registeredUsers')
        .optional()
        .isArray().withMessage('Los usuarios registrados deben ser un arreglo de IDs de usuarios')
];

const shoppingCartValidator = [
    body('userId')
        .optional()
        .isString().withMessage('El ID del usuario debe ser una cadena de texto')
        .not().isEmpty().withMessage('El ID del usuario es requerido'),
    body('products')
        .optional()
        .isArray().withMessage('Los productos deben ser un arreglo')
        .custom((value) => {
            for (const product of value) {
                if (!product.productId || typeof product.productId !== 'string') {
                    throw new Error('Cada producto debe tener un productId válido');
                }
                if (!Number.isInteger(product.quantity) || product.quantity <= 0) {
                    throw new Error('La cantidad debe ser un número entero mayor a 0');
                }
                if (typeof product.purchasePrice !== 'number' || product.purchasePrice < 0) {
                    throw new Error('El precio de compra debe ser un número mayor o igual a 0');
                }
            }
            return true;
        }),
    body('total')
        .optional()
        .isFloat({ min: 0 }).withMessage('El total debe ser un número mayor o igual a 0'),
    body('orderDate')
        .optional()
        .isISO8601().withMessage('La fecha del pedido debe ser una fecha válida en formato ISO8601'),
    body('status')
        .optional()
        .isString().withMessage('El estado debe ser una cadena de texto')
        .not().isEmpty().withMessage('El estado es requerido')
];


module.exports = [
    productValidator,
    userValidator,
    agentValidator,
    categoryValidator,
    couponValidator,
    marketValidator,
    messageValidator,
    orderValidator,
    workshopValidator,
    shoppingCartValidator
]