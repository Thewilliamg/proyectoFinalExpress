import { useState } from 'react';
import backgroundImage_middle from '/img/image_middle_fraction.png';
import GoBackArrow from '../../../../../src/pages/components/backArrow';
import './policy.css';
import { Link } from 'react-router-dom';

export default function Policy() {
    const [isChecked1, setIsChecked1] = useState(false); //checkbox 1
    const [isChecked2, setIsChecked2] = useState(false); //checkbox 2
    const [isChecked3, setIsChecked3] = useState(false); //checkbox 3

    // Changing the boxes state
    const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
    };

    const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
    };

    const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
    };

    return (
    <div className="container-policy">
        <Link to='/signup/register'><GoBackArrow /></Link>
        <div className="checkboxes-policy">

            <label className="checkbox-container-policy">
                <input
                className='checkbox-policy-input'
                type="checkbox"
                checked={isChecked1}
                onChange={handleCheckboxChange1}
                />
                <span className="checkmark-policy"></span>
                He leído y acepto la Política de privacidad*
            </label>

            <label className="checkbox-container-policy">
                <input
                className='checkbox-policy-input'
                type="checkbox"
                checked={isChecked2}
                onChange={handleCheckboxChange2}
                />
                <span className="checkmark-policy"></span>
                He leído y acepto los Términos y condiciones*
            </label>
            <div>
            </div>
            <label className="checkbox-container-policy">
                <input
                className='checkbox-policy-input'
                type="checkbox"
                checked={isChecked3}
                onChange={handleCheckboxChange3}
                />
                <span className="checkmark-policy"></span>
                Acepto que me envíen promociones y eventos a mi correo
                electrónico
            </label>
        </div>
        <div className="register-button">
            <Link to="/login" className="linkme">
                Registrarse
            </Link>
        </div>
        <div className="background-img-1">
            <img src={backgroundImage_middle} alt="img_background" />
        </div>
    </div>
    );
}