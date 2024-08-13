import React from 'react'
import { Link } from 'react-router-dom'
import '../../Style/DashBoard.css'
function DashBoard() {
  return (
    <>

    
    <div className="bodyDashboard">
    <div class="dashboard-container">

        <div class="dashboard-card earnings-card">
            <h2>Earnings</h2>
            <h3>$6078.76</h3>
            <p>Profit is 48% More than last Month</p>
            <div class="progress-circle">
                <div class="circle">
                    <span>80%</span>
                </div>
            </div>
        </div>

   
        <div class="dashboard-card visitor-insights-card">
            <h2>Visitor Insights</h2>
            <div class="chart"></div>
        </div>

 
        <div class="dashboard-card trending-card">
            <h2>Trending Now</h2>
            <div class="trending-items-container">
                <div class="trending-item">
                    <img src="home-decor.jpg" alt="Home Decor Range"/>
                    <p>Home Decor Range</p>
                </div>
                <div class="trending-item">
                    <img src="disney-dress.jpg" alt="Disney Princess Dress"/>
                    <p>Disney Princess Dress</p>
                </div>
            </div>
        </div>

     
        <div class="dashboard-card customers-card">
            <h2>Customers</h2>
            <table class="table">
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
                        <td className='Buttonn'>
                            
                            <button class="action-button-delete">Delete</button>
                        </td>
                    </tr>
                
                </tbody>
            </table>
        </div>

    
        <div class="dashboard-card sales-summary-card">
            <h2>Today's Sales</h2>
            <div class="summary-container">
                <div class="summary-stat">
                    <h3>$5k</h3>
                    <p>Total Sales</p>
                </div>
                <div class="summary-stat">
                    <h3>500</h3>
                    <p>Total Orders</p>
                </div>
                <div class="summary-stat">
                    <h3>9</h3>
                    <p>Products Sold</p>
                </div>
                <div class="summary-stat">
                    <h3>12</h3>
                    <p>New Customers</p>
                </div>
            </div>
        </div>


        <div class="dashboard-card top-products-card">
            <h2>Top Products</h2>
            <table class="table">
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
    </>
  )
}

export default DashBoard
