import { useState } from 'react';
import backgroundImage_middle from '/img/image_middle_fraction.png';
import GoBackArrow from '../../../../../src/pages/components/backArrow';
import './policy.css';
import { Link } from 'react-router-dom';
import arrow from "/img/right-arrow.svg";

export default function EmailPolicy() {
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

    const data = [
        { 'checked': isChecked1, 'handle': handleCheckboxChange1, 'text': 'He leído y acepto la ', 'link': 'Política de privacidad*', 'href': '/#policy' },
        { 'checked': isChecked2, 'handle': handleCheckboxChange2, 'text': 'He leído y acepto los ', 'link': ' Términos y condiciones*', 'href': '/#terms' },
        { 'checked': isChecked3, 'handle': handleCheckboxChange3, 'text': 'Acepto que me envíen promociones y eventos a mi correo electrónico' }
    ]

    return (
        <div className="body-policy">
            <Link className='back-arrow-policy' to='/signup/email'><GoBackArrow /></Link>
            <div className="background-img-2">
                <img src={backgroundImage_middle} alt="img_background" />
            </div>
            <div className="container-policy">
                <div className="checkboxes-policy">
                    {data.map((policy, index) => {
                        return (
                            <div className='checkbox-container-policy' key={'k' + index}>
                                <input
                                    className='checkbox-policy-input'
                                    type="checkbox"
                                    checked={policy.checked}
                                    onChange={policy.handle}>
                                </input>
                                <span className="checkmark-policy"></span>
                                <label className="label-policy">
                                    {policy.text}<span className='space-policy-link'></span>{(policy.link) && <a href={policy.href} className='label-policy-link'>{policy.link}</a>}
                                </label>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="register-button-pol">
                    <img src={arrow} alt="right-arrow-policy" />
                    <Link to="/login" classname="linkme">
                        Registrarse
                    </Link>
                </div>
            </div>
            <div className="background-img-1">
                <img src={backgroundImage_middle} alt="img_background" />
            </div>
        </div>
    );
}