import './discounts.css';
import square from '/img/square-brown-figure.svg'
import prueba from '/img/imagenPrueba.svg'
import DiscountFigure from './components/DiscountFigure';

export default function Discounts() {

    const discountItems = [
        {
          discount: "-30%",
          image: prueba,
          name: "Chalina Beige con flecos",
          oldPrice: "S/.100",
          newPrice: "S/.65",
          artisan: "Asoc. de artesanos Tinkuy"
        },
        {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            oldPrice: "S/.100",
            newPrice: "S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            oldPrice: "S/.100",
            newPrice: "S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            oldPrice: "S/.100",
            newPrice: "S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          },
          {
            discount: "-30%",
            image: prueba,
            name: "Chalina Beige con flecos",
            oldPrice: "S/.100",
            newPrice: "S/.65",
            artisan: "Asoc. de artesanos Tinkuy"
          }
        // Añade más objetos aquí para más items
      ];

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
            <nav class="carrusel-discount">
                <ul class="itemsCarrusel-discount">
                    <li class="navItem-discount majorNav-discount"><button className='navLink-discount'>Textileria</button></li>
                    <li class="navItem-discount"><button className='navLink-discount'>Textileria</button></li>
                    <li class="navItem-discount"><button className='navLink-discount'>Textileria</button></li>
                    <li class="navItem-discount"><button className='navLink-discount'>Textileria</button></li>
                    <li class="navItem-discount"><button className='navLink-discount'>Textileria</button></li>
                </ul>
            </nav>
            <div className='infoItem-discount'>
                <div className='containerInfo-discount'>
                    {discountItems.map((item, index) => (
                    <div className='subinfo-discount' key={index}>
                        <DiscountFigure text={item.discount}/>
                        <div className='imagenInfo-discount'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='textInfo-discount'>
                            <p>{item.name}</p>
                            <p>{item.oldPrice} {item.newPrice}</p>
                            <p>{item.artisan}</p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
        </div>
    )
}