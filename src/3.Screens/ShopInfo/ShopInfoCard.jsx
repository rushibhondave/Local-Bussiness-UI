import React, { useState } from "react";
import "../../Style/ShopInfo.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShopInfoCard({
  shopName,
  shopaddress,
  mobileNo,
  description,
  area,
  shopTimings,
  shopCategory,
  ownerName,
  ownerMobileNo,
  whatupsNo,
  TermsAndConditionsAccepted,
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
    productList: '', // Added field for product list
  });

  const phoneNumber = ownerMobileNo;

  const handleRateClick = () => {
    Swal.fire({
      title: "Rate this Product",
      html: `
            <div>
              <label for="product-rating">Rate the product:</label>
              <select id="product-rating" class="swal2-select" style="display: block; width: 100%;">
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              <label for="shop-rating">Rate the shop:</label>
              <select id="shop-rating" class="swal2-select" style="display: block; width: 100%;">
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Very Good</option>
                <option value="5">5 - Excellent</option>
              </select>
            </div>
          `,
      preConfirm: () => {
        const productRating = document.getElementById("product-rating").value;
        const shopRating = document.getElementById("shop-rating").value;
        return { productRating, shopRating };
      },
      confirmButtonText: "Submit Rating",
    }).then((result) => {
      if (result.isConfirmed) {
        const { productRating, shopRating } = result.value;
        console.log("Product Rating:", productRating);
        console.log("Shop Rating:", shopRating);
        // Handle the ratings, e.g., send them to a server
      }
    });
  };

  const handleChatClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank", "noopener");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.product || !formData.message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      return;
    }

    // Handle successful form submission
    Swal.fire({
      icon: 'success',
      title: 'Inquiry Submitted',
      text: 'Your product inquiry has been submitted successfully.',
    });

    // Handle the submission logic here, e.g., sending data to the server
  };

  const handleShareClick = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      Swal.fire({
        icon: "success",
        title: "Link Copied!",
        text: "The shareable link has been copied to your clipboard.",
      });
    });
  };

  const handleOrder = () => {
    Swal.fire({
      icon: "success",
      title: "Order Placed",
      text: "Successfully placed the order.",
    });
    // Add functionality to handle order placement here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="main-content">
        <div className="store-header">
          <h1 className="store-header-title">{shopName}</h1>
          <div className="rating-section">
            <span>4.3</span>
            <span className="star-rating">★ ★ ★ ★ ☆</span>
            <span className="star-rating">{whatupsNo}</span>
            <span>{shopCategory}</span>
            <span>128 Ratings</span>
          </div>
          <div className="action-buttons">
            <button className="action-btn show-number-btn">
              <a href={`tel:${mobileNo}`} className="phone-link">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                <span className="mobile-no">{mobileNo}</span>
              </a>
            </button>
            <button className="action-btn chat-btn" onClick={handleChatClick}>
              Chat
            </button>
            <button className="action-btn rate-btn" onClick={handleRateClick}>
              Tap to Rate
            </button>
            <button className="action-btn share-btn" onClick={handleShareClick}>
              Share
            </button>
          </div>
        </div>

        <div className="info-section">
          <div className="operating-hours">
            <h3 className="info-title">Timings</h3>
            <p>Mon - Wed: {shopTimings}</p>
            <p>Thu - Fri: {shopTimings} </p>
            <p>Sat - Sun: {shopTimings}</p>
          </div>

          <div className="operating-hours">
            <h3 className="info-title">Address</h3>
            <p>{shopaddress}</p>
            <h3 className="info-title">Description</h3>
            <p>{description}</p>
          </div>

          <div className="service-list">
            <h3 className="info-title">Services</h3>
            <ul className="service-items">
              <li className="service-item">
                {TermsAndConditionsAccepted ? (
                  <div className="flexx">
                    <span className="service-checkmark">✔ Home Delivery</span>
                    <span className="service-checkmark">
                      ✔ No Contact Delivery
                    </span>
                  </div>
                ) : (
                  <div className="flexx">
                    <span className="service-checkmark">❌ Home Delivery</span>
                    <span className="service-checkmark">
                      ❌ No Contact Delivery
                    </span>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="info-section">
          <div className="operating-hours">
            <h3 className="info-title">Owner Name</h3>
            <div className="operating-hours">
              <p>{ownerName}</p>
              <h3 className="info-title">Owner MobileNo</h3>
              <p>{ownerMobileNo}</p>
            </div>
          </div>
        </div>
        <br />
        <div className="info-section">
          <div className="operating-hours">
            <form onSubmit={handleSubmit}>
              <div className="unique-inquiry-box">
                <h2>Product Inquiry</h2>
                <div id="unique-inquiry-form">
                  <label htmlFor="unique-name">Your Name</label>
                  <input
                    type="text"
                    id="unique-name"
                    className="unique-input"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                  />

                  <label htmlFor="unique-email">Your Email</label>
                  <input
                    type="email"
                    id="unique-email"
                    className="unique-input"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />

                  <label htmlFor="unique-product">Product Name</label>
                  <input
                    type="text"
                    id="unique-product"
                    className="unique-input"
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter product name"
                  />

                  <label htmlFor="unique-message">Inquiry Message</label>
                  <textarea
                    id="unique-message"
                    className="unique-textarea"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Write your inquiry here"
                  ></textarea>

                  <label htmlFor="product-list">Product List</label>
                  <textarea
                    id="product-list"
                    className="unique-textarea"
                    name="productList"
                    rows="4"
                    value={formData.productList}
                    onChange={handleInputChange}
                    placeholder="Enter list of products"
                  ></textarea>

                  <div className="buttongrup">
                    <button type="submit" className="unique-submit-btn">
                      Send Inquiry
                    </button>
                    <button
                      type="button"
                      className="unique-submit-btn red"
                      onClick={handleOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default ShopInfoCard;
