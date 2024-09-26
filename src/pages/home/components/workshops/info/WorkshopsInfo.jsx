import "./workshopsInfo.css";
import { Link } from "react-router-dom";
import BackArrow from "../../../../components/backArrow";
import imagePage28 from "@/img/imagePage28.png";
import rectanglePage28 from "@/img/rectanglePage28.svg";
import bookPage28 from "@/img/bookPage28.svg";

export default function WorkshopsInfo() {
  const span = [
    "Duracion",
    "Fecha de inicio",
    "Horario",
    "Materiales",
    "Modalidad",
    "Lugar",
  ];

  const valor = ["2 meses", "8 de Julio", " 4 a 6 PM cada sábado", "Materiales dados en clase", "Presencial", "En el Ministerio de Cultura, Lima, Perú"]

  return (
    <div className="box-workshopsInfo">
        <div className="box-BackArrow">
            <Link to="/workshops" classname="nombre-para-dar-Style">
                <BackArrow/>
            </Link>
        </div>
        <div className="image-workshopsInfo">
            <img src={imagePage28} alt="" />
        </div>
        <div className="titule-workshopsInfo">
            <img src={rectanglePage28} alt="" />
            <div className="subtitule-workshopsInfo">
                <h4>Taller de ceramica artesanal</h4>
            </div>
        </div>
        <div className="informacion-workshopsInfo">

            <div className="box-firstText-workshopsInfo">
                <p>En este taller dado por los artesanos de <b>Cerámicas Tater Vera</b>aprenderán a usar la arcilla para crear cosas para el hogar condiseños típicos ayacuchanos.</p>
            </div>

            <div className="box-info-workshopsInfo">
                <div>
                    <p className="colorTitule">Para el público general</p>
                    <p className="colorText">*los niños menores de 8 años se recomienda que estén acompañados de un adulto</p>
                </div>
            </div>

            <div className="box-list-workshopsInfo">
                {span.map((text, index) => {
                    return (
                    <p key={text}>
                        <span className="colorTitule">{text}:</span> <span>{valor[index]}</span>
                    </p>
                    );
                })}
            </div>

            <div className="box-button-workshopsInfo">
                <button>
                    <img src={bookPage28} alt="bookPage28" />
                    Inscribirse al taller
                </button>
                <p>*Cupos limitados</p>
            </div>

        </div>
    </div>
  );
}
