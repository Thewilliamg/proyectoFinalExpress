function isAuthenticated(req, res, next) {
  console.log('Usuario autenticado:', req.isAuthenticated());
  console.log('Sesión activa:', req.session);
  
  if (req.session) {
    return next();
  } else {
    res.status(401).json({ message: 'Sesión expirada. Redirigiendo al login...' });
  }
}

module.exports = isAuthenticated;
