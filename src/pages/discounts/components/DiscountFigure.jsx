import imagen from '/img/discountFigure.svg'
import './discountFigure.css'

export default function Parrafito({text}) {
    return (
        <div className='container-discountFigure'>
            <img src={imagen} alt="" />
            <p>{text}</p>
        </div>
    )
}