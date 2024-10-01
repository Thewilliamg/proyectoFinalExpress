/**
 * @module AllMarkets
 * @description Modelo para los mercados
 */

const mongoose = require('mongoose');

/**
 * @typedef {Object} Market
 * @property {string} name - El nombre del mercado
 * @property {string} img - La URL de la imagen del mercado
 * @property {string} location - La ubicación del mercado
 */

/**
 * @type {mongoose.Schema<Market>}
 */
const marketsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    location: { type: String, required: true }
});

module.exports = mongoose.model('AllMarkets', marketsSchema, "Markets");