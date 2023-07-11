import "./listcity1.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import MailList from "../../components/mailList/MailList";
import SearchItemcity from "../../components/searchItemcity/SearchItemcity";


const Listcity1 = () => {
  const location = useLocation();
  

  
  const {data,loading,error,reFetch}=useFetch(`/hotels?city=Hyderabad`)

  const handleClick = () => {
    reFetch();
  };
  

  return (
    <div className="kuku">
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          
          
            

        <div className="listResult">
        {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItemcity item={item} key={item._id} />
                ))}
              </>
            )}
            
        </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Listcity1;