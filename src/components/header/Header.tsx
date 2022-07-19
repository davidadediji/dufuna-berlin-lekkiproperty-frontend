import Logo from '../../asserts/Group 1.svg'
import Avatar from '../../asserts/person-circle.png'
import Dropdown from '../../asserts/chevron-down.png'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'


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
                <span>Own a property?</span>
                <img src={Avatar} alt="profile" />
                <img src={Dropdown} alt="" />
            </div>

        </header>
        <Navbar/>
       
        
        </>
       
    );

}

export default Header