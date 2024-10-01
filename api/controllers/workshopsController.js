const { workshopModel } = require ('../model/workshopsModel')
const { ObjectId } = require('mongodb')

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

exports.getWorkshopInfo = async (req, res) => {
    try {
        const id = new ObjectId(req.params.id)
        const workShopInfo = await workshopModel.findById(id)

        if(!workShopInfo) {
            return res.status(404).json({
                message: "No workshop found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Workshop received correctly",
            status: 200,
            data: workShopInfo
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });
    }
    }