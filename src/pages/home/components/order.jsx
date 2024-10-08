import GoBackArrow from "../../components/backArrow";
import Title from "../storage/img/Rectangle-86.svg";
import Message from "../storage/img/message.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Order() {
  const userId = localStorage.getItem('userId');
  const [shopped, setShopped] = useState();
  const [allproducts, setAllProducts] = useState();

  useEffect(() => {
    fetch(`http://localhost:5001/api/orders/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(response =>
        setShopped(response)
      )
      .catch((error) => {
        console.error('Hubo un error:' + error.message);
      });

    fetch(`http://localhost:5001/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => res.json())
      .then(response =>
        setAllProducts(response)
      )
      .catch((error) => {
        console.error('Hubo un error:' + error.message);
      });

  }, [])

  return (
    <article className="orders-container">
      <div className="container-arrow">
        <Link to='/home'>
          <GoBackArrow className='arrow' />
        </Link>

        <img src={Title} className="img-title" />
        <div className="p-arrow">
          <p>Compras</p>
          <p>realizadas</p>
        </div>
      </div>
      <div className="container-shopped">
        {(shopped?.length === 0) && (<p>No hay pedidos realizados por el usuario :c</p>)}
        {
          shopped?.map((item, index) => {
            return (
              <div className="card-shopped" key={item?.titleProduct}>
                <img src={item?.imgProduct} className="img-product" />

                <div className="container-items-shopped">
                  <div className="container-text-shopped">
                    <p>{item?.titleProduct}</p>
                    <p>S/.{item?.priceProduct}</p>
                    <p>{item?.measureProduct + ', ' + item?.weightProduct}</p>
                    <p>{item?.marketName}</p>
                  </div>
                  <Link>
                    <button className="button-shopped">
                      Ver seguimiento del producto
                    </button>
                  </Link>
                </div>

                <Link className="message-container">
                  <img src={Message} className="img-message" />
                </Link>
              </div>
            )
          })
        }

      </div>
      <p className="edga">Sigue viendo más artesanías</p>
      <div className="container-artesan">
        {
          allproducts?.map((items, index) => {
            return (
              <div className="card-artesan" key={'k'+index+items.name}>
                <div className="cardet">
                  <img src={items.picture} alt="" className="img-artesan" />
                  <div className="container-text-artesan">
                    <p>{items.name}</p>
                    <p>S/.{items.price}</p>
                    <p>{items.marketName}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </article>
  );
}
