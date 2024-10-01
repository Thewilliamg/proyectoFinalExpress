import "./coupon.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import squareicon from "@/img/square-beige-icon.svg";
import GoBackArrow from "@/pages/components/backArrow";
import couponico from "@/img/coupon-icon-alone.svg";
import coupon1img from "@/img/product-workshop1.png";
export default function Coupon() {
  const [discounts, setDiscount] = useState([]);
  const userid = "64d2c84a8a39f00001e4c1ed";

  useEffect(() => {
    fetch(`http://localhost:5001/api/coupon/${userid}`)
      .then((res) => res.json())
      .then((discounts) => setDiscount(discounts))
      .catch((error) => {
        console.error("Hubo un error:" + error.message);
      });
  },[]);
  console.log(discounts);

  return (
    <div className="container-all-page">
      <div className="header">
        <div className="linkbox-to-home">
          <Link to="/home" classname="link-to-home-back">
            <GoBackArrow />
          </Link>
        </div>
        <div className="craftTitle-coupon">
          <img src={squareicon} alt="squaretitle" />
          <b>Canjear cupón</b>
        </div>
      </div>
      <div className="question">
        <p>¿Cuentas con algún cupón de descuento? Canjealo aquí</p>
      </div>
      <div className="input-coupon">
        <div className="localizate-bar-coup">
          <img src={couponico} alt="icon-localization" />
          <input type="text" placeholder="Buscar producto o palabra clave" />
          <button type="button" className="link-coupon-to">
            Validar
          </button>
        </div>
      </div>
      <div className="subtitleAndText">
        <p>Cupones vigentes</p>
        <small>Usar antes de la fecha de vencimiento</small>
      </div>
      <div className="container-coupons-all">
        {discounts.map((item, index) => {
          return (
            <div className="card-coupon-free" key={index}>
              <div className="img-coupon-div">
                <img src={item?.productImg} alt="imgProduct" />
              </div>
              <div className="description-side-c">
                <div className="text-description-c">
                  <p>
                    {item?.productDiscount} <b>{item.marketName}</b>
                  </p>
                </div>
                <p>Fecha de vencimiento: {item?.date_end}</p>
                <Link to={`?coupon=${item?.id}`}>Usar Cupón</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
