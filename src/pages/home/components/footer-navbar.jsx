import "./footer-navbar.css";
import discountsicon from '/img/navbar-discounts.svg';
import homeicon from '/img/navbar-home.icon.svg';
import marketicon from '/img/navbar-market-icon.svg';
import storeicon from '/img/navbar-store-icon.svg';
import usericon from '/img/navbar-userprofile.svg';
import { NavLink } from 'react-router-dom';

export default function FooterNavbar() {
    return (
        <div className="footer-container">
            <div className="icons-home-container">
                <NavLink className={({isActive}) => (isActive ? 'icons-home active' : 'icons-home')} to='/markets' >
                    <img src={marketicon} alt="marketico" />
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'icons-home active' : 'icons-home')} to='/discounts' >
                    <img src={discountsicon} alt="dscountico" />
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'icons-home active' : 'icons-home')} to='/'>
                    <img src={homeicon} alt="homeico" />
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'icons-home active' : 'icons-home')} to='/shop'>
                    <img src={storeicon} alt="storeico" />
                </NavLink>
                <NavLink className={({isActive}) => (isActive ? 'icons-home active' : 'icons-home')} to='/user' >
                    <img src={usericon} alt="userprofileicon" />
                </NavLink>
            </div>
        </div>
    )
}