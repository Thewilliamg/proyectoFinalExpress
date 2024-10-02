import './categoryCarousel.css'
import { useEffect, useState } from 'react';
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

export default function CategoryCarosel({ data, onCategoryClick, selectedCategory }) {
  const [activeBorder, setActiveBorder] = useState(null);
  

  const dataCategories = [
    { icon: textil,  title: "Textileria", href: "textil" },
    { icon: ceramic,  title: "Ceramica", href: "ceramica" },
    { icon: goldsmith, title: "Orfebreria", href: "orfebreria" },
    { icon: rockCarving,  title: "Talla en piedra", href: "talla_piedra" },
    { icon: woodCarving, title: "Talla en madera", href: "talla_madera" },
    { icon: embroidery,  title: "Bordado", href: "bordado" },
    { icon: jewelry,  title: "Joyeria", href: "joyeria" },
    { icon: tinsmith,  title: "Hojalateria", href: "hojalateria" },
    { icon: stamp,  title: "Estampado", href: "estampado" },
    { icon: paint,  title: "Pintura tradicional", href: "pintura" },
  ];

  useEffect(() => {
    if (selectedCategory && data.length > 0) {
      const index = data.findIndex(cat => cat._id === selectedCategory);
      setActiveBorder(index);
    }
  }, [selectedCategory, data]);

  const handleItemClick = (index, categoryId) => {
    setActiveBorder(index);
    onCategoryClick(categoryId);
  };

  return (
    <div className="box-carruselItems" >
      {dataCategories.map((category, index) => (
        <div key={category._id} className={`subBox-carruselItems ${activeBorder === index ? 'borderBox-carruselItems' : ''}`} onClick={() => handleItemClick(index, category._id)}>
          <div className="icon-carruselItems">
            <div className="image-carruselItems">
                <img src={category.icon} alt={category} />
              </div>
            <span className="text-carruselItems">{category.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}