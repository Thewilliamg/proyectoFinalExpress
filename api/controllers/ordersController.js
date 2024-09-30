const {getAllOrdersPurchaseByUserModel} = require("../model/ordersByUserModel");
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAllPurchaseOrderByUser = async (req, res) => {
    const userId = req.params.userId;
    const objectUserId = new ObjectId(userId);
    console.log(objectUserId)
    try {
        const orderByUserId = await getAllOrdersPurchaseByUserModel.aggregate([
            {
                $match: {
                    userId: objectUserId
                }
            },
            {
                $unwind: "$products"
            },

            {
                $lookup: {
                    from: "Products",
                    localField: "products.productId",
                    foreignField: "_id",
                    as: "productDetails"
                }
            },
            {
                $unwind: "$productDetails"
            },
            {
                $project: {
                    _id: 0,
                    orderId: "$_id",
                    imgProduct: "$productDetails.picture",
                    titleProduct: "$productDetails.name",
                    priceProduct: "$productDetails.price",
                    measureProduct: "$productDetails.size",
                    weightProduct: "$productDetails.weight",
                    marketId: "$productDetails.marketId"
                }
            },
            {
                $lookup: {
                    from: "Markets",
                    localField: "marketId",
                    foreignField: "_id",
                    as: "marketInfo"
                }
            },
            {
                $unwind: "$marketInfo"
            },
            {
                $project: {
                    _id: 0,
                    orderId: 1,
                    imgProduct: 1,
                    titleProduct: 1,
                    priceProduct: 1,
                    measureProduct: 1,
                    weightProduct: 1,
                    marketName: "$marketInfo.name"
                }
            }
        ]);
        console.log(orderByUserId);
        if (!orderByUserId) {
            return res.status(404).json({ message: 'Pedidos no encontrados, revise la búsqueda' });
        }
        res.status(200).json(orderByUserId);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de pedidos del usuario.' });
    }
};

