import '../discounts-product.css'
import rectangulo from '../storage/img/rectangle-96.png'
import ShoppingCart from '../storage/img/Group-7.svg'
import Vector from '../storage/img/Vector-Stroke.svg'
import Heart from '../storage/img/Vector-17.svg'
import GoBackArrow from '../../components/backArrow'
import Check from '../storage/img/Group-22.svg'
import triangle from '../storage/img/Rectangle-95.svg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';


export default function ProductCard() {
  const [productData, setProductData] = useState(null);
  const [productId, setProductId] = useState(localStorage.getItem('productId'));
  
  const fetchDiscountItem = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/discounts/product/${productId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProductData(data.data);
    } catch (error) {
      console.error('Error fetching discount items:', error);
      // setError(error);
    } finally {
      localStorage.removeItem('productId')
      // setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDiscountItem();
  }, []);

  function handleShopAddProductToCar() {
    const userId = localStorage.getItem('userId');

    fetch(`http://localhost:5001/api/items/car/${productId}`,
      {
        method: 'POST',
        headers: {
          userId: userId,
          'Content-Type': 'application/json',
        }
      }
    )
      .then(res => res.json())
      .catch((error) => {
        console.error('Hubo un error:' + error.message)
      });
  }

  return (
    <div className="card-discounts">
      {productData && (
        <>
          <div className="card-header">
            <Link to='/discounts'><GoBackArrow className="button-icon" /></Link>

            <img
              src={productData.picture || rectangulo}
              alt={productData.name || "Producto"}
              className="product-images"
            />
            <div className='container-vector'>
              <img src={Vector} className="img-vector" />
              <span className="span-vector">{productData.discount}</span>
            </div>

            <img src={Heart} className="heart-icon" />
          </div>
          <div className="card-content">
            <div className="price-container-2">
              <div className='product-title'>
                <img src={triangle} className='triangle' />
                <h2 className="e">{productData.name}</h2>
              </div>
              <div className="container-price">
                <div className="price-container">
                  <span className="original-price">S/{productData.price}</span>
                  <span className="current-price">S/{productData.price}</span>
                </div>
                <p className="product-info">{productData.marketData.name}</p>
                <p className="product-info">Dimensiones: {productData.size}</p>
                <p className="product-description">
                  Descripción: {productData.description}
                </p>
              </div>
              <div className='check-container'>
                <img src={Check} className="check-icon" />
                <p className="product-description">Cuenta con envío hacia tu ubicación</p>
              </div>
            </div>
            <div className='shp-container'>
              <button className="add-to-cart-button" onClick={handleShopAddProductToCar}>
                <img src={ShoppingCart} className="button-icon" /> Añadir a mi carrito de compras
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}