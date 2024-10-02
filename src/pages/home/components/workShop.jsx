import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GoBackArrow from "../../components/backArrow";
import Title from "../storage/img/Rectangle-86.svg";
import Search from "../storage/img/Group-6.svg";

export default function Workshop() {
  const [busqueda, setBusqueda] = useState("");
  const [workShops, setWorkshops] = useState([]);
  const [filteredWorkShops, setFilteredWorkShops] = useState([]);

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    filterWorkshops();
  }, [busqueda, workShops]);

  const fetchWorkshops = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/workshops`);
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setWorkshops(data);
      setFilteredWorkShops(data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterWorkshops = () => {
    const filtered = workShops.filter((workshop) =>
      workshop.name.toLowerCase().includes(busqueda.toLowerCase()) ||
      workshop.description.toLowerCase().includes(busqueda.toLowerCase()) ||
      workshop.markets.name.toLowerCase().includes(busqueda.toLowerCase())
    );
    setFilteredWorkShops(filtered);
  };

  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    filterWorkshops();
  };

  return (
    <article className="main-container">
      <div className="container-arrow">
        <Link to="/home" className="arrow">
          <GoBackArrow />
        </Link>

        <img src={Title} className="img-title" alt="Title" />
        <div className="p-arrow">
          <p>Talleres </p>
          <p>educativos</p>
        </div>
      </div>
      <form className="container-search" onSubmit={manejarSubmit}>
        <div className="search">
          <img src={Search} className="img-search" alt="Search" />
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
        {filteredWorkShops.length > 0 ? (
          filteredWorkShops.map((workshop, index) => (
            <div className="card-items" key={index}>
              <div className="container-items">
                <div className="card-img">
                  <img
                    src={workshop.picture}
                    className="img-item"
                    alt={workshop.name}
                  />
                </div>
                <div className="item-container">
                  <div className="text-item-container">
                    <strong>
                      <p>{workshop.name}</p>
                    </strong>
                    <Link to={`/workshops/info/${workshop._id}`} className="workshop-letterp">
                      <p>Para el publico en general</p>
                    </Link>
                    <p>{workshop.description}</p>
                    <p>{workshop.markets.name}</p>
                  </div>
                  <button className="button-item">
                    <Link
                      to={`business-presentation/${workshop.markets._id}`}
                      className="text-button"
                    >
                      Entérate más sobre el taller aquí
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron talleres.</p>
        )}
      </div>
    </article>
  );
}