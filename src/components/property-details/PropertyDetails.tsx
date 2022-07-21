import CloseIcon from '@mui/icons-material/Close';
import MainImg from '../../asserts/image/mainimg.png'
import './property-details-style.css'
import { Link } from 'react-router-dom';

const PropertyDetails = ()=>{
    return(
        <div className='property-owner-container'>
            <div className='main-img-container'>
                <img src={MainImg} alt="" />
            </div>
            <div className='property-owner-layout'>
                <div className='property-owner-inputs'>
                    <Link to="/">
                   
                    <div className='property-close'>
                        <CloseIcon/>
                    </div>
                    </Link>
                    <div className='property-owner'>
                        <p>Property Owner</p>
                        <div className='property-owner-input'>
                            <input type="text" />
                        </div>
                    </div>
                    <div className='property-description'>
                        <p>Description</p>
                        <div className='description-text-area'>
                            <textarea placeholder='What do you have in mind?' name="" id="" cols={30} rows={10}></textarea>
                        </div>
                    </div>
                    <div className='property-validation'>
                        <p>Validation period</p>
                        <div className='valid-input-container'>
                            <div className='date-1'>
                                <p>From</p>
                                <input type="date" />
                            </div>
                            <div className='date-2'>
                                <p>To</p>
                                <input type="date" />
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div>
                    <hr className='deep-dark'/>
                </div>
                
                <div className='bottom-nav'>
                    <Link to="/property-2">
                    <p className='back'>Back</p>
                    </Link>

                    <Link to="/property-4">
                    <button className='bg-dark'>Next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyDetails;