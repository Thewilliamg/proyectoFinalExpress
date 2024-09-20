import './favorites.css'
import { Link } from "react-router-dom";
import GoBackArrow from "../../../components/backArrow";

export default function Favorites() {
    const data = ["Textilería", "Bordado", "Cerámica", "Joyería", "Orfebrería"]

    return (
        <div className='container-favorites'>
            <div className='box-backArrow'>
                <Link to="/workshops" className="br">
                    <GoBackArrow/>
                </Link>
            </div>
            <div className='box-menuTitule'>
                <svg width="70" height="70" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="169.706" height="169.706" rx="7" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)" fill="#703A31" fill-opacity="0.38"/>
                </svg>
                <h5 className='menuTitule-h5'>Tus artesanías<br/> favoritas</h5>
            </div>
            <div class="box-carruselItems">
                {
                    data.map((name, index) => {
                        return (
                            <div class="subBox-carruselItems">
                                <div class="icon-carruselItems">
                                    <div class="image-carruselItems">
                                        <img src="/api/placeholder/40/40" alt="Textilería"/>
                                    </div>
                                    <span class="text-carruselItems">{name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}