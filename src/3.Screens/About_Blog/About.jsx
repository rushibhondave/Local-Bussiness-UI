import React from 'react'
import '../../Style/About_Blog.css'
import shoopLocal from '../../Img/LoacalShop/shoopLocal.jpg'
import ThankyouForShppingLocal from '../../Img/LoacalShop/small_business.jpg'
import local_Bussness from '../../Img/local_Business/i_Love_buy_Loacal.jpg'

import { Link } from 'react-router-dom'
import About_Card from './About_Card'
function About() {
  return (
    <>
       <div className="Aboutcontainer">
        <div className="experience-banner">
            Support Local Business
        </div>
        <div className="content">
            <div className="images">
                <img src={shoopLocal} alt="Main Image" className="main-image"/>
                <img src={ThankyouForShppingLocal} alt="Circular Image" className="circle-image"/>
            </div>
            <div className="text-content">
          
                <h1>We are Ready to Help Improve Your Local Businnes strategy.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                <ul className='About_ul'>
                    <li className='About_li'>Refreshing to get such a personal touch.</li>
                    <li className='About_li'>Duis aute irure dolor in reprehenderit in voluptate.</li>
                    <li classNameName='About_li'>Velit esse cillum dolore eu fugiat nulla pariatur.</li>
                </ul>
                <Link to="/DisplayPage" className="discover-more-btn">Discover More</Link>
            </div>
        </div>
    </div>

   
    <section className="services">
        <div className="Aboutcontainer1">
            <div className="section-header">
                <h2>WHY CHOOSE US</h2>
                <h1>Why Choose Us? Get Your Life Style Back</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
            </div>
            <div className="about_card11">
            <About_Card/>
            <About_Card/>
            <About_Card/>
            <About_Card/>
            <About_Card/>
            <About_Card/>
            <About_Card/>
            <About_Card/>
            </div>
            <Link to={"/MainPage"} className="more-details-btn">More Details</Link>
        </div>
    </section>
    </>
  )
}

export default About
