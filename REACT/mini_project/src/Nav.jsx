import './style.css';
import { Link } from 'react-router-dom';
const Nav =()=>{
    return (
        <nav>
            <div className='logo'>Logo</div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/contect">Contect</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;