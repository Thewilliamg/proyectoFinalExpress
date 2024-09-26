import '../discounts-product.css'
import rectangulo from '../storage/img/rectangle-96.png'
import ShoppingCart from '../storage/img/Group-7.svg'
import Vector from '../storage/img/Vector-Stroke.svg'
import Heart from '../storage/img/Vector-17.svg'
import GoBackArrow from '../../components/backArrow'
import Check from '../storage/img/Group-22.svg'
import triangle from '../storage/img/Rectangle-95.svg'

export default function ProductCard() {
  return (
    <div className="card-discounts">
      <div className="card-header">

        <GoBackArrow className="button-icon" />
        <img
          src={rectangulo}
          alt="Chalina beige con flecos"
          className="product-image"
        />
        <div className='container-vector'>
          <img src={Vector} className="img-vector" />
          <span className="span-vector">-35%</span>
        </div>

        <img src={Heart} className="heart-icon" />
      </div>
      <div className="card-content">
        <div className="price-container-2">
          <div className='product-title'>
            <img src={triangle} className='triangle' />
            <h2 className="e">Chalina beige con flecos</h2>
          </div>
          <div className="container-price">
            <div className="price-container">
              <span className="original-price">S/100</span>
              <span className="current-price">S/65</span>
            </div>
            <p className="product-info">Asociación de artesanos Tinkuy</p>
            <p className="product-info">Dimensiones: 18 x 200 cm</p>
            <p className="product-description">
              Descripción: Chalina tejida con lana de oveja en color natural beige, hilada a mano. El diseño presenta
              terminación con flecos en los extremos y líneas en alto relieve.
            </p>
          </div>
          <div className='check-container'>
            <img src={Check} className="check-icon" />
            <p className="product-description">Cuenta con envío hacia tu ubicación</p>
          </div>
        </div>
        <div className='shp-container'>
          <button className="add-to-cart-button">
            <img src={ShoppingCart} className="button-icon" /> Añadir a mi carrito de compras
          </button>
        </div>
      </div>
    </div>
  )
}