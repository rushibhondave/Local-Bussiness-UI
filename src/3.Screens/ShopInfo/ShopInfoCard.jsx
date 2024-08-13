import React from "react";
import "../../Style/ShopInfo.css";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
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
}) {
  const phoneNumber = ownerMobileNo ; 
  
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
  window.open(whatsappLink, '_blank', 'noopener');
  };

  const HandleSubmit = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Product Inquiry Submit successfully"
      });
      
  };

  const handleShareClick = () => {
    // Create a shareable link
    const shareUrl = window.location.href; // Current page URL
    navigator.clipboard.writeText(shareUrl).then(() => {
      Swal.fire({
        icon: "success",
        title: "Link Copied!",
        text: "The shareable link has been copied to your clipboard.",
      });
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
            <span className="star-rating">{area}</span>
            <span>{shopCategory}</span>
            <span>128 Ratings</span>
          </div>
          <div className="action-buttons">
            <button className="action-btn show-number-btn">
            <a href={`tel:${mobileNo}`} className="phone-link">
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                  <span className="mobile-no">{mobileNo}</span>
                </a></button>
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
            <p>Thu, 15th Aug: {shopTimings} </p>
            <p>Fri - Sun: {shopTimings}</p>
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
                <span className="service-checkmark">✔</span> Home Delivery
              </li>
              <li className="service-item">
                <span className="service-checkmark">✔</span> No Contact Delivery
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
           <form onSubmit={HandleSubmit}>
            <div class="unique-inquiry-box">
              <h2>Product Inquiry</h2>
              <div id="unique-inquiry-form">
                <label for="unique-name">Your Name</label>
                <input
                  type="text"
                  id="unique-name"
                  class="unique-input"
                  name="name"
                  required
                  placeholder="Enter your name"
                />

                <label for="unique-email">Your Email</label>
                <input
                  type="email"
                  id="unique-email"
                  class="unique-input"
                  name="email"
                  required
                  placeholder="Enter your email"
                />

                <label for="unique-product">Product Name</label>
                <input
                  type="text"
                  id="unique-product"
                  class="unique-input"
                  name="product"
                  required
                  placeholder="Enter product name"
                />

                <label for="unique-message">Inquiry Message</label>
                <textarea
                  id="unique-message"
                  class="unique-textarea"
                  name="message"
                  rows="4"
                  required
                  placeholder="Write your inquiry here"
                ></textarea>

                <button type="submit" class="unique-submit-btn">
                  Send Inquiry
                </button>
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
