import {
BrowserRouter ,

Route,
Routes,

} from "react-router-dom";

import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Hotel from "./pages/hotel/Hotel"
import Login from "./pages/login/Login";
import Signup from "./signup/Signup";
import HotelType from "./components/Typesearch/HotelType";
import HotelList from "./pages/TypeList/HotelList";
import ApartmentType from "./components/Typesearch/ApartmentType";
import ResortsType from "./components/Typesearch/ResortsType";
import VillasType from "./components/Typesearch/VillasType";
import ApartmentList from "./pages/TypeList/ApartmentList";
import VillasList from "./pages/TypeList/VillasList";
import ResortsList from "./pages/TypeList/ResortsList";
import Profile from "./components/profile/Profile";

import OffersType from "./components/Typesearch/OffersType";
import NewOffers from "./pages/TypeList/NewOffers";
import Booking from "./components/Bookings/Booking";
import Forgot from "./components/forgot/Forgot";
import Forgotid from "./components/forgotid/Forgotid";
import EditUser from "./components/Edituser/EditUser";
import Listcity1 from "./pages/listcity/Listcity1";
import Listcity2 from "./pages/listcity/Listcity2 ";
import Listcity3 from "./pages/listcity/Listcity3";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Help from "./components/help/Help";
import Terms from "./components/terms/Terms";






function App() {
  return (


    <BrowserRouter>


    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/edituser" element={<EditUser/>} />
      <Route path="/typehotellist" element={<HotelList/>} />
      <Route path="/typeapartmentlist" element={<ApartmentList/>} />
      <Route path="/typevillaslist" element={<VillasList/>} />
      <Route path="/offerslist" element={<NewOffers/>} />
      <Route path="/typeresortslist" element={<ResortsList/>} />
      { <Route path="/hotels/:id" element={<Hotel/>} /> }
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/allhotels" element={<HotelType/>} />
      <Route path="/allapartments" element={<ApartmentType/>} />
      <Route path="/allresorts" element={<ResortsType/>} />
      <Route path="/allvillas" element={<VillasType/>} />
      <Route path="/offers" element={<OffersType/>} />
      <Route path="/hotels/room/book/:roomid" element={<Booking/>} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/forgotid" element={<Forgotid/>}/>
       <Route path="hotels/hyderabad" element={<Listcity1/>}/>
      <Route path="hotels/banglore" element={<Listcity2/>}/>
      <Route path="hotels/mumbai" element={<Listcity3/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/contact" element={<Contact/>}/>
      


     

    </Routes>


    </BrowserRouter>
    
  );
}

export default App;
