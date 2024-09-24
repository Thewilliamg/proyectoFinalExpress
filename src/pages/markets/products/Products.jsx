import "./products.css";
import imgWorkshop from "/img/Ruraq-maki-taller-product.png";
import item1 from "/img/product-workshop1.png";
import triangle from "/img/square-brown-figure.svg";
import { Link } from 'react-router-dom';
import GoBackArrow from "../../../pages/components/backArrow";
import localizate from "/img/localization-icon.svg";
import settingsbar from "/img/sett-searchbar-icon.svg";
import chaticon from "/img/chat-info-icon.svg";

export default function Products() {

    //TODO: Este es un objeto de ejemplo: 
    const dataWorkShopProducts = {
        workshop: { name: 'Taller Awaq Ayllus', imgWorkshop: imgWorkshop },
        products: [{
            productImg: item1,
            price: 600,
            name: 'Tapiz Chumpi Andino III',
            id: 123456
        }, {
            productImg: item1,
            price: 30,
            name: 'Cartuchera Flores',
            id: 3216457
        }, {
            productImg: item1,
            price: 30,
            name: 'Nada aqui nada alla',
            id: 456123
        }, {
            productImg: item1,
            price: 30,
            name: 'Cartuchera Flores',
            id: 3312456
        }, {
            productImg: item1,
            price: 30,
            name: 'Cartuchera Capsta',
            id: 465789
        }]
    };

    return (
        <>
        <div className="crafts-container">

            <div className="header-crafts">
                <div className="link-to-markets">
                    <Link to="/markets" classname="link-from-crafts">
                        <GoBackArrow />
                    </Link>
                </div>
                <div className="header-overlay-crafts">
                    <img
                        src={dataWorkShopProducts.workshop.imgWorkshop}
                        alt={dataWorkShopProducts.workshop.name}
                        className="header-image-workshop"
                    />
                    <h1 className="header-title-crafts">{dataWorkShopProducts.workshop.name}</h1>
                    <a href="/workshop/business-presentation">
                        <img className="left-triangle-craft" src={triangle} alt="left-triangle" />
                        <p className="header-subtitle">
                            Conoce la historia detrás de este taller artesanal y conoce cómo producen sus textiles
                        </p>
                        <img className="right-triangle-craft" src={triangle} alt="rigth-triangle" />

                    </a>
                </div>
            </div>

            <div className="content-description-craft">

                <div className="searchbar-products">
                    <div className="title-and-input-products">
                    <div className="cardTitle">
                        Artesanias
                    </div>
                    <div className="localizate-bar">
                        <img src={localizate} alt="icon-localization" />
                        <input type="text" placeholder="Ubicacion de energía actual"/>
                        
                    </div>
                    </div>
                    <div className="svg-icon-products"></div>
                </div>

                <div className="product-grid">

                    {dataWorkShopProducts.products.map((item, index) => {
                        return (
                            <div className="product-card-craft">
                                <img
                                    src={item.productImg} // Cambiar por tu imagen de producto
                                    alt={item.name}
                                    className="product-image"
                                />
                                <div className="description-craft">
                                    <p className="product-name">{item.name}</p>
                                    <p className="product-price">S/{item.price}</p>
                                    <p className="product-source">{dataWorkShopProducts.workshop.name}</p>
                                </div>
                            </div>

                        )
                    })
                    }
                </div>

            </div>
        </div>
        </>
    );
};