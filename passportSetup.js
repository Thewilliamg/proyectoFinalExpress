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

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  const findOrCreateUser = async (profile, provider) => {
    let user = await User.findOne({ email: profile.email });
    if (!user) {
      user = new User({
        email: profile.email,
        name: profile.username || profile.displayName,
        urlPicture: profile.avatar || profile.photos[0].value
      });
    }
    user[`${provider}Id`] = profile.id;
    await user.save();
    return user;
  };

  passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await findOrCreateUser(profile, 'discord');
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));
  
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']  // Añadimos los scopes necesarios
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await findOrCreateUser({
        id: profile.id,
        email: profile.emails[0].value,
        displayName: profile.displayName,
        photos: profile.photos
      }, 'google');
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }));
};