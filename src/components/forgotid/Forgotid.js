import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Forgotid.css"
import Worldly from "./images/world.jpg"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

const Forgotid=()=>{
const location = useLocation();
const [userid, setUserid] = useState(location.state.userid);
const [username, setUsername] = useState(location.state.username);

const [credentials, setCredentials] = useState({

password:undefined,
password2:undefined
});

const { loading, error, dispatch } = useContext(AuthContext);

const navigate = useNavigate();

//   Handle Change Function
const handleChange = (e) => {

e.preventDefault()
setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

};


//   Handle Click Function
const handleClick = async (e) => {
e.preventDefault()
try{
    if(credentials.password==credentials.password2){
        const res = await axios.put(
            `/users/update/${userid}`,
            credentials
            );   
            navigate("/")
    }else{
        alert("Password Not Matched")
    }




   
    
}catch(err){
    
}


};
  
    
    return(
        <div className="login">
            
            <div className="lContainer">
            <h1>WELCOME</h1>
                
                <img className="logol" src={Worldly} alt="" />
                <span className="sp">HEllO,{username}</span>
                
                
                
                <input type="password" className="lInput" placeholder="New Password" id="password" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="Confirm Password" id="password2" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">Submit</button>
                

                
            </div>
        </div>
    )
}
export default Forgotid