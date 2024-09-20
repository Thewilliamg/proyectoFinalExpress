import './Login.css'
import Facebook from '/public/img/facebookIcon.svg';
import Instagram from '/public/img/instagramIcon.svg';
import Gmail from '/public/img/gmailIcon.svg';
import Discord from '/public/img/discordIcon.svg';
import User from '/public/img/UserIcon.svg';

export default function Login(){
    return(
        <div className="signupBack">
                <div className="signupTitle">
                    <h1>Inicia Sesión y<br/>
                    continúa viendo <span className='signupTitle_2'>tus</span><br/> 
                    <span className='signupTitle_2'>artesanías favoritas</span>
                    </h1>
                </div>
                <div className="signupButtons">
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Facebook} alt="Facebook">
                            </img>
                            </span>
                            <p className='signup_p1'>Inicia sesión con <span className='signupBtnSpan2'>Facebook</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Instagram} alt="Instagram">
                            </img>
                            </span>
                            <p className='signup_p1'>Inicia sesión con <span className='signupBtnSpan2'>Instagram</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Gmail} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Gmail</span></p>
                        </button>
                    </a>
                    <a href="#" className='signupA'>
                        <button className='signup_btn'>
                            <span className='signupBtnSpan'>
                                <img src= {Discord} alt="Gmail">
                            </img>
                            </span>
                            <p className='signup_p2'>Inicia sesión con <span className='signupBtnSpan2'>Discord</span> </p>
                        </button>
                    </a>
                    <a href="#" className='signupAll'>
                        <button className='signup_btn2'>
                            <span className='signupBtnSpan'>
                                <img src= {User} alt="User">
                            </img>
                            </span>
                            <p className='signup_p1'>Inicia sesión con <span className='signupBtnSpan2'>Ruraq Maki</span> </p>
                        </button>
                    </a>
                </div>
        </div>
    )
}