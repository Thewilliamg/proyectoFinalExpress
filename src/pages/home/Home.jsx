import "./home.css";
import SearchBar from "./components/search-bar";
import FooterNavbar from "./components/footer-navbar";
import { useState} from 'react';
import Sidebar from "./components/sidebar/sidebar";
import textil from "/img/textil-icon.svg";

export default function Home({page=HomePage()}) {

    const [isOpen, setIsOpen] = useState(false);

    const clickedMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="home-page">
            <SearchBar isOpen={isOpen} clickedMenu={clickedMenu}/>
            <div className="all-container-home">
                <Sidebar isOpen={isOpen}/>
                <div className="home-container">
                    {page}
                </div>
            </div>
            <FooterNavbar />
        </div>
    )
}

function HomePage() {

    const dataCategories = [
        {icon:textil, title:"Textileria"},{icon:textil, title:"Ceramica"},
        {icon:textil, title:"Orfebreria"},{icon:textil, title:"Talla en piedra"},
        {icon:textil, title:"Talla en madera"},{icon:textil, title:"Bordado"},
        {icon:textil, title:"Joyeria"},{icon:textil, title:"Hojalateria"},
        {icon:textil, title:"Estampado"},{icon:textil, title:"Pintura tradicional"}
    ]

    return(
        <div className="homepage-view">
            <div className="top-homepage">
                <div className="localizate-bar">
                    <img src="" alt="icon-localization" />
                    <input type="text" />
                </div>
                <div className="title-page-home">
                    <img src="" alt="triangle" />
                    <h1>Categorias</h1>
                </div>
            </div>

            <div className="categories-container">
            {dataCategories.map((item,index)=>{
                return (
                    <div key={'icon'+index} className="box-categorie-home">
                        <img src={item.icon} alt="icon" />
                        <small>{item.title}</small>
                    </div>
                )})
            }
            </div>
            <p>Home container lalalalal</p>
        </div>
    )
}