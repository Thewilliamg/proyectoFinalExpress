const productFavoritesModel = require("../model/productFavoritesModel");
const { ObjectId } = require('mongodb');

/**
 * Obtiene los productos favoritos de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
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
              message: "No se encontraron productos favoritos",
              status: 404
          });
      }

      return res.status(200).json({
          message: "Productos favoritos recibidos correctamente",
          status: 200,
          data: getFavorites
      });

  } catch (error) {
      return res.status(500).json({
          message: "Error interno del servidor",
          status: 500,
          error: error.message
      });
  }
}