import imagen from '@/img/discountFigure.svg'
import './discountFigure2.css'

export default function DiscountFigure2({text}) {
    return (
        <div className='container-discountFigure2'>
            <img src={imagen} alt="" />
            <p>{text}</p>
        </div>
    )
}