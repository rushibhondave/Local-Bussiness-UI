import React, { useEffect, useState } from "react";
import "../../Style/Register_Shop.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Outlet } from "react-router-dom";
import Data from "../../Utils/ServiceData.json";

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
  const [Language, setLanguage] = useState("English");
  const [content, setcontent] = useState({});
  
  useEffect(() => {
    if (Language == "English") {
      setcontent(Data.English);
    } else if (Language == "हिन्दी") {
      setcontent(Data.हिन्दी);
    } else if (Language == "मराठी") {
      setcontent(Data.मराठी);
    }
  }, [Language]);
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

  const validateMobileNo = (mobile) => {
    const trimmedMobile = mobile.trim();
    const isValid = /^\d{10}$/.test(trimmedMobile);
    return isValid;
  };

  const validatePassword = (password) => {
    const trimmedPassword = password.trim();
    const isValid = /^[a-zA-Z0-9@$_]{4,}$/.test(trimmedPassword);
    return isValid;
  };

  const validateShop = (serviceName) => {
    const trimmedshopName = serviceName.trim();
    const isValid = /^[a-zA-Z0-9@$_]{2,}$/.test(trimmedshopName);
    return isValid;
  };

  const validateserviceName = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };
  const validatefirstName= (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };
  const validatelastName = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };

  const validateShopTimings = (timings) => {
    return /^[a-zA-Z0-9\s]+$/.test(timings);
  };

  const validateAddress = (address) => {
    return /^[a-zA-Z0-9\s,]+$/.test(address);
  };

  const validateCity = (city) => {
    return /^[a-zA-Z\s]+$/.test(city);
  };


  const validateAadharNo = (aadharNo) => {
    return /^\d{12}$/.test(aadharNo);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleform = () => {
    if (
      !mobileNo ||
      !password ||
      !serviceName ||
      !firstName ||
      !lastName ||
      !address ||
      !jobTimings ||
      !serviceAmount ||
      !serviceCategory ||
      !city ||
      !pinCode ||
      !additionalInfo||
      !adharNo ||
      !gender ||
      !termsAccepted
    ) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Data",
        text: "Please fill in all required fields.",
      });
      return;
    }

    // Validate mobile number
    if (
      !mobileNo ||
      !validateMobileNo(mobileNo) ||
      (mobileNo.length > 0 && mobileNo == 10)
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Mobile No must be a valid 10-digit number!",
      });
      return;
    }
    // Validate password
    if (!password || !validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 4 characters and include only letters, numbers, @, $, _.",
      });
      return;
    }
    // Validate password
    if (!serviceName || !validateShop(serviceName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Shop Name is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }
    // Validate serviceName 
    if (!validateserviceName(serviceName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Name",
        text: "Shop Name should only contain letters.",
      });
      return;
    }


    // Validate firstName name
    if (!validatefirstName(firstName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Name",
        text: "first Name  should only contain letters.",
      });
      return;
    }
    if (!firstName || !validateShop(firstName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "first Name   is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }
    // Validate lastName name
    if (!validatelastName(lastName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Name",
        text: "last Name  should only contain letters.",
      });
      return;
    }
    if (!lastName || !validateShop(lastName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "first Name  is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }


 

    // Validate shop timings
    if (!validateShopTimings(jobTimings)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Timings",
        text: "Shop Timings should only contain letters and numbers.",
      });
      return;
    }

    // Validate address
    if (!validateAddress(address)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Address",
        text: "Address should not contain special characters.",
      });
      return;
    }

    // Validate city
    if (!validateCity(city)) {
      Swal.fire({
        icon: "error",
        title: "Invalid City",
        text: "City should not contain special characters.",
      });
      return;
    }

    // Validate Aadhar No
    if (!validateAadharNo(adharNo)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Aadhar No",
        text: "Aadhar No must be exactly 12 digits.",
      });
      return;
    }

     else {
      try {
        const url = "https://localhost:7063/api/RegisterServices";
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
            text: "New Service has been added successfully.",
          });
        });

        clear();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Bad Request",
            text: "Invalid input. Please check your details and try again.",
          });
        } 
        else if (error.message === "Network Error") {
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: "Unable to connect. Please check your internet connection and try again.",
          });
        }else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "An error occurred while creating your account. Please try again later.",
          });
        }
      }
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
          <div className="transalationdiv">
       <select
          name=""
          id=""
           className="language-select"
          value={Language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option>English</option>
          <option>हिन्दी</option>
          <option>मराठी</option>
        </select>
       </div>
          <form>
            <div className="user_details">
              <div className="input_box">
              <label htmlFor="mobileNo">{content.mobileNo}</label>

                <input
                  type="text"
                  id="mobileNo"
                  placeholder={`Enter the ${content.mobileNo}`}

                  value={mobileNo}
                  onChange={handleMobileNoChange}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="password">{content.password}</label>

                <input
                  type="password"
                  id="password"
                  placeholder={`Enter the ${content.password}`}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
              </div>

              <div className="Bussniess_box">
              <label htmlFor="serviceName">{content.serviceName}</label>

                <input
                  type="text"
                  id="serviceName"
                  placeholder={`Enter your ${content.serviceName}`}


                  value={serviceName}
                  onChange={handleNameChange(setserviceName)}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="firstName">{content.firstName}</label>


                <input
                  type="text"
                  id="firstName"
                  placeholder={`Enter your ${content.firstName}`}

                  value={firstName}
                  onChange={handleNameChange(setfirstName)}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="lastName">{content.lastName}</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder={`Enter your ${content.lastName}`}

                  value={lastName}
                  onChange={handleNameChange(setlastName)}
                  required
                />
              </div>

              <div className="Bussniess_box input_box">
              <label htmlFor="serviceCategory">{content.serviceCategory}</label>

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
              <label htmlFor="serviceAmount">{content.serviceAmount}</label>

                <input
                  type="number"
                  id="serviceAmount"
                  placeholder={`Enter your ${content.serviceAmount}`}
                  value={serviceAmount}
                  onChange={handleServiceAmountChange}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="jobTimings">{content.jobTimings}</label>
                <input
                  type="text"
                  id="jobTimings"
                  placeholder={`Enter your ${content.jobTimings}`}

                  value={jobTimings}
                  onChange={(e) => setjobTimings(e.target.value)}
                />
              </div>

              <div className="Bussniess_box input_box GST">
              <label htmlFor="address">{content.address}</label>


                <input
                  type="text"
                  id="address"
                  placeholder={`Enter your ${content.address}`}
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="city">{content.city}</label>

                <input
                  type="text"
                  id="city"
                  placeholder={`Enter your ${content.city}`}

                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  required
                />
              </div>

              <div className="input_box">
              <label htmlFor="pinCode">{content.pinCode}</label>

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
              <label htmlFor="additionalInfo">{content.additionalInfo}</label>

                <input
                  type="text"
                  id="additionalInfo"
                  placeholder={`Enter your ${content.additionalInfo}`}
                  value={additionalInfo}
                  onChange={(e) => setadditionalInfo(e.target.value)}
                />
              </div>

              <div className="input_box">
              <label htmlFor="adharNo">{content.adharNo}</label>
                <input
                  type="text"
                  id="adharNo"
                  placeholder={`Enter your ${content.adharNo}`}

                  value={adharNo}
                  onChange={(e) => setadharNo(e.target.value)}
                  required
                />
              </div>
              <label>{content.gender}</label>
              <div className="">
                <div className="checkboxes__row">
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
                  {content.male}
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
                   {content.female}</label>

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
                   {content.preferNotToSay}</label>

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
                {content.termsAccepted}
                </label>
              </div>
            </div>

            <div className="reg_btn">
              <button type="button" onClick={handleform} className="Submit">
              {content.submit}

              </button>
              <button type="button" onClick={clear} className="Clear">
              {content.clear}

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
