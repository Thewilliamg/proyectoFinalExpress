const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const readline = require('readline');
const routes = require('./api/routes/router');
const connectDB = require("./api/db/connect");
const passportSetup = require('./passportSetup');
const passport = require('passport');

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ["GET", "POST"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
connectDB();

passportSetup(app);

let config = {
  host: process.env.EXPRESS_HOST || 'localhost',
  port: process.env.EXPRESS_PORT || 3000
};

app.use('/api', routes);

// Rutas para la autenticación de Discord
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', 
  passport.authenticate('discord', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://localhost:5173/home');
  }
);

const server = http.createServer(app);
const io = socketIo(server, {
  cors: corsOptions
});

io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  socket.on('chat message', (msg) => {
    console.log('Mensaje recibido del cliente: ' + msg);
  });

  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptMessage() {
  rl.question('Escribe un mensaje para enviar al cliente (o "salir" para terminar): ', (answer) => {
    if (answer.toLowerCase() === 'salir') {
      rl.close();
      process.exit(0);
    } else {
      console.log('Enviando mensaje a los clientes:', answer);
      io.emit('chat message', { username: 'Taller Awaq Ayllus', message: answer, sent: false });
      promptMessage();
    }
  });
}

server.listen(config.port, config.host, () => {
  console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
  promptMessage();
});