import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from 'react-router-dom';
import './navbar-style.css'
const Navbar = ()=>{
    return(
        <nav className='navbar'>
        <ul className='nav-list'>
            <li>Home</li>
            <li>Office Space </li>
            <li>Flats and Apartments</li>
            <li>Lands</li>
            <li>Semi Detached Bungalow</li>
            <li>Semi Detached Duplex</li>
            <li>Warehouse</li>
            <li>Mini Flat</li>
            <li>Shop In a Mall</li>
            <li className='arrow-right'><ArrowCircleRightOutlinedIcon/></li>
            <li>
                <Link className="no-underline" to='/filter'>
                    <button className='filter-btn'><FilterAltIcon/>Filters</button>
                </Link>
            </li>
        </ul>  
        
    </nav>
    )
}

export default Navbar;