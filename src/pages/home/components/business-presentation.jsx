import QRCode from "react-qr-code";
import Pinchitos from "../storage/img/pinchito-business.svg";
import GoBackArrow from "../../components/backArrow";
import Video from "../storage/img/video-business.svg";

export default function Business() {
  const business = {
    p1: "El Taller de Arte Awaq Ayllus reúne a más de 60",
    p2: "tejedores y tejedoras ayacuchanos que producen",
    p3: "tapices murales y delicadas piezas bordadas para",
    p4: "diversos usos decorativos y utilitarios.",
  };

  const documental = {
    titulo: "Taller de Arte Awaq Ayllus",
    contenido: 'https://www.youtube.com/embed/y2CF5dFbij0?si=CDvadilrCKWdr30V',
  };

  return (
    <article className="business-container">
      <GoBackArrow className="button-icon" />
      <div className="arribita-container">
        <img src={Pinchitos} className="pinchitos" />
        <div className="arribita-chiquito">
          <p>{business.p1}</p>
          <p>{business.p2}</p>
          <p>{business.p3}</p>
          <p>{business.p4}</p>
        </div>
      </div>
      <div className="card-grande">
        <div className="mitad-container">
          <p>{documental.titulo}</p>
          <div className="mitad-chiquito">
            <iframe width="560" height="315" src={documental.contenido} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="img-mitad" />
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
