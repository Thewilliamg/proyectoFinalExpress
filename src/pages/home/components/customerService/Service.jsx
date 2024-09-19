import GoBackArrow from '../../../components/backArrow'
import { Link } from "react-router-dom";
import './service.css';

export default function Service() {

    return (
        <div className='box-Service'>
            <div className='box-arrowLeft'>
            <Link to="/" classname="nombre-para-dar-Style">
                <GoBackArrow />
            </Link>
            </div>
            <section className='box-tituleService'>
                <svg width="100" height="80" viewBox="0 0 236 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="169.706" height="169.706" rx="7" transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)" fill="#703A31" fill-opacity="0.38"/>
                </svg>
                <h4 className='tituleService colorTitule'>Atencion al cliente</h4>
            </section>
            <section className='box-frequentlyQuestions'>
                <h4 className='colorTitule'>Preguntas frecuentes</h4>
                <div className='box-button-frequentlyQuestions'>
                    <button>¿Como compro en la app?</button>
                    <button>¿Cómo me inscribo en un taller?</button>
                    <button>¿Cómo escaneo el QR interactivo?</button>
                    <button>¿Cómo cambio la moneda en la app?</button>
                    <button>¿Cómo reporto un problema?</button>
                </div>
            </section>
            <section className='box-personalizedAttention'>
                <h4 className='colorTitule'>¿Necesitas atención personalizada? habla con nuestro equipo de soporte</h4>
                <div className='box-button-personalizedAttention'>
                    <button>Empieza un chat</button>
                    <button>Programa una llamada</button>
                </div>
            </section>
        </div>
    )
}