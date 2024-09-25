import imagen from '@/img/discountFigure.svg'
import './discountFigure1.css'

export default function DiscountFigure1({text}) {
    return (
        <div className='container-discountFigure1'>
            <img src={imagen} alt="" />
            <p>{text}</p>
        </div>
    )
}