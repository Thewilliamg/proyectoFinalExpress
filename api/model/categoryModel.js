/**
 * @module CategoryModel
 * @description Modelo para la categoría de productos
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} Category
 * @property {string} name - El nombre de la categoría
 */

/**
 * @type {mongoose.Schema<Category>}
 */
const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

/**
 * @type {mongoose.Model<Category>}
 */
const CategoryModel = mongoose.model('CategoryModel', categorySchema, "Category");

module.exports = CategoryModel;