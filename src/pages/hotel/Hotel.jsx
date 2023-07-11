import "./hotel.css";
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import { format } from "date-fns";
import { CircularProgress } from "@material-ui/core";


const Hotel =()=>{
    const { user }=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const id=location.pathname.split("/")[2]
    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen]=useState(false);
    const [openModal,setOpenModal]=useState(false);
    const {data,loading,error}=useFetch(`/hotels/find/${id}`)
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
  
    

    const handleOpen=(i)=>{

        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove=(direction)=>{
        let newSlideNumber;
        if(direction === "l"){
            newSlideNumber=slideNumber === 0 ? 5 : slideNumber - 1;
        }else{
            newSlideNumber=slideNumber === 5 ? 0 : slideNumber + 1;

        }
        setSlideNumber(newSlideNumber)
    }
    const handleClick=()=>{
        if(user){setOpenModal(true)


        }else{
            navigate("/login")
        }
    }
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            { loading ? < CircularProgress/> :( <div className="hotelContainer">
                { open &&<div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r") }/>

                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow" onClick={handleClick} >Reserve or Book Now!</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>{data.address}</span>
                    </div>
                    <span className="hotelDistance">Excellent location {data.distance}km from center</span>
                    <span className="hotelPriceHighlight">Book a stay over  {data.cheapestPrice}/- at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {data.photos?.map((photo,i)=>(
                            <div className="hotelImgWrapper">
                                <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">
                                {data.desc}
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">

                            <h1>Perfect for a {days}-night stay!</h1>
                            <span  className="itemValue">{`  ${format(dates[0].startDate,"dd/MM/yyyy")}`} to {`  ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
                            <span>Located in {data.address}</span>
                            <h2><b>Price Starts From {days*data.cheapestPrice*options.room}/-</b> ({days} nights)</h2>
                            <button onClick={handleClick} >Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <br/>

                <Footer/>
                
            </div>)}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/>}
            
        </div>
    )
}

export default Hotel