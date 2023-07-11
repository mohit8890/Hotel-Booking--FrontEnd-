import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import "./profile.css";
import Worldly from "./images/world.jpg"
import {faFolderarrowup, faUpload} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import {Tabs} from "antd"




const Profile = () => {
  
  
    const { user }=useContext(AuthContext)
  

  const navigate = useNavigate();
  

  //   Handle Change Function
  

  //   Handle Click Function
 
  return (
    
    <div className="mainContainer">
      
      <div className="contentArea">
      
        <div className="right">
       
          <h1>Profile</h1>
          <img required className="img"
              src={user.img ?user.img:"https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt=""
            />
            <div className="details">
                <h1 className="itemTitle">{user.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user.phone}</span>
                </div>
                
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user.country}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{user.city}</span>
                </div>
                
              </div>

             

              
            
              
          
        </div>
        <div className="left">
        <img className="logol" src={Worldly} alt="" />
          <h1>Hello User!</h1>
          
          
          <button>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </NavLink>
            
            
          </button>
          <button>
            <NavLink
              to="/edituser"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Edit
            </NavLink>
            
            
          </button>
          
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Profile;