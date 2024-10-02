const { productsFavoriteSchema } = require("../model/productFavoritesModel");
const { ObjectId } = require('mongodb');

/**
 * Obtiene los productos favoritos de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getProductFavorites = async(req, res) => {
  try {
      const getFavorites = await productsFavoriteSchema.aggregate([
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

exports.addProductToFavorites = async (req, res) => {
  try {
      const { userId, productId } = req.body

      // Busca al usuario por su _id
      const user = await productsFavoriteSchema.findById(new ObjectId(userId));
      
      // Agrega el productId al array de favoritos si no existe ya
      if (!user.favorites.includes( new ObjectId(productId))) {
          user.favorites.push(new ObjectId(productId));
          await user.save(); // Guarda los cambios
      }

      return res.status(200).json({
        message: "Producto favorito añadido correctamente",
        status: 200,
        data: productId
      });
      
  } catch (error) {
      return res.status(500).json({
        message: "Error interno del servidor",
        status: 500,
        error: error.message
      });
  }
};

exports.removeProductFromFavorites = async (req, res) => {
  try {
      const { userId, productId } = req.body;

      // Busca al usuario por su _id
      const user = await productsFavoriteSchema.findById(new ObjectId(userId));

      // Filtra el array de favoritos para eliminar el productId
      user.favorites = user.favorites.filter(Id => !Id.equals(new ObjectId(productId)));

      // Guarda los cambios
      await user.save();

      return res.status(200).json({
          message: "Producto favorito eliminado correctamente",
          status: 200,
          data: user.favorites
      });

  } catch (error) {
      return res.status(500).json({
          message: "Error interno del servidor",
          status: 500,
          error: error.message
      });
  }
};