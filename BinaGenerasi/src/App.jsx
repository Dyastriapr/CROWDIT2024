import React from 'react'
import Navbar from './components/Navbar'
import Hero from './module/Hero'
import BackToTop from './components/BackToTop'
import Manfaat from './module/Manfaat'
import AboutUs from './module/AboutUs'

const App = () => {
  return (
   <div className='bg-desktop  md:px-10'><Navbar />
      
       <div className='container mx-auto content'>
      <Hero />
      <Manfaat />
      <AboutUs />
      

      
    </div>
    <BackToTop />
    </div>
  )
}

export default App