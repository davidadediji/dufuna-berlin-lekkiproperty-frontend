import LocationOnIcon from '@mui/icons-material/LocationOn';import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import MainImg from '../../asserts/image/mainimg.png'
import './property-address-style.css'

const PropertyAddress = ()=>{
    return(
       <div className='property-address-container'>
        <div className='img-container'>
            <img src={MainImg} alt="" />
        </div>
        <div className='property-address-layout'>
            <div className="property-address-inputs">
                <div className='close'>
                    <CloseIcon />
                </div>
                <div className='property-address'>
                    <p>Property Address</p>
                    <div className='property-address-text'>
                        <input type="text" placeholder='Enter an address here'/>
                        <LocationOnIcon/>
                    </div>
                </div>
                <div className='property-room'>
                    <p className='property-room-title'>Rooms</p>
                    <div className='property-input-layout'>
                        <div className='property-dropdown-field-box'>
                            <p>Bathroom</p>
                            <div className='special-select'>

                                <select name="bathroom" id="bathroom">
                                    <option value="zero">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                </select>
                                <span className='arrow-down'><KeyboardArrowDown/></span>
                            </div>
                        </div>
                        <div className='property-dropdown-field-box'>
                            <p>Bedroom</p>
                            <div className='special-select'>
                                <select name="bedroom" id="bedroom">
                                    <option value="zero">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                </select>
                                <span className='arrow-down'><KeyboardArrowDown/></span>
                            </div>
                        </div>
                        <div className='property-dropdown-field-box'>
                            <p>Seating room</p>
                            <div className='special-select'>
                                <select name="seating-room" id="seat-room">
                                    <option value="zero">0</option>
                                    <option value="one">1</option>
                                    <option value="two">2</option>
                                    <option value="three">3</option>
                                </select>
                                <span className='arrow-down'><KeyboardArrowDown/></span>
                            </div>
                        </div>
                        <div className='property-dropdown-field-box'>
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
                        <div className='property-dropdown-field-box'>
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
                <hr className='deep-dark-40'/>
            </div>
            <div className='bottom-nav'>
                <p className='back'>Back</p>
                <button className='bg-dark'>Next</button>
            </div>

        </div>
       </div>
    )
}

export default PropertyAddress;