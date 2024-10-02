/**
 * @file Configuración principal del servidor Express
 * @description Este archivo configura y arranca el servidor Express con autenticación, WebSockets y rutas API.
 */

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
const session = require('express-session');

dotenv.config();

/**
 * @constant {Object} corsOptions
 * @description Opciones de configuración para CORS
 */
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

/**
 * @description Configuración de sesiones de Express
 */
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Cambiar a true si se usa HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}));

app.use(passport.initialize());
app.use(passport.session());

connectDB();

passportSetup(app);

/**
 * @constant {Object} config
 * @description Configuración del servidor
 */
let config = {
  host: process.env.EXPRESS_HOST || 'localhost',
  port: process.env.EXPRESS_PORT || 3000
};

app.use('/api', routes);
/**
 * @description Ruta para iniciar la autenticación con Discord
 */
app.get('/auth/discord', (req, res, next) => {
  console.log('Iniciando autenticación con Discord');
  passport.authenticate('discord')(req, res, next);
});

/**
 * @description Ruta de callback para la autenticación con Discord
 */
app.get('/auth/discord/callback', 
  passport.authenticate('discord', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`http://localhost:5173/home?userId=${req.user._id}`);
  }
);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


/**
 * @description Ruta para iniciar la autenticación con Google
 */
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect(`http://localhost:5173/home?userId=${req.user._id}`);
  }
);

/**
 * @description Ruta de callback para la autenticación con Google
 */
// app.get('/auth/google/callback', (req, res, next) => {
//   console.log('Callback de Google recibido');
//   passport.authenticate('google', (err, user) => {
//     if (err) {
//       return res.redirect('http://localhost:5173/signup?error=auth_failed');
//     }
//     if (!user) {
//       return res.redirect('http://localhost:5173/signup?error=auth_failed');
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return res.redirect('http://localhost:5173/signup?error=auth_failed');
//       }
//       return res.redirect(`http://localhost:5173/home?userId=${user._id}`);
//     });
//   })(req, res, next);
// });

/**
 * @description Ruta para manejar la cancelación de la autenticación
 */
app.get('/auth/cancel', (req, res) => {
  console.log('Autenticación cancelada');
  res.redirect('http://localhost:5173/signup');
});

const server = http.createServer(app);
const io = socketIo(server, {
  cors: corsOptions
});
/**
 * @description Configuración de eventos para Socket.IO
 */
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

/**
 * @function promptMessage
 * @description Función para solicitar mensajes del servidor y enviarlos a los clientes
 */
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

/**
 * @description Inicia el servidor y comienza a solicitar mensajes
 */
server.listen(config.port, config.host, () => {
  console.log(`Servidor corriendo en http://${config.host}:${config.port}`);
  promptMessage();
});