import "./products.css";
import imgWorkshop from "@/img/Ruraq-maki-taller-product.png";
import item1 from "@/img/product-workshop1.png";
import triangle from "@/img/square-brown-figure.svg";
import { Link } from 'react-router-dom';
import GoBackArrow from "../../../pages/components/backArrow";
import settingsbar from "@/img/sett-searchbar-icon.svg";
import chaticon from "@/img/chat-info-icon.svg";
import squareicon from "@/img/square-beige-icon.svg";
import lensicon from "@/img/search-icon-white.svg"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function Products() {
    const [dataWorkShopProducts, setDataWorkShopProducts] = useState([]);
    const { marketId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5001/api/markets/${marketId}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            )
            .then(res => res.json())
            .then(item => 
                setDataWorkShopProducts(item)
            )
            .catch((error) => {
                console.error('Hubo un error:' + error.message   );
            });
    }, [])


    return (
        <>
            <div className="crafts-container">

                <div className="header-crafts">
                    <div className="link-to-markets">
                        <Link to="/markets" className="link-from-crafts">
                            <GoBackArrow />
                        </Link>
                    </div>
                    <div className="header-overlay-crafts">
                        <img
                            src={dataWorkShopProducts[0]?.marketImg}
                            alt='marketname'
                            className="header-image-workshop"
                        />
                        <h1 className="header-title-crafts">{dataWorkShopProducts[0]?.marketName}</h1>
                        <a href="/workshops/business-presentation">
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
                        <div className="localizate-bar-left"></div>
                        <div className="title-and-input-products">
                            <div className="craftTitle">
                                <img src={squareicon} alt="squaretitle" />
                                <b>Artesanias</b>
                            </div>
                            <div className="localizate-bar">
                                <img src={lensicon} alt="icon-localization" />
                                <input type="text" placeholder="Buscar producto o palabra clave" />
                            </div>
                        </div>
                        <div className="svg-icon-products">
                            <a href="/customer_service/chat"><img href="/hot" src={chaticon} alt="chaticon" /></a>
                            <a href="/settings"><img src={settingsbar} alt="setticon" /></a>
                        </div>
                    </div>

                    <div className="product-grid">

                        {dataWorkShopProducts?.map((item, index) => {
                            return (
                                <a key={item.productId+index} className="product-card-craft" href={`products/details/${item.productId}`} >
                                    <img
                                        src={item.picture}
                                        alt={'k'+item.name}
                                        className="product-image"
                                    />
                                    <div className="description-craft">
                                        <p className="product-name">{item.name}</p>
                                        <p className="product-price">S/{item.price}</p>
                                        <p className="product-source">{item.marketName}</p>
                                    </div>
                                </a>

                            )
                        })
                        }
                    </div>

                </div>
            </div>
        </>
    );
};