import React, { Fragment } from 'react'
import AboutUs from './AboutUs';
import CarrouselHeader from './CarrouselHeader';
import Header from './Header';
import OurCategorie from './OurCategorie';
import '../LandingPage/landingpage.css'
import Horaire from './Horaire';
import Reservation from './Reservation';



function Index() {

  return (
    <Fragment >
      <Header />
      <div className='container'>
        
        <CarrouselHeader />
        <OurCategorie />
        <Reservation />
        <AboutUs />
        <Horaire />

      </div>
    </Fragment>
  )
}

export default Index
