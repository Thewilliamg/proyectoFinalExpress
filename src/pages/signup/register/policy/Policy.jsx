import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage_middle from '@/img/image_middle_fraction.png';
import GoBackArrow from '../../../../../src/pages/components/backArrow';
import './policy.css';
import arrow from "@/img/right-arrow.svg";

export default function Policy() {
    const [isChecked1, setIsChecked1] = useState(false); // Checkbox 1
    const [isChecked2, setIsChecked2] = useState(false); // Checkbox 2
    const [isChecked3, setIsChecked3] = useState(false); // Checkbox 3
    const [error, setError] = useState(null); // Estado para errores
    const [isLoading, setIsLoading] = useState(false); // Estado para carga

    const navigate = useNavigate();

    // Funciones para manejar cambios en las casillas de verificación
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
    ];

    // Función para manejar el registro
    const handleRegister = async () => {
        // Verificar que todas las casillas necesarias estén marcadas
        if (!isChecked1 || !isChecked2) {
            setError('Debes aceptar la Política de privacidad y los Términos y condiciones para registrarte.');
            return;
        }

        setIsLoading(true);
        setError(null); // Resetear errores previos

        const dataUsuario = JSON.parse(localStorage.getItem('data'));

        // Asegúrate de que dataUsuario tenga la estructura correcta
        if (!dataUsuario) {
            setError('No se encontraron datos de usuario. Por favor, regístrate nuevamente.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5001/api/signup/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataUsuario),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al registrar el usuario');
            }

            const data = await response.json();
            console.log("dataUser: ", data);
            localStorage.removeItem('data');
            navigate('/login'); // Redirige al usuario después del registro exitoso
        } catch (error) {
            setError(error.message || 'Error al registrar el usuario');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="body-policy">
            <a className='back-arrow-policy' href='/signup/register'><GoBackArrow /></a>
            <div className="background-img-2">
                <img src={backgroundImage_middle} alt="img_background" />
            </div>
            <div className="container-policy">
                <div className="checkboxes-policy">
                    {data.map((policy, index) => (
                        <div className='checkbox-container-policy' key={'k' + index}>
                            <input
                                className='checkbox-policy-input'
                                type="checkbox"
                                checked={policy.checked}
                                onChange={policy.handle}>
                            </input>
                            <span className="checkmark-policy"></span>
                            <label className="label-policy">
                                {policy.text}
                                {policy.link && (
                                    <>
                                        <span className='space-policy-link'></span>
                                        <a href={policy.href} className='label-policy-link'>{policy.link}</a>
                                    </>
                                )}
                            </label>
                        </div>
                    ))}
                </div>
                {/* Mostrar mensaje de error si existe */}
                {error && <div className="error-message">{error}</div>}
                <div className="register-button-pol">
                    <img src={arrow} alt="right-arrow-policy" />
                    <button
                        className="register-button"
                        onClick={handleRegister}
                        disabled={isLoading}
                    >
                        <p>{isLoading ? 'Registrando...' : 'Registrarse'}</p>
                    </button>
                </div>
            </div>
            <div className="background-img-1">
                <img src={backgroundImage_middle} alt="img_background" />
            </div>
        </div>
    );
}