import React from "react";
import "../../Style/Register_Shop.css";
function Register_Shop() {
  return (
    <>
    <div className="Shop_body">
      <div className="Shop_container">
        <div className="title1">
            <p>Registration Shop</p>
        </div>

        <form action="#">
            <div className="user_details">
            <div className="Bussniess_box">
                    <label for="name">Business Name</label>
                    <input type="text" id="name" placeholder="Enter your Business name" required/>
                </div>
              
                <div className="input_box">
                    <label for="name">Address</label>
                    <input type="text" id="name" placeholder="Enter your Business Address" required/>
                </div>
                <div className="input_box">
                    <label for="username">Shop Start Date</label>
                    <input type="text" id="username" placeholder="Enter your Shop Start Date" required/>
                </div>
                <div className="input_box">
                    <label for="username">Male Worker No</label>
                    <input type="text" id="username" placeholder="Enter the Male Worker No" required/>
                </div>
                <div className="input_box">
                    <label for="username">Female Worker No</label>
                    <input type="text" id="username" placeholder="Enter the Female Worker No" required/>
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
                    <label for="username" className="GST">GST No</label>
                    <input type="text" id="username" placeholder="Enter the GST No" required/>
                </div>
                <div className="input_box">
                    <label for="username"> Mobile No</label>
                    <input type="text" id="username" placeholder="Enter the Mobile No" required/>
                </div>
                <div className="input_box">
                    <label for="username">Shop Google Link</label>
                    <input type="text" id="username" placeholder="Enter yourShop Google Link" required/>
                </div>
                    <div className="Owner_Info">
                      <p>Owener Information</p>
                    </div>
                <div className="Bussniess_box">
                    <label for="name">Owner Name</label>
                    <input type="text" id="name" placeholder="Enter your Business name" required/>
                </div>
                <div className="Bussniess_box input_box">
                    <label for="name">Ownership</label>
                    <select name="" id="" className="select">
                        <option value=""  disabled >Choose Option</option>
                        <option value="">Self Owned</option>
                        <option value="">Rented</option>
                        <option value="">Partnership</option>
              
                    </select>
                </div>
                <div className="input_box">
                    <label for="username"> Mobile No</label>
                    <input type="text" id="username" placeholder="Enter your  Mobile No" required/>
                </div>
             
                <div className="input_box">
                    <label for="username">Address</label>
                    <input type="text" id="username" placeholder="Enter your Address" required/>
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
                    <label for="username">Adhar No</label>
                    <input type="text" id="username" placeholder="Enter The Adhar No" required/>
                </div>
                <div className="input_box">
                    <label for="username">Email id</label>
                    <input type="text" id="username"  className="GST" placeholder="Ente The Email Id" required/>
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
                <input type="submit" value="Register"/>
            </div>
        </form>
    </div>
    </div>
    </>
  );
}

export default Register_Shop;
