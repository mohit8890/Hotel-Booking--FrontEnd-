import { Link } from "react-router-dom";
import "./searchItemcity.css";

const SearchItemcity = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="img" className="siImg" />
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
        
        <div className="siDetailTexts">
          <span className="siPrice">Rs.{item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          
        </div>
      </div>
    </div>
  );
};

export default SearchItemcity;