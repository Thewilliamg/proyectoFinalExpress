import "./search-bar.css";
import burguericon from "@/img/burguer-icon.svg";
import lensicon from "@/img/search-icon.svg"
export default function SearchBar({ isOpen, clickedMenu }) {

    return(
       <div className="container-search-bar">
            <button className="burguer-container" onClick={clickedMenu}>
                <img src={burguericon} alt="burguer-icon" />
            </button>
            <div className="searcher-container">
                <div className="lens">
                    <img src={lensicon} alt="lens" />
                </div>
                <input type="text" className="searchbar-input" placeholder="Buscar producto o tienda..."/>
            </div>
       </div>
    )
}