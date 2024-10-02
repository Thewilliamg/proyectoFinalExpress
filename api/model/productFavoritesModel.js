/**
 * @module productsFavoriteSchema
 * @description Modelo para los productos favoritos de los usuarios
 */

const mongoose = require('mongoose');
const { Types } = mongoose;

/**
 * @typedef {Object} UserFavorites
 * @property {Object} [favorites] - Los productos favoritos del usuario (opcional)
 * @property {Object} [market] - Información del mercado favorito del usuario (opcional)
 */

/**
 * @type {mongoose.Schema<UserFavorites>}
 */
const productsSchema = new mongoose.Schema({
    favorites: { type: [Types.ObjectId], ref: 'Product', required: false },
    market: { type: Object, required: false }
}, {versionKey: false});

/**
 * @type {mongoose.Model<UserFavorites>}
 */
const productsFavoriteSchema = mongoose.model('productsFavoriteSchema', productsSchema, "Users");

module.exports = {
    productsFavoriteSchema
};