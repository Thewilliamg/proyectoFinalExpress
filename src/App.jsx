import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Home from './pages/home/Home.jsx';
import User from './pages/user/User.jsx';
import Markets from './pages/markets/Markets.jsx';
import Discounts from './pages/discounts/Discounts.jsx';
import Shop from './pages/shop/Shop.jsx';
import Workshop from './pages/home/components/workShop.jsx'
import Parrafito from './pages/discounts/components/beforeShop.jsx';
import Order from './pages/home/components/order.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/discounts" element={<Discounts/>} />
        <Route path="discounts/product" element={<Parrafito />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/user' element={<User />} />
        <Route path="/orders" element={<Order />}/> 
      </Routes>
  </BrowserRouter>
  )
}

export default App
