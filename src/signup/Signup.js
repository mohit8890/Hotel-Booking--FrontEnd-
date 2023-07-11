import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Signup.css";
import Worldly from "./images/world.jpg"
import {faFolderarrowup, faUpload} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"




const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    phone: undefined,
    city: undefined,
    address:undefined,
    country: undefined,
    password: undefined,
  });
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  

  //   Handle Change Function
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleclick=()=>{
    if(file==""){
      
      alert("Please Insert Your Image...")
    }else{
      handleClick()
    }
  }

  //   Handle Click Function
  const handleClick = async (e) => {
    
   
    
    dispatch({ type: "REGISTER_START" });
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
    
    try {
      
      
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/duwvvwmdg/image/upload",
        data
      );

      const { url } = uploadRes.data;

      const newUser = {
        ...credentials,
        
        img: url,
      };
      const res = await axios.post(
        "auth/register",newUser
      );
      dispatch({ type: "REGISTER_SUCCESS", payload:    res.data.details });
      
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
    navigate("/login");
      
  };
  
  return (
    <div className="mainContainer">
      <div className="contentArea">
        <div className="right">
          <h1>SignUp/Register</h1>
          <img required className="img"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://i.ibb.co/MBtjqXQ/no-avatar.gif" 
              }
              alt="avatar"
            />
            <label htmlFor="file">
                  Image: <FontAwesomeIcon icon={ faUpload} />
                </label>
                <form>
                <input
                  type="file"
                  id="file"
                  
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                  required
                />
                </form>
          
          <form>
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
              required
            />
            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Phone"
              id="phone"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="City"
              id="city"
              onChange={handleChange}
              required
            />
            

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="text"
              placeholder="Country"
              id="country"
              onChange={handleChange}
              required
            />

            <input
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                outline: "none",
                backgroundColor: "#ddd",
                borderRadius: "5px",
              }}
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
              required
            />

            <button disabled={loading} onClick={handleclick}>
              Sign up
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
        <div className="left">
        <img className="logol" src={Worldly} alt="" />
          <h1>Hello User!</h1>
          
          <span style={{ padding: "20px 0" }}>Already have a account?</span>
          <button>
            <NavLink
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Login
            </NavLink>
            
          </button>
          <button>
            <NavLink
              to="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Home
            </NavLink>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;