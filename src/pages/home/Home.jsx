import "./home.css";
import SearchBar from "./components/search-bar";
import FooterNavbar from "./components/footer-navbar";
import { useState} from 'react';
import Sidebar from "./components/sidebar/sidebar";
import textil from "/img/textil-icon.svg";
import leftTriangle from "/img/square-brown-figure.svg";
import localizate from "/img/localization-icon.svg";
import ceramic from "/img/ceramics-icon.svg";
import goldsmith from "/img/goldsmith-icon.svg";
import rockCarving from "/img/rock-carving-icon.svg";
import woodCarving from "/img/wood-carving.svg";
import embroidery from "/img/embroidery-icon.svg";
import jewelry from "/img/jewelry-icon.svg";
import tinsmith from "/img/tinsmith-icon.svg"
import stamp from "/img/stamping-icon.svg";
import paint from "/img/paint-icon.svg";
import square from "/img/square.svg";
import homeFigure from "/img/home-figure-bottom.svg";

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
        {icon:textil, title:"Textileria",href:'textil'},{icon:ceramic, title:"Ceramica",href:'ceramica'},
        {icon:goldsmith, title:"Orfebreria",href:'orfebreria'},{icon:rockCarving, title:"Talla en piedra",href:'talla_piedra'},
        {icon:woodCarving, title:"Talla en madera",href:'talla_madera'},{icon:embroidery, title:"Bordado",href:'bordado'},
        {icon:jewelry, title:"Joyeria",href:'joyeria'},{icon:tinsmith, title:"Hojalateria",href:'hojalateria'},
        {icon:stamp, title:"Estampado",href:'estampado'},{icon:paint, title:"Pintura tradicional",href:'pintura'}
    ]

    return(
        <div className="homepage-view">
            <div className="top-homepage">
                <div className="localizate-bar">
                    <img src={localizate} alt="icon-localization" />
                    <input type="text" placeholder="Ubicacion de energía actual"/>
                    
                </div>
                <div className="title-page-home">
                    <img width="9%" src={leftTriangle} alt="triangle" />
                    <h1>Categorías</h1>
                </div>
            </div>

            <div className="categories-container">
                {dataCategories.map((item,index)=>{
                    return (
                        <a href={'/categories?cat='+item.href} key={'icon'+index} className="box-categorie-home">
                            <img src={item.icon} alt="icon" />
                            <small>{item.title}</small>
                        </a>
                    )})
                }
            </div>
            
            <div className="courses-all-container">
                <div className="courses-info-container">
                    <div className="home-dots-square">
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                    </div>
                    <h1>Talleres del mes</h1>
                    <div className="home-dots-square">
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                        <img src={square} alt="dotTriangle" />
                    </div>
                </div>
                <p>¡Aprende como hacerlos en estos talleres educativos!</p>
                <img className="home-figure" src={homeFigure} alt="figure-home-course" />
            </div>
        </div>
    )
}