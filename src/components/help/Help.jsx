import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"
import "./help.css"
import Worldly from "./images/world.jpg"
const Help =()=>{
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
        
        alert("Our Executive Will Contact You Soon And Resolves Your Queries..")
        
        
       
      };

    
    return(
        <div>
            <Navbar/>
            

            <div className="terms1">
            <img className="logo5" src={Worldly} alt="" />
            <h1 className="mailTitle">How Can We Help You ?</h1>
            <div className="mail">
            <form>
                     <input className="tp" type="email"   placeholder="Enter Your Email.." required id="email"
        onChange={handleChange} />
                     <input className="tp"  type="tel"   placeholder="Enter Your Ph.No." required id="ph"
        onChange={handleChange} />
        <input className="tp"  type="tel"   placeholder="Enter Your Query Here.." required id="ph"
        onChange={handleChange} />
                <button className="headerBtn"  onClick={handleclick} required>Submit</button>
                
                </form>
                </div>

            </div>
            <MailList/>
            <br />
        <br />
        
            <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}

export default Help