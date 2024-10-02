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
import lensicon from "@/img/search-icon.svg";
import filter from "@/img/filter-market.svg";
import { Link } from "react-router-dom";
import "./categorie.css";

export default function Categories() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [categorieId, setCategorieId] = useState(null);
  const [arrayProducts, setArrayProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dataCategories = [
    { icon: textil, id: "66fbeffac1f1e5ef5cd6b190", title: "Textileria", href: "textil" },
    { icon: ceramic, id: "66fbeffac1f1e5ef5cd6b191", title: "Ceramica", href: "ceramica" },
    { icon: goldsmith, id: "66fbeffac1f1e5ef5cd6b192", title: "Orfebreria", href: "orfebreria" },
    { icon: rockCarving, id: "66fbeffac1f1e5ef5cd6b193", title: "Talla en piedra", href: "talla_piedra" },
    { icon: woodCarving, id: "66fbeffac1f1e5ef5cd6b194", title: "Talla en madera", href: "talla_madera" },
    { icon: embroidery, id: "66fbeffac1f1e5ef5cd6b195", title: "Bordado", href: "bordado" },
    { icon: jewelry, id: "66fbeffac1f1e5ef5cd6b196", title: "Joyeria", href: "joyeria" },
    { icon: tinsmith, id: "66fbeffac1f1e5ef5cd6b197", title: "Hojalateria", href: "hojalateria" },
    { icon: stamp, id: "66fbeffac1f1e5ef5cd6b198", title: "Estampado", href: "estampado" },
    { icon: paint, id: "66fbeffac1f1e5ef5cd6b199", title: "Pintura tradicional", href: "pintura" },
  ];

  useEffect(() => {
    fetch(`http://localhost:5001/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setArrayProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error("Hubo un error:" + error.message);
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [categorieId, searchTerm, arrayProducts]);

  const filterProducts = () => {
    let results = arrayProducts;

    // Filter by category if a category is selected
    if (categorieId) {
      results = results.filter(item => item.categoryId === categorieId);
    }

    // Filter by search term
    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      results = results.filter(product =>
        product.name.toLowerCase().includes(lowercasedTerm) ||
        product.marketName.toLowerCase().includes(lowercasedTerm)
      );
    }

    setFilteredProducts(results);
  };

  const handleCategoryClick = (index) => {
    setSelectedIndex(index);
    setCategorieId(dataCategories[index].id);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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
        {dataCategories.map((item, index) => (
          <a
            key={"icon" + index}
            className={`box-category-home ${selectedIndex === index ? "active" : ""}`}
            onClick={() => handleCategoryClick(index)}
          >
            <img src={item.icon} alt={item.title} />
            <small>{item.title}</small>
          </a>
        ))}
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
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-container">
          <img src={filter} className="filter-categorie" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product?.picture}
              alt={product?.name}
              className="w-full h-24 object-cover"
            />
            <div className="p-22">
              <h3 className="text-[#6B3E26] font-semibold text-sm">
                {product?.name}
              </h3>
              <p className="text-[#6B3E26] text-xs">{product?.price}</p>
              <p className="text-[#6B3E26] text-xs">{product?.marketName}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}