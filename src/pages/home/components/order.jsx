import GoBackArrow from "../../components/backArrow";
import Title from "../storage/img/Rectangle-86.svg";
import Vasija from "../storage/img/vasija.svg";
import Message from "../storage/img/message.svg";
import { Link } from "react-router-dom";
import Manta from "../storage/img/manta.svg";

export default function Order() {
  const shopped = [{
    img: Vasija,
    title: "Vasija pequeña con diseño de flora",
    price: "S/.50",
    measures: "13x10",
    weight: "2 KG",
    marketName: "Asoc. de artesanos productores de Chazuta",
  },{
    img: Vasija,
    title: "Vasija pequeña con diseño de flora",
    price: "S/.50",
    measures: "13x10",
    weight: "2 KG",
    marketName: "Asoc. de artesanos productores de Chazuta",
  }];
  const items = {
    img: Manta,
    title: "Tapiz Chumpi Andino III",
    price: "S/.600",
    made: "Taller Awaq Ayllus",
  };

  return (
    <article className="orders-container">
      <div className="container-arrow">
        <Link to='/home'>
          <GoBackArrow className='arrow'/>
        </Link>

        <img src={Title} className="img-title" />
        <div className="p-arrow">
          <p>Compras</p>
          <p>realizadas</p>
        </div>
      </div>
      <div className="container-shopped">
        {
          shopped.map((item,index)=>{
            return(
              <div className="card-shopped" key={item.title+index}>
                <img src={item.img} className="img-product" />

                <div className="container-items-shopped">
                  <div className="container-text-shopped">
                    <p>{item.title}</p>
                    <p>S/.{item.price}</p>
                    <p>{item.measures+', '+item.weight}</p>
                    <p>{item.marketName}</p>
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
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
        <div className="card-artesan">
          <div className="cardet">
            <img src={items.img} alt="" className="img-artesan" />
            <div className="container-text-artesan">
              <p>{items.title}</p>
              <p>{items.price}</p>
              <p>{items.made}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
