import QRCode from "react-qr-code";
import Pinchitos from "../storage/img/pinchito-business.svg";
import GoBackArrow from "../../components/backArrow";
import { Link } from "react-router-dom";
import Video from "../storage/img/video-business.svg";
import "./business-presentation.css";
import { useEffect, useState } from "react";

export default function Business() {

  const [workShop, setWorkshop] = useState([]);

  useEffect(() => {
    fetchWorkshopId();
  }, []);

  const fetchWorkshopId = async() => {
    try {
      // const response = await fetch(`http://localhost:5001/api/workshop/${id}`)
      const response = await fetch(`http://localhost:5001/api/workshop/64d2c84a8a39f00001e4c1e8`)
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      console.log(data);
      setWorkshop(data.data);

    } catch (error) {
      
    }
  }

  return (
    <article className="business-container">
      <Link to='/workshops'>
        <GoBackArrow className="button-icon" />
      </Link>

      <div className="arribita-container">
        <img src={Pinchitos} className="pinchitos" />
        <div className="arribita-chiquito">
          <p>{workShop.description}</p>
        </div>
      </div>
      <div className="card-grande">
        <div className="mitad-container">
          <p>{workShop.name}</p>
          <div className="mitad-chiquito">
            <iframe
              width="560"
              height="315"
              src={workShop.video || "video"}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="img-mitad"
            />
          </div>
        </div>

        <div className="abajito-container">
          <p>Conoce más del taller de forma interactiva</p>
          <p>
            Escanea el código QR con tu celular y disfruta de la experiencia
          </p>
          <div className="abajito-chiquito">
            <QRCode
              value="/workshop"
              size={120} // tamaño del QR
              fgColor="#500c06" // color del frente
              bgColor="#ffffff" // color del fondo
              level="H" // nivel de corrección de errores (L, M, Q, H)
            />
          </div>
        </div>
      </div>
    </article>
  );
}