import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GoBackArrow from "../../components/backArrow";
import arrow from "@/img/right-arrow.svg";
import registerBackground from '@/img/image_middle_fraction.png'
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    sex: '',
    birthDate: { day: '', month: '', year: '' }
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['day', 'month', 'year'].includes(name)) {
      setFormData(prevState => ({
        ...prevState,
        birthDate: { ...prevState.birthDate, [name]: value }
      }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.email !== formData.confirmEmail) {
      setError('Los correos electrónicos no coinciden');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    const objectDate = {
          name: formData.username,
          email: formData.email,
          password: formData.password,
          gender: formData.sex,
          birthDate: `${formData.birthDate.year}-${formData.birthDate.month}-${formData.birthDate.day}`
    }

    localStorage.setItem('data', JSON.stringify(objectDate));
    navigate('/signup/register/policy'); // Redirige al usuario después del registro 
  };

  return (
    <div className="register-container">
      <img className="registerBackground" src={registerBackground} alt="" />
      <div className="register-header">
        <Link to="/signup" className="nombre-para-dar-Style">
          <GoBackArrow />
        </Link>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label className="name-box" htmlFor="username">Nombre de usuario*</label>
          <p className="hint">*Crea un nombre de usuario de mínimo 5 y máximo de 12 caracteres</p>
          <input
            type="text"
            id="username"
            name="username"
            required
            minLength="5"
            maxLength="12"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="email">Correo electrónico*</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="confirm-email">Confirma tu correo*</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            required
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="password">Contraseña*</label>
          <p className="hint2">Recuerda crear una contraseña difícil de adivinar</p>
          <input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="confirm-password">Confirma tu contraseña*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="name-box" htmlFor="sex">Sexo</label>
          <select 
            className="sex" 
            id="sex" 
            name="sex"
            value={formData.sex}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="form-group">
          <label className="name-box">Fecha de nacimiento</label>
          <div className="date-select">
            <select name="day" value={formData.birthDate.day} onChange={handleChange}>
              <option value="">DD</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
            </select>
            <select name="month" value={formData.birthDate.month} onChange={handleChange}>
              <option value="">MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
            </select>
            <select name="year" value={formData.birthDate.year} onChange={handleChange}>
              <option value="">YYYY</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>

        <button type="submit" className="from-link">
          <img src={arrow} alt="right-arrow" />
            Continuar
          {/* <Link to="/signup/register/policy" className="nombre-para-dar-Style"> */}
          {/* </Link> */}
        </button>
      </form>
    </div>
  );
}