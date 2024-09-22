import { useState } from 'react'
import GoBackArrow from '../../components/backArrow'
import Title from '../storage/img/Rectangle-86.svg'
import Search from '../storage/img/Group-6.svg'
import Flower from '../storage/img/Rectangle-51.png'

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
            <div className='container-items'>
                <img src={Flower} />
                <div className='item-container'>
                    <div className='text-item-container'>
                        <p>Taller de bordado ayacuchano</p>
                        <p>Para el público en general</p>
                        <p>Taller dado por los artesanos de</p>
                        <p>Taller Awaq Ayllus</p>
                    </div>
                    <button className='button-item' onClick='submit'>Entérate más sobre el taller aquí</button>
                </div>
            </div>
        </article>
    )
}