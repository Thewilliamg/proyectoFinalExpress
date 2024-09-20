import "./favorites.css";
import { Link } from "react-router-dom";
import GoBackArrow from "../../../components/backArrow";
import CategoryCarosel from "../../../components/categoryCarousel/categoryCarousel";
import imagePrueba from '/img/imagenPrueba.svg'

export default function Favorites() {
  const data = [
    "Textilería",
    "Bordado",
    "Cerámica",
    "Joyería",
    "Orfebrería",
    "William",
  ];

  return (
    <div className="container-favorites">
      <div className="box-backArrow">
        <Link to="/workshops" className="br">
          <GoBackArrow />
        </Link>
      </div>
      <div className="box-menuTitule">
        <svg
          width="70"
          height="70"
          viewBox="0 0 236 236"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="169.706"
            height="169.706"
            rx="7"
            transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)"
            fill="#703A31"
            fillOpacity="0.38"
          />
        </svg>
        <h5 className="menuTitule-h5">
          {" "}
          Tus artesanías <br /> favoritas
        </h5>
      </div>
      {data && <CategoryCarosel data={data} />}
      <div className="box-articles">
        <div className="box-containerArticle">
          <div className="box-imagenArtixle">
            <img src={imagePrueba} alt="" />
          </div>
          <div className="box-textArticle">
            <p>Chullo II</p>
            <p>S/ 250</p>
            <p>Nacion Q'ero</p>
          </div>
        </div>
      </div>
    </div>
  );
}
