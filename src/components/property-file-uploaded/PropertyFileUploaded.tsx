import CloseIcon from '@mui/icons-material/Close';
import MainImg from '../../asserts/image/mainimg.png'
import '../property-file-upload/property-file-style.css'


const PropertyUploadedFile = ()=>{
    return(
        <div className='uploaded-file-container'>
            <div className='main-img-container'>
                <img src={MainImg} alt="" />
            </div>
            <div className='uploaded-file-action-container'>
                <div className='uploaded-file-action'>
                    <div className='property-close'>
                        <CloseIcon/>
                    </div>
                    <div>
                        <div>

                        </div>
                    </div>

                </div>
                <hr className='deep-dark-80'/>
                <div className='bottom-nav'>
                    <p className='back'>Back</p>
                    <button className='bg-dark'>Next</button>
                </div>
            </div>
        </div>
    )
}



export default PropertyUploadedFile;