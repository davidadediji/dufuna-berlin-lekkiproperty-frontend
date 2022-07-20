import CloseIcon from '@mui/icons-material/Close';
import MainImg from '../../asserts/image/mainimg.png'
import '../property-file-uploaded/property-file-uploaded-style.css'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import VisibleImage from '../../asserts/image/Frame 102.png'
import Vector from '../../asserts/Vector.png'

const PropertyUploadedFile = ()=>{
    return(
        <div className='uploaded-file-container'>
            <div className='main-img-container'>
                <img src={MainImg} alt="" />
            </div>
            <div className='uploaded-file-action-container'>
                <div className='uploaded-file-action'>
                    <div className='property-close postion-sticky'>
                        <CloseIcon/>
                    </div>
                    <div className='center-uploaded'>
                        <div className='center-upload-showcase'>
                            <p>Add at least 5 images</p>
                            <p>Upload <span><FileUploadOutlinedIcon/></span></p>
                        </div>
                        <div className='uploaded-imgs'>
                            <div>
                                <img src={VisibleImage} alt="" />
                            </div>
                            <div className='img-invisible'>
                                <div className='invisible-img-box'>
                                    <img src={Vector} alt="" />
                                </div>
                                <div className='invisible-img-box'>
                                    <img src={Vector} alt="" />
                                </div>
                                <div className='invisible-img-box'>
                                    <img src={Vector} alt="" />
                                </div>
                                <div className='invisible-img-box'>
                                    <img src={Vector} alt="" />
                                </div>
                            </div>
                        
                        </div>
                    </div>

                </div>
                <div className='position-sticky'>
                    <hr className='deep-dark-100'/>
                    <div className='bottom-nav'>
                        <p className='back'>Back</p>
                        <button className='bg-dark'>Finish</button>
                    </div>
                    
                </div>
              
            </div>
        </div>
    )
}



export default PropertyUploadedFile;