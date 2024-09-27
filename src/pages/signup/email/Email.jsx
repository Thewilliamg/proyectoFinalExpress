import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import GoBackArrow from "../../components/backArrow";
import arrow from "@/img/right-arrow.svg";
import "./email.css";

export default function SignupEmail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    confirmPhone: "",
    password: "",
    confirmPassword: "",
    sex: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validaciones
    if (formData.phone !== formData.confirmPhone) {
      setError("Los números de celular no coinciden.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    // Validación adicional del número de teléfono
    const phonePattern = /^3\d{9}$/; // Patrón específico para números móviles colombianos
    if (!phonePattern.test(formData.phone)) {
      setError("Ingrese un número de celular válido.");
      return;
    }

    // Puedes agregar más validaciones según tus necesidades

    const formattedBirthDate = `${formData.birthYear}-${formData.birthMonth}-${formData.birthDay}`;

    const userData = {
      name: formData.username,
      numberPhone: parseInt(formData.phone),
      password: formData.password,
      gender: formData.sex,
      birthDate: formattedBirthDate,
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/signup/email/policy');
  };

  return (
    <div className="containerEmail">
        <div className="form-header">
            <Link to="/signup">
                <GoBackArrow />
            </Link>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}

            <div className="form-groupEmail">
                <label className="titule-email" htmlFor="username"> Nombre de usuario* </label>
                <div className="hint"> *Crea un nombre de usuario de mínimo 5 y máximo de 12 caracteres </div>
                <input className="color-inputEmail igualDos" type="text" id="username" value={formData.username} onChange={handleChange} required minLength="5" maxLength="12"/>
            </div>

            <div className="form-groupPhone">
                <label className="titule-email spaceLetter" htmlFor="phone"> Número de celular* </label>
                <select className="country-code color-inputEmail igualDos">
                    <option value="+57">+57</option>
                </select>
                <input type="tel" id="phone" className="phone-input color-inputEmail igualDos" value={formData.phone} onChange={handleChange} required pattern="^3\d{9}$" // Patrón específico para números móviles colombianos title="Ingrese un número de celular válido (10 dígitos, comenzando con 3)"
                />
            </div>

            <div className="form-groupPhone">
                <label className="titule-email spaceLetter" htmlFor="confirmPhone"> Confirma tu celular* </label>
                <select className="country-code color-inputEmail igualDos">
                    <option value="+57">+57</option>
                </select>
                <input type="tel" id="confirmPhone" className="phone-input color-inputEmail igualDos" value={formData.confirmPhone} onChange={handleChange} required pattern="^3\d{9}$" />
            </div>

            <div className="form-groupEmail">
                <label className="titule-email" htmlFor="password"> Contraseña* </label>    
                <div className="hint"> Recuerda crear una contraseña difícil de adivinar </div>
                <input className="color-inputEmail igualDos" type="password" id="password" value={formData.password} onChange={handleChange} required minLength="8"/>
            </div>

            <div className="form-groupEmail">
                <label className="titule-email spaceLetter" htmlFor="confirmPassword"> Confirma tu contraseña* </label>
                <input className="color-inputEmail igualDos" type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required minLength="8"/>
            </div>

            <div className="form-groupEmail">
                <label className="titule-email spaceLetter" htmlFor="sex">Sexo</label>
                <select className="color-inputEmail igualDos" id="sex" value={formData.sex} onChange={handleChange}>
                    <option value="">Selecciona una opción</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            <div className="form-groupEmail">
                <label className="titule-email spaceLetter">Fecha de nacimiento</label>
                <div className="opciones-dayEmail">
                <select className="color-inputEmail igualDos" id="birthDay" style={{ width: "17%", marginRight: "2%" }} value={formData.birthDay} onChange={handleChange} required>
                    <option value="">DD</option>
                    {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                        {String(i + 1).padStart(2, "0")}
                    </option>
                    ))}
                </select>
                <select className="color-inputEmail igualDos" id="birthMonth" style={{ width: "17%", marginRight: "2%" }} value={formData.birthMonth} onChange={handleChange} required>
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                        {String(i + 1).padStart(2, "0")}
                    </option>
                    ))}
                </select>
                <select className="color-inputEmail igualDos" id="birthYear" style={{ width: "22%" }} value={formData.birthYear} onChange={handleChange} required>
                    <option value="">YYYY</option>
                    {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                        <option key={year} value={year}>
                        {year}
                        </option>
                    );
                    })}
                </select>
                </div>
            </div>

            <button type="submit" className="from-link">
                <img src={arrow} alt="right-arrow" />
                <p>Continuar</p>
            </button>
        </form>
    </div>
  );
}
