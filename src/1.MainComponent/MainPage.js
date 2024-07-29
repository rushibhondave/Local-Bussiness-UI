import React from 'react'
import LandingPage from '../3.Screens/LandingPage/LandingPage'
import CardComp from '../2.Component/Card/CardComp.jsx'
import PopularUpComing from '../2.Component/PopularUpComing/PopularUpComing.js'
import SliderComp from '../2.Component/Slider/SliderComp.jsx'
import Titile from '../3.Screens/Title/Titile.jsx'
function MainPage() {
  return (
    <>
   <LandingPage/>
   <CardComp/>
   <Titile/>
   <PopularUpComing/>
   <SliderComp/>
    </>
  )
}

export default MainPage
