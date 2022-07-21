import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './page-nav-style.css'

const PageNav = ()=>{
    return(
        <div className='page-nav-center'>
            <ul className='page-nav-align'>
                <li><ArrowBackIosOutlinedIcon/></li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>...</li>
                <li>9</li>
                <li>10</li>
                <li><ArrowForwardIosOutlinedIcon/></li>
                
            </ul>

        </div>
    );
}

export default PageNav;