import "./search-bar.css";
import burguericon from "/img/burguer-icon.svg";
import Sidebar from "./sidebar/sidebar.jsx";

export default function SearchBar({ isOpen, clickedMenu }) {

    return(
       <div className="container-search-bar">
            <button className="burguer-container" onClick={clickedMenu}>
                <img src={burguericon} alt="burguer-icon" />
            </button>
            <div className="searcher-container">
                <div className="lens"></div>
                <input type="text" />
            </div>
            {/* <Sidebar isOpen={isOpen}/> */}
       </div>
    )
}