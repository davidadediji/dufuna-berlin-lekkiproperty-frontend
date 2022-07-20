import Logo from '../../asserts/Group 1.svg'
import Avatar from '../../asserts/person-circle.png'
import Dropdown from '../../asserts/chevron-down.png'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import {Link} from "react-router-dom";




import './header-style.css'

const Header = ()=>{

    return(
        <>
         <header className='header'>
            <div className='header-logo'>
                <img src={Logo} alt="" />
                <span>AGENTLY</span>
            </div>
            <div>
                <Search/>
            </div>

            <div className='avatar'>
                <Link className='no-underline' to="/property-1">
                <span>Own a property?</span>
                </Link>
                <img src={Avatar} alt="profile" />
                <img src={Dropdown} alt="" />
            </div>

        </header>
       
        
        </>
       
    );

}

export default Header