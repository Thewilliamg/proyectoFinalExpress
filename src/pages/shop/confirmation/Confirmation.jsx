import './Confirmation.css'
import { Link } from "react-router-dom";
import ConfirmationIcon from '/public/img/ConfirmationIcon.svg';
import Separator from '/public/img/SeparatorIcon.svg';

export default function Confirmation(){
    return (
        <div className='confirmationAll'>
            <div className='confirmationTop'>
                <div className='confirmationTop_img'>
                    <img src={ConfirmationIcon}></img>
                </div>
            </div>
            <div className='confirmationTitle'>
                <div className='confirmationTitle_h1'>
                    <h1>
                        !Compra realizada con exito!
                    </h1>
                </div>
            </div>
            <div className='Separation'>
                <div className='SeparationImg'>
                    <img src={Separator} alt='Separator'></img>
                </div>
            </div>
            <div className='confirmationContent'>
                <div className='confirmationContent_h1'>
                    <h1>
                        Gracias por apoyar a los artesanos <br/>
                        colombianos, puedes revisar tu compra <br/>
                        en la opción de
                    </h1>
                </div>
            </div>
            <div className='confirmationCompras'>
                <div className='confirmationCompras_button'>
                    <Link to={'/shop'}>
                        Compras
                    </Link>
                </div>
            </div>
            <div className='Separation2'>
                <div className='SeparationImg2'>
                    <img src={Separator} alt='Separator'></img>
                </div>
            </div>
            <div className='confirmationText2'>
                <div className='confirmationText2_content'>
                    <h1>
                        Vincula tu correo para recibir más detalles <br/>
                        sobre tus compras realizadas
                    </h1>
                </div>
            </div>
            <div className='confirmationIn_box'>
                <div className='confirmationInput'>
                    <input placeholder='Añadir correo electrónico'></input>
                </div>
            </div>
            <div className='confirmationReturn'>
                <div className='confirmationReturn_A'>
                    <Link to={'/'}>
                        Regresar al inicio
                    </Link>
                </div>
            </div>
        </div>
    )
}