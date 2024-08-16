import React from "react";
import { Link } from "react-router-dom";
import "../../Style/DashBoard.css";
import orders from '../../Img/Social/orders-bfe8c4.svg';
import heart from '../../Img/Social/Heart.svg';
import notificationPreferences from '../../Img/Social/notificationPreferences-cfffaf.svg';
import setting from '../../Img/Social/Setting.svg';

function DashboardUser() {
  const userInfo = {
    name: "Alex Xavier",
    email: "alex.xavier@example.com",
    phone: "+1 123 456 7890",
    address: "123 Elm Street, Springfield, IL",
  };

  return (
    <>
      <div className="main-body">
        <div className="layout-container">
          <nav className="side-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to={"/orders"} className="nav-link">
                  <span><img src={orders} alt="Orders Icon" className="IconColor" /></span> Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/wishlist"} className="nav-link">
                  <span><img src={heart} alt="Wishlist Icon" className="IconColor" /></span> My Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/notifications"} className="nav-link">
                  <span><img src={notificationPreferences} alt="Notification Icon" className="IconColor" /></span> Notification
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/settings"} className="nav-link">
                  <span><img src={setting} alt="Settings Icon" className="IconColor" /></span> Settings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="bodyDashboard">
            <div className="dashboard-container">
              {/* User Information Section */}
              <div className="dashboard-card user-info-card">
                <h2>User Information</h2>
                <div className="user-details">
                  <p><strong>Name:</strong> {userInfo.name}</p>
                  <p><strong>Email:</strong> {userInfo.email}</p>
                  <p><strong>Phone:</strong> {userInfo.phone}</p>
                  <p><strong>Address:</strong> {userInfo.address}</p>
                  <button className="action-button-edit">Edit Profile</button>
                </div>
              </div>

              {/* Orders in Progress */}
              <div className="dashboard-card orders-progress-card">
                <h2>Orders in Progress</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Billing Address</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{userInfo.name}</td>
                      <td>{userInfo.address}</td>
                      <td>$981.00</td>
                      <td className="Buttonn">
                        <button className="action-button-delete">Delete</button>
                        <button className="action-button-edit">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Sales Summary */}
              <div className="dashboard-card sales-summary-card">
                <h2>Received Orders</h2>
                <div className="summary-container">
                  <div className="summary-stat">
                    <h3>$5k</h3>
                    <p>Total Sales</p>
                  </div>
                  <div className="summary-stat">
                    <h3>500</h3>
                    <p>Total Orders</p>
                  </div>
                  <div className="summary-stat">
                    <h3>9</h3>
                    <p>Products Sold</p>
                  </div>
                  <div className="summary-stat">
                    <h3>12</h3>
                    <p>New Customers</p>
                  </div>
                </div>
              </div>

              {/* Top Orders */}
              <div className="dashboard-card top-orders-card">
                <h2>Top Orders</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Home Decor Range</td>
                      <td>Buy a good bat</td>
                      <td>Rs1234</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardUser;
