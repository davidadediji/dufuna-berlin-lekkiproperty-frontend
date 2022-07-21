import CloseIcon from '@mui/icons-material/Close';
import MainImg from '../../asserts/image/mainimg.png'
import '../property-file-upload/property-file-style.css'
import MiddleImage from '../../asserts/images.svg'
import { Link } from 'react-router-dom';



const PropertyUploadFile = ()=>{
    return(
        <div className='upload-file-container'>
            <div className='main-img-container'>
                <img src={MainImg} alt="" />
            </div>
            <div className='upload-file-action-container'>
                <div className='upload-file-action'>
                    <Link to="/">
                    <div className='property-close'>
                        <CloseIcon/>
                    </div>
                    </Link>
                    <div className='upload-file'>
                        <div className='center-upload'>
                            <Link to="/property-5">
                            <div className='center-upload-addon'>
                                <img src={MiddleImage} alt="" />
                                <p className='photo-5'>Add at least 5 photos</p>
                                <p className='upload-ins'>Upload from your device</p>
                            </div>
                            </Link>
                        </div>
                    </div>

                </div>
                <hr className='deep-dark-80'/>
                <div className='bottom-nav'>
                    <Link to="/property-3">
                    <p className='back'>Back</p>
                    </Link>
                    <button className='bg-light'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default PropertyUploadFile;