const { workshopModel } = require ('../model/workshopsModel')
const { ObjectId } = require('mongodb')

/**
 * Obtiene todos los talleres
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getAllWorkshops = async (req, res) =>{
    try {
        const workShop = await workshopModel.aggregate([
            {
              $lookup: {
                from: "Markets",
                localField: "marketId",
                foreignField: "_id",
                as: "markets"
              }
            },
            {
              $unwind: "$markets"
            },
            {
              $project: {
                marketId: 0
              }
            }
        ]);

        if (!workShop) {
            return res.status(404).json({ message: 'Taller no encontrado' })
        }
        res.status(200).json(workShop);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el taller', error })
    }
}

/**
 * Obtiene la información de un taller específico
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getWorkshopInfo = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id)
        const workShopInfo = await workshopModel.findById(id)

        if(!workShopInfo) {
            return res.status(404).json({
                message: "Taller no encontrado",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Taller recibido correctamente",
            status: 200,
            data: workShopInfo
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error interno del servidor",
            status: 500,
            error: error.message
        });
    }
}