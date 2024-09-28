import './discounts.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import square from '@/img/square-brown-figure.svg'
import DiscountFigure1 from './components/DiscountFigure1';
import DiscountFigure2 from './components/DiscountFigure2';

export default function Discounts() {
    const [categories, setCategories] = useState([]);
    const [activeNavLink, setActiveNavLink] = useState(0);
    const [discountItems, setDiscountItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories();
        fetchDiscountItems();
    }, []);

    useEffect(() => {
        filterItemsByCategory();
    }, [activeNavLink, discountItems]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/discounts/category');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setCategories(data.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchDiscountItems = async () => {
        try {
            const response = await fetch('http://localhost:5001/api/discounts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDiscountItems(data.data);
        } catch (error) {
            console.error('Error fetching discount items:', error);
        }
    };

    const handleNavLinkClick = (index) => {
        setActiveNavLink(index);
    };

    const filterItemsByCategory = () => {
        if (categories.length > 0 && discountItems.length > 0) {
            const activeCategoryName = categories[activeNavLink].name;
            const filtered = discountItems.filter(item => item.categoryData.name === activeCategoryName);
            setFilteredItems(filtered);
        }
    };

    const handleProductClick = (productId) => {
        navigate(`/discounts/product/${productId}`);
    };

    return (
        <div className='discount-container'>
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
                    {categories.map((category, index) => (
                        <li key={index} className={`navItem-discount ${index === activeNavLink ? 'majorNav-discount' : ''}`} >
                            <button className='navLink-discount' onClick={() => handleNavLinkClick(index)}>
                                {category.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='infoItem-discount'>
                <div className='containerInfo-discount'>
                    {filteredItems.map((item, index) => (
                        <div className='subinfo-discount' key={index} onClick={() => handleProductClick(item._id)} style={{ cursor: 'pointer' }}>
                            {index % 2 === 0 ? (
                                <DiscountFigure1 text={`${item.discount}`}/>
                            ) : (
                                <DiscountFigure2 text={`${item.discount}`}/>
                            )}
                            <div className='imagenInfo-discount'>
                                <img src={item.picture} alt={item.name} />
                            </div>
                            <div className='textInfo-discount'>
                                <p>{item.name}</p>
                                <p>S/.{item.price}</p>
                                <p>{item.marketData.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}