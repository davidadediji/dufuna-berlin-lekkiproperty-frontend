import CloseIcon from '@mui/icons-material/Close';
import MainImg from '../../asserts/image/mainimg.png'
import './property-add-style.css'
import { propertyDetails } from '../../models/propertyDetails';

const PropertyAdd = ()=>{
    return(
        <div className='property-add-container'>
            <div className='property-main-img-container'>
                <img src={MainImg} alt="" />
            </div>
            <div className='property-add-layout'>
                <div className='property-add-inputs'>
                    <div className='property-close'>
                        <CloseIcon/>
                    </div>
                    
                    <div className='property-add-type'>
                        <p className='property-type-q'>What type of property?</p>
                        <div className='property-grid'>
                            {propertyDetails.map((property)=>(
                                <div className='property-grid-item'>
                                    <p>{property.type}</p>
                                    <img src={property.img} alt="" />
                                </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className='property-add-list'>
                        <p className='list-property'>List propety as ?</p>
                        	<div className='list-property-box-container'>
                            	<div className='list-property-box'>
                                	<p className='box-title'>Rental</p>
                                	<p className='box-details'>A rented place within a multi-unit resendential building or complex.</p>
                            	</div>
		                    	<div className='list-property-box'>
		                        	<p className='box-title'>Purchase</p>
		                        	<p className='box-details'>A rented place within a multi-unit resendential building or complex.</p>
		                    	</div>
		                    	<div className='list-property-box'>
		                        	<p className='box-title'>Lease</p>
		                        	<p className='box-details'>A rented place within a multi-unit resendential building or complex.</p>
		                    	</div>
                       		</div>
                    	</div>
                    </div>
                    <div>
                        <hr className='deep-black' />
                    </div>
                    <div className='bottom-nav'>
                        <p className='back'>Back</p>
                        <button className='bg-dark'>Next</button>
                    </div>
            </div>

        </div>
    )
}

export default PropertyAdd;