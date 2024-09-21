import './settings.css'
import BackArrow from "../../../components/backArrow";
import { Link } from "react-router-dom";

export default function Settings() {
    return (
        <div className='container-Settings'>
            <div className='nav-Settings'>
                <Link to="/"><BackArrow/></Link>
            </div>
            <div className='titule-Settings'>
                <svg width="70" height="70" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="169.706" height="169.706" rx="7" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)" fill="#703A31" fillOpacity="0.38"/>
                </svg>
                <div className="subtitule-Settings">
                    <h4>Ajustes</h4>
                </div>
            </div>
            <div className='informa-Settings'>
                <div className='subInfo-Settings'>
                    <h4>Global</h4>
                    <div className='options-Settings'>
                        <div className='subOptions-Settings'>
                            <span>Cambiar pais y region</span>
                            <span>Canada, Toronto</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar idioma</span>
                            <span>Español</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar Moneda</span>
                            <span>PEN</span>
                        </div>
                    </div>
                </div>

                <div className='subInfo-Settings'>
                    <h4>Notificaciones</h4>
                    <div className='options-Settings'>
                        <div className='subOptions-Settings'>
                            <span>Cambiar pais y region</span>
                            <div className="toggle active"></div>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar pais y region</span>
                            <div className="toggle active"></div>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar pais y region</span>
                            <div className="toggle active"></div>
                        </div>
                    </div>
                </div>

                <div className='subInfo-Settings'>
                    <h4>Global</h4>
                    <div className='options-Settings'>
                        <div className='subOptions-Settings'>
                            <span>Cambiar pais y region</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar idioma</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Cambiar Moneda</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}