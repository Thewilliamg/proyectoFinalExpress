import './SignUp.css'
import { Link } from "react-router-dom";
import Linkedin from '@/img/LinkedinIcon.svg';
import Gmail from '@/img/gmailIcon.svg';
import Discord from '@/img/discordIcon.svg';
import Email from '@/img/EmailIcon.svg';
import Phone from '@/img/PhoneIcon.svg';

export default function SignUp() {
    const handleDiscordLogin = () => {
        window.location.href = 'http://localhost:5001/auth/discord';
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5001/auth/google';
    };

    return (
        <div className="signupBack">
            <div className="signupTitle">
                <h1>Regístrate ahora y obtén <br/>
                las mejores promociones <br/> 
                en <span className='signupTitle_2'>artesanías colombianas</span>
                </h1>
            </div>
            <div className="signupButtons">
                <Link className='signupA'>
                    <button className='signup_btn'>
                        <span className='signupBtnSpan'>
                            <img src={Linkedin} alt="Linkedin" />
                        </span>
                        <p className='signup_p1'>Regístrate con <span className='signupBtnSpan2'>Linkedin</span></p>
                    </button>
                </Link>
                <Link className='signupA'>
                    <button className='signup_btn' onClick={handleDiscordLogin}>
                        <span className='signupBtnSpan'>
                            <img src={Discord} alt="Discord" />
                        </span>
                        <p className='signup_p2'>Regístrate con <span className='signupBtnSpan2'>Discord</span> </p>
                    </button>
                </Link>
                <Link className='signupA'>
                    <button className='signup_btn' onClick={handleGoogleLogin}>
                        <span className='signupBtnSpan'>
                            <img src={Gmail} alt="Gmail" />
                        </span>
                        <p className='signup_p2'>Regístrate con <span className='signupBtnSpan2'>Gmail</span></p>
                    </button>
                </Link>
                <Link className='signupAll' to="/signup/register">
                    <button className='signup_btn2'>
                        <span className='signupBtnSpan'>
                            <img src={Email} alt="User" />
                        </span>
                        <p className='signup_p1'>Regístrate con tu <span className='signupBtnSpan2'>correo</span> </p>
                    </button>
                </Link>
                <Link className='signupAll' to="/signup/email">
                    <button className='signup_btn2'>
                        <span className='signupBtnSpan'>
                            <img src={Phone} alt="User" />
                        </span>
                        <p className='signup_p1'>Regístrate con tu <span className='signupBtnSpan2'>celular</span> </p>
                    </button>
                </Link>
            </div>
            <div className="signupAccount">
                <h1>
                    ¿Ya tienes una cuenta?
                </h1>
            </div>
            <Link to="/login" className='signupAccount_link'>
                Inicia Sesión
            </Link>
        </div>
    )
}