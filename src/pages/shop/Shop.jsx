import './shop.css';
import { useState } from 'react';
import square from '@/img/square.svg';
import image1 from '@/img/product-workshop1.png';
import PopUp from './components/popUp';
import trash from '@/img/trash-icon.svg';

export default function Shop() {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };
    function handleHidePopUp(data) {
        setShowPopup(data)
    }

    const objectResponse = [{
        'name': 'Vasija',
        'price': 50,
        'size': '13x10',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'image': image1,
        'quantity':1
    }, {
        'name': 'Vasija2 pequeña con diseño de flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'image': image1,
        'quantity':1
    },
    {
        'name': 'Vasija3 pequeña con diseño de flor flor flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'image': image1,
        'quantity':1
    }, 
    {
        'name': 'Vasija4 pequeña con diseño de flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazutaaaaaaaaaaaaaaa',
        'image': image1,
        'quantity':1
    }]

    function dismiss() {
        /*Esta funccion es para modificar el valor de quantity*/
    }
    function sum() {
        /*Esta funccion es para modificar el valor de quantity*/
    }

    function deleteCard() {

    }

    return (
        <div className='shop-container'>
            {showPopup && <PopUp ShowPopup={handleHidePopUp} />}
            <div className="header-shop-car">
                <div className="figure-square-car">
                    <img src={square} alt="square" />
                </div>
                <div className="letters-header-car">
                    <p className='title-car'>Tu carrito de compras</p>
                    <small className='small-title-car'>Revisa aqui los productos que añadiste a tu carrito</small>
                </div>
            </div>

            <div className="container-cards-shop">
                {objectResponse.map((item) => {
                    return (
                        <div className="cardItem" key={item.name}>
                            <div className="trulycontainer">
                                <div className="img-card-shop">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="text-card-car">
                                    <p>{item.name}</p>
                                    <p>S/.{item.price}</p>
                                    <p>{item.size}, {item.weight}</p>
                                    <b className='market-name-card'>{item.marketName}</b>
                                    <div className='addOrdropItems'>
                                        <button onClick={dismiss}>-</button>
                                        <input id={item.name} type="button" value="1" />
                                        <button onClick={sum}>+</button>
                                    </div>
                                </div>
                                <div className='trash-icon-car'>
                                    <img onClick={deleteCard} src={trash} alt="trash-ico" />
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>

            <div className="container-other-info-car">
                <div className='link-to-coupon'>
                    <a href="/coupons">
                        Añadir cupón de descuento
                    </a>
                </div>
                <div>Sub total</div>
                <button onClick={handleShowPopup} className="shop-button">Realizar Compra</button>
            </div>


        </div>
    );
}
