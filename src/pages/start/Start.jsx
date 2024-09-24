import './Start.css';
import ruraq_logo from '/public/img/ruraq-logo.svg'
export default function User() {
    
    return (
        <div className='startBack' style={{backgroundImage: `url('../public/img/start-background.svg')`}}>
            <div className='startLogo'>
                <img src= {ruraq_logo}></img>
            </div>
        </div>
    )
}