import Globe from '../../asserts/globe.svg'
import './footer-style.css'
const Footer = ()=>{
    return(
        <footer className='footer'>
            <div className='footer-details-copy'>
                <p>&copy; 2020 Agently, Inc</p>
                <ul className='footer-details'>
                    <li>&#8226; Privacy</li>
                    <li>&#8226; Terms</li>
                    <li>&#8226; Sitemap</li>
                    <li>&#8226; Destinations</li>
                </ul>
            </div>
        
            <p className='language'>
                <img src={Globe} alt="world-map-globe" />
                <span>English(US)</span>
            </p>
            
        </footer>
       
    )

}

export default Footer;
