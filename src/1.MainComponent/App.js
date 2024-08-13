import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "../3.Screens/About_Blog/About";
import Navbar from "../3.Screens/NavBar/Navbar";
import MainPage from "./MainPage";
import DisplayPage from '../2.Component/Display_Page/DisplayPage'
import Login from '../3.Screens/User_Login_Register/Login.jsx'
import ErrorCompoent from "../2.Component/Error_Component/ErrorCompoent.jsx";
import Register_Shop from "../3.Screens/Register_shop_Service/Register_Shop.jsx";
import Register_Service from "../3.Screens/Register_shop_Service/Register_Service.jsx";
import Service_Data_Display from "../3.Screens/DisplayPageService/Service_Data_Display.jsx";
import Shop_Service_Login from "../3.Screens/Register_shop_Service/Shop_Service_Login.jsx";
import Payment from "../3.Screens/Payment/Payment.jsx";
import ShopInfoGet from "../3.Screens/ShopInfo/ShopInfoGet.jsx";
import ProductsDataDisplay from "../2.Component/ProductsDataDisplay.jsx";
import DashBoard from "../3.Screens/DashBoad/DashBoard.jsx";





function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={< MainPage/>}/>
        <Route path="/DashBoard" element={< DashBoard/>}/>
      
  
        <Route path="/Payment" element={< Payment/>}/>
        
        <Route path="/ShopInfoGet" element={< ShopInfoGet/>}/>
        <Route path="/ProductsDataDisplay" element={< ProductsDataDisplay/>}/>
  
        <Route path="/Service_Data_Display" element={< Service_Data_Display/>}/>
        <Route path="/DisplayPage" element={< DisplayPage/>}/>
        <Route path="/About" element={< About/>}/>
        <Route path="/Shop_Service_Login" element={< Shop_Service_Login/>}/>
        <Route path="/Login" element={< Login/>}/>
        <Route path="/Register_Shop" element={< Register_Shop/>}/>
        <Route path="/Register_Service" element={< Register_Service/>}/>
        <Route path="*" element={< ErrorCompoent/>}/>
        {/* <Route path="/*" element={< Navigate to={"/"}/>}/>   Go on Home Page Chose 1*/}   
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
// import 'bootstrap/dist/css/bootstrap.min.css'; 