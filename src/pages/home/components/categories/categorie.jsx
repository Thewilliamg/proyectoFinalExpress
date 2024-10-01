import { useState, useEffect } from "react";
import textil from "@/img/textil-icon.svg";
import ceramic from "@/img/ceramics-icon.svg";
import goldsmith from "@/img/goldsmith-icon.svg";
import rockCarving from "@/img/rock-carving-icon.svg";
import woodCarving from "@/img/wood-carving.svg";
import embroidery from "@/img/embroidery-icon.svg";
import jewelry from "@/img/jewelry-icon.svg";
import tinsmith from "@/img/tinsmith-icon.svg";
import stamp from "@/img/stamping-icon.svg";
import paint from "@/img/paint-icon.svg";
import GoBackArrow from "../../../components/backArrow";
import Square from "@/img/square-beige-icon.svg";
import Cristo from "@/img/product-workshop1.png";
import lensicon from "@/img/search-icon.svg";
import filter from "@/img/filter-market.svg";
import { Link } from "react-router-dom";
import "./categorie.css";

export default function categories() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categorieId, setcategorieId] = useState([])
  const [arrayProducts, setarrayProducts] = useState([])
  const [products, setproducts] = useState()
  const dataCategories = [
    { icon: textil, id: "66fbeffac1f1e5ef5cd6b190",title: "Textileria", href: "textil" },
    { icon: ceramic, id: "66fbeffac1f1e5ef5cd6b191",title: "Ceramica", href: "ceramica" },
    { icon: goldsmith, id: "66fbeffac1f1e5ef5cd6b192",title: "Orfebreria", href: "orfebreria" },
    { icon: rockCarving, id: "66fbeffac1f1e5ef5cd6b193",title: "Talla en piedra", href: "talla_piedra" },
    { icon: woodCarving, id: "66fbeffac1f1e5ef5cd6b194",title: "Talla en madera", href: "talla_madera" },
    { icon: embroidery, id: "66fbeffac1f1e5ef5cd6b195",title: "Bordado", href: "bordado" },
    { icon: jewelry, id: "66fbeffac1f1e5ef5cd6b196",title: "Joyeria", href: "joyeria" },
    { icon: tinsmith, id: "66fbeffac1f1e5ef5cd6b197",title: "Hojalateria", href: "hojalateria" },
    { icon: stamp, id: "66fbeffac1f1e5ef5cd6b198",title: "Estampado", href: "estampado" },
    { icon: paint, id: "66fbeffac1f1e5ef5cd6b199",title: "Pintura tradicional", href: "pintura" },
  ];
  const workshops = [
    {
      name: "Arte Abedui Aller Escalante",
      location: "Cusco",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Asoc. de artesanos Tinihuy",
      location: "Huánuco",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Retablos Jesús Urbano",
      location: "Ayacucho",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Taller Awaq Ayllu",
      location: "Ayacucho",
      image: Cristo,
      price: "S/.350",
    },

    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Taller Sanabria Nuñez",
      location: "Junín",
      image: Cristo,
      price: "S/.350",
    },
    {
      name: "Lastenia Canayo",
      location: "Ucayali",
      image: Cristo,
      price: "S/.350",
    },
  ];

  useEffect(() => {
      fetch(`http://localhost:5001/api/products`)
      .then((res) => res.json())
      .then((data) => setarrayProducts(data))
      .catch((error) => {
        console.error("Hubo un error:" + error.message);
      });
      
  }, [])

  useEffect(() => { 
    console.log(arrayProducts);
    const fliteredCategories = arrayProducts.filter(item => item.categoryId === categorieId )
    setproducts(fliteredCategories)
  }, [categorieId])

  const handleCategoryClick = (index) => {
    setSelectedIndex(index); // Actualiza el índice seleccionado
    setcategorieId(dataCategories[index].id);

    
  };
  return (
    <article className="categorie-container">
      <div className="header-categorie">
        <Link to='/home'>
          <GoBackArrow />
        </Link>

        <img src={Square} className="img-header" />
        <div className="header-text-categorie">
          <h2>Categorias</h2>
        </div>
      </div>
      <div className="category-container">
        {dataCategories.map((item, index) => {
          return (
            <a
              key={"icon" + index}
              className={`box-category-home ${
                selectedIndex === index ? "active" : ""
              }`} // Clase condicional para la categoría seleccionada
              onClick={() => handleCategoryClick(index)} // Evento de clic para cambiar el estado
            >
              <img src={item.icon} alt={item.title} />
              <small>{item.title}</small>
            </a>
          );
        })}
      </div>
      <div className="search-container">
        <div className="searchers-container">
          <div className="lens">
            <img src={lensicon} alt="lens" />
          </div>
          <input
            type="text"
            className="searchbar-input"
            placeholder="Buscar producto o tienda..."
          />
        </div>
        <div className="filter-container">
          <img src={filter} className="filter-categorie" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {products?.map((workshop, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={workshop?.picture}
              alt={workshop?.name}
              className="w-full h-24 object-cover"
            />

            <div className="p-22">
              <h3 className="text-[#6B3E26] font-semibold text-sm">
                {workshop?.name}
              </h3>
              <p className="text-[#6B3E26] text-xs">{workshop?.price}</p>
              <p className="text-[#6B3E26] text-xs">{workshop?.marketName}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
