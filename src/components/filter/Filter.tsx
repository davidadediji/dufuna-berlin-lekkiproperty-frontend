import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './filter-style.css'
import { KeyboardArrowDown } from '@mui/icons-material';

const Filter = ()=>{
    return(
        <form action='' method='post' className="filter-container">
            <div className="filter-header">
                <CloseIcon/>
                <p>Filter</p>
            </div>
            <div className="price-range">
                <h1>Price Range</h1>
                <div className='input-layout'>
                    <div className='dropdown-field-box'>
                        <p>min price</p>
                        <div className='symbol'>
                            <p>&#8358;</p>
                            <input type="text" />
                        </div>
                       
                    </div>
                        <div className='dropdown-field-box'>
                            <p>max price</p>
                            <div className='symbol'>
                                <p>&#8358;</p>
                                <input type="text" />
                            </div>
                    </div>
                </div>
            </div>
            <div className="room">
                <h1>Rooms</h1>
                <div className='input-layout'>
                    <div className='dropdown-field-box'>
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
            <h1 className='filter-condition'>Condition</h1>
            <div className='filter-options'>
                <p className='clear'>Clear all</p>
                <button className='result-btn'>Show result</button>
            </div>
        </form>
    )
}

export default Filter;