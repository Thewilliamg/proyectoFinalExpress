const AllMarkets = require("../model/marketsModel");

/**
 * Controlador para obtener todos los mercados
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getAllMarkets = async (req, res) => {
    try {
        const markets = await AllMarkets.find({});
        if (!markets) {
            return res.status(404).json({ message: 'Tiendas no encontradas' });
        }
        res.status(200).json(markets);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de tiendas', error });
    }
};