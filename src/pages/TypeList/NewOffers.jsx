import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./newoffers.css"
import { useLocation} from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { CircularProgress } from "@material-ui/core";
const NewOffers =()=>{
    const location=useLocation()
    const [destination,setDestination]=useState(location.state.destination)
    const [dates,setDates]=useState(location.state.dates)
    const [openDate,setOpenDate]=useState(false)
    const [options,setOptions]=useState(location.state.options)
    const [min,setMin]=useState(undefined)
    const [max,setMax]=useState(undefined)
    const [featured,setFeatured]=useState(location.state.featured)

    const {data,loading,error,reFetch}=useFetch(`/hotels?city=${destination}&featured=${featured}&min=${min || 0 }&max=${max || 999999999}`)
    const handleClick=()=>{
        reFetch();
    }
    console.log(data)
    
 

    return(
        <div>
            <Navbar/>

            <Header type="list"  />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label htmlFor="">Destination</label>
                            <input  placeholder={destination}  type="text" />
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Check-In-Date</label>
                            <span onClick={()=>setOpenDate(!openDate)}> {`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
                            { openDate && (<DateRange onChange={item=>setDates([item.selection])} minDate={new Date() } ranges={dates}/>)}
                            
                        </div>
                        <div className="lsItem">
                            <label htmlFor="">Options</label>
                            <div className="lsOptions">

                            
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Min Price <small>Per Night</small></span>
                                <input type="number" onChange={e=>setMin(e.target.value)} className="lsOptionInput" />

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max Price <small>Per Night</small></span>
                                <input type="number" onChange={e=>setMax(e.target.value)} className="lsOptionInput" />

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult </span>
                                <input type="number" min={1} className="lsOptionInput"  placeholder={options.adult}/>

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input type="number"  min={0} className="lsOptionInput" placeholder={options.children} />

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Rooms </span>
                                <input type="number" min={1} className="lsOptionInput"  placeholder={options.room}/>

                            </div>
                            </div>


                        </div>
                        <button onClick={handleClick} >Search</button>
                    </div>
                    <div className="listResult">
                        {loading ? < CircularProgress/> :<>
                        {data.map(item=>(

                        
                        
                        
                        <SearchItem item={item} key={item._id}/>))}
                        </>}




                        </div>
                </div>
            </div>
        </div>
    )
}

export default NewOffers