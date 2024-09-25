const User = require("../model/userModel");

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
};

exports.registerUserNumber = async (req, res) => {
    try {
        const { name, email, password, urlPicture, numberPhone, gender, birthDate } = req.body;
        
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ name: name });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario o contrasena ya está en uso' });
        }

        // Crear nuevo usuario
        const newUser = new User({
            name,
            email,
            password,  // Asegúrate de hashear la contraseña antes de guardarla
            urlPicture,
            numberPhone,
            gender,
            birthDate
        });

        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'Usuario creado exitosamente',
            user: savedUser.name
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error: error });
        console.log(error);
    }
};