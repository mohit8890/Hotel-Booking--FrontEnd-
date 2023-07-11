import "./about.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Worldly from "./images/hotel2.jpg"

const About =()=>{
    
    return(
        <div>
            <Navbar/>
            <div className="terms">
            <img className="logo5" src={Worldly} alt=""/>
            <ul>
                <li>
                This Project aims at creating an Hotel Reservation that can be used by customers to reserve
hotel rooms. Users can view rooms and amenities. Users can register and log into the system.
The administrator will know the details of daily reservation done by users. Purpose of making
such application is to make people’s work quicker and save time of users
                </li>
                <br />
                <br />
                <li>
                The purpose of creating this system is improving the customer service by providing convenience to customers to make booking through the system and increase customers. Besides, it enables customers to get the information regarding the hotels. By this way it can save transport, calling charges and time. The main objective of the entire activity is to automate the process of room activities, admission of new customers, assigning rooms according to customer’s demand, computing the bill receipt etc..
                </li>
                <br />
                <br />
                <li>
                This project will consist of creating an application mainly for reserving a hotel room. Modules of the software will include viewing hotel details and reserving rooms for users to give them flexibility and portability. By just a few clicks users can book room of a Hotel
                </li>
                <br />
                <br />
            </ul>

            <h4>GMAIL:</h4>
            <p>Hotelgreen12@gmail.com</p>
            <br/>
            <h4>Country:</h4>
            <p>INDIA.</p>
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

export default About