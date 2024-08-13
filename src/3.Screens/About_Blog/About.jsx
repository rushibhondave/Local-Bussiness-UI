import React from "react";
import "../../Style/About_Blog.css";
import shoopLocal from "../../Img/LoacalShop/shoopLocal.jpg";
import ThankyouForShppingLocal from "../../Img/LoacalShop/small_business.jpg";
import local_Bussness from "../../Img/local_Business/i_Love_buy_Loacal.jpg";

import { Link } from "react-router-dom";
import About_Card from "./About_Card";

function About() {
  return (
    <>
      <div className="Aboutcontainer">
        <div className="experience-banner">Support Local Business</div>
        <div className="content">
          <div className="images">
            <img src={shoopLocal} alt="Main Image" className="main-image" />
            <img
              src={ThankyouForShppingLocal}
              alt="Circular Image"
              className="circle-image"
            />
          </div>
          <div className="text-content">
            <h1>We are Ready to Help Improve Your Local Businnes strategy.</h1>
            <p>
            The goal of Local Market Place is to provide a user-friendly platform for linking local companies and service providers with consumers.
              It intends to improve local business by providing extensive comparisons and order management, streamlining online purchasing and scheduling, and making product information more easily accessible.
              The front end uses React JS, jQuery, HTML5, and CSS3, while the backend uses ASP.NET Core Web API with Entity Framework and data is stored in a SQL Server database.
            
            </p>
            <ul className="About_ul">
            <li className='About_li'>Browse and compare items from nearby stores within a 2-km radius.</li>
              <li className='About_li'>Access detailed product information and comparisons to make educated choices.</li>
              <li className='About_li'>Place orders online, schedule pickups, and avoid long waits.</li>
              <li className='About_li'>Easily find and schedule nearby service providers, such as carpenters and plumbers.</li>
            </ul>
            <Link to="/DisplayPage" className="discover-more-btn">
              Discover More
            </Link>
          </div>
        </div>
      </div>

      <section className="services">
        <div className="Aboutcontainer1">
          <div className="section-header">
            <h2>WHY CHOOSE US</h2>
            <h1>Why Choose Us? Get Your Life Style Back</h1>
            <p>
              Our platform is designed to bring a personal touch to local commerce, making it easier for you to connect with nearby businesses and service providers.
            </p>
          </div>
          <div className="about_card11">
          <About_Card 
              title="Trusted Local Partner" 
              description="We have a network of trusted local businesses ready to serve you." 
              image={local_Bussness}
            />
            <About_Card 
              title="Easy Online Ordering" 
              description="Place orders and schedule pickups without any hassle." 
              image={local_Bussness}
            />
            <About_Card 
              title="Comprehensive Comparisons" 
              description="Compare products and services from various local vendors to make informed decisions." 
              image={local_Bussness}
            />
          </div>
          <Link to={"/MainPage"} className="more-details-btn">
            More Details
          </Link>
        </div>

      </section>
    </>
  );
}

export default About;
