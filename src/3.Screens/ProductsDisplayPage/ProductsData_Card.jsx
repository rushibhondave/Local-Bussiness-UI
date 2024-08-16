import React from "react";
import Local_Buussiness_India from "../../Img/local_Business/buy_Local.jpg";
import "../../Style/Data_card.css";
import { useNavigate } from "react-router-dom";

function ProductsData_Card({
  productName,
  category,
  description,
  price,
  shopName,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Payment', {
      state: {
        name: productName,
        description: description,
        category: category,
        shopName: shopName,
        amount: price,
        quantity: 1, // Add quantity if needed
      },
    });
  };

  return (
    <>
      <main className="Card-list">
        <div className="bus">
          <img
            src={Local_Buussiness_India}
            alt="ShopsPic"
            className="ShopsPic"
          />
          <div className="bus_data">
            <div className="Pro_Data1">
              <div className="bus_data">
                <h3>{productName}</h3>
                <div className="bus_info">
                  <div>⭐⭐⭐⭐</div>
                  <div>{category}</div>
                  <div>{shopName}</div>
                  <div>₹ {price}</div>
                  <div>Shop Name: {description}</div>

                  <div className="line"></div>
                  <button className="button21" onClick={handleClick}>
                    Buy
                  </button>
                  <button className="button21 butnc">
                    <a href="/DisplayPage" className="Link">
                      Info
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductsData_Card;
