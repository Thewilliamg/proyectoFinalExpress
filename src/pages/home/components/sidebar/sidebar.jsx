import './sidebar.css';

export default function Sidebar({ isOpen}) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>

        <div className="sidebar-profile">
            <img src="" alt="profile" />
            <h3>SaraMartin9</h3>
        </div>
        
        <nav className="nav-sidebar">
            <ul className="nav-list-sidebar">
            <li><a href="/favorites" className="nav-item-sidebar">Lista de favoritos</a></li>
            <li><a href="#" className="nav-item-sidebar">Compras</a></li>
            <li><a href="#" className="nav-item-sidebar">Talleres</a></li>
            <li><a href="coupons" className="nav-item-sidebar">Canjear cupon</a></li>
            </ul>
            <br/>
            <ul className="nav-list-sidebar">
            <li><a href="#" className="nav-item-sidebar">Ajustes</a></li>
            <li><a href="#" className="nav-item-sidebar">Comentarios</a></li>
            <li><a href="#" className="nav-item-sidebar">Atencion al cliente</a></li>
            </ul>
        </nav>
      
    </div>
  );
};
