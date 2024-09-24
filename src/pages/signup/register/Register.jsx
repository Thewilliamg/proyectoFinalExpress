import GoBackArrow from "../../components/backArrow";
import arrow from "/img/right-arrow.svg";
import registerBackground from '/img/image_middle_fraction.png'
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-container"> 
        <img className="registerBackground" src={registerBackground} alt="" /> 
      <div className="register-header">
        <Link to="/signup" className="nombre-para-dar-Style">
          <GoBackArrow />
        </Link>
      </div>
      <form className="register-form">
        <div className="form-group">
          <label className="name-box" htmlFor="username">
            Nombre de usuario*
          </label>
          <p className="hint">
            *Crea un nombre de usuario de mínimo 5 y máximo de 12 caracteres
          </p>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength="5"
            maxLength="12"
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="email">
            Correo electrónico*
          </label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="confirm-email">
            Confirma tu correo*
          </label>
          <input
            type="email"
            id="confirm-email"
            name="confirm-email"
            required
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="password">
            Contraseña*
          </label>
          <p className="hint2">
            Recuerda crear una contraseña difícil de adivinar
          </p>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="confirm-password">
            Confirma tu contraseña*
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="sex">
            Sexo
          </label>
          <select className="sex" id="sex" name="sex">
            <option value=""></option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label className="name-box">Fecha de nacimiento</label>
          <div className="date-select">
            <select name="day">
              <option value="">DD</option>
            </select>
            <select name="month">
              <option value="">MM</option>
            </select>
            <select name="year">
              <option value="">YYYY</option>
            </select>
          </div>
        </div>

        <div className="from-link">
          <img src={arrow} alt="right-arrow" />
          <Link to="/signup/register/policy" className="nombre-para-dar-Style">
            Continuar
          </Link>
        </div>
      </form>
    </div>
  );
}