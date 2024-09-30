const { WorShopId } = require("../model/worshopIdModel");
const { ObjectId } = require('mongodb');

exports.getWorkshopId = async(req, res) => {
    try {
        const id = new ObjectId(req.params.id)
        const workshop = await WorShopId.findById(id)
        if(!workshop) {
            return res.status(404).json({
                message: "No workshop found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Workshop received correctly",
            status: 200,
            data: workshop
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });
    }
}