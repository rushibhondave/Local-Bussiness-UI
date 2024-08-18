import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../../Style/Register_Shop.css";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Data from "../../Utils/ShopData.json";

function Register_Shop() {
  const [Language, setLanguage] = useState("English");
  const [content, setcontent] = useState({});
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [shopTimings, setShopTimings] = useState("");
  const [shopCategory, setShopCategory] = useState("");
  const [city, setCity] = useState("");
  const [emailId, setEmailId] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerMobileNo, setOwnerMobileNo] = useState("");
  const [adharNo, setAdharNo] = useState("");
  const [Description, setDescription] = useState("");
  const [Area, setArea] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    if (Language == "English") {
      setcontent(Data.English);
    } else if (Language == "हिन्दी") {
      setcontent(Data.हिन्दी);
    } else if (Language == "मराठी") {
      setcontent(Data.मराठी);
    }
  }, [Language]);

  const validateMobileNo = (mobileNo) => {
    const mobilePattern = /^(?!([0-9])\1{9})[0-9]{10}$/;
    return mobilePattern.test(mobileNo);
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
    const timeFormat =
      /^([1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)\s-\s([1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;
    return timeFormat.test(timings);
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
        title: content.incompleteData,
        text: "Please fill in all required fields.",
      });
      return;
    }
    if (!validateMobileNo(mobileNo)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10-digit mobile number without repeating the same digit.",
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
        text: content.invalidMobileNo,
      });
      return;
    }
    // Validate password
    if (!password || !validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: content.invalidPassword,
      });
      return;
    }
    // Validate password
    if (!shopName || !validateShop(shopName)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: content.invalidShopName,
      });
      return;
    }
    // Validate shop name
    if (!validateShopName(shopName)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Name",
        text: content.invalidShopTimings,
      });
      return;
    }

    // Validate shop timings
    if (!validateShopTimings(shopTimings)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Shop Timings",
        text: "Please enter valid shop timings in the format '9:00 AM - 6:00 PM'.",
      });
      return;
    }

    // Validate address
    if (!validateAddress(address)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Address",
        text: content.invalidAddress,
      });
      return;
    }

    // Validate city
    if (!validateCity(city)) {
      Swal.fire({
        icon: "error",
        title: "Invalid City",
        text: content.invalidCity,
      });
      return;
    }

    // Validate area
    if (!validateArea(Area)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Area/Land Mark",
        text: content.invalidArea,
      });
      return;
    }

    // Validate Aadhar No
    if (!validateAadharNo(adharNo)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Aadhar No",
        text: content.invalidAadharNo,
      });
      return;
    }

    // Validate email
    if (!validateEmail(emailId)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: content.invalidEmail,
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
          email: emailId,
          description: Description,
          whatupsNo: Area,
          ownerName: ownerName,
          ownerMobileNo: ownerMobileNo,
          aadharNo: adharNo,
          termsAndConditionsAccepted: termsAccepted,
        };
        axios.post(url, data).then((result) => {
          Swal.fire({
            icon: "success",
            title: "Added",
            text: content.success,
          });
        });
        clear();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Bad Request",
            text: content.badRequest,
          });
        } else if (error.message === "Network Error") {
          Swal.fire({
            icon: "error",
            title: "Network Error",
            text: content.networkError,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: content.error,
          });
        }
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
                placeholder={content.mobileNo}
                required
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
            </div>
            <div className="input_box">
              <label htmlFor="password">{content.password}</label>
              <input
                type="password"
                id="password"
                placeholder={content.password}
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="Bussniess_box">
              <label htmlFor="shopName">{content.shopName}</label>
              <input
                type="text"
                id="shopName"
                placeholder={content.shopName}
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                required
              />
            </div>

            <div className="Bussniess_box input_box GST">
              <label htmlFor="address">{content.address}</label>
              <input
                type="text"
                id="address"
                placeholder={content.address}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input_box">
              <label htmlFor="shopTimings">{content.shopTimings}</label>
              <input
                type="text"
                id="shopTimings"
                placeholder={content.shopTimings}
                value={shopTimings}
                onChange={(e) => setShopTimings(e.target.value)}
              />
            </div>

            <div className="Bussniess_box input_box">
              <label htmlFor="shopCategory">{content.shopCategory}</label>
              <select
                id="shopCategory"
                className="select"
                value={shopCategory}
                onChange={(e) => setShopCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  <option value="" disabled>
                    {content.option}
                  </option>
                </option>
                <option value="StreetShop">{content.StreetShop}</option>
                <option value="Medical">{content.FoodStall}</option>
                <option value="FoodStall">{content.Grocery}</option>
                <option value="Grocery">{content.Medical}</option>
              </select>
            </div>
            <div className="input_box">
              <label htmlFor="city">{content.city}</label>
              <input
                type="text"
                id="city"
                placeholder={content.city}
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="pinCode">{content.pinCode}</label>
              <select
                id="pinCode"
                className="select"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                required
              >
                <option value="" disabled>
                  {content.option}
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
                {content.emailId}
              </label>
              <input
                type="email"
                id="emailId"
                placeholder={content.emailId}
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="description" className="GST">
                {content.description}
              </label>
              <input
                type="text"
                id="description"
                placeholder={content.description}
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="area" className="GST">
                {content.area}
              </label>
              <input
                type="text"
                id="area"
                placeholder={content.area}
                value={Area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="Owner_Info">
              <p>{content.Owner_Info}</p>
            </div>
            <div className="Bussniess_box">
              <label htmlFor="ownerName">{content.ownerName}</label>
              <input
                type="text"
                id="ownerName"
                placeholder={content.ownerName}
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                required
              />
            </div>

            <div className="input_box">
              <label htmlFor="ownerMobileNo">{content.ownerMobileNo}</label>
              <input
                type="text"
                id="ownerMobileNo"
                placeholder={content.ownerMobileNo}
                value={ownerMobileNo}
                onChange={(e) => setOwnerMobileNo(e.target.value)}
                required
              />
            </div>
            <div className="input_box">
              <label htmlFor="adharNo">{content.adharNo}</label>
              <input
                type="text"
                id="adharNo"
                placeholder={content.adharNo}
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
                {content.termsAccepted}
              </label>
            </div>
          </div>
          <div className="reg_btn">
            <button type="button" onClick={handleForm} className="Submit">
              {content.submit}
            </button>
            <button type="button" onClick={clear} className="Clear">
              {content.clear}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register_Shop;
