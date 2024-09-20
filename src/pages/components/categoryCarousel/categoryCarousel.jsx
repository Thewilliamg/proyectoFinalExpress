import './categoryCarousel.css'

export default function CategoryCarosel({ data, image }) {
  return (
    <div className="box-carruselItems">
      {data.map((name, index) => {
        return (
          <div className="subBox-carruselItems" key={index}>
            <div className="icon-carruselItems">
              <div className="image-carruselItems">
                <img src={image} alt={name} />
              </div>
              <span className="text-carruselItems">{name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}