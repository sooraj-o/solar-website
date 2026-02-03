import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import IntroCards from './components/IntroCards'
import Services from './components/Services'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SolarSolutions from './components/SolarSolutions'
import WhyTrustAndTestimonials from './components/WhyTrustAndTestimonials'







const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Partners/>
      <IntroCards/>
      <Services/>
      <Team/>
      <SolarSolutions/>
      <WhyTrustAndTestimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
