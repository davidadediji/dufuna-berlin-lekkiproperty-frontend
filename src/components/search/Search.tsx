import './search-style.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

const SearchCenter = ()=>{
    return(
    <form className='search-bar'>
        <span className='options'>Rent</span>
        <KeyboardArrowDownIcon/>
        <input placeholder='Where do you want to live ?' className='search-input' />
        <button className='search-icon'><SearchIcon /></button>
    </form>
    )
}

export default SearchCenter;