const AllProductsByMarketModel = require("../model/productsModel");
const productModel = require("../model/productsModel");
const allProductsModel = require("../model/productsModel");
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAllproductsByMarket = async (req, res) => {
    const marketId = req.params.marketId;
    const objectId = new ObjectId(marketId);
    try {
        const allproductsByMarket = await AllProductsByMarketModel.aggregate([
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
            { $match: { "market._id": objectId } },
            {
                $match: {
                    stock: { $gte: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    marketName: "$market.name",
                    marketImg: "$market.picture",
                    productId: '$_id',
                    name: 1,
                    price: 1,
                    picture: 1,
                    stock: 1
                }
            }
        ]);
        if (!allproductsByMarket) {
            return res.status(404).json({ message: 'Tienda no tiene productos' });
        }
        res.status(200).json(allproductsByMarket);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de productos por tienda', error });
    }
};

exports.getProduct = async (req, res) => {
    const productId = req.params.id;
    const objectId = new ObjectId(productId);
    try {
        const productDetails = await productModel.aggregate([
            { $match: { '_id': objectId } },
            {
                $match: {
                    stock: { $gte: 1 }
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
                    marketName: "$market.name",
                    name: 1,
                    price: 1,
                    picture: 1,
                    stock: 1,
                    discount: 1,
                    description: 1,
                    size: 1
                }
            }
        ]);
        if (!productDetails) {
            return res.status(404).json({ message: 'Producto no existe o no encontrado en stock' });
        }
        res.status(200).json(productDetails[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los detalles del producto.', error });
    }
};

exports.getAllproducts = async (req, res) => {
    try {
        const allproducts = await allProductsModel.aggregate([
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
                $match: {
                    stock: { $gte: 1 }
                }
            },
            {
                $lookup: {
                    from: "Category",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $unwind: "$category"
            },
            {
                $project: {
                    _id: 0,
                    marketName: "$market.name",
                    productId: '$_id',
                    name: 1,
                    price: 1,
                    picture: 1,
                    categoryId: 1,
                    categoryName: '$category.name',
                    discount:1
                }
            },
        ]);
        if (!allproducts) {
            return res.status(404).json({ message: 'Productos no encontrados' });
        }
        res.status(200).json(allproducts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la lista de todos los productos.', error });
    }
};

exports.addToCar = async (req,res) => {
    const userId = localStorage.getItem('')
    try{
        const objectToAdd = {
            userId: userId,
            productId: req.params.productId,
        }
    }catch (error) {
        res.status(500).json({ message: 'Error al añadir el producto. '+error})
      }
}