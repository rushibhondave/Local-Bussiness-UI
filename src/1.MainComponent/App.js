import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "../3.Screens/About_Blog/About.jsx";
import Navbar from "../3.Screens/NavBar/Navbar.js";
import MainPage from "./MainPage.js";
import DisplayPage from '../2.Component/Display_Page/DisplayPage.jsx'
import ErrorCompoent from "../2.Component/Error_Component/ErrorCompoent.jsx";
import Register_Shop from "../3.Screens/Register_shop_Service/Register_Shop.jsx";
import Register_Service from "../3.Screens/Register_shop_Service/Register_Service.jsx";
import Service_Data_Display from "../3.Screens/DisplayPageService/Service_Data_Display.jsx";

import Payment from "../3.Screens/Payment/Payment.jsx";
import ShopInfoGet from "../3.Screens/ShopInfo/ShopInfoGet.jsx";
import DashBoard from "../3.Screens/DashBoad/DashBoard.jsx";
import ProductsDataDisplay from "../2.Component/ProductsDataDisplay/ProductsDataDisplay.jsx";
import DashBoadUser from "../3.Screens/DashBoadUser/DashBoadUser.jsx";

import RegsiterProtected from "../2.Component/ProtectedRoute/RegsiterProtected.jsx";
import LoginProtectedd from "../2.Component/ProtectedRoute/LoginProtectedd.jsx";
import Signup from "../3.Screens/User_Login_Register/Signup.jsx";
import Shop_Service_Signup from "../3.Screens/Register_shop_Service/Shop_Service_Signup.jsx";
import LoginLogout from "../3.Screens/User_Login_Register/LoginLogout.jsx";
import Shop_Service_Login from "../3.Screens/Register_shop_Service/Shop_Service_Login.jsx";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={< MainPage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/LoginLogout" element={<LoginLogout/>}/>
        <Route path="/Shop_Service_Signup" element={< Shop_Service_Signup/>}/>
        <Route path="/DashBoadUser" element={<LoginProtectedd Componenut={DashBoadUser}/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/ShopInfoGet" element={< ShopInfoGet/>}/>
        <Route path="/ProductsDataDisplay" element={< ProductsDataDisplay/>}/>
        <Route path="/Service_Data_Display" element={< Service_Data_Display/>}/>
        <Route path="/DisplayPage" element={< DisplayPage/>}/>
        <Route path="/About" element={< About/>}/>
        <Route path="/Shop_Service_Login" element={< Shop_Service_Login/>}/>

        <Route path="/ShopInfoGet" element={< ShopInfoGet/>}/>
        <Route path="/DashBoard" element={<DashBoard/>}/>
        <Route path="/Register_Shop" element={<RegsiterProtected  Compoo={Register_Shop} />}/>  
        <Route path="/Register_Service" element={<RegsiterProtected  Compoo={Register_Service} />}/>
        <Route path="*" element={< ErrorCompoent/>}/>
        {/* <Route path="/*" element={< Navigate to={"/"}/>}/>   Go on Home Page Chose 1*/}   
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
// import 'bootstrap/dist/css/bootstrap.min.css'; 