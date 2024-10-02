import "./details.css"
import {Link,useParams,useLocation} from 'react-router-dom';
import {useState,useEffect} from 'react';
import ShoppingCart from '@/img/shopping-car.svg';
import GoBackArrow from '../../../components/backArrow';
import Check from '@/img/checked-square.svg';
import triangle from '@/img/square-brown-figure.svg';

export default function ProductDetails() {
    const [items, setItems] = useState();
    const { productId } = useParams();
    const location = useLocation();
    const pathBack = location.pathname.replace(`/details/${productId}`,'');
    const [dataDetails,setDataDetails] = useState();
    const [isFavorite, setIsFavorite] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
        .then(data => setItems(data))
        .catch((error) => {
            console.error('Hubo un error:' + error.message)
        });

        setIsVisible(true);

        setTimeout(() => {        
            setIsVisible(false); 
        }, 2600);

    }


    const handleFavoriteClick = async() => {
        if (!isFavorite) {
            const userId = localStorage.getItem('userId');

            try {
                const response = await fetch('http://localhost:5001/api/product/favorite', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId : userId,
                        productId: productId    
                    })
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setIsFavorite(true);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }
    };
        
    
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
                <button className="button-productDetails" onClick={handleFavoriteClick}>
                    <svg className="p-heart-icon" width="172" height="149" viewBox="0 0 172 149" fill={isFavorite ? "#FFA800" : "none"} xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.16874 62.2632L85.3489 143.784C86.5397 144.995 88.4973 144.977 89.6654 143.744L166.958 62.1749C167.613 61.4832 167.903 60.5372 167.713 59.6036C165.937 50.9144 155.753 6.60316 132.348 4.11299C111.661 1.91213 98.3735 32.5854 87.5279 33.1118C75.6207 33.6897 64.8708 3.43717 44.7453 4.11299C20.2838 4.93442 6.86583 50.3481 4.412 59.4841C4.14312 60.4851 4.4419 61.5242 5.16874 62.2632Z" stroke="#FFA800" strokeWidth="8"/>
                    </svg>
                </button>
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
                    {isVisible&&<div className="succes-assign-product-shop">'Item añadido al carrito'</div>}
                </div>
            </div>
        </div>
    )
}