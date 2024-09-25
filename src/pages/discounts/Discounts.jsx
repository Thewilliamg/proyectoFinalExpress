import './discounts.css';
import { useState} from 'react';
import square from '@/img/square-brown-figure.svg'
import prueba from '@/img/imagenPrueba.svg'
import DiscountFigure1 from './components/DiscountFigure1';
import DiscountFigure2 from './components/DiscountFigure2';

export default function Discounts() {

    const discountItems = [
        {
          discount: "-30%",
          image: prueba,
          name: "Chalina Beige con flecos",
          Price: "S/.100 S/.65",
          artisan: "Asoc. de artesanos Tinkuy"
        },
        {
            discount: "Envio Gratis",
            image: prueba,
            name: "Chalina Beige con flecos",
            Price: "S/.100 S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "3x2",
            image: prueba,
            name: "Chalina Beige con flecos",
            Price: "S/.100 S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            Price: "S/.100 S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            Price: "S/.100 S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          }
        // Añade más objetos aquí para más items
      ];

    const [activeNavLink, setActiveNavLink] = useState(0);

    const handleNavLinkClick = (index) => {
        setActiveNavLink(index);
    };

    return (
        <div className='discount-container'> {/*IMPORTANTE: Modificar Solo dentro de esta vista*/}
            <div className='header-discount'>
                <div className='headerImg-discount'>
                    <img src={square} alt="" />
                </div>
                <div className='headerText-discount'>
                    <p className='colorp1-discount'>Descuentos y promociones</p>
                    <p className='colorp2-discount'>En cientos de artesanias</p>
                </div>
            </div>
            <nav className="carrusel-discount">
                <ul className="itemsCarrusel-discount">
                    {discountItems.map((_, index) => (
                        <li
                            key={index}
                            className={`navItem-discount ${index === activeNavLink ? 'majorNav-discount' : ''}`}
                        >
                            <button
                                className='navLink-discount'
                                onClick={() => handleNavLinkClick(index)}
                            >
                                Textileria
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='infoItem-discount'>
                <div className='containerInfo-discount'>
                    {discountItems.map((item, index) => (
                        <div className='subinfo-discount' key={index}>
                            {index % 2 === 0 ? (
                                <DiscountFigure1 text={item.discount}/>
                            ) : (
                                <DiscountFigure2 text={item.discount}/>
                            )}
                            <div className='imagenInfo-discount'>
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className='textInfo-discount'>
                                <p>{item.name}</p>
                                <p>{item.Price}</p>
                                <p>{item.artisan}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}