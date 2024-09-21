import "./home.css";
import SearchBar from "./components/search-bar";
import FooterNavbar from "./components/footer-navbar";
import { useState} from 'react';
import Sidebar from "./components/sidebar/sidebar";

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
    return(
        <div className="homepage-container">
            <p>Home container lalalalal</p>
        </div>
    )
}