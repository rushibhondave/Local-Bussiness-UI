import React, { useState } from "react";
import "../../Style/Register_Shop.css";
function Register_Shop() 
{
    const [mobileNo, setmobileNo] = useState("");
    const [password, setpassword] = useState("");
    const [ShopName, setShopName] = useState("");
    const [address, setaddress] = useState("");
    const [ShopTimings, setShopTimings] = useState("");
    const [ShopCategory, setShopCategory] = useState("");
    const [serviceAmount, setserviceAmount] = useState(0.0);
    const [city, setcity] = useState("");
    const [pinCode, setpinCode] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [OwnerName, setOwnerName] = useState("");
    const [OwnermobileNo, setOwnermobileNo] = useState("");
    const [adharNo, setadharNo] = useState("");  
    const [termsAccepted, settermsAccepted] = useState(false);
    const url="https://localhost:7148/api/ShopAdds";
  return (
    <>
    <div className="Shop_body">
      <div className="Shop_container">
        <div className="title1">
            <p>Registration Shop</p>
        </div>

        <form action="#">
            <div className="user_details">
      
                <div className="input_box"> 
                    <label for="username"> Mobile No</label>
                    <input type="text" id="username" placeholder="Enter the Mobile No" required/>
                </div>
                <div className="input_box">
                    <label for="name">Password</label>
                    <input type="password" id="name" placeholder="Enter The Password" required/>
                </div>
                <div className="Bussniess_box">
                    <label for="name">Shop Name</label>
                    <input type="text" id="name" placeholder="Enter your Shop name" required/>
                </div>
              
                <div className="Bussniess_box input_box GST">
                    <label for="name">Address</label>
                    <input type="text" id="username" placeholder="Enter your Address" required/>
                </div> 
                <div className="input_box">
                    <label for="username">Shop Timings</label>
                    <input type="text" id="username" placeholder="Enter your Shop Timings"/>
                </div>
                     <div className="Bussniess_box input_box">
                    <label for="name">Shop Category</label>
                    <select name="" id="" className="select">
                        <option value=""  disabled  >Choose Option</option>
                        <option value="">Street Shop</option>
                        <option value="">Medical</option>
                        <option value="">Food Stall</option>
                        <option value="">Grocery</option>
                    </select>
                </div>
                <div className="input_box">
                    <label for="username">City</label>
                    <input type="text" id="username" placeholder="Enter City" required/>
                </div>
          
            
                <div className="input_box">
                    <label for="username">Pin / Zip Code</label>
                    <select name="" id="" className="select">
                        <option value=""  disabled  >Choose Location</option>
                        <option value="">KarveNagar 411052</option>
                        <option value="">Kondhwa Budruk 411048 </option>
                        <option value="">Gokhale Nagar 411016 </option>
                        <option value="">kharadi  411014</option>
                    </select>
                </div>
                <div className="input_box">
                    <label for="name" className="GST">Email Id</label>
                    <input type="email" id="name" placeholder="Enter your Email Id" />
                </div>
            
           
                    <div className="Owner_Info">
                      <p>Owener Information</p>
                    </div>
                <div className="Bussniess_box">
                    <label for="name">Owner Name</label>
                    <input type="text" id="name" placeholder="Enter The Owner Name" required/>
                </div>
           
                <div className="input_box">
                    <label for="username"> Mobile No</label>
                    <input type="text" id="username" placeholder="Enter your  Mobile No" required/>
                </div>
                <div className="input_box"> 
                    <label for="name" >Adhar No</label>
                    <input type="text" id="name" placeholder="Enter your Adhar No" required/>
                </div>
                <div class="checkboxes__row">
                  <div class="checkboxes__item">
                 <label class="checkbox style-c">
                    <input type="checkbox"/>
                    <div class="checkbox__checkmark"></div>
                    <div class="checkbox__body">Terms and conditions apply</div>
                </label>
                </div>
               </div>
                
            </div>
            <div className="reg_btn ">
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
    </div>
    </>
  );
}

export default Register_Shop;
