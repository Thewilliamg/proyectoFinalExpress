const ObjectId = require('mongoose').Types.ObjectId;
const allproductsInCarModelByUserModel = require("../model/shopCarModel");

exports.getAllItemsShopCar = async (req, res) => {
    const userId = req.params.userId;
    const objectId = new ObjectId(userId);
    try {
        const itemsShopCar = await allproductsInCarModelByUserModel.aggregate([
            {
                $match: {
                  userId: objectId
                }
              },
              {
                $lookup: {
                  from: "Products",
                  localField: "productId",
                  foreignField: "_id",
                  as: "product"
                }
              },
              {
                $unwind: "$product"
              },
              {
                $project: {
                  _id: 0,
                  productId: 1,
                  quantity: 1,
                  name: "$product.name",
                  discount: "$product.discount",
                  marketId: "$product.marketId",
                  size: "$product.size",
                  picture: "$product.picture",
                  weight: "$product.weight",
                  price: "$product.price"
                }
              },
              {
                $lookup: {
                  from: "Markets",
                  localField: "marketId",
                  foreignField: "_id",
                  as: "market"
                }
              },
              {
                $unwind: "$market"
              },
              {
                $project: {
                  _id: 0,
                  productId: 1,
                  quantity: 1,
                  name: 1,
                  discount: 1,
                  marketName: "$market.name",
                  size: 1,
                  picture: 1,
                  weight: 1,
                  price: 1
                }
              }
        ]);
        console.log(itemsShopCar)
        if (!itemsShopCar) {
            return res.status(400).json({ message: 'Error de solicitud' })
        }
        res.status(200).json(itemsShopCar);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos del carrito de compras.' })
    }
}