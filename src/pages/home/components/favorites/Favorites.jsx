import "./favorites.css";
import { Link } from "react-router-dom";
import GoBackArrow from "../../../components/backArrow";
import CategoryCarosel from "../../../components/categoryCarousel/categoryCarousel";
import BoxArticle from "./components/BoxArticle";

export default function Favorites() {
  const data = [
    "Textilería",
    "Bordado",
    "Cerámica",
    "Joyería",
    "Orfebrería",
    "William",
  ];

  const objeto = {
    "data1": {
        "imagen": "https://via.placeholder.com/200",
        "texto1": "Chullo II",
        "texto2": "S/ 250",
        "texto3": "Nacion Q'ero"
    },
    "data2": {
        "imagen": "https://via.placeholder.com/200",
        "texto1": "Chullo II",
        "texto2": "S/ 250",
        "texto3": "Nacion Q'ero"
    },
    "data3": {
        "imagen": "https://via.placeholder.com/200",
        "texto1": "Chullo II",
        "texto2": "S/ 250",
        "texto3": "Nacion Q'ero"
    },
    "data4": {
        "imagen": "https://via.placeholder.com/200",
        "texto1": "Chullo II",
        "texto2": "S/ 250",
        "texto3": "Nacion Q'ero"
    },
    "data5": {
      "imagen": "https://via.placeholder.com/200",
      "texto1": "Chullo II",
      "texto2": "S/ 250",
      "texto3": "Nacion Q'ero"
    },
    "data6": {
      "imagen": "https://via.placeholder.com/200",
      "texto1": "Chullo II",
      "texto2": "S/ 250",
      "texto3": "Nacion Q'ero"
    }
};

  return (
    <div className="container-favorites">
      <div className="box-backArrow">
        <Link to="/home" className="br">
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
      <BoxArticle objecto={objeto}/>
    </div>
  );
}
