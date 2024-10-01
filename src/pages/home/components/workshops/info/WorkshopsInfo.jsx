import "./workshopsInfo.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackArrow from "../../../../components/backArrow";
import rectanglePage28 from "@/img/rectanglePage28.svg";
import bookPage28 from "@/img/bookPage28.svg";

export default function WorkshopsInfo() {
  const [workshopInfo, setWorkshopInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchWorkshops();
  }, [id]);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(
        `http://localhost:5001/api/workshops/info/${id}`
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setWorkshopInfo(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!workshopInfo) {
    return <div>Cargando...</div>;
  }

  function convertirFecha(fecha) {
    const dt = new Date(fecha);

    const month_names = {
      0: "enero",
      1: "febrero",
      2: "marzo",
      3: "abril",
      4: "mayo",
      5: "junio",
      6: "julio",
      7: "agosto",
      8: "septiembre",
      9: "octubre",
      10: "noviembre",
      11: "diciembre",
    };

    const output_date = `${dt.getDate()} de ${
      month_names[dt.getMonth()]
    } ${dt.getFullYear()}`;

    return output_date;
  }

  const infoItems = [
    { label: "Duración", value: workshopInfo.duration },
    { label: "Fecha de inicio", value: convertirFecha(workshopInfo.startDate) },
    { label: "Horario", value: workshopInfo.schedule },
    { label: "Materiales", value: workshopInfo.materialsProvided.join(", ") },
    { label: "Modalidad", value: workshopInfo.modality },
    { label: "Lugar", value: "No especificado" },
  ];

  return (
    <div className="box-workshopsInfo">
      <div className="box-BackArrow">
        <Link to="/workshops" className="nombre-para-dar-Style">
          <BackArrow />
        </Link>
      </div>
      <div className="image-workshopsInfo">
        <img src={workshopInfo.picture} alt={workshopInfo.name} />
      </div>
      <div className="titule-workshopsInfo">
        <img src={rectanglePage28} alt="" />
        <div className="subtitule-workshopsInfo">
          <h4>{workshopInfo.name}</h4>
        </div>
      </div>
      <div className="informacion-workshopsInfo">
        <div className="box-firstText-workshopsInfo">
          <p>{workshopInfo.description}</p>
        </div>

        <div className="box-info-workshopsInfo">
          <div>
            <p className="colorTitule">Para el público general</p>
            <p className="colorText">
              *los niños menores de 8 años se recomienda que estén acompañados
              de un adulto
            </p>
          </div>
        </div>

        <div className="box-list-workshopsInfo">
          {infoItems.map((item) => (
            <p key={item.label}>
              <span className="colorTitule">{item.label}:</span>{" "}
              <span>{item.value}</span>
            </p>
          ))}
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
