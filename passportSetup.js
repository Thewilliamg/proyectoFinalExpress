const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./api/model/userDiscordModel');

/**
 * Configuración de Passport para autenticación con Discord y Google
 * @param {Object} app - Instancia de la aplicación Express
 */
module.exports = (app) => {
  // Configuración de express-session
  app.use(require('express-session')({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  // Inicialización de Passport
  app.use(passport.initialize());
  app.use(passport.session());

  /**
   * Serialización del usuario para almacenarlo en la sesión
   * @param {Object} user - Usuario a serializar
   * @param {Function} done - Callback de finalización
   */
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  /**
   * Deserialización del usuario a partir del ID almacenado en la sesión
   * @param {string} id - ID del usuario
   * @param {Function} done - Callback de finalización
   */
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  /**
   * Estrategia de autenticación con Discord
   */
  passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ discordId: profile.id });
      if (!user) {
        user = new User({
          discordId: profile.id,
          username: profile.username,
          email: profile.email,
          avatar: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
        });
        await user.save();
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));
  
  /**
   * Estrategia de autenticación con Google
   */
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          urlPicture: profile.photos[0].value
        });

        const email = profile.emails[0].value;

        const getUserId = async () => {
          try{
            const userId = await fetch(`http://localhost:5001/api/search-email/${email}`,{
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            })
            return userId
          } catch (error) {
            console.error(error);
            return null
          }
        }
        const userid = getUserId()
        console.log(userid);
        await user.save();

      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));
};