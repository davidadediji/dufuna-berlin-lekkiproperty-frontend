import Header from "../header/Header";
import Footer from "../footer/Footer";
import './propertycarddetail.css'
import Property from "../../asserts/image/Frame 24.png"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShareIcon from '@mui/icons-material/Share';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const PropertyCardDetails = ()=>{
    return(
        <>
            <Header/>
            <div className="property-details-wrapper">
                <div className="property-details-left">
                    <p className="title-property-detail">3 Bedroom Apartment at Ikoyi</p>
                    <div className="location">
                        <p className="loation-property">Lagos, NG</p>
                        <p className="property-status">NEW</p>
                    </div>
                    <div>
                        <img src={Property} alt="" />
                    </div>
                </div>
                <div className="property-details-right">
                    <div className="title-property-detail-right">
                        <p className="right-desc">Description</p>
                        <p className="right-view">Map View</p>
                    </div>
                    <div className="property-owned">
                        <p>Owned by: </p>
                        <p>IJT Realtor</p>
                    </div>
                    <div className="property-features">
                        <p>Bedroom (3)</p>
                        <p>Bathroom (3)</p>
                        <p>Sitting room (1)</p>
                        <p>Kitchen (1)</p>
                        <p>Toilets (3)</p>
                    </div>
                    <div className="property-description-realtor">
                        <p>3 bedroom House for sale at Ikoyi The Local Government Council Headquarters Lagos Imo selling for ₦30,000,000. See property details on Agently or browse all our range of properties in Ikoyi 3 bedroom House for sale in Ikoyi Buy 3 bedroom House for sale All Ensuite 4 Bedroom Detached Bungalow in Ikoyi is a House.</p>
                    </div>
                    <div className="share-more-container">
                        <p className="show-more">Show more </p>
                        <p><KeyboardArrowRightIcon/></p>
                    </div>
                   
                    <div className="share-buy">
                        <button className="buy-now">Buy now:  ₦30,000,000</button>
                        <button className="box-save"><AcUnitIcon/></button>
                        <button className="box-share"><ShareIcon/></button>
                    </div> 
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default PropertyCardDetails;