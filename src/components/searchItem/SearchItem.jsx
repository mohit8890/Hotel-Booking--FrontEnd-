import { Link } from "react-router-dom"
import "./searchItem.css"

const SearchItem=({item})=>{
    return(
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">{item.distance} KM from Airport</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">Apartment with AC</span>
                <span className="siFeatures">{item.desc}</span>
                <span className="siFeatures"><h5>Type:</h5>{item.type}</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later,so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                { item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">{item.cheapestPrice}/-</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/hotels/${item._id}`}>
                    <button className="siCheckButton">See availabilty</button></Link>
                </div>
                
            </div>


        </div>

    )
}
export default SearchItem