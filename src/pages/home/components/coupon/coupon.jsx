import './coupon.css';
import {Link} from 'react-router-dom';
import squareicon from "@/img/square-beige-icon.svg";
import GoBackArrow from "@/pages/components/backArrow";
import couponico from "@/img/coupon-icon-alone.svg";
import coupon1img from "@/img/product-workshop1.png";
export default function Coupon() {

    return(
        <div className='container-all-page'>

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
                    <input type="text" placeholder="Buscar producto o palabra clave"/>
                    <button type="button" className="link-coupon-to">Validar</button>
                </div>
            </div>
            <div className="subtitleAndText">
                <p>Cupones vigentes</p>
                <small>Usar antes de la fecha de vencimiento</small>
            </div>
            <div className="container-coupons-all">

                <div className="card-coupon-free">
                    <div className='img-coupon-div'>
                        <img src={coupon1img} alt="imgProduct" />
                    </div>
                    <div className='description-side-c'>
                        <div className="text-description-c">
                            <p>50% de descuento en cartucheras del <b>taller Awaq Ayllus</b> </p>
                        </div>
                            <p>Fecha de vencimiento: 24/10/2024</p>
                            <Link to="?coupon=24ae53s">Usar Cupón</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}