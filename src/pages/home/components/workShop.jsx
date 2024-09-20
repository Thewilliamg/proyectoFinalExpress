import { useState } from 'react'
import GoBackArrow from '../../components/backArrow'
import Title from '../storage/img/Rectangle-86.svg'
import Search from '../storage/img/Group-6.svg'

export default function Workshop() {
    const [busqueda, setBusqueda] = useState('');

    const manejarCambio = (e) => {
        setBusqueda(e.target.value);
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        alert(`Buscaste: ${busqueda}`);
    };
    return (
        <article className='main-container'>
            <div className='container-arrow'>
                <GoBackArrow />
                <img src={Title} className='img-title' />
                <div className='p-arrow'>
                    <p >Talleres </p>
                    <p>educativos</p>
                </div>
            </div>
            <form className='container-search' onSubmit={manejarSubmit}>
                <div className='search'>
                    <img src={Search} className='img-search' />
                    <input
                        type="text"
                        className='work-input'
                        value={busqueda}
                        onChange={manejarCambio}
                        placeholder="Buscar taller, por categoría o artesanos"
                    />
                </div>
            </form>
        </article>
    )
}