const CategoryModel = require("../model/categoryModel");

exports.getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.find({})

        if (category.length == 0) {
            return res.status(404).json({
                message: "No category found",
                status: 404
            });
        }

        return res.status(200).json({
            message: "Category received correctly",
            status: 200,
            data: category
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            status: 500,
            error: error.message
        });        
    }
}