import QRCode from "react-qr-code";
import Pinchitos from "../storage/img/pinchito-business.svg";
import GoBackArrow from "../../components/backArrow";
import { Link, useParams } from "react-router-dom";
import "./business-presentation.css";
import { useEffect, useState } from "react";

export default function Business() {
  const [workShop, setWorkshop] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchWorkshopId();
  }, [id]);

  const fetchWorkshopId = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/workshop/${id}`
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setWorkshop(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Función para extraer el ID del video de YouTube
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = workShop.video ? getYouTubeVideoId(workShop.video) : null;

  return (
    <article className="business-container">
      <Link to="/workshops">
        <GoBackArrow className="button-icon" />
      </Link>

      <div className="arribita-container">
        <img src={Pinchitos} className="pinchitos" alt="Pinchitos" />
        <div className="arribita-chiquito">
          <p>{workShop.description}</p>
        </div>
      </div>
      <div className="card-grande">
        <div className="mitad-container">
          <p>{workShop.name}</p>
          <div className="mitad-chiquito">
            {videoId ? (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="img-mitad"
              />
            ) : (
              <p>Video no disponible</p>
            )}
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
              size={120}
              fgColor="#500c06"
              bgColor="#ffffff"
              level="H"
            />
          </div>
        </div>
      </div>
    </article>
  );
}