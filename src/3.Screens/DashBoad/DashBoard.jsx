import React from "react";
import { Link } from "react-router-dom";
import "../../Style/DashBoard.css";

function Dashboard() {
  return (
    <div className="dashboard-main">
      <nav className="dashboard-nav">
        <ul>
          <li>
            <Link to={"/Dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/edit-profile"}>Edit Profile</Link>
          </li>
          <li>
            <Link to={"/Register_Shop"}>Register Shop</Link>
          </li>
          <li>
            <Link to={"/Register_Service"}>Register Service</Link>
          </li>
          <li>
            <Link to={"/orders"}>Orders</Link>
          </li>
          <li>
            <Link to={"/inventory"}>Inventory</Link>
          </li>
          <li>
            <Link to={"/settings"}>Settings</Link>
          </li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <div className="profile-section">
          <h2>Shop Owner Profile</h2>
          <div className="profile-details">
            <p><strong>Shop Name:</strong> Rushi Shop</p>
            <p><strong>Category:</strong> Grocery</p>
            <p><strong>Owner:</strong> Rushi B</p>
            <p><strong>Contact:</strong> (+91) 8146347361</p>
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="profile-section">
          <h2>Service Provider Profile</h2>
          <div className="profile-details">
            <p><strong>Service Name:</strong> Plumber</p>
            <p><strong>Category:</strong> Home Services</p>
            <p><strong>Provider:</strong> Jane Smith</p>
            <p><strong>Contact:</strong> (+91) 8146347361</p>
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="summary-section">
          <div className="summary-card">
            <h3>Total Sales</h3>
            <p>₹5000</p>
          </div>
          <div className="summary-card">
            <h3>New Orders</h3>
            <p>45</p>
          </div>
          <div className="summary-card">
            <h3>Customer Feedback</h3>
            <p>Positive</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
