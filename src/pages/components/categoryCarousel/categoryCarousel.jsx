import './categoryCarousel.css'
import { useEffect, useState } from 'react';

export default function CategoryCarosel({ data, onCategoryClick, selectedCategory }) {
  const [activeBorder, setActiveBorder] = useState(null);

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
      {data.map((category, index) => (
        <div key={category._id} className={`subBox-carruselItems ${activeBorder === index ? 'borderBox-carruselItems' : ''}`} onClick={() => handleItemClick(index, category._id)}>
          <div className="icon-carruselItems">
            <div className="image-carruselItems">
                <img src={category.picture} alt={category} />
              </div>
            <span className="text-carruselItems">{category.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}