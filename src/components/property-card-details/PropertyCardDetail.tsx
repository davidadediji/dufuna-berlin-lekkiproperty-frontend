import Header from "../header/Header";
import Footer from "../footer/Footer";
import './propertycarddetail.css'
import Property from "../../asserts/image/Frame 24.png"

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
                <div>
                    
                </div>
            </div>
            <Footer/>
        </>

    )
}

export default PropertyCardDetails;