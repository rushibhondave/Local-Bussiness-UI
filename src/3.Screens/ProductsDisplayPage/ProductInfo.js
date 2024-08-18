import "../../Style/ProductInfo.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Local_Buussiness_India from "../../Img/local_Business/buy_Local.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function ProductsData_Display() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [Location, setLocation] = useState("");
  const [Time, setTime] = useState("");
  const product = {

    name: "Men's Fashion T Shirt",
    price: 139.0,
    description:
      "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton. This classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    size: "Large",
   
  };

  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(product.price);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
    setAmount(e.target.value * product.price);
  };
  useEffect(() => {}, [inputValue]);

  const validateinput = (shopName) => {
    const trimmedShopName = shopName.trim();
    // Update regex to allow spaces between letters and numbers
    const isValid = /^[a-zA-Z0-9\s@$_]{2,}$/.test(trimmedShopName);
    return isValid;
  };
  const validateinputValue = (shopName) => {
    const trimmedShopName = shopName.trim();
    return /^[a-zA-Z\s]+$/.test(trimmedShopName);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };



  const handleSearchByName = (event) => {
    if (event) event.preventDefault();

     // Validate password
     if (!inputValue || !validateinput(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Shop Name is wrong insert and not include any numbers, @, $, _.",
      });
      return;
    }
    // Validate shop name
    if (!validateinputValue(inputValue)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input Value",
        text: "Shop Name should only contain letters.",
      });
      return;
    } else {
       
      try {

        navigate(`/DisplayPage?name=${encodeURIComponent(inputValue)}`);
        
      } catch (error) {
        
      }

  }
  };
  return (
    <>
      <div className="shopData_Container">
        <div className="Search_Cotainer">
          <div className="search_div">
            <form action="">
              <input
                type="text"
                id="search-bar"
                placeholder=" Search product,shop name and more...!"
                className="searchcontainer1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Use onChange instead of onChangeCapture
              />
              <button className="button" onClick={handleSearchByName}>Search</button>
            </form>
          </div>
        </div>
        <div className="data_show">
          <div className="filter_column">
            <div className="filter_data">
              <aside className="filters">
                <h2>Filter</h2>
                <div className="line">
                  <hr />
                </div>
                <div className="filter-section">
                  <h3>Location</h3>
                  <label>
                    <input
                      type="radio"
                      value="411052"
                      checked={Location === "411052"}
                      onChange={handleLocationChange}
                    />
                    KarveNagar
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411007"
                      checked={Location === "411007"}
                      onChange={handleLocationChange}
                    />
                    Pune University
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411016"
                      checked={Location === "411016"}
                      onChange={handleLocationChange}
                    />
                    Aundh
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411017"
                      checked={Location === "411017"}
                      onChange={handleLocationChange}
                    />
                    Baner
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411021"
                      checked={Location === "411021"}
                      onChange={handleLocationChange}
                    />
                    Bavdhan
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="411015"
                      checked={Location === "411015"}
                      onChange={handleLocationChange}
                    />
                    Khothrud
                  </label>

                  <div className="loactionshow">
                    <h4>Selected Location:</h4>
                    <p>
                      {Location
                        ? `Pin Code: ${Location}`
                        : "No location selected"}
                    </p>
                  </div>
                </div>
                <div className="line">
                  <hr />
                </div>
              </aside>
            </div>
          </div>

          {/* <div className="product-page">
            <div className="product-container">
              <div className="product-image">
                <img
                  src={Local_Buussiness_India}
                  alt="ShopsPic"
                  className="ShopsPic"
                />
              </div>
              <div className="product-details">
              <h2>{product.name}</h2>
                <h3>₹{product.price}</h3>
                <div className="product-description">
                  <h4>Product Details</h4>
                  <p>{product.description}</p>
                </div>
                <Link to="/AddToCart" state={{ ...product, type: "solid" }}>
                  <button className="button21">Add To Cart</button>
                </Link>
              </div>
            </div>
          </div> */}

          <div className="product-page">
      <div className="product-container">
        <div className="product-image">
          <img
            src={Local_Buussiness_India}
            alt="ShopsPic"
            className="Sho psPic"
          />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          
          <h3>₹{amount.toFixed(2)}</h3>
          <div className="product-description">
            <h4>Product Details</h4>
            <p>{product.description}</p>
          </div>
          <div className="product-controls">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
            <label htmlFor="amount">Amount:</label>
            <input
              type="text"
              id="amount"
              value={`₹${amount.toFixed(2)}`}
              readOnly
            />
          </div>
          <Link to="/AddToCart" state={{ ...product, quantity }}>
            <button className="button21">Add To Cart</button>
          </Link>
        </div>
      </div> </div>
        </div>
      </div>
    </>
  );
}

export default ProductsData_Display;
