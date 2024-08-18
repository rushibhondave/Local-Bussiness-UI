import React from "react";
import Local_Buussiness_India from "../../Img/local_Business/buy_Local.jpg";
import "../../Style/Data_card.css";
import { Link, useNavigate } from "react-router-dom";

function ProductsData_Card({
  productName,
  category,
  description,
  price,
  shopName,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/AddToCart", {
      state: {
        name: productName,
        description: description,
        category: category,
        shopName: shopName,
        amount: price,
        quantity: 1,
        type: "custom", // Default type; can be adjusted as needed
      },
    });
  };

  return (
    <main className="Card-list">
      <div className="bus">
        <img src={Local_Buussiness_India} alt="ShopsPic" className="ShopsPic" />
        <div className="bus_data">
          <h3>{productName}</h3>
          <div className="bus_info">
            <div>⭐⭐⭐⭐</div>
            <div>Product category: {category}</div>
            <div>Shop Name : {shopName}</div>
            <div>Amount : ₹ {price}</div>
            <div>Description: {description}</div>
            <div className="line"></div>
            <button className="button21" onClick={handleClick}>
              Add to Cart
            </button>
            <button className="button21 butnc">
              <Link to="/ProductInfo" className="Link">
                Info
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductsData_Card;
