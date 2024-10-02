import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import Linkedin from '@/img/LinkedinIcon.svg';
import Gmail from '@/img/gmailIcon.svg';
import Discord from '@/img/discordIcon.svg';
import User from '@/img/UserIcon.svg';

export default function Login() {
    const navigate = useNavigate();

    const getUserId = localStorage.getItem('userId');
    if (getUserId) {
        const delay = 100
        setTimeout(() => {
            navigate('/home')
        }, delay);
    }

    const handleDiscordLogin = () => {
        window.location.href = 'http://localhost:5001/auth/discord';
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5001/auth/google/callback';
    };

    return (
        <div className="signupBack">
            <div className="signupTitle">
                <h1>Inicia sesión y  <br/>
                continua viendo <span className='signupTitle_2'>tus</span> <br/> 
                <span className='signupTitle_2'>artesanías favoritas</span>
                </h1>
            </div>
            <div className="signupButtons2">
                <a className='signupA2'>
                    <button className='signup_btn'>
                        <span className='signupBtnSpan'>
                            <img src={Linkedin} alt="Linkedin" />
                        </span>
                        <p className='signup_p1'>Inicia sesión con <span className='signupBtnSpan2'>Linkedin</span></p>
                    </button>
                </a>
                <a className='signupA2'>
                    <button className='signup_btn' onClick={handleDiscordLogin}>
                        <span className='signupBtnSpan'>
                            <img src={Discord} alt="Discord" />
                        </span>
                        <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Discord</span> </p>
                    </button>
                </a>
                <a className='signupA'>
                    <button className='signup_btn' onClick={handleGoogleLogin}>
                        <span className='signupBtnSpan'>
                            <img src={Gmail} alt="Gmail" />
                        </span>
                        <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Gmail</span></p>
                    </button>
                </a>
                <Link to="/login/user" className='signupAll2'>
                    <button className='signup_btn2'>
                        <span className='signupBtnSpan'>
                            <img src={User} alt="User" />
                        </span>
                        <p className='signup_p1'>Inicia sesión con tu cuenta de <span className='signupBtnSpan2'>ruraq maki</span> </p>
                    </button>
                </Link>
            </div>
        </div>
    )
}