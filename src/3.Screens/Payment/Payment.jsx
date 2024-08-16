import React, { useEffect, useState } from "react";
import "../../Style/payment.css";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
function Payment() {
  const location = useLocation();
  const name = location.state?.name;
  const quantity = location.state?.quantity;
  const amount = location.state?.amount;

  const [inputValue1, setInputValue1] = useState(name || '');
  const [inputValue2, setInputValue2] = useState(quantity || '');
  const [inputValue3, setInputValue3] = useState(amount || '');
  const [product, setProduct] = useState({
    
    tax: 15, // Tax amount
    total: 115, // Total amount after tax
    Delivery:true
  });

  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {}, [navigate]);
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    pincode: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handlePayment = () => {
    try {
      // Start fade-out transition after 1 second
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 3000); // 1000ms = 1 second

      // Redirect after fade-out transition
      const redirectTimer = setTimeout(() => {
        navigate("/ProductsDataDisplay");
      }, 5000); // 3000ms = 3 seconds
      Swal.fire({
        title: "Payment Successful!",
        text: "Redirecting to home page...",
        icon: "success",
        timer: 3000, // 3 seconds
        timerProgressBar: true,
        showConfirmButton: false,
        willClose: () => {},
      });
  
      return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
      };
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
    
  };
  return (
    <>
   
      <div className="payment-body">
        <article className="payment-card">
          <div className="payment-container">
            <div className="payment-card-title">
              <h2>Payment</h2>
            </div>
            <div className="payment-card-body">
              <div className="payment-method">
                <h4>Choose payment method below</h4>
                <div className="payment-types flex justify-space-between">
                  <div className="payment-type">
                    <div className="payment-logo">
                      <i className="far fa-credit-card" />
                    </div>
                    <div className="payment-text">
                      <p>Pay with Credit Card</p>
                    </div>
                  </div>
                  <div className="payment-type">
                    <div className="payment-logo">
                      <i className="fab fa-paypal" />
                    </div>
                    <div className="payment-text">
                      <p>Pay with PayPal</p>
                    </div>
                  </div>
                  <div className="payment-type">
                    <div className="payment-logo">
                      <i className="fab fa-amazon" />
                    </div>
                    <div className="payment-text">
                      <p>Pay with Amazon</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="payment-info flex justify-space-between">
                <div className="payment-column billing-info">
                  <div className="payment-title">
                    <div className="payment-num">1</div>
                    <h4>Billing Info</h4>
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="billing-name">Full Name</label>
                    <input
                      id="billing-name"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="billing-address">Billing Address</label>
                    <input
                      id="billing-address"
                      type="text"
                      placeholder="Billing Address"
                    />
                  </div>
                  <div className="flex justify-space-between">
                    <div className="payment-field half">
                      <label htmlFor="billing-city">City</label>
                      <input id="billing-city" type="text" placeholder="City" />
                    </div>
                    <div className="payment-field half">
                      <label htmlFor="billing-state">State</label>
                      <input
                        id="billing-state"
                        type="text"
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="billing-zip">Zip</label>
                    <input id="billing-zip" type="text" placeholder="Zip" />
                  </div>
                </div>
                <div className="payment-column credit-info">
                  <div className="payment-title">
                    <div className="payment-num">2</div>
                    <h4>Credit Card Info</h4>
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="card-name">Cardholder Name</label>
                    <input id="card-name" type="text" placeholder="Full Name" />
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      id="card-number"
                      type="text"
                      placeholder="1234-5678-9012-3456"
                    />
                  </div>
                  <div className="flex justify-space-between">
                    <div className="payment-field half">
                      <label htmlFor="exp-month">Exp. Month</label>
                      <input id="exp-month" type="text" placeholder="MM" />
                    </div>
                    <div className="payment-field half">
                      <label htmlFor="exp-year">Exp. Year</label>
                      <input id="exp-year" type="text" placeholder="YY" />
                    </div>
                  </div>
                  <div className="payment-field full">
                    <label htmlFor="cvc">CVC Number</label>
                    <input id="cvc" type="text" placeholder="CVC" />
                  </div>
                </div>
              </div>
              <div className="qr-section">
                <h4 className="payment-type selected">QR Code for Purchase</h4>
                <div className="App">
                  <QRCode value={product.total} />
                  <div className="input-here"></div>
                </div>
                <div className="qr-info">
                  <p>
                    <strong>Product Name:</strong> {inputValue1}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {inputValue2}
                  </p>
                  <p>
                    <strong>Description:</strong> {inputValue3}
                  </p>
                  <p>
                    <strong>Amount (before tax):</strong> ₹₹{product.amount}
                  </p>
                  <p>
                    <strong>Tax:</strong> ₹₹{product.tax}
                  </p>
                  <p>
                    <strong>Total Amount:</strong> ₹₹{product.total}
                  </p>
                </div>

                <div className="payment-field full">
                  <label htmlFor="user-name">Name</label>
                  <input
                    id="user-name"
                    type="text"
                    placeholder="Name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="payment-field full">
                  <label htmlFor="user-address">Address</label>
                  <input
                    id="user-address"
                    type="text"
                    placeholder="Address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="payment-field full">
                  <label htmlFor="user-pincode">Pincode</label>
                  <input
                    id="user-pincode"
                    type="text"
                    placeholder="Pincode"
                    value={userInfo.pincode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="payment-actions flex justify-space-between">
              <div className="flex-start">
                <button className="payment-button payment-button-secondary">
                  Return to Store
                </button>
              </div>
              <div className="flex-end">
                <button
                  className="payment-button payment-button-primary"
                  onClick={handlePayment}
                >
                  payment
                </button>
              </div>
            </div>
          </div>
        </article>
        <footer className="payment-footer">
          Design based on example found{" "}
          <a
            href="https://uxdesign.cc/understanding-user-psychology-to-improve-your-product-design-f4e5f930b89e"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </footer>
      </div>


    </>
  );
}

export default Payment;
