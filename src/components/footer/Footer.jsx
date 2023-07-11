import { faCopyright, faHouseUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import Worldly from "./images/world.jpg"
import "./footer.css"



const Footer=()=>{
    
    return(
        <div className="footer">
            <div className="fLists">
                <Link to="/help">
                <ul className="fList">
                    <li className="fListItem">Help</li>
                </ul>
                </Link>
                <Link to="/about">
                <ul className="fList">
                    <li  className="fListItem">About</li>
                </ul>
                </Link>
                <Link to="/terms">
                <ul className="fList">
                    <li  className="fListItem">Terms&Conditions</li>
                </ul>
                </Link>
                {/* <Link to="/contact">
                <ul className="fList">
                    <li  className="fListItem">ContactUs</li>
                </ul>
                </Link> */}
            </div>
            <div className="fText">
                
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                
                <img className="logo1" src={Worldly} alt="" />
                
                
                </Link> <span className="sp123"> © Copyright 2023. All Rights Reserved. Hotel-green,Inc.</span>
                <br />

            </div>

            
            <br />
            <br />
            
        </div>

    )
}
export default Footer