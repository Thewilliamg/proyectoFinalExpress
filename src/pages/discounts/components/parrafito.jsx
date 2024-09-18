import { Heart, ArrowLeft, ShoppingCart } from "lucide-react";
import rectangulo from '../storage/img/rectangle-96.png'
import Vector from '../storage/img/Vector-Stroke.svg'

export default function ProductCard() {
  return (
    <div className="card">
      <div className="card-header">
        <button className="back-button" aria-label="Go back">
          <ArrowLeft className="button-icon" />
        </button>
        <img
          src={rectangulo}
          alt="Chalina beige con flecos"
          className="product-image"
        />
        <div>
          <img src={Vector} className="img-vector"/>
          <span className="span-vector">35%</span>
        </div>
       
        <Heart className="heart-icon" />
      </div>
      <div className="card-content">
        <h2 className="product-title">Chalina beige con flecos</h2>
        <div className="price-container">
          <span className="current-price">S/65</span>
          <span className="original-price">S/100</span>
        </div>
        <p className="product-info">Asociación de artesanos Tinkuy</p>
        <p className="product-info">Dimensiones: 18 x 200 cm</p>
        <p className="product-description">
          Descripción: Chalina tejida con lana de oveja en color natural beige, hilada a mano. El diseño presenta
          terminación con flecos en los extremos y líneas en alto relieve.
        </p>
      </div>
      <div className="card-footer">
        <button className="add-to-cart-button">
          <ShoppingCart className="button-icon" /> Añadir a mi carrito de compras
        </button>
      </div>
    </div>
  )
}