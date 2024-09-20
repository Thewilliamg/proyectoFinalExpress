import './SignUp.css'
import Facebook from '/public/img/facebookIcon.svg';
import Instagram from '/public/img/instagramIcon.svg';
import Gmail from '/public/img/gmailIcon.svg';
import Discord from '/public/img/discordIcon.svg';
import User from '/public/img/UserIcon.svg';

export default function SignUp() {
    return (
        <div className="signupBack">
                <div className="signupTitle">
                    <h1>Regístrate ahora y obtén <br/>
                    las mejores promociones <br/> 
                    en <span className='signupTitle_2'>artesanías colombianas</span>
                    </h1>
                </div>
                <div className="signupButtons">
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Facebook} alt="Facebook">
                            </img>
                            </span>
                            <p className='signup_p1'>Regístrate con <span className='signupBtnSpan2'>Facebook</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Instagram} alt="Instagram">
                            </img>
                            </span>
                            <p className='signup_p1'>Regístrate con <span className='signupBtnSpan2'>Instagram</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Gmail} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Regístrate con <span className='signupBtnSpan2'>Gmail</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Discord} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Regístrate con <span className='signupBtnSpan2'>Discord</span> </p>
                        </button>
                    </a>
                    <a href="#" className='signupAll'>
                        <button className='signup_btn2'>
                            <span className='signupBtnSpan'>
                                <img src= {User} alt="User">
                            </img>
                            </span>
                            <p className='signup_p1'>Regístrate con <span className='signupBtnSpan2'>Ruraq Maki</span> </p>
                        </button>
                    </a>
                </div>
                <div className="signupAccount">
                    <h1>
                        ¿Ya tienes una cuenta? <br/>   
                        <span className='signupAccount_span'>
                            <a href="#">
                                <h1>Inicia Sesión</h1>
                            </a>
                        </span>
                    </h1>
                </div>
        </div>
    )
}