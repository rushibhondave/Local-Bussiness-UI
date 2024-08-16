import React from "react";
import { Link } from "react-router-dom";
import "../../Style/DashBoard.css";
import orders from '../../Img/Social/orders-bfe8c4.svg';
import Heart from '../../Img/Social/Heart.svg';
import notificationPreferences from '../../Img/Social/notificationPreferences-cfffaf.svg';
import Setting from '../../Img/Social/Setting.svg';
function DashBoadUser() {
  return (
    <>
      <div className="main-body">
        <div className="layout-container">
          <nav className="side-navigation">
            <ul className="nav-list">
            
              <li className="nav-item">
                <Link to={""} className="nav-link">
                 <span><img src={orders} alt="" className="IconColor" /></span>  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Register_Shop"} className="nav-link">
                <span><img src={Heart} alt="" className="IconColor" /></span> My Wishlist
                </Link>
              </li>
           
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                <span><img src={notificationPreferences} alt="" className="IconColor" /></span> Notification
                </Link>
              </li>
        
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                <span><img src={Setting} alt="" className="IconColor" /></span>  Settings
                </Link>
              </li>
            </ul>
          </nav>

          <div className="bodyDashboard">
            <div className="dashboard-container">
              <div className="dashboard-card earnings-card cardhight">
               
              </div>

              <div className="dashboard-card visitor-insights-card">
                <h2>Visitor Insights</h2>
                <div className="chart"></div>
              </div>

              <div className="dashboard-card trending-card">
                <h2>Trending Now</h2>
                <div className="trending-items-container">
                  <div className="trending-item">
                  
                    <p>Home Decor Range</p>
                  </div>
                  <div className="trending-item">
                  
                    <p>Disney Princess Dress</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-card customers-card">
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
                      <td>Alex Xavier</td>
                      <td>123 Elm Street, Springfield, IL</td>
                      <td>$981.00</td>
                      <td className="Buttonn">
                        <button className="action-button-delete">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="dashboard-card sales-summary-card">
                <h2>Recived's Orders</h2>
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

              <div className="dashboard-card top-products-card">
                <h2>Top Orders</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Desccrition</th>
                      <th>Amout</th>
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

export default DashBoadUser;
