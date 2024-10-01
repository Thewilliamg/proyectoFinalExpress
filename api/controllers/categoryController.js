const CategoryModel = require("../model/categoryModel");

/**
 * Controlador para obtener todas las categorías
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find({})

        if (category.length == 0) {
            return res.status(404).json({
                message: "No se encontraron categorías",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Categorías recibidas correctamente",
            status: 200,
            data: category
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error interno del servidor",
            status: 500,
            error: error.message
        });        
    }
}

