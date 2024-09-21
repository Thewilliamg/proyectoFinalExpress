import './discounts.css';
import Parrafito from './components/parrafito.jsx'

export default function Discounts() {

    function mostrar () {
        console.log('Boton oprimido')
    }

    return (
        <div className='discount-container'> {/*IMPORTANTE: Modificar Solo dentro de esta vista*/}
            <h1>Discounts</h1>
            <button onClick={mostrar}>Solo modificar</button>
            <Parrafito />   
        </div>
    )
}