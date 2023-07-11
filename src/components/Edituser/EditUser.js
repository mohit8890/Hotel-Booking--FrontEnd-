import axios from "axios"
import { useContext } from "react"
import { useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./Edituser.css"
import Worldly from "./images/world.jpg"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

const EditUser=()=>{
    const { user }=useContext(AuthContext)

const [credentials1, setCredentials1] = useState({
    username:undefined,
    email:undefined,
    phone:undefined,
    country:undefined,
    city:undefined,
    password:undefined,


});

const { loading, error, dispatch } = useContext(AuthContext);

const navigate = useNavigate();

//   Handle Change Function
const handleChange = (e) => {

e.preventDefault()
setCredentials1((prev) => ({ ...prev, [e.target.id]: e.target.value }));

};


//   Handle Click Function
const handleClick = async (e) => {
e.preventDefault()
try{

    
    const res = await axios.put(
        `/users/update/${user._id}`,
        credentials1
        );   
     
    
}catch(err){
    
}
navigate("/login")

};
console.log(credentials1);
  
    
    return(
        <div className="login2">
            
            <div className="lContainer2">
            <h1  className="sp">WELCOME</h1>
            
                
                <img className="logol" src={Worldly} alt="" />
                <span className="sp">HEllO,{user.username}  Edit Your Profile Here..</span>
                
                
                 <input type="text" className="lInput" placeholder="New Username" id="username" onChange={handleChange} />
                <input type="email" className="lInput" placeholder="New Email" id="email" onChange={handleChange} />
                <input type="tel" className="lInput" placeholder="New Phone No" id="phone" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="New Country" id="country" onChange={handleChange} />
                <input type="text" className="lInput" placeholder="New City" id="city" onChange={handleChange} />
                <input type="password" className="lInput" placeholder="New Password" id="password" onChange={handleChange} />
                <button disabled={loading} onClick={handleClick} className="lButton">Submit</button>
                <button className="lButton">
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </NavLink>
            
            
          </button>

                
            </div>
        </div>
    )
}
export default EditUser