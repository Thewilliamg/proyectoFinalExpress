import './popUp.css'
import { Link } from "react-router-dom";
import checkBoxTrue from '@/img/checkBoxTrue.svg';
import checkBoxFalse from '@/img/checkBoxFalse.svg';

export default function PopUp({ ShowPopup, items, userId, totalSum }) {
    const show = false;
    const productsArray = [];
    const handleClosePopup = () => {
        ShowPopup(show);
    };

    function handleButton() {
        items.forEach((item) => {
            const orderItem = {
                productId: item.productId,
                quantity: item.quantity,
                purchasePrice: item.price
            };
            productsArray.push(orderItem);
        })

        const purchaseOrder = {
            userId: userId,
            total: totalSum,
            products: productsArray
        }

        fetch(`http://localhost:5001/api/new-shop`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseOrder)
            }
        )
            .catch((error) => {
                console.error('Hubo un error:' + error.message)
            });
    }

    return (
        <>
            <div className="overlay"></div>
            <div className="popUp-shop">
                <div className='text-popUp'>
                    <h4>¿Seguro de realizar la compra?</h4>
                </div>
                <div className='button-popUp'>
                    <button onClick={handleButton}>
                        <Link to="/shop/confirmation" className='link-popUp'>
                            <img src={checkBoxTrue} alt="" />
                            Si
                        </Link>
                    </button>
                    <button onClick={handleClosePopup}>
                        <img src={checkBoxFalse} alt="" />
                        No
                    </button>
                </div>
            </div>
        </>
    )
}