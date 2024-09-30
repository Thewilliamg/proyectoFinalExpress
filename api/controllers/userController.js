const { UserSignModel, UserPhoneModel, UserEmailModel, getUserProfileSidebarModel } = require("../model/userModel");
const bcrypt = require('bcrypt');
const ObjectId = require('mongoose').Types.ObjectId;

exports.registerUserNumber = async (req, res) => {
    try {
        const { name, numberPhone, password, gender, birthDate } = req.body;
        
        // Verificar si el usuario ya existe
        const existingUser = await UserPhoneModel.findOne({ $or: [ { name: name }, { numberPhone: numberPhone } ] });
        if (existingUser) {
            return res.status(400).json({ message: 'The username or number phone is already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario
        const newUser = new UserPhoneModel({
            name,
            numberPhone,
            password: hashedPassword,
            gender,
            birthDate
        });

        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: savedUser.name
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error });
    }
};

exports.registerUserEmail = async (req, res) => {
    try {
        const { name, email, password, gender, birthDate } = req.body;
        // Verificar si el usuario ya existe
        const existingUser = await UserEmailModel.findOne({ $or: [ { name: name }, { email: email } ] });
        if (existingUser) {
            return res.status(400).json({ message: 'The username or email is already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear nuevo usuario
        const newUser = new UserEmailModel({
            name,
            email,
            password: hashedPassword,
            gender,
            birthDate
        });

        // Guardar el usuario en la base de datos
        const savedUser = await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: savedUser.name
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating email user', error: error });
    }
};

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
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
        res.status(401).json({ message: 'Invalid credentials' });
        };
        
        res.status(200).json({
            message: 'User authenticated successfully',
            user: user
        });
        
    } catch (error) {
        res.status(500).json({ message: 'Error authenticating user', error: error.message });
    }
}

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
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userinfoSidebar[0]);
        
    } catch (error) {
        res.status(500).json({ message: 'Error authenticating user', error: error.message });
    }
}