const express = require("express");
const app = express();

app.use(express.json());

let config = {
  host: process.env.EXPRESS_HOST,
  port: process.env.EXPRESS_PORT 
};

app.listen(config, () => {
    console.log(`http://${config.host}:${config.port}`);
  });

app.get('/', function (req, res) {
  res.send('Hello World')
})