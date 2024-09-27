import './popUp.css'
import { Link } from "react-router-dom";
import checkBoxTrue from '@/img/checkBoxTrue.svg';
import checkBoxFalse from '@/img/checkBoxFalse.svg';

export default function PopUp({ShowPopup}) {
    const data = false;
    const handleClosePopup = () => {
        ShowPopup(data);
    };

    return(
        <>
            <div className="overlay"></div>
            <div className="popUp-shop">
                <div className='text-popUp'>
                    <h4>¿Seguro de realizar la compra?</h4>
                </div>
                <div className='button-popUp'>
                    <button>
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