const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./api/routes/router');
const connectDB = require("./api/db/connect");

const corsOptions = {
  origin: 'http://localhost:5173', // Reemplaza esto con la URL de tu frontend
  optionsSuccessStatus: 200 // Algunos navegadores legacy (IE11, varios SmartTVs) fallan en 204
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB()

let config = {
  host: process.env.EXPRESS_HOST,
  port: process.env.EXPRESS_PORT 
};

app.use('/api', routes);

app.listen(config, () => {
    console.log(`http://${config.host}:${config.port}`);
  });

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })