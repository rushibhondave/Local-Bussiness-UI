import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../3.Screens/About_Blog/About";
import Footter from "../3.Screens/Footer/Footer";
import Navbar from "../3.Screens/NavBar/Navbar";
import MainPage from "./MainPage";
import DisplayPage from '../2.Component/Display_Page/DisplayPage'
import User_Login_Register from '../3.Screens/User_Login_Register/User_Login_Register.jsx'
import ErrorCompoent from "../2.Component/Error_Component/ErrorCompoent.jsx";
import Service from "../2.Component/Service/Service.jsx";

import RegisterServiceCompo from "../3.Screens/RegisterServiceCompo/RegisterServiceCompo.jsx";
import RegisterShop from "../3.Screens/RegisterShop/RegisterShop.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={< MainPage/>}/>
        <Route path="/Service" element={< Service/>}/>
        <Route path="/DisplayPage" element={< DisplayPage/>}/>
        <Route path="/About" element={< About/>}/>
        <Route path="/About" element={< About/>}/>
        <Route path="/RegisterShop" element={< RegisterShop />}/>
        <Route path="/RegisterServiceCompo" element={< RegisterServiceCompo/>}/>
     
        <Route path="/User_Login_Register" element={< User_Login_Register/>}/>
        <Route path="*" element={< ErrorCompoent/>}/>
        </Routes>
        <Footter />
      </Router>
    </div>
  );
}

export default App;
