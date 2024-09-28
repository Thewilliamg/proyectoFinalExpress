import './shop.css';
import { useState, useEffect } from 'react';
import square from '@/img/square.svg';
import image1 from '@/img/product-workshop1.png';
import PopUp from './components/popUp';
import trash from '@/img/trash-icon.svg';

export default function Shop() {
    const [showPopup, setShowPopup] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [responseObject, setResponseObject] = useState({});
    const userId = '64d2c84a8a39f00001e4c1ec';
    const shippingCost = 20;
    const [items, setItems] = useState([]);

    const responseObject2 = [{
        'productId': 1234534,
        'name': 'Vasija',
        'price': 50,
        'size': '13x10',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'picture': image1,
        'quantity': 1
    }, {
        'productId': 123005134,
        'name': 'Vasija2 pequeña con diseño de flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'picture': image1,
        'quantity': 1
    },
    {
        'productId': 31206542,
        'name': 'Vasija3 pequeña con diseño de flor flor flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazuta',
        'picture': image1,
        'quantity': 1
    },
    {
        'productId': 1205642,
        'name': 'Vasija4 pequeña con diseño de flor',
        'price': 90,
        'size': '13x200',
        'weight': '2 KG',
        'marketName': 'Asociacion de productos de Chazutaaaaaaaaaaaaaaa',
        'picture': image1,
        'quantity': 1
    }]

    useEffect(() => {
        fetch(`http://localhost:5001/api/shop/${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(res => res.json())
            .then(items => setItems(items)
            )
            .finally(setIsLoading(false))
            .catch((error) => {
                console.error('Hubo un error:' + error.message)
            });
    }, []);

    function Loading() {
        if (isLoading) {
            return (<h2>Cargando...</h2>)
        }
        return;
    }

    function updateQuantity(id, change) {
        setItems(items.map((item) =>
            (item.productId === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)))
    }

    function deleteCard(id) {
        setItems(items?.filter(item => item.productId !== id))
    }

    const subtotal = items.reduce((acum, item) => acum + item.quantity * item.price, 0);
    const totalSum = subtotal + shippingCost;

    const handleShowPopup = () => {
        setShowPopup(true);
    };
    function handleHidePopUp(data) {
        setShowPopup(data)
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
                <Loading />
                {(items.length>0) ? (items.map((item, index) => {
                    return (
                        <div className="cardItem" key={item?.name}>
                            <div className="trulycontainer">
                                <div className="img-card-shop">
                                    <img src={item?.picture} alt={item?.name} />
                                </div>
                                <div className="text-card-car">
                                    <p>{item?.name}</p>
                                    <p>S/.{item?.price}</p>
                                    <p>{item?.size}, {item.weight}</p>
                                    <b className='market-name-card'>{item?.marketName}</b>
                                    <div className='addOrdropItems'>
                                        <button onClick={() => updateQuantity(item?.productId, -1)}>-</button>
                                        <div className={item?.productId}>{item.quantity}</div>
                                        <button onClick={() => updateQuantity(item?.productId, 1)}>+</button>
                                    </div>
                                </div>
                                <button className='trash-icon-car' onClick={() => deleteCard(item?.productId)}>
                                    <img type='button' className='img-trash' src={trash} alt="trash-ico" />
                                </button>
                            </div>
                        </div>
                    )
                })) : 'El carrito está vacío :('}
            </div>

            <div className="container-other-info-car">
                <div className='link-to-coupon'>
                    <a href="/coupons">
                        Añadir cupón de descuento
                    </a>
                </div>
                <div className="subtotal-shop-car">
                    <div className="fieldsubtotal">
                        <label className='subtotal-label'>Sub total</label>
                        <label className='subtotal-label'>S/.{subtotal}</label>
                    </div>
                    <div className="fieldTotalSum">
                        <label className='delivery-label'>Gastos de envio</label>
                        <label className='delivery-label'>S/.{shippingCost}</label>
                    </div>
                </div>
                <div className="total-shop-car">
                    <label className='total-label-shop'>Total</label>
                    <label className='delivery-label'>S/.{totalSum}</label>
                </div>
                <button onClick={handleShowPopup} className="shop-button">Realizar Compra</button>
            </div>


        </div>
    );
}
