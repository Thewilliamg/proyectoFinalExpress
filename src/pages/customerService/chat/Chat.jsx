import './Chat.css'
import { Link } from "react-router-dom";
import Back from '/public/img/BackArrow.svg'
import Chat2 from '/public/img/ChatIcon.svg'
import Send from '/public/img/SendIcon.svg'
export default function Chat(){
    return(
        <div className='chatAll'>
            <div className='chatUp'>
                    <Link to="/customer_service">
                        <img src= {Back}></img>
                    </Link>
                    <div className='chatUp_Title'>
                        <img src={Chat2}></img>
                        <h1>Chat con Taller Awaq Ayllus</h1>
                    </div>
            </div>
            <div className='chatMiddle'>
                <div className='chatMiddle_boxes'>

                    {/* Esta es la cajaque se usa en la parte de la izquierda del chat */}
                    <div className='chatMiddle_Unique'>
                        <div className='chatMiddle_textBoxes'>
                            <h1>Aqui iria el texto... </h1>
                        </div>
                        <div className='chatMiddle_textDown'>
                        </div>
                    </div>

                    {/* Esta es la cajaque se usa en la parte de la derecha del chat */}
                    <div className='chatMiddle_Unique2'>
                        <div className='chatMiddle_textBoxes2'>
                            <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit, cum ligula justo condimentum ac proin. Interdum luctus porta netus tincidunt purus nec ac, sociosqu ligula leo suspendisse nullam class congue, non commodo inceptos scelerisque imperdiet aenean.</h1>
                        </div>
                        <div className='chatMiddle_textDown2'>
                        </div>
                    </div>


                </div>
            </div>
            <div className='chatDown'>
                <div className='chatDown_Response'>
                    <input placeholder='Mandar mensaje a Taller Awaq Ayllus'></input>
                    <a href='#'>
                    <img src={Send} alt="Send"></img>
                    </a>

                </div>
            </div>
        </div>
    )
}