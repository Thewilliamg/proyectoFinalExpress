import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home.jsx';
import Start from './pages/start/Start.jsx';
import User from './pages/user/User.jsx';
import Markets from './pages/markets/Markets.jsx';
import Discounts from './pages/discounts/Discounts.jsx';
import Shop from './pages/shop/Shop.jsx';
import Workshop from './pages/home/components/workShop.jsx'
import Parrafito from './pages/discounts/components/beforeShop.jsx';
import Order from './pages/home/components/order.jsx';
import Business from './pages/home/components/business-presentation.jsx'
import Confirmation from './pages/shop/confirmation/Confirmation.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Policy from './pages/signup/register/policy/Policy.jsx'
import Register from './pages/signup/register/Register.jsx'
import Login from './pages/login/Login.jsx'
import Login_User from './pages/login/user/User.jsx'
import Service from './pages/home/components/customerService/Service.jsx'
import WorkshopsInfo from './pages/home/components/workshops/info/WorkshopsInfo.jsx'
import Favorites from './pages/home/components/favorites/Favorites.jsx'
import SignupEmail from "./pages/signup/email/Email.jsx";
import Settings from "./pages/home/components/settings/Settings.jsx";
import Chat from './pages/customerService/chat/Chat.jsx'
import Products from "./pages/markets/products/Products.jsx";
import EmailPolicy from "./pages/signup/email/policy/Policy.jsx";
import ProductDetails from "./pages/markets/products/details/details.jsx";
import Coupon from "./pages/home/components/coupon/coupon.jsx";
import Categories from './pages/home/components/categories/categorie.jsx'
import Community from "./pages/home/community/community.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element= {<Start/>}/>
        <Route path="/customer_service" element={<Service/> } />  //Ruta para pantalla 25
        <Route path="/workshops" element={<Workshop />} />
        <Route path="/workshops/info" element={<WorkshopsInfo/> } /> //Ruta para pantalla 28
        <Route path='/workshops/business-presentation' element={<Business />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/community' element={<Community />} />
        <Route path='/coupons' element={<Coupon />} />
        <Route path="/favorites" element={<Favorites/> } />
        <Route path="/settings" element={<Settings/> } />
        {/* //Rutas de descuentos */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/discounts" element={<Home page={<Discounts/>}/>} />
        <Route path="/discounts/product" element={<Parrafito />} />
        {/* Rutas de tiendas*/ }
        <Route path="/markets" element={<Home page={<Markets/>}/>} />
        <Route path="/markets/:marketId/products" element={<Products />} />
        <Route path="/markets/:marketId/products/details/:productId" element={<ProductDetails />} />
        {/* Rutas de comprar */}
        <Route path="/shop" element={<Home page={<Shop/>}/>} />
        <Route path="/orders" element={<Order />}/> 
        <Route path="/shop/confirmation" element={<Confirmation />} />
        {/* Rutas de perfil de usuario */}
        <Route path='/user' element={<Home page={<User/>}/>} />
        {/* Rutas de registro */}   
        <Route path='/login' element={<Login />} />
        <Route path='/login/user' element={<Login_User />} />                      
        <Route path='/signup' element={<SignUp />} />                       // Pantalla 2
        <Route path='/signup/email' element={<SignupEmail />} />            // Pantalla 6
        <Route path='/signup/email/policy' element={<EmailPolicy />} />
        <Route path='/signup/register' element={<Register />} /> 
        <Route path='/signup/register/policy' element={<Policy />} />      
        <Route path='/customer_service/chat' element={<Chat/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App