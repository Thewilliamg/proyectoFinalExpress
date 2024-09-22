import './Confirmation.css'
import ConfirmationIcon from '/public/img/ConfirmationIcon.svg'

export default function Confirmation(){
    return (
        <div className='confirmationAll'>
            <div className='confirmationTop'>
            <div className='confirmationTop_img'>
                <img src={ConfirmationIcon}></img>
            </div>
            </div>
        </div>
    )
}