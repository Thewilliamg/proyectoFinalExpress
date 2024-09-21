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
import WorkshopsInfo from './pages/home/components/workshops/info/WorkshopsInfo.jsx'
import Favorites from './pages/home/components/favorites/Favorites.jsx'
import SignupEmail from "./pages/signup/email/Email.jsx";
import Settings from "./pages/home/components/settings/Settings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Home />} />
        <Route path="/customer-service" element={<Service/> } />  //Ruta para pantalla 25
        <Route path="/workshops/info" element={<WorkshopsInfo/> } /> //Ruta para pantalla 28
        <Route path="/favorites" element={<Favorites/> } />
        <Route path="/settings" element={<Settings/> } />
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
        <Route path='/signup/email' element={<SignupEmail />} />            // Pantalla 6
        <Route path='/signup/register' element={<Register />} /> 
        <Route path='/signup/register/policy' element={<Policy />} />       // Ruta para pantallas 4 y 5
      </Routes>
  </BrowserRouter>
  )
}

export default App
