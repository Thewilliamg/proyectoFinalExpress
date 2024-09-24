import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from './pages/home/Home.jsx';
import Start from './pages/start/Start.jsx';
import User from './pages/user/User.jsx';
import Markets from './pages/markets/Markets.jsx';
import Discounts from './pages/discounts/Discounts.jsx';
import Shop from './pages/shop/Shop.jsx';
import Confirmation from './pages/shop/confirmation/Confirmation.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Policy from './pages/signup/register/policy/Policy.jsx'
import Register from './pages/signup/register/Register.jsx'
import Service from './pages/home/components/customerService/Service.jsx'
import WorkshopsInfo from './pages/home/components/workshops/info/WorkshopsInfo.jsx'
import Login from './pages/login/Login.jsx'
import Login_User from './pages/login/user/User.jsx'
import Favorites from './pages/home/components/favorites/Favorites.jsx'
import SignupEmail from "./pages/signup/email/Email.jsx";
import Settings from "./pages/home/components/settings/Settings.jsx";
import CustomerService from './pages/customerService/CustomerService.jsx'
import Chat from './pages/customerService/chat/Chat.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>

      <Route index element={<Link to="/start"><Start /></Link>} />
        <Route path="/customer-service" element={<Service/> } />  //Ruta para pantalla 25
        <Route path="/workshops/info" element={<WorkshopsInfo/> } /> //Ruta para pantalla 28
        <Route path="/favorites" element={<Favorites/> } />
        <Route path="/settings" element={<Settings/> } />
        {/* //Rutas de descuentos */}
        <Route path="/" element={<Home/>}/>
        <Route path="/discounts" element={<Home page={<Discounts/>}/>} />
        {/* Rutas de tiendas*/ }
        <Route path="/markets" element={<Home page={<Markets/>}/>} />
        {/* Rutas de comprar */}
        <Route path="/shop" element={<Home page={<Shop/>}/>} />
        <Route path="/shop/confirmation" element={<Confirmation />} />
        {/* Rutas de perfil de usuario */}
        <Route path='/user' element={<Home page={<User/>}/>} />
        {/* Rutas de registro */}   
        <Route path='/login' element={<Login />} />
        <Route path='/login/user' element={<Login_User />} />                      
        <Route path='/signup' element={<SignUp />} />                       // Pantalla 2
        <Route path='/signup/email' element={<SignupEmail />} />            // Pantalla 6
        <Route path='/signup/register' element={<Register />} /> 
        <Route path='/signup/register/policy' element={<Policy />} />      
        <Route path='/customer_service' element={<CustomerService />}/>
        <Route path='/customer_service/chat' element={<Chat/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App