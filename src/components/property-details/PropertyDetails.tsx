import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MainImg from '../../asserts/image/mainimg.png'
import '../../index.css'
import './property-details-style.css'

const PropertyDetails = ()=>{
    return(
        <div className='property-details-container'>
        <div className='img-container'>
            <img src={MainImg} alt="" />
        </div>
        <div className='property-details-layout'>
            <div className="property-details-inputs">
                <div className='close'>
                    <CloseIcon />
                </div>
                <div className='property-details'>
                    <p>Property Owner</p>
                    <div className='property-details-text'>
                        <input type="text"/>
                    </div>
                </div>
                <div className='property-details'>
                    <p>Property Address</p>
                    <div className='property-address-text'>
                        <input type="text" placeholder='Enter an address here'/>
                    </div>
                </div>
                <div className='property-room'>
                    <p>Rooms</p>
                    <div className='input-layout'>
                        <div className='dropdown-field-box'>
                            <p>Kitchen</p>
                            <div className='special-select'>
                                <select name="kitchen" id="kitchen">
                                    <option value="zero">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                </select>
                                <span className='arrow-down'><KeyboardArrowDown/></span>
                            </div>
                        </div>
                        <div className='dropdown-field-box'>
                            <p>Toilet</p>
                            <div className='special-select'>
                                <select name="toilet" id="toilet">
                                    <option value="zero">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                </select>
                                <span className='arrow-down'><KeyboardArrowDown/></span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='horizontal'>
                <hr className='deep'/>
            </div>
            <div className='bottom-nav'>
                <p className='property-cancel'>Cancel</p>
                <button className='bg-dark'>Next</button>
            </div>

        </div>
       </div>
    )
}

export default PropertyDetails;