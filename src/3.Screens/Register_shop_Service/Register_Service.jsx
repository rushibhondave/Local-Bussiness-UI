import React, { useState } from "react";
import "../../Style/Register_Shop.css";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";

function Register_Service() {
  const [mobileNo, setmobileNo] = useState("");
  const [password, setpassword] = useState("");
  const [serviceName, setserviceName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [serviceCategory, setserviceCategory] = useState("");
  const [serviceAmount, setserviceAmount] = useState(0.0);
  const [jobTimings, setjobTimings] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [additionalInfo, setadditionalInfo] = useState("");
  const [adharNo, setadharNo] = useState("");
  const [gender, setgender] = useState("");
  const [termsAccepted, settermsAccepted] = useState(false);

  

 

  // Validate mobile number to only accept digits
  const handleMobileNoChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setmobileNo(value);
    }
  };

  // Validate name to only accept alphabetic characters
  const handleNameChange = (setter) => (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setter(value);
    }
  };

  // Validate service amount to only accept numeric values
  const handleServiceAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setserviceAmount(value);
    }
  };

  const handleform = () => {
    console.log(mobileNo,password,serviceName,firstName,lastName,serviceCategory,serviceAmount,jobTimings,address,city,pinCode,additionalInfo,adharNo,gender,termsAccepted)
    try {
      if (
        !mobileNo ||
        !password ||
        !serviceName ||
        !firstName ||
        !lastName ||
        !serviceCategory ||
        !serviceAmount ||
        !address ||
        !city ||
        !pinCode ||
        !adharNo ||
        !gender ||
        !termsAccepted
      ) {
        toast.error("Error while adding data.");
        Swal.fire({
          icon: "warning",
          title: "Incomplete Data",
          text: "Please fill in all required fields.",
        });

        return;
      }

      const url = "https://localhost:7148/api/RegisterServices";
      const data = {
        mobileNo: mobileNo,
        password: password,
        serviceName: serviceName,
        firstName: firstName,
        lastName: lastName,
        serviceCategory: serviceCategory,
        serviceAmount: serviceAmount,
        jobTimings: jobTimings,
        address: address,
        city: city,
        pinCode: pinCode,
        additionalInformation: additionalInfo,
        adharNo: adharNo,
        gender: gender,
        termsAndConditionsAccepted: termsAccepted,
      };
      axios.post(url, data).then((result) => {
        Swal.fire({
          icon: "success",
          title: "Added",
          text: "New shop has been added successfully.",
        });
      });

      clear();
    } catch (error) {
      console.error("Error adding data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error while adding data.",
      });
    }
  };

  const clear = () => {
    setmobileNo("");
    setpassword("");
    setserviceName("");
    setfirstName("");
    setlastName("");
    setserviceCategory("");
    setserviceAmount("");
    setjobTimings("");
    setaddress("");
    setcity("");
    setpinCode("");
    setadditionalInfo("");
    setadharNo("");
    setgender("");

    settermsAccepted(false); // Ensure this is reset to false
  };

  return (
    <>
      <div className="Shop_body">
        <div className="Shop_container">
          <div className="title1">
            <p>Registration Service</p>
          </div>

          <form>
            <div className="user_details">
              <div className="input_box">
                <label htmlFor="mobileNo">Mobile No</label>
                <input
                  type="text"
                  id="mobileNo"
                  placeholder="Enter the Mobile No"
                  value={mobileNo}
                  onChange={handleMobileNoChange}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter The Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>

              <div className="Bussniess_box">
                <label htmlFor="serviceName">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  placeholder="Enter your Service name"
                  value={serviceName}
                  onChange={handleNameChange(setserviceName)}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={handleNameChange(setfirstName)}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={handleNameChange(setlastName)}
                  required
                />
              </div>

              <div className="Bussniess_box input_box">
                <label htmlFor="serviceCategory">Service Category</label>
                <select
                  id="serviceCategory"
                  className="select"
                  value={serviceCategory}
                  onChange={(e) => setserviceCategory(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose Option
                  </option>
                  <option value="Plumber">Plumber</option>
                  <option value="Technician">Technician</option>
                  <option value="Repair">Repair</option>
                  <option value="Carpainter">Carpainter</option>
                  <option value="Cleaning Services">Cleaning Services</option>
                </select>
              </div>

              <div className="input_box">
                <label htmlFor="serviceAmount">Service Amount</label>
                <input
                  type="number"
                  id="serviceAmount"
                  placeholder="Enter your Service Amount"
                  value={serviceAmount}
                  onChange={handleServiceAmountChange}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="jobTimings">Job Timings</label>
                <input
                  type="text"
                  id="jobTimings"
                  placeholder="Enter your Job Timings"
                  value={jobTimings}
                  onChange={(e) => setjobTimings(e.target.value)}
                />
              </div>

              <div className="Bussniess_box input_box GST">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  required
                />
              </div>

              <div className="input_box">
                <label htmlFor="pinCode">Pin / Zip Code</label>
                <select
                  id="pinCode"
                  className="select"
                  value={pinCode}
                  onChange={(e) => setpinCode(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose Location
                  </option>
                  <option value="411052">KarveNagar</option>
                  <option value="411007">Pune University</option>
                  <option value="411016">Aundh</option>
                  <option value="411017">Baner</option>
                  <option value="411021">Bavdhan</option>
                  <option value="411015">Khothrud</option>
                </select>
              </div>

              <div className="input_box">
                <label htmlFor="additionalInfo">Additional Information</label>
                <input
                  type="text"
                  id="additionalInfo"
                  placeholder="Additional Information"
                  value={additionalInfo}
                  onChange={(e) => setadditionalInfo(e.target.value)}
                />
              </div>

              <div className="input_box">
                <label htmlFor="adharNo">Adhar No</label>
                <input
                  type="text"
                  id="adharNo"
                  placeholder="Enter Adhar Card Number"
                  value={adharNo}
                  onChange={(e) => setadharNo(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <div className="checkboxes__row" > 
                  <label htmlFor="male">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setgender(e.target.value)}
                      required
                    />
                    Male
                  </label>
                  <label htmlFor="female">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setgender(e.target.value)}
                      required
                    />
                    Female
                  </label>
                  <label htmlFor="PrferNotToSay">
                    <input
                      type="radio"
                      id="PrferNotToSay"
                      name="gender"
                      value="PrferNotToSay"
                      checked={gender === "PrferNotToSay"}
                      onChange={(e) => setgender(e.target.value)}
                      required
                    />
                    Prfer Not To Say
                  </label>
                </div>
              </div>

            
              <div className="term_condition">
                <label htmlFor="termsAccepted">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    checked={termsAccepted}
                    onChange={(e) => settermsAccepted(e.target.checked)}
                    required
                  />
                  Accept Terms And Condition
                </label>
              </div>
            </div>

            <div className="reg_btn">
              <button type="button" onClick={handleform} className="Submit">
                Submit
              </button>
              <button type="button" onClick={clear} className="Clear">
                Clear
              </button>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Register_Service;
