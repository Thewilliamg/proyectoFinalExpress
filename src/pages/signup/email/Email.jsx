import GoBackArrow from "../../components/backArrow";
// import arrow from "/img/right-arrow.svg";
// import registerBackground from '/img/image_middle_fraction.png';
import arrow from "/img/right-arrow.svg";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './email.css'

export default function SignupEmail() {

    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        confirmPhone: '',
        password: '',
        confirmPassword: '',
        sex: '',
        birthDay: '',
        birthMonth: '',
        birthYear: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log(formData);
      };

    return (
        <div className="containerEmail">
            <div className="form-header">
                <Link to="/signup"><GoBackArrow/></Link>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-groupEmail">
                    <label className="titule-email" htmlFor="username">Nombre de usuario*</label>
                    <div className="hint">*Crea un nombre de usuario de mínimo 5 y máximo de 12 caracteres</div>
                    <input className="color-inputEmail igualDos" type="text" id="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-groupPhone">
                    <label className="titule-email spaceLetter" htmlFor="phone">Número de celular*</label>
                    <select className="country-code color-inputEmail igualDos">
                        <option value="+51">+51</option>
                    </select>
                    <input type="tel" id="phone" className="phone-input color-inputEmail igualDos" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-groupPhone">
                    <label className="titule-email spaceLetter" htmlFor="confirm-phone">Confirma tu celular*</label>
                    <select className="country-code color-inputEmail igualDos">
                    <option value="+51">+51</option>
                    </select>
                    <input type="tel" id="confirmPhone" className="phone-input color-inputEmail igualDos" value={formData.confirmPhone} onChange={handleChange} required />
                </div>
                <div className="form-groupEmail">
                    <label className="titule-email" htmlFor="password">Contraseña*</label>
                    <div className="hint">Recuerda crear una contraseña difícil de adivinar</div>
                    <input className="color-inputEmail igualDos" type="password" id="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-groupEmail">
                    <label className="titule-email spaceLetter" htmlFor="confirm-password">Confirma tu contraseña*</label>
                    <input className="color-inputEmail igualDos" type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div className="form-groupEmail">
                    <label className="titule-email spaceLetter" htmlFor="sex">Sexo</label>
                    <select className="color-inputEmail igualDos" id="sex" value={formData.sex} onChange={handleChange}>
                    <option value="">Selecciona</option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                    <option value="other">Otro</option>
                    </select>
                </div>
                <div className="form-groupEmail">
                    <label className="titule-email spaceLetter">Fecha de nacimiento</label>
                    <div className="opciones-dayEmail">
                        <select className="color-inputEmail igualDos" id="birthDay" style={{ width: '17%', marginRight: '2%' }} value={formData.birthDay} onChange={handleChange}>
                            <option>DD</option>
                        </select>
                        <select className="color-inputEmail igualDos" id="birthMonth" style={{ width: '17%', marginRight: '2%' }} value={formData.birthMonth} onChange={handleChange}>
                            <option>MM</option>
                        </select>
                        <select className="color-inputEmail igualDos" id="birthYear" style={{ width: '22%' }} value={formData.birthYear} onChange={handleChange}>
                            <option>YYYY</option>
                        </select>
                    </div>
                </div>
                <div className="from-link">
                    <img src={arrow} alt="right-arrow" />
                    <Link to="/signup/email/policy" classname="nombre-para-dar-Style">
                        Continuar
                    </Link>
                </div>
            </form>
        </div>
    );
}