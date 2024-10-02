import './sidebar.css';
import favoriteico from "@/img/favorite-icon.svg";
import shoppingico from "@/img/shopping-icon.svg";
import workscoursesico from "@/img/workflows-icon.svg";
import couponico from "@/img/coupon-icon.svg";
import settingsico from "@/img/sett-icon.svg";
import chatico from "@/img/chat-icon.svg";
import customerServico from "@/img/customer-icon.svg";
import santanderImg from "@/img/Escudo_de_Santander.png";
import squaredot from "@/img/square.svg";
import {useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ isOpen}) {
  const [dataUser,setDataUser] = useState();
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:5001/api/sidebar/${userId}`,
      {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          }
      })
      .then(res => res.json())
      .then(data => setDataUser(data)
      )
      .catch((error) => {
          console.error('Hubo un error:' + error.message)
      });
  },[])

  function handleSessionExit(){
    localStorage.removeItem('userId');
    navigate('/login')
}


  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

        <div className="sidebar-profile">
            <img src={dataUser?.img} alt="profile" />
            <h3>{dataUser?.nickName}</h3>
        </div>
        
        <nav className="nav-sidebar">
            <ul className="nav-list-sidebar">
              <li><img src={favoriteico} alt="favorico" /><a href="/favorites" className="nav-item-sidebar">Lista de favoritos</a></li>
              <li><img src={shoppingico} alt="shopico" /><a href="/orders" className="nav-item-sidebar">Compras</a></li>
              <li><img src={workscoursesico} alt="workcourseico" /><a href="/workshops" className="nav-item-sidebar">Talleres</a></li>
              <li><img src={couponico} alt="coupon" /><a href="coupons" className="nav-item-sidebar">Canjear cupon</a></li>
            </ul>
            <br/>
            <div className='squares-sidebar'>
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
              <img src={squaredot} alt="square" />
            </div>
            <br/>
            <ul className="nav-list-sidebar">
              <li><img src={settingsico} alt="settIco" /><a href="/settings" className="nav-item-sidebar">Ajustes</a></li>
              <li><img src={chatico} alt="chat" /><a href="/community" className="nav-item-sidebar">Comentarios</a></li>
              <li><img src={customerServico} alt="customerService" /><a href="customer_service" className="nav-item-sidebar">Atencion al cliente</a></li>
              <li><a onClick={handleSessionExit} className="nav-item-sidebar">Cerrar sesión</a></li>
            </ul>
        </nav>
        <div className="sidebar-footer">

          <p className='footer-title'>Aplicacion potenciada por:</p>
          <div className="stamp-footer">
            <img src={santanderImg} alt="santander" />
            <div className="sidebar-footer-text">
              <p className="city-footer">SANTANDER</p>
              <p className='minister-footer'>Ministerio de Cultura</p>
            </div>
          </div>

        </div>
    </div>
  );
};
