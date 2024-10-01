import GoBackArrow from "../../components/backArrow";
// import Square from "@/img/square-beige-icon.svg";
import { Link } from "react-router-dom";
import "./community.css";

export default function Community() {
  return (
    <article className="community-container">
      <div className="header-community">
        <Link to='/home'>
          <GoBackArrow />
        </Link>

        <img src={Square} className="img-header-community" />
        <div className="header-text-community">
          <h2>Comentarios</h2>
          <h2>a la app</h2>
        </div>
      </div>
      <div className="container-asks">
        <h2 className="ppppp">Problemas frecuentes</h2>
        <div className="card-question">
          <div>
            <p>La aplicacion no carga de manera correcta</p>
          </div>
          <div>
            <p>Errores al querer comprar en la aplicacion</p>
          </div>
          <div>
            <p>No puedo ver las imagenes de las tiendas y/o artesanias</p>
          </div>
          <div>
            <p>No me permite usar un cupon de descuento</p>
          </div>
          <div>
            <p>No me deja incribirme a talleres</p>
          </div>
          <div>
            <p>El QR interactivo no funciones de manera correcta</p>
          </div>
        </div>
        <div className="anothe-question">
          <h2>Otro</h2>
          <div className="oto">
            <input
              type="text"
              name=""
              id=""
              className="question-community"
              placeholder="Describe aqui tu problema"
            />
          </div>
          <div className="utu">
            <input type="file" id="file-input" className="hidden-input" />
            <label htmlFor="file-input" className="custom-button">
              Adjuntar captura
            </label>
            <button type="submit">Enviar</button>
          </div>
        </div>
      </div>
    </article>
  );
}
