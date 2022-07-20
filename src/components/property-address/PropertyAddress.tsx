import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import '../../index.css'

const PropertyAddress = ()=>{
    return(
        <div className="property-address-container">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <CloseIcon/>
                <div className='property-address'>
                    <p>Property address</p>
                    <input type="text" placeholder='Enter an address here' />
                </div>
                <div className='property-add-list'>
                    <p>Rooms</p>
                    <div className='dropdown-field-box'>
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
                    <div className='dropdown-field-box'>
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

                </div>
                <div>
                    <p></p>
                    <button></button>
                </div>
            </div>

        </div>
    )
}

export default PropertyAddress;