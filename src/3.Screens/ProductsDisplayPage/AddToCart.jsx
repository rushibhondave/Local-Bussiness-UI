import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import "../../Style/AddToCart.css";

function AddToCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const { name, description, category, shopName, amount, quantity: initialQuantity, type } = location.state || {};

  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [unit, setUnit] = useState(type === "liquid" ? "liters" : type === "solid" ? "kg" : "custom");

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const handleCheckout = () => {
    if (!isAuthenticated) {

    Swal.fire({
        title: "Login Required ! You need to log in to proceed to payment.",
        text: "Redirect in Login Page...",
       icon: "warning",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      setTimeout(() => {
        loginWithRedirect();
      }, 5000);
      return;
    }

 

    const productData = {
      name,
      description,
      category,
      shopName,
      amount,
      quantity,
      unit,
    };

    navigate("/payment", { state: productData });
  };

  return (
    <div className="add-to-cart-container">
      <h2>Add to Cart</h2>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Shop: {shopName}</p>
        <p>Price: ₹ {amount}</p>
      </div>
      <div className="quantity-section">
        <label htmlFor="quantity">Quantity:</label>
        {unit === "custom" ? (
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        ) : (
          <div>
            <input
              type="number"
              id="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
            <select value={unit} onChange={handleUnitChange}>
              {type === "solid" && (
                <>
                  <option value="kg">Kilograms</option>
                  <option value="g">Grams</option>
                </>
              )}
              {type === "liquid" && (
                <>
                  <option value="liters">Liters</option>
                  <option value="ml">Milliliters</option>
                </>
              )}
              {type === "custom" && (
                <option value="custom">Custom Unit</option>
              )}
            </select>
          </div>
        )}
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default AddToCart;
