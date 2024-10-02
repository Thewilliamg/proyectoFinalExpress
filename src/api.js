// api.js
async function fetchWithSessionCheck(url, options = {}) {
    const response = await fetch(url, {
      ...options,
      credentials: 'include', // Incluir las cookies para mantener la sesión
    });
  
    // Verifica si la sesión ha expirado
    if (response.status === 401) {
      window.location.href = '/login'; // Redirige al login si la sesión ha expirado
      return null; // No procesar la respuesta
    }
  
    return response.json(); // Devuelve la respuesta si todo está bien
  }
  
  export default fetchWithSessionCheck;
  