import './settings.css'
import BackArrow from "../../../components/backArrow";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Settings() {
    const [toggles, setToggles] = useState({
        compras: true,
        descuentos: true,
        talleres: true,
        sonido: true
    });

    const toggleOption = (option) => {
        setToggles(prev => ({
            ...prev,
            [option]: !prev[option]
        }));
    };

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
            <div className='informacion-Settings'>
                <div className='subInfo-Settings'>
                    <h4 className='colorTitule-Settings'>Global</h4>
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
                    <h4 className='colorTitule-Settings'>Notificaciones</h4>
                    <div className='options-Settings'>
                        <div className='subOptions-Settings'>
                            <span>Mostrar notificaciones de compras</span>
                            <div className={`toggle ${toggles.compras ? 'active' : ''}`} onClick={() => toggleOption('compras')}></div>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Mostrar notificaciones de descuentos</span>
                            <div className={`toggle ${toggles.descuentos ? 'active' : ''}`} onClick={() => toggleOption('descuentos')}></div>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Mostrar notificaciones de talleres</span>
                            <div className={`toggle ${toggles.talleres ? 'active' : ''}`} onClick={() => toggleOption('talleres')}></div>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Sonido de notificaciones</span>
                            <div className={`toggle ${toggles.sonido ? 'active' : ''}`} onClick={() => toggleOption('sonido')}></div>
                        </div>
                    </div>
                </div>

                <div className='subInfo-Settings'>
                    <h4 className='colorTitule-Settings'>Legal</h4>
                    <div className='options-Settings'>
                        <div className='subOptions-Settings'>
                            <span>Política de privacidad</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Información legala</span>
                        </div>
                        <div className='subOptions-Settings'>
                            <span>Libro de reclamaciones</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}