import "./details.css"
import {Link} from 'react-router-dom'
// import rectangulo from '/img/rectangle-96.png';
import ShoppingCart from '/img/shopping-car.svg';
import item1 from "/img/product-workshop1.png";
import Heart from '/img/heart-empty-icon.svg';
import GoBackArrow from '../../../components/backArrow';
import Check from '/img/checked-square.svg';
import triangle from '/img/square-brown-figure.svg';

export default function ProductDetails() {
    return (
        <div className="product-details-container">
            <div className="product-card-header-p">
                <Link to="/markets/products">
                    <GoBackArrow />    
                </Link>
                <img
                    src={item1}
                    alt="itemProduct"
                    className="product-image-detail"
                />
            </div>
            <div className="product-card-content">
                <img src={Heart} className="p-heart-icon" />
                <div className="price-container-2p">
                    <div className='product-title-p'>
                        <img src={triangle} className='triangle' />
                        <h2 className="e">Chalina beige con flecos</h2>
                    </div>
                    <div className="container-price-products">
                        <div className="price-container-p">
                            <span className="current-price-product-detail">S/.65</span>
                        </div>
                        <p className="product-info-detail">Taller Awaq Ayullus</p>
                        <p className="product-info-detail">Dimensiones: 18 x 200 cm</p>
                        <p className="product-description-detail">
                            Descripción: Chalina tejida con lana de oveja en color natural beige, hilada a mano. El diseño presenta
                            terminación con flecos en los extremos y líneas en alto relieve.
                        </p>
                        <div className='check-container-product'>
                            <img src={Check} className="check-icon-product" />
                            <p className="product-description">Cuenta con envío hacia tu ubicación</p>
                        </div>
                    </div>
                </div>
                <div className='shp-container-car-p'>
                    <button className="add-to-cart-button-product">
                        <img src={ShoppingCart} className="button-icon-p" /> Añadir a mi carrito de compras
                    </button>
                </div>
            </div>
        </div>
    )
}