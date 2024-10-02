import './User.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import GoBack from '../../components/backArrow';

export default function Login_User() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const getUserId = localStorage.getItem('userId');
    if (getUserId) {
        const delay = 100 //milliseconds
        setTimeout(() => {
            navigate('/home')
        }, delay);
    }

    const [credentials, setCredentials] = useState({
        identifier: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5001/api/login/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: credentials.identifier,
                    password: credentials.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('userId', data.user._id)
                navigate('/home');
            } else {
                console.error('Error response:', response);
                console.error('Error data:', data);
                setError(data.message || 'Error en el inicio de sesión');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            setError('Error de conexión');
        }
    };



    return (
        <div>
            <div className='userBackground'>
                <div className='userTop'>
                    <Link to="/login" className="br">
                        <GoBack />
                    </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='userForm'>
                <div className='userForm-centre'>
                    <div>
                        <h1>Nombre de usuario, celular o correo</h1>
                        <input
                            type='text'
                            name="identifier"
                            value={credentials.identifier}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <h1>Contraseña</h1>
                        <input
                            type='password'
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className='userForm-middle'>
                    <button type="submit"><p>Iniciar sesión</p></button>
                    <Link to="">Olvidaste tu contraseña</Link>
                    <Link to="/signup/register">Registrarse</Link>
                </div>
            </form>
            <div className='userBottom'></div>
        </div>
    );
}