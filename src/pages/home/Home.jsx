import {Link} from 'react-router-dom'
import './home.css'

export default function Home() {
    console.log('home')
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/workshop'}>Talleres</Link>
        </div>
    )
}