import React from 'react'
import BookTicket from '../3.Screens/MainPage.js/BookTicket'
import Title from '../3.Screens/Title/Title'
import TitleComp from '../2.Component/Title/TitleComp'
import CardComp from '../2.Component/Card/CardComp'

function BookTicketMain() {
  return (
    <>
     <BookTicket/> 
     <Title />
     <TitleComp/>
     <CardComp/>
    </>
  )
}

export default BookTicketMain
