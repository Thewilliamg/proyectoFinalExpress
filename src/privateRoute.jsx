// PrivateRoute.js

import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = Boolean(localStorage.getItem('userId'));

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
