const ProductModel = require("../model/productDiscountModel");
const { ObjectId } = require('mongodb');

/**
 * Obtiene todos los productos con descuento
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getProductDiscount = async (req, res) => {
  try {
      const products = await ProductModel.aggregate([
          {
              $lookup: {
                from: "Category",
                localField: "categoryId",
                foreignField: "_id",
                as: "categoryData"
              }
          },
          {
            $unwind: "$categoryData"
          },
          {
            $lookup: {
              from: "Markets",
              localField: "marketId",
              foreignField: "_id",
              as: "marketData"
            }
          },
          {
            $unwind: "$marketData"
          },
          {
            $match: {
              discount: { $ne: null }
            }
          },
          {
            $project: {
              marketId: 0,
              categoryId: 0
            }
          }
      ]);

      if (products.length === 0) {
          return res.status(404).json({
              message: "No se encontraron productos",
              status: 404
          });
      }

      return res.status(200).json({
          message: "Productos recibidos correctamente",
          status: 200,
          data: products
      });

  } catch (error) {
      console.error("Error en getProduct:", error);
      return res.status(500).json({
          message: "Error interno del servidor",
          status: 500,
          error: error.message
      });
  }
}

/**
 * Obtiene un producto específico con descuento
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getProductIdDiscount = async (req, res) => {  
  try {
      const product = await ProductModel.aggregate([
        {
          $match: {
            _id: new ObjectId(req.params.id)
          }
        },
        {
          $lookup: {
            from: "Category",
            localField: "categoryId",
            foreignField: "_id",
            as: "categoryData"
          }
        },
        {
          $unwind: "$categoryData"
        },
        {
          $lookup: {
            from: "Markets",
            localField: "marketId",
            foreignField: "_id",
            as: "marketData"
          }
        },
        {
          $unwind: "$marketData"
        },
        {
          $project: {
            marketId: 0,
            categoryId: 0
          }
        }
      ])

      if (product.length === 0) {
          return res.status(404).json({
              message: "No se encontró el producto",
              status: 404
          });
      }

      return res.status(200).json({
          message: "Producto recibido correctamente",
          status: 200,
          data: product[0]
      });

  } catch (error) {
      return res.status(500).json({
          message: "Error interno del servidor",
          status: 500,
          error: error.message
      });
  }
}