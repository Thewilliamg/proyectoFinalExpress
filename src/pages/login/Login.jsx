import './Login.css'
import { Link } from "react-router-dom";
import Linkedin from '/public/img/LinkedinIcon.svg';
import Gmail from '/public/img/gmailIcon.svg';
import Discord from '/public/img/discordIcon.svg';
import User from '/public/img/UserIcon.svg';

export default function SignUp() {
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
                                <img src= {Linkedin} alt="Linkdein">
                            </img>
                            </span>
                            <p className='signup_p1'>Inicia sesión con <span className='signupBtnSpan2'>Linkedin</span></p>
                        </button>
                    </a>
                    <a className='signupA2'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Discord} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Discord</span> </p>
                        </button>
                    </a>
                    <a className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Gmail} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Gmail</span></p>
                        </button>
                    </a>
                    <Link to="/login/user" className='signupAll2'>
                        <button className='signup_btn2'>
                            <span className='signupBtnSpan'>
                                <img src= {User} alt="User">
                            </img>
                            </span>
                            <p className='signup_p1'>Inicia sesión con tu cuenta de <span className='signupBtnSpan2'>ruraq maki</span> </p>
                        </button>
                    </Link>
                </div>
        </div>
    )
}