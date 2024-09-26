import { useState } from "react";
import { Link } from "react-router-dom";
import GoBackArrow from "../../components/backArrow";
import Title from "../storage/img/Rectangle-86.svg";
import Search from "../storage/img/Group-6.svg";
import Flower from "../storage/img/Rectangle-51.png";

export default function Workshop() {
  const [busqueda, setBusqueda] = useState("");

  const infoTaller = {
    titulo: "Taller de bordado ayacuchano",
    img: Flower,
    link: "Para el público en general",
    contenido1: "Taller dado por los artesanos de",
    contenido2: "Taller Awaq Ayllus",
  };

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    alert(`Buscaste: ${busqueda}`);
  };
  return (
    <article className="main-container">
      <div className="container-arrow">
        <GoBackArrow />
        <img src={Title} className="img-title" />
        <div className="p-arrow">
          <p>Talleres </p>
          <p>educativos</p>
        </div>
      </div>
      <form className="container-search" onSubmit={manejarSubmit}>
        <div className="search">
          <img src={Search} className="img-search" />
          <input
            type="text"
            className="work-input"
            value={busqueda}
            onChange={manejarCambio}
            placeholder="Buscar taller, por categoría o artesanos"
          />
        </div>
      </form>
      <div className="container-cards">
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="/business-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="container-items">
            <div className="card-img">
              <img src={infoTaller.img} className="img-item" />
            </div>
            <div className="item-container">
              <div className="text-item-container">
                <strong>
                  <p>{infoTaller.titulo}</p>
                </strong>
                <Link to="/info" className="underline">
                  {infoTaller.link}
                </Link>
                <p>{infoTaller.contenido1}</p>
                <strong>
                  <p>{infoTaller.contenido2}</p>
                </strong>
              </div>

              <button className="button-item" onClick="submit">
                <Link to="buseiness-presentation" className="text-button">
                  Entérate más sobre el taller aquí
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
