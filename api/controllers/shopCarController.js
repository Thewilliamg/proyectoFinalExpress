const ObjectId = require('mongoose').Types.ObjectId;
const { allproductsInCarModelByUserModel, saveOrderModel, addToCarModel } = require("../model/shopCarModel");

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
    if (!itemsShopCar) {
      return res.status(400).json({ message: 'Error de solicitud' })
    }
    res.status(200).json(itemsShopCar);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos del carrito de compras.' })
  }
}

exports.saveOrder = async (req, res) => {
  // Convert UTC to local time
  function getLocalDate() {
    const now = new Date();
    const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localTime;
  }
  //Add the order
  try {
    const itemsObject = new saveOrderModel({
      userId: req.body.userId,
      products: req.body.products,
      total: req.body.total,
      orderDate: getLocalDate(),
      status: 'completada'
    })
    const purchaseOrder = await itemsObject.save();
    res.status(201).json({ message: 'Orden de compra generada', purchaseOrder: purchaseOrder.status });
  } catch (error) {
    res.status(500).json({ message: 'Error al comprar el producto. ' + error })
  }
}

exports.addToCar = async (req, res) => {
  // const userId = new ObjectId(localStorage.getItem('userId'));
  const userId = req.headers.userId;
  const objectId = new ObjectId(userId);
  const objectProductId = new ObjectId(req.params.productId);
  console.log(objectId); console.log(objectProductId);

  try {
    const objectToAdd = new addToCarModel({
      userId: objectId,
      productId: objectProductId,
      quantity: 1
    })
    await objectToAdd.save();
    res.status(201).json({ mesage: 'Item añadido al carrito' })
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir el producto. ' + error })
  }
}