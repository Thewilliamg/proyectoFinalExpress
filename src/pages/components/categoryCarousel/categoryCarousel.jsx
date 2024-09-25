import './categoryCarousel.css'
import { useState} from 'react';

export default function CategoryCarosel({ data, image }) {
  const [activeBorder, setActiveBorder] = useState(null);

  const handleItemClick = (index) => {
    setActiveBorder(index);
  };

  return (
    <div className="box-carruselItems" >
      {data.map((name, index) => (
        <div
          key={index}
          className={`subBox-carruselItems ${activeBorder === index ? 'borderBox-carruselItems' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <div className="icon-carruselItems">
            <div className="image-carruselItems">
              <img src={image} alt={name} />
            </div>
            <span className="text-carruselItems">{name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}