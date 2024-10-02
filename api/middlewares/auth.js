// authMiddleware.js
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated() && req.session) { // Verifica autenticación y sesión
      return next();
    } else {
      res.status(401).json({ message: 'Sesión expirada. Redirigiendo al login...' });
    }
  }
  

module.exports = isAuthenticated;
  