import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch.js";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [pr, setpr] = useState("");
  
 
  const { data } = useFetch(`/hotels/room/${hotelId}`);
 
  const {dates,options}=useContext(SearchContext)
  const MILLISECONDS_PER_DAY=1000*60*60*24;
    function dayDifference(date1,date2){
        const timeDiff=Math.abs(date2.getTime()-date1.getTime());
        const diffDays=Math.ceil(timeDiff/MILLISECONDS_PER_DAY);
        return diffDays;
    };
    var days=(dayDifference(dates[0].endDate,dates[0].startDate))
    if(days==0){
        days=days+1

    }
  
 

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

   


    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  

  const isAvailable = (roomNumber) => {
    
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
        

        
    );
   
    
   
  };
 

  
  
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          //navigate(`/book/${selectedRooms}`)
          navigate(`/hotels/room/book/${selectedRooms}`,{state:{selectedRooms,hotelId}})
          return res.data;
         
        })
        
        
      );
      console.log(pr);
      
      
      setOpen(false);
     
     // navigate("/")
      
      
      
    } catch (err) {}
  };
  return (
    <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
            <div className="rTitle">Room Id:</div>
            <div className="rTitle">{item._id}</div>
            <hr />
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">Price:{days*item.price*options.room}/- for {days} days</div>
             
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  {!isAvailable(roomNumber) ? "booked":(<input 
                    type="checkbox" 
                    value={roomNumber._id}
                    onChange={handleSelect}
                    //hidden={!isAvailable(roomNumber)} 
                  />
                  )}
                  
                  
                  
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;