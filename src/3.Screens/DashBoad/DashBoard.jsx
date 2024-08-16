import React from "react";
import { Link } from "react-router-dom";
import "../../Style/DashBoard.css";

function DashBoard() {
  return (
    <>
      <div className="main-body">
        <div className="layout-container">
          <nav className="side-navigation">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                Inventory
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Register_Shop"} className="nav-link">
                Register Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Register_Service"} className="nav-link">
                Register Service
                </Link>
              </li>
        
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Settings
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
                    {/* <img src="disney-dress.jpg" alt="Disney Princess Dress" /> */}
                    <p>Disney Princess Dress</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-card customers-card">
                <h2>Customers</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Billing Address</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alex Xavier</td>
                      <td>alex@example.com</td>
                      <td>(555) 123-4567</td>
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
                <h2>Today's Sales</h2>
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
                <h2>Top Products</h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Popularity</th>
                      <th>Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Home Decor Range</td>
                      <td>78%</td>
                      <td>$1234</td>
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

export default DashBoard;
