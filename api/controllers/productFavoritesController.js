const productFavoritesModel = require("../model/productFavoritesModel");
const { ObjectId } = require('mongodb');

exports.getProductFavorites = async(req, res) => {

    try {
        const getFavorites = await productFavoritesModel.aggregate([
            {
              $match: {
                _id: new ObjectId(req.params.id)
              }
            },
            {
              $lookup: {
                from: "Products",
                localField: "favorites",
                foreignField: "_id",
                as: "productos"
              }
            },
            {
              $unwind: "$productos"
            },
            {
              $lookup: {
                from: "Markets",
                localField: "productos.marketId",
                foreignField: "_id",
                as: "market"
              }
            },
            {
              $unwind: "$market"
            },
            {
              $project: {
                productos: 1,
                market: 1
              }
            }
        ])

        if (!getFavorites) {
            return res.status(404).json({
                message: "No favorite product found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Favorite product received correctly",
            status: 200,
            data: getFavorites
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });
    }
}