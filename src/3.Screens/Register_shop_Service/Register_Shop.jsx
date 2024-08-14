import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Style/Register_Shop.css";
import { Outlet } from "react-router-dom";

function Register_Shop() {
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [shopTimings, setShopTimings] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [emailId, setEmailId] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerMobileNo, setOwnerMobileNo] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [Description, setDescription] = useState("");
  const [Area, setArea] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

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

  const validateShop = (shopName) => {
    const trimmedshopName = shopName.trim();
    const isValid = /^[a-zA-Z0-9@$_]{2,}$/.test(trimmedshopName);
    return isValid;
  };

  const validateShopName = (shopName) => {
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

  const validateArea = (area) => {
    return /^[a-zA-Z\s]+$/.test(area);
  };

  const validateAadharNo = (aadharNo) => {
    return /^\d{12}$/.test(aadharNo);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleForm = async () => {
    if (
      !mobileNo ||
      !password ||
      !shopName ||
      !address ||
      !shopTimings ||
      !shopCategory ||
      !emailId ||
      !city ||
      !pinCode ||
      !adharNo ||
      !ownerName ||
      !ownerMobileNo ||
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
    if (!shopName || !validateShop(shopName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Shop Name is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }
    // Validate shop name
    if (!validateShopName(shopName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Name",
        text: "Shop Name should only contain letters.",
      });
      return;
    }

    // Validate shop timings
    if (!validateShopTimings(shopTimings)) {
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

    // Validate area
    if (!validateArea(Area)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Area/Land Mark",
        text: "Area/Land Mark should only contain letters.",
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

    // Validate email
    if (!validateEmail(emailId)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    } else {
      try {
        const url = "https://localhost:7063/api/RegisterShops";
        const data = {
          mobileNo: mobileNo,
          password: password,
          shopName: shopName,
          address: address,
          shopTimings: shopTimings,
          shopCategory: shopCategory,
          city: city,
          pinCode: pinCode,
          emailId: emailId,
          ownerName: ownerName,
          ownerMobileNo: ownerMobileNo,
          adharNo: adharNo,
          termsAccepted: termsAccepted,
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
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error while adding data.",
        });
      }
    }
  };

  const clear = () => {
    setMobileNo("");
    setPassword("");
    setShopName("");
    setAddress("");
    setShopTimings("");
    setShopCategory("");
    setCity("");
    setPinCode("");
    setEmailId("");
    setOwnerName("");
    setOwnerMobileNo("");
    setAdharNo("");
    setTermsAccepted(false);
  };

  return (
    <div className="Shop_body">
      <div className="Shop_container">
        <div className="title1">
          <p>Registration Shop</p>
        </div>

        <form>
          <div className="user_details">
            <div className="input_box">
              <label htmlFor="mobileNo">Mobile No</label>
              <input
                type="text"
                id="mobileNo"
                placeholder="Enter the Mobile No"
                required
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <div className="input_box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter The Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="Bussniess_box">
              <label htmlFor="shopName">Shop Name</label>
              <input
                type="text"
                id="shopName"
                placeholder="Enter your Shop name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                required
              />
            </div>

            <div className="Bussniess_box input_box GST">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input_box">
              <label htmlFor="shopTimings">Shop Timings</label>
              <input
                type="text"
                id="shopTimings"
                placeholder="Enter your Shop Timings"
                value={shopTimings}
                onChange={(e) => setShopTimings(e.target.value)}
              />
            </div>

            <div className="Bussniess_box input_box">
              <label htmlFor="shopCategory">Service Category</label>
              <select
                id="shopCategory"
                className="select"
                value={shopCategory}
                onChange={(e) => setShopCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose Option
                </option>
                <option value="StreetShop">Street Shop</option>
                <option value="Medical">Medical</option>
                <option value="FoodStall">Food Stall</option>
                <option value="Grocery">Grocery</option>
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="pinCode">Pin / Zip Code</label>
              <select
                id="pinCode"
                className="select"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              >
                <option value="" disabled>
                  Choose Location
                </option>
                <option value="411052">411052</option>
                <option value="411007">411007</option>
                <option value="411016">411016</option>
                <option value="411017">411017</option>
                <option value="411021">411021</option>
                <option value="411015">411015</option>
              </select>
            </div>

            <div className="input_box">
              <label htmlFor="emailId" className="GST">
                Email Id
              </label>
              <input
                type="email"
                id="emailId"
                placeholder="Enter your Email Id"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="" className="GST">
                Description
              </label>
              <input
                type="text"
                id="emailId"
                placeholder="Enter the description of the shop"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="emailId" className="GST">
                {" "}
                Area/Land Mark
              </label>
              <input
                type="text"
                id="Area"
                placeholder="Enter the Area/Land Mark"
                value={Area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="Owner_Info">
              <p>Owner Information</p>
            </div>
            <div className="Bussniess_box">
              <label htmlFor="ownerName">Owner Name</label>
              <input
                type="text"
                id="ownerName"
                placeholder="Enter The Owner Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="ownerMobileNo">Owner Mobile No</label>
              <input
                type="text"
                id="ownerMobileNo"
                placeholder="Enter your Owner Mobile No"
                value={ownerMobileNo}
                onChange={(e) => setOwnerMobileNo(e.target.value)}
                required
              />
            </div>
            <div className="input_box">
              <label htmlFor="adharNo">Aadhar No</label>
              <input
                type="text"
                id="adharNo"
                placeholder="Enter your Aadhar No"
                value={adharNo}
                onChange={(e) => setAdharNo(e.target.value)}
                required
              />
            </div>

            <div className="term_condition">
              <label htmlFor="termsAccepted">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                Delivery Service
              </label>
            </div>
          </div>
          <div className="reg_btn">
            <button type="button" onClick={handleForm} className="Submit">
              Submit
            </button>
            <button type="button" onClick={clear} className="Clear">
              Clear
            </button>
          </div>
        </form>
      </div>
     
    
    
    </div>
  );
}

export default Register_Shop;
