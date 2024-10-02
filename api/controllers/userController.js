const { UserSignModel, UserPhoneModel, UserEmailModel, UserCouponModel, UserModel, getUserProfileSidebarModel } = require("../model/userModel");
const { newUserSearcherModel } = require("../model/userDiscordModel");
const bcrypt = require('bcrypt');
const ObjectId = require('mongoose').Types.ObjectId;
const defaultAvatar = 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='

/**
 * Registra un nuevo usuario con número de teléfono
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.registerUserNumber = async (req, res) => {
    try {
        const { name, numberPhone, password, gender, birthDate } = req.body;
        
        // Verificar si el usuario ya existe
        const existingUser = await UserPhoneModel.findOne({ $or: [ { name: name }, { numberPhone: numberPhone } ] });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o número de teléfono ya está en uso' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const newUser = new UserPhoneModel({
            name,
            numberPhone,
            password: hashedPassword,
            gender,
            birthDate,
            urlPicture: defaultAvatar
        });

        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: savedUser.name
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error });
    }
};

/**
 * Registra un nuevo usuario con correo electrónico
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.registerUserEmail = async (req, res) => {
    try {
        const { name, email, password, gender, birthDate } = req.body;
        // Verificar si el usuario ya existe
        const existingUser = await UserEmailModel.findOne({ $or: [ { name: name }, { email: email } ] });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o correo electrónico ya está en uso' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear nuevo usuario
        const newUser = new UserEmailModel({
            name,
            email,
            password: hashedPassword,
            gender,
            birthDate,
            urlPicture: defaultAvatar
        });

        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: savedUser.name
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario de correo electrónico', error: error });
    }
};

/**
 * Inicia sesión de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.loginUser = async (req, res) => {
    try {
        const { identifier, password } = req.body;

        // Crear un array de condiciones para la búsqueda
        const searchConditions = [
            { name: identifier },
            { email: identifier }
        ];

        // Intentar convertir el identifier a número si es posible
        const numberIdentifier = Number(identifier);
        if (!isNaN(numberIdentifier)) {
            searchConditions.push({ numberPhone: numberIdentifier });
        }

        const user = await UserSignModel.findOne({
            $or: searchConditions
        });

        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        
        res.status(200).json({
            message: 'Usuario autenticado exitosamente',
            user: user
        });
        
    } catch (error) {
        res.status(500).json({ message: 'Error al autenticar el usuario', error: error.message });
    }
}

/**
 * Obtiene los cupones de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getCoupoonUser = async (req, res) => {
    const userid = req.params.userid;
    const objectId = new ObjectId(userid);
    
    try {
        const userCoupon = await UserCouponModel.aggregate([
            {
              $match: {
                _id: objectId
              }
            },
            {
              $lookup: {
                from: "Coupons",
                localField: "coupon",
                foreignField: "_id",
                as: "userCoupons"
              }
            },
            {
              $unwind: "$userCoupons"
            },
            {
              $lookup: {
                from: "Products",
                localField: "userCoupons.productId",
                foreignField: "_id",
                as: "product"
              }
            },
            {
              $unwind: '$product'
            },
            {
              $lookup: {
                from: 'Markets',
                localField: 'product.marketId',
                foreignField: '_id',
                as: 'market'
              }
            },
            {
              $unwind:'$market'
            },
            {
              $project: {
                _id:0,
                productImg:'$product.picture',
                productDiscount:'$userCoupons.description',
                marketName:'$market.name',
                date_end:'$userCoupons.dateExpiration'
              }
            }
          ]);
          
        if (!userCoupon) {
            return res.status(400).json({ message: 'Error de solicitud' })
        }
        res.status(200).json(userCoupon);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los cupones del usuario.' })
    }
}

/**
 * Obtiene un usuario por su ID
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getUserById = async (req, res) => {
    const userid = req.params.id;
    const objectId = new ObjectId(userid);
    try {
        const user = await UserModel.findById(objectId, '-_id name email numberPhone gender birthDate urlPicture');
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al recuperar el usuario', error: error.message });
    }
}

/**
 * Obtiene la información del perfil de usuario para la barra lateral
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.getuserProfileSidebar = async (req, res) => {
    const userId = req.params.userId;
    const objectUserId = new ObjectId(userId);
    try {
        const userinfoSidebar = await getUserProfileSidebarModel.aggregate([
            {$match:{"_id":objectUserId}},
            {$project:{
                _id:0,
                nickName:"$name",
                img: "$urlPicture"
            }}
        ]);

        if (!userinfoSidebar) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(userinfoSidebar[0]);
        
    } catch (error) {
        res.status(500).json({ message: 'Error al autenticar el usuario', error: error.message });
    }
}

/**
 * Busca el ID de un usuario por su correo electrónico
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.searchUserId = async (req, res) => {
    const email = req.params.email;
    try {
      const user = await newUserSearcherModel.findOne({ email: email }, { _id: 1 });
      if (!user) {
        return res.status(400).json({ message: "Error de solicitud" });
      }
  
      res.status(200).json(user._id);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el email del usuario." });
    }
};

/**
 * Actualiza un usuario por su ID
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.updateUserById = async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    
    try {
        const user = await UserModel.findByIdAndUpdate(userId, updateData, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
    }
}

/**
 * Actualiza la imagen de perfil de un usuario
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 */
exports.updateUserImage = async (req, res) => {
    const userId = req.params.id;
    
    if (!req.file) {
        return res.status(400).json({ message: 'No se proporcionó ninguna imagen' });
    }
    
    try {
        const imageUrl = `/uploads/${req.file.filename}`; // Asumiendo que estás usando multer para manejar la carga de archivos
        const user = await UserModel.findByIdAndUpdate(userId, { urlPicture: imageUrl }, { new: true });
        
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        
        res.status(200).json({ message: 'Imagen de perfil actualizada', imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la imagen de perfil', error: error.message });
    }
}