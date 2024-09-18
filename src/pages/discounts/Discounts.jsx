import './discounts.css';
import {Link} from 'react-router-dom'

export default function Discounts() {

    function mostrar () {
        console.log('Boton oprimido')
    }

    return (
        // Este es un ejemplo
        <div className='discount-container'>
            <h1>Discounts</h1>
            <button onClick={mostrar}>Oprimeme</button>
            <Link to={'/bill'}>nano</Link>  
        </div>
    )
}