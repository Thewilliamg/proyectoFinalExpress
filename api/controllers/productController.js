const ProductModel = require("../model/productModel");

exports.getProduct = async (req, res) => {
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
                message: "No products found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Products received correctly",
            status: 200,
            data: products
        });

    } catch (error) {
        console.error("Error in getProduct:", error);
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });
    }
}

exports.getProductId = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id)

        if (!product) {
            return res.status(404).json({
                message: "No product found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Product received correctly",
            status: 200,
            data: product
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });
    }
}