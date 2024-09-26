import GoBackArrow from "../../../components/backArrow";
import { Link } from "react-router-dom";
import "./service.css";
import phoneImage from "@/img/phoneImage.svg";
import chatImage from "@/img/chatImage.svg";

export default function Service() {
  return (
	<div className="box-Service">
	  <div className="box-arrowLeft">
		<Link to="/home" classname="nombre-para-dar-Style">
		  <GoBackArrow />
		</Link>
	  </div>
	  <section className="box-tituleService">
		<svg
		  width="70"
		  height="70"
		  viewBox="0 0 236 236"
		  fill="none"
		  xmlns="http://www.w3.org/2000/svg"
		>
		  <rect
			width="169.706"
			height="169.706"
			rx="7"
			transform="matrix(0.707107 0.707107 0.707107 -0.707107 -2 118)"
			fill="#703A31"
			fillOpacity="0.38"
		  />
		</svg>
		<h4 className="tituleService colorTitule">
		  <span>Atencion al</span>
		  <br />
		  <span>cliente</span>
		</h4>
	  </section>
	  <section className="box-frequentlyQuestions">
		<div className="boxTitule">
		  <h4 className="colorTitule tituleStyle">Preguntas frecuentes</h4>
		</div>
		<div className="box-button-frequentlyQuestions">
		  <button>¿Como compro en la app?</button>
		  <button>¿Cómo me inscribo en un taller?</button>
		  <button>¿Cómo escaneo el QR interactivo?</button>
		  <button>¿Cómo cambio la moneda en la app?</button>
		  <button>¿Cómo reporto un problema?</button>
		</div>
	  </section>
	  <section className="box-personalizedAttention">
		<h4 className="colorTitule">
		  ¿Necesitas atención personalizada? habla con nuestro equipo de soporte
		</h4>
		<div className="box-button-personalizedAttention">
		  <Link className="link-service" to="/customer_service/chat">
			<button>
				<img className="button-image" src={chatImage} alt="chatImage" />
				Empieza un chat
			</button>
		  </Link>
		  <button>
			<img className="button-image" src={phoneImage} alt="phoneImage" />
			Programa una llamada
		  </button>
		</div>
	  </section>
	</div>
  );
}
