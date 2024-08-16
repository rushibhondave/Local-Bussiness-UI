import React, { useState } from "react";
import "../../Style/payment.css";
import QRCode from "react-qr-code";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Payment() {
  const location = useLocation();
  const {
    name = "",
    quantity = 1,
    amount = 0,
    description = "",
    category = "",
    shopName = "",
  } = location.state || {};

  const [inputValue1, setInputValue1] = useState(name);
  const [inputValue2, setInputValue2] = useState(quantity);
  const [inputValue3, setInputValue3] = useState(amount);
  const [inputValue4, setInputValue4] = useState(description);
  const [inputValue5, setInputValue5] = useState(category);
  const [inputValue6, setInputValue6] = useState(shopName);



  const [Name, sesetName] = useState(shopName);
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    address: "",
    pincode: "",
  });

  const [product, setProduct] = useState({
    tax: 15,
    total: amount + 15, // Default total including tax
    Delivery: true,
    type: "solid", // Default type; this should be passed as a prop ideally
  });

  const navigate = useNavigate();

  const handleIncreaseQuantity = () => {
    const newQuantity = inputValue2 + 1;
    const newTotal = inputValue3 * newQuantity + product.tax;
    setInputValue2(newQuantity);
    setProduct((prevProduct) => ({
      ...prevProduct,
      total: newTotal,
    }));
  };

  const handleDecreaseQuantity = () => {
    if (inputValue2 > 1) {
      const newQuantity = inputValue2 - 1;
      const newTotal = inputValue3 * newQuantity + product.tax;
      setInputValue2(newQuantity);
      setProduct((prevProduct) => ({
        ...prevProduct,
        total: newTotal,
      }));
    }
  };
  const handleDeleteProduct = () => {
    setInputValue1("");
    setInputValue2(0);
    setInputValue3(0);
    setProduct((prevProduct) => ({
      ...prevProduct,
      total: 0,
    }));
  };




  const validateform = (event) => {
    event.preventDefault();
  }

  const handlePayment = (event) => {
    event.preventDefault();

    try {
      Swal.fire({
        title: "Payment Successful!",
        text: "Generating Invoice...",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimeout(() => {
        generateInvoice();
        navigate("/ProductsDataDisplay");
      }, 3000);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred. Please try again later.",
      });
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [id.split("-")[1]]: value, // Extracts 'name', 'address', 'pincode'
    }));
  };

  const generateInvoice = () => {
    const doc = new jsPDF();

    html2canvas(document.querySelector("#invoice")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("invoice.pdf");
    });
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
              <div id="invoice">
                <div className="payment-info flex justify-space-between">
                  <div className="payment-column">
                    <h4>Product Info</h4>
                    <div className="payment-field full">
                      <label>Product Name</label>
                      <input type="text" value={inputValue1} readOnly />
                    </div>
                    <div className="payment-field full">
                      <label>Quantity</label>
                      <div className="quantity-container">
                        <button
                          className={`quantity-button ${
                            product.type === "liquid" ? "liquid" : "solid"
                          }`}
                          onClick={handleIncreaseQuantity}
                        >
                          Add More
                        </button>

                        <button
                          className={`quantity-button1  ${
                            product.type === "liquid" ? "liquid" : "solid"
                          }`}
                          onClick={handleDecreaseQuantity}
                        >
                          Delete
                        </button>
                        <input type="number" value={inputValue2} readOnly />
                      </div>
                    </div>
                    <div className="payment-field full">
                      <label>Amount</label>
                      <input type="text" value={inputValue3} readOnly />
                    </div>
                    <button
                      className="delete-button"
                      onClick={handleDeleteProduct}
                    >
                      Delete Product
                    </button>
                  </div>
                </div>

                <div className="qr-section">
                  <h4 className="payment-type selected">
                    QR Code for Purchase
                  </h4>
                  <div className="App">
                    <QRCode value={String(product.total)} />
                  </div>
                  <div className="qr-info">
                    <p>
                      <strong>Product Name:</strong> {inputValue1}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {inputValue2}
                    </p>
                    <p>
                      <strong>Price:</strong> {inputValue3}
                    </p>
                    <p>
                      <strong>Description:</strong> {inputValue4}
                    </p>
                    <p>
                      <strong>Category:</strong> {inputValue5}
                    </p>
                    <p>
                      <strong>ShopName:</strong> {inputValue6}
                    </p>
                    <p>
                      <strong>Amount (before tax):</strong> ₹
                      {inputValue3 * inputValue2}
                    </p>
                    <p>
                      <strong>Tax:</strong> ₹{product.tax}
                    </p>
                    <p>
                      <strong>Total Amount:</strong> ₹{product.total}
                    </p>
                  </div>
                  <form onSubmit={validateform}>
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
                        type="number"
                        placeholder="Pincode"
                        value={userInfo.pincode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </form>
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
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Payment;
