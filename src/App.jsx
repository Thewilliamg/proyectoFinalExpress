import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home.jsx';
import User from './pages/user/User.jsx';
import Markets from './pages/markets/Markets.jsx';
import Discounts from './pages/discounts/Discounts.jsx';
import Shop from './pages/shop/Shop.jsx';
import SignUp from './pages/signup/SignUp.jsx'
import Policy from './pages/signup/register/policy/Policy.jsx'
import Register from './pages/signup/register/Register.jsx'
import Service from './pages/home/components/customerService/Service.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        //Rutas de descuentos
        <Route path="/discounts" element={<Discounts/>} />
        //Rutas de tiendas
        <Route path="/markets" element={<Markets />} />
        //Rutas de comprar
        <Route path="/shop" element={<Shop />} />
        //Rutas de perfil de usuario
        <Route path='/user' element={<User />} />
        //Rutas de registro
        <Route path='/signup' element={<SignUp />} />                       // Pantalla 2
        <Route path='/signup/register' element={<Register />} /> 
        <Route path='/signup/register/policy' element={<Policy />} />       // Ruta para pantallas 4 y 5
        //Rutas de servicio al cliente
        <Route path="/customer-service" element={<Service/> } />
      </Routes>
  </BrowserRouter>
  )
}

export default App
