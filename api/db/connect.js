const mongoose = require('mongoose');
const DB_URI = process.env.CONECTION_MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('Error de conexión a MongoDB:', err);
  }
};

module.exports = connectDB;