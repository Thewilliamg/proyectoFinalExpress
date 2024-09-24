import './User.css'
import { Link } from "react-router-dom";
import GoBack from '../../components/backArrow'

export default function Login_User(){
    return(
        <div>
            <div className='userBackground'>
                <div className='userTop'>
                    <Link to="/login" className="br">
                            <GoBack/>
                    </Link>
                </div>
            </div>
            <div className='userForm'>
                <div className='userForm-centre'>
                    <h1>
                        Nombre de usuario, celular o correo
                    </h1>
                    <input type='text'></input>
                    <h1>
                        Contraseña
                    </h1>
                    <input type='text'></input>
                </div>
                <div className='userForm-middle'>
                    <Link to="/home">
                        Iniciar sesión
                    </Link>
                    <Link to="">
                        Olvidaste tu contraseña
                    </Link>
                    <Link to="/signup/register">
                        Registrarse
                    </Link>
                </div>
            </div>
            <div className='userBottom'>
            </div>
        </div>
    )
}