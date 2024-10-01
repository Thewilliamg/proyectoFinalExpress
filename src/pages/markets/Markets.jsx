// import Cristo from "@/img/papitoCristo.svg";
import Filter from "@/img/filter-market.svg";
import square from "@/img/square-brown-figure.svg";
import { Link } from "react-router-dom";
import "./markets.css";
import { useState, useEffect } from 'react';

export default function Markets() {
  const [workshops, setWorkshops] = useState();
  useEffect(() => {
    fetch(`http://localhost:5001/api/markets`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )
      .then(res => res.json())
      .then((response) => setWorkshops(response))
      .catch((error) => {
        console.error('Hubo un error:' + error.message)
      });
  }, [])

  return (
    <article className="markets-container">
      <div className="header-discount">
        <div className="headerImg-discount">
          <img src={square} alt="" />
        </div>
        <div className="headerText-discount">
          <p className="colorp1-discount">Talleres y tiendas artesanales</p>
          <p className="colorp2-discount">
            Tienda de artesanias de todas partes del Peru
          </p>
        </div>
        <img src={Filter} className="filter-market" />
      </div>
      <div className="grids grid-cols-2 gap-4">
        {workshops?.map((workshop, index) => (
          <Link key={workshop.name} to={`/markets/${workshop._id}/products`}>
            <div
              // key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-2">
                <h3 className="text-[#6B3E26] font-semibold text-sm">
                  {workshop.name}
                </h3>
                <p className="text-[#6B3E26] text-xs">{workshop.location}</p>
              </div>
              <img
                src={workshop.picture}
                alt='workshop'
                className="w-full h-24 object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
