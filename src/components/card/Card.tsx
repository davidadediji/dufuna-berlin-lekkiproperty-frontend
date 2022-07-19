import Toilet from '../../asserts/toilet.svg'
import Bath from '../../asserts/bath.svg'
import Bed from '../../asserts/bed.svg'
import './card-style.css'
import { color } from '@mui/system'

interface cardProps{
    cards:Array<{
    id:number
    propertyimg:string
    city:string
    distance:string
    noOfToilets:number,
    noOfBathrooms:number,
    noOfBedrooms:number,
    propertyType:boolean
    price:string
    }>
}


const Card = (props:cardProps)=>{
    return(
        <div className='card-wrapper'>
          {props.cards.map(card=>{
            return(
                <div className="card-container">
                    <div className="card-img">
                        <img src={card.propertyimg}  alt="picture of property" />
                    </div>
                    <div className='card-details'>
                        <div className="location-type">
                            <p>{card.city}</p>
                            <p className='property-type' style={ card.propertyType ? { backgroundColor:'#09AA36', color:'#fff'} : {backgroundColor : 'blue', color:'#fff'} }>{card.propertyType?'NEW':'SERVICED'}</p>
                        </div>
                        <p className='property-distance'>{card.distance}</p>
                        <div className='property-facility'>
                           <p className='property-box'><img src={Bed} alt="bedroom" />{card.noOfBedrooms}</p>
                           <p className='property-box'><img src={Bath} alt="bedroom" />{card.noOfBedrooms}</p>
                           <p className='property-box'><img src={Toilet} alt="bedroom" />{card.noOfBedrooms}</p>                        
                        </div>
                        <p className='property-price'>{card.price}</p>

                    </div>
                </div>
            );
          })}
        </div>
    )
}

export default Card;



