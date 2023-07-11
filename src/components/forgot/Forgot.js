import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Forgot.css"
import Worldly from "./images/world.jpg"
import { NavLink, useNavigate } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

const Forgot=()=>{
    const {data,loading,error}=useFetch(`/users/`)

    const [credentials, setCredentials] = useState("");
  
    const [userid, setUserid] = useState("");
    const [username, setUsername] = useState("");
  
  
  
    const navigate = useNavigate();
  
    const handleClick = async (e) => {
        e.preventDefault()
        data.forEach(element => {
    
          if((credentials)==(element.email)){
            setUserid(element._id)
            setUsername(element.username)
          }
          
        });
        alert("Validated Successfully..")
      
        
      };
    
      const handleclick=async(e)=>{
        e.preventDefault()
        if(userid==""){
            alert("Invalid Email..")
        }else{
            alert("Correct Credentials")
            navigate("/forgotid",{state:{userid,username}}) ;

        }
       
      }
      
    return(
        <div className="login">
            
            <div className="lContainer">
            <h1>WELCOME</h1>
            
                
                <img className="logol" src={Worldly} alt="" />
                <span className="sp"> Enter Your Email to Reset Your Password...</span>
                
                <input type="text" className="lInput" placeholder="Email" id="email" onChange={(e)=>setCredentials(e.target.value)} />
               
                <button disabled={loading} onClick={handleClick} className="lButton"> Validate Your Email</button>
                <button disabled={loading} onClick={handleclick} className="lButton">Reset Password</button>
               

                
            </div>
        </div>
    )
}
export default Forgot