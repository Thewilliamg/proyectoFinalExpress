const express = require("express");
const app = express();
const routes = require('./api/routes/router');
const connectDB = require("./api/db/connect");
var cors = require('cors');

app.use(cors());
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
