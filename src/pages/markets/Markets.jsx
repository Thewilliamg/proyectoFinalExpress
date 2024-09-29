import Cristo from "@/img/papitoCristo.svg";
import Filter from "@/img/filter-market.svg";
import square from "@/img/square-brown-figure.svg";
import { Link } from "react-router-dom";
import "./markets.css";

export default function Markets() {
  const workshops = [
    {
      name: "Arte Abedui Aller Escalante",
      location: "Cusco",
      image: Cristo,
    },
    {
      name: "Asoc. de artesanos Tinihuy",
      location: "Huánuco",
      image: Cristo,
    },
    {
      name: "Retablos Jesús Urbano",
      location: "Ayacucho",
      image: Cristo,
    },
    {
      name: "Taller Awaq Ayllu",
      location: "Ayacucho",
      image: Cristo,
    },

    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
    },
    {
      name: "Lastenia Canayo",
      location: "Ucayali",
      image: Cristo,
    },
  ];

  return (
    <article className="markets-container">
      <div className="header-discount">
        <div className="headerImg-discount">
          <img src={square} alt="" />
        </div>
        <div className="headerText-discount">
          <p className="colorp1-discount">Talleres y tiendas artesanale</p>
          <p className="colorp2-discount">
            Tienda de artesanias de todas partes del Peru
          </p>
        </div>
        <img src={Filter} className="filter-market" />
      </div>
      <div className="grids grid-cols-2 gap-4">
        {workshops.map((workshop, index) => (
          <Link to='/markets/products'>
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-2">
                <h3 className="text-[#6B3E26] font-semibold text-sm">
                  {workshop.name}
                </h3>
                <p className="text-[#6B3E26] text-xs">{workshop.location}</p>
              </div>
              <img
                src={workshop.image}
                alt={workshop.name}
                className="w-full h-24 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
