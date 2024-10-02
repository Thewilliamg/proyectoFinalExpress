import "./favorites.css";
import { Link } from "react-router-dom";
import GoBackArrow from "../../../components/backArrow";
import CategoryCarosel from "../../../components/categoryCarousel/categoryCarousel";
import BoxArticle from "./components/BoxArticle";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategory();
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      fetchFavorites();
    }
  }, [selectedCategory]);

  const fetchCategory = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/discounts/category');
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      setCategory(data.data);
      
      // Seleccionar la primera categoría por defecto
      if (data.data.length > 0) {
        setSelectedCategory(data.data[0]._id);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const id = localStorage.getItem('userId')
      const response = await fetch(`http://localhost:5001/api/favorites/${id}`);
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      const data = await response.json();
      
      const filteredFavorites = data.data.filter(item => 
        item.productos.categoryId === selectedCategory
      );

      setFavorites(filteredFavorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="container-favorites">
      <div className="box-backArrow">
        <Link to="/home" className="br">
          <GoBackArrow />
        </Link>
      </div>
      <div className="box-menuTitule">
        <svg width="70" height="70" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="169.706" height="169.706" rx="7" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)" fill="#703A31" fillOpacity="0.38"/>
        </svg>
        <h5 className="menuTitule-h5">
          Tus artesanías <br /> favoritas
        </h5>
      </div>
      {category.length > 0 && (
        <CategoryCarosel 
          data={category}
          onCategoryClick={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
      )}
      {favorites.length > 0 ? (
        <BoxArticle
          objecto={favorites.map((item) => ({
            imagen: item.productos.picture,
            texto1: item.productos.name,
            texto2: item.productos.price,
            texto3: item.market.name,
            productId: item.productos._id
          }))}
        />
      ) : (
        <p>No hay favoritos para mostrar en esta categoría.</p>
      )}
    </div>
  );
}