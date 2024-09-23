import { useState } from 'react';
import { Link } from "react-router-dom";
import checkBoxTrue from '/img/checkBoxTrue.svg';
import checkBoxFalse from '/img/checkBoxFalse.svg';
import './shop.css';

export default function Shop() {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='shop-container'>
            <button onClick={handleShowPopup} className="shop-button">Realizar Compra</button>
            {showPopup && (
                <>
                    <div className="overlay"></div> {/* Fondo oscuro */}
                    <div className="popUp-shop">
                        <div className='text-popUp'>
                            <h4>¿Seguro de realizar la compra?</h4>
                        </div>
                        <div className='button-popUp'>
                            <button>
                                <Link to="/shop/confirmation" className='link-popUp'>
                                    <img src={checkBoxTrue} alt="" />
                                    Si
                                </Link>
                            </button>
                            <button onClick={handleClosePopup}>
                                <img src={checkBoxFalse} alt="" />
                                No
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
