import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './shop.css';

export default function Shop() {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className='shop-container'>
            <button onClick={handleShowPopup} className="shop-button">Realizar Compra</button>
            {showPopup && (
                <div className="popUp-shop">
                    <div className='text-popUp'>
                        <h4>¿Seguro de realizar la compra?</h4>
                    </div>
                    <div className='button-popUp'>
                        <button><Link to="/shop/confirmation" className='link-popUp'>Si</Link></button>
                        <button onClick={handleClosePopup}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}