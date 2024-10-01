import "./details.css"
import {Link,useParams,useLocation} from 'react-router-dom';
import {useState,useEffect} from 'react';
import ShoppingCart from '@/img/shopping-car.svg';
import item1 from "@/img/product-workshop1.png";
import Heart from '@/img/heart-empty-icon.svg';
import GoBackArrow from '../../../components/backArrow';
import Check from '@/img/checked-square.svg';
import triangle from '@/img/square-brown-figure.svg';

export default function ProductDetails() {
    const [items, setItems] = useState();
    const { productId } = useParams();
    const location = useLocation();
    const pathBack = location.pathname.replace(`/details/${productId}`,'');
    const [dataDetails,setDataDetails] = useState();

    useEffect(()=>{
        fetch(`http://localhost:5001/api/product/details/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(response => 
            setDataDetails(response)
        )
        .catch((error) => {
            console.error('Hubo un error:' + error.message   );
        });
    },[])


    function handleShopAddProductToCar(){
        const userId = localStorage.getItem('userId');
        
        fetch(`http://localhost:5001/api/items/car/${productId}`,
        {
            method: 'POST',
            headers: {
                userId:userId,
                'Content-Type': 'application/json',
            }
        }
    )
        .then(res => res.json())
        .then(data => setItems(data)
        )
        .catch((error) => {
            console.error('Hubo un error:' + error.message)
        });
    }
    
    return (
        <div className="product-details-container">
            <div className="product-card-header-p">
                <Link to={pathBack}>
                    <GoBackArrow />    
                </Link>
                <img
                    src={dataDetails?.picture}
                    alt="itemProduct"
                    className="product-image-detail"
                />
            </div>
            <div className="product-card-content">
                <img src={Heart} className="p-heart-icon" />
                <div className="price-container-2p">
                    <div className='product-title-p'>
                        <img src={triangle} className='triangle' />
                        <h2 className="e">{dataDetails?.name}</h2>
                    </div>
                    <div className="container-price-products">
                        <div className="price-container-p">
                            <span className="current-price-product-detail">S/.{dataDetails?.price}</span>
                        </div>
                        <p className="product-info-detail">{dataDetails?.marketName}</p>
                        <p className="product-info-detail">Dimensiones: {dataDetails?.size}</p>
                        <p className="product-description-detail">
                            Descripción: {dataDetails?.description}
                        </p>
                        <div className='check-container-product'>
                            <img src={Check} className="check-icon-product" />
                            <p className="product-description">Cuenta con envío hacia tu ubicación</p>
                        </div>
                    </div>
                </div>
                <div className='shp-container-car-p'>
                    <button className="add-to-cart-button-product" onClick={handleShopAddProductToCar}>
                        <img src={ShoppingCart} className="button-icon-p" /> Añadir a mi carrito de compras
                    </button>
                </div>
            </div>
        </div>
    )
}