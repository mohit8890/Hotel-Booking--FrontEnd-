import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./mailList.css"
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const MailList=()=>{
  const { user }=useContext(AuthContext)
 const  navigate=useNavigate()
  
    const [credentials, setCredentials] = useState({
    
        email: undefined,
        ph: undefined,
        
      });
      const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };
      const handleinput=(e)=>{
        
        
        if(credentials.email==""){
          
          alert("Enter Email and Phone Number.")
        }else{
          handleclick()
          alert("Successfully Subscribed..")
        }
      }
    
    
      const handleclick = async (e) => {
       
      
        
        try {
          
          const res = await axios.put(
            "/contact/create",
            credentials
          );
          
        } catch (error) {
          
        }
        navigate("/")
        //alert("Subscribed Successfully..")
        
        
       
      };

   
  
    
    
    
    return(
        <div className="mail">
            <h1 className="mailTitle">Save Time And Explore More..</h1>
            <span className="mailDesc">Subscribe for Best Deals..</span>
            <div className="mailInputContainer">
                
                <form>
                     <input className="tp" type="email"   placeholder="Enter Your Email.." required id="email"
        onChange={handleChange} />
                     <input className="tp"  type="tel"   placeholder="Enter Your Ph.No." required id="ph"
        onChange={handleChange} />
                <button className="headerBtn"  onClick={handleclick} required>Subscribe</button>
                
                </form>
               
                
            </div>
        </div>
    )
   
}
export default MailList
