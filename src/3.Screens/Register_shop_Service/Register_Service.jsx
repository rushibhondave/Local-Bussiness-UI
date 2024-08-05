import React, { useState } from "react";
import "../../Style/Register_Shop.css";
import swal from "sweetalert";
function Register_Service() 
{
    function RegisterService_Submit() {
        const [inputValue, setInputValue] = useState("");
        // Regular expression to match only letters and numbers
        const regex = /^[a-zA-Z0-9]*$/;
        const ClickSearch = (e) => {
          const value = e.target.value;
          e.preventDefault();
          swal({
            title: "Good job!",
            text: "Data Submit Susscfully!",
            icon: "success",
            button: "Close",
          });
        };

    }
    
  return (
    <>
    <div className="Shop_body">
      <div className="Shop_container">
        <div className="title1">
            <p>Registration Service</p>
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
                    <label for="name">Service Name</label>
                    <input type="text" id="name" placeholder="Enter your Business name" required/>
                </div>
                <div className="input_box">
                    <label for="name">First Name</label>
                    <input type="text" id="name" placeholder="Enter your First Name" required/>
                </div>
                <div className="input_box">
                    <label for="name">Last Name</label>
                    <input type="text" id="name" placeholder="Enter your Last Name" required/>
                </div>
                <div className="Bussniess_box input_box GST">
                    <label for="name">Address</label>
                    <select name="" id="" className="select">
                        <option value=""  disabled  >Choose Location</option>
                        <option value="">KarveNagar Lane No 1</option>
                        <option value="">Kondhwa Budruk Lane No 6</option>
                        <option value="">Gokhale Nagar Lane No 5</option>
                        <option value="">VIT COLLEGE</option>
                    </select>
                </div>
                <div className="Bussniess_box input_box">
                    <label for="name">Service Category</label>
                    <select name="" id="" className="select">
                        <option value="" disabled>Choose Option</option>
                        <option value="">Plumber</option>
                        <option value="">Technician</option>
                        <option value="">Repair</option>
                        <option value="">Carpainter</option>
                    </select>
                </div>
                <div className="input_box">
                    <label for="username">Service Amount</label>
                    <input type="number" id="username" placeholder="Enter your Service Amount" required/>
                </div>
                <div className="input_box">
                    <label for="username" className="GST" >Job Timings</label>
                    <input type="text" id="username" placeholder="Enter your Service Amount" required/>
                </div>
                <div className="input_box">
                    <label for="username" className="GST">Experience</label>
                    <input type="number" id="username" placeholder="Enter your Experience" required/>
                </div>
                <div className="input_box">
                    <label for="username">City</label>
                    <input type="text" id="username" placeholder="Enter City" required/>
                </div>
                <div className="input_box">
                    <label for="username">State</label>
                    <input type="text" id="username" placeholder="Enter State" required/>
                </div>
                <div className="input_box">
                    <label for="username">Pin / Zip Code</label>
                    <input type="text" id="username" placeholder="Ente Pin / Zip Code" required/>
                </div>
                <div className="input_box">
                    <label for="username" className="GST">Addtional Information</label>
                    <input type="text" id="username" placeholder="Enter yout Addtional Information" required/>
                </div>
                <div className="input_box"> 
                    <label for="name" >Adhar No</label>
                    <input type="text" id="name" placeholder="Enter your Adhar No" required/>
                </div>
                <div class="gender">
                <span class="gender_title">Gender</span>
                <input type="radio" name="gender" id="radio_1"/>
                <input type="radio" name="gender" id="radio_2"/>
                <input type="radio" name="gender" id="radio_3"/>

                <div class="category">
                    <label for="radio_1">
                        <span class="dot one"></span>
                        <span>Male</span>
                    </label>
                    <label for="radio_2">
                        <span class="dot two"></span>
                        <span>Female</span>
                    </label>
                    <label for="radio_3">
                        <span class="dot three"></span>
                        <span>Prefer not to say</span>
                    </label>
                </div>
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
            <div className="reg_btn">
                <input type="submit" value="Register" onClick={RegisterService_Submit}/>
            </div>
        </form>
    </div>
    </div>
    </>
  );
}

export default Register_Service;
