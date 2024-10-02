const ObjectId = require('mongoose').Types.ObjectId;
const { allproductsInCarModelByUserModel, saveOrderModel, addToCarModel } = require("../model/shopCarModel");

/**
 * Obtiene todos los items del carrito de compras de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
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

/**
 * Guarda una orden de compra
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.saveOrder = async (req, res) => {
  // Convierte UTC a hora local
  function getLocalDate() {
    const now = new Date();
    const localTime = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return localTime;
  }
  //Añade la orden
  try {
    const itemsObject = new saveOrderModel({
      userId: req.body.userId,
      products: req.body.products,
      total: req.body.total,
      orderDate: getLocalDate(),
      status: 'completada'
    })
    const purchaseOrder = await itemsObject.save();
    if (!purchaseOrder){
      res.status(400).json({ message: 'Error al guardar el pedido . ' + error })
    }
    const result = await addToCarModel.deleteMany({ userId: new ObjectId(req.body.userId) });
    if (!result){
      res.status(400).json({ message: 'Error vaciando el carrito. ' + error })
    }
    res.status(201).json({ message: 'Orden de compra generada y vaciado de carrito con exito.', purchaseOrder: purchaseOrder.status });
  } catch (error) {
    res.status(500).json({ message: 'Error al comprar el producto. ' + error })
  }
}


/**
 * Añade un producto al carrito de compras
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.addToCar = async (req, res) => {
  const userId = req.headers.userid;
  const objectProductId = new ObjectId(req.params.productId);

  try {
    const existingItem = await addToCarModel.findOne({ userId: new ObjectId(userId), productId: new ObjectId(objectProductId) });
    
    if (existingItem) {
      return res.status(409).json({ message: 'El producto ya está en el carrito.' });
    }

    const objectToAdd = new addToCarModel({
      userId: new ObjectId(userId),
      productId: objectProductId,
      quantity: 1
    })
    await objectToAdd.save();
    res.status(201).json({ mesage: 'Item añadido al carrito' })
  } catch (error) {
    res.status(500).json({ message: 'Error al añadir el producto. ' + error })
  }
}

exports.deleteAllUserProducts = async (req, res) =>{

  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    console.log(userId);
    console.log(productId);
    const result = await addToCarModel.deleteMany({ userId: new ObjectId(userId), productId: new Object(productId) });
    
    if (result.deletedCount<1){
      return res.status(404).json({
        message: `El usuario no tiene elementos en el carrito.`,
      });
    }

    return res.status(200).json({
      message: `Los productos del usuario en el carrito fueron eliminados.`,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar los productos del usuario.",
      error: error.message,
    });
  }
}