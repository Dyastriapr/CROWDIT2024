import React from 'react'
import Navbar from './components/Navbar'
import Hero from './module/Hero'
import BackToTop from './components/BackToTop'
import Manfaat from './module/Manfaat'
import AboutUs from './module/AboutUs'
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Parenting from './module/Parenting'
import Tips from './module/Tips'
import Kesalahan from './module/Kesalahan'
import Youtube from './module/Youtube'
import Dokter from './module/Dokter'
import Testimoni from './module/Testimoni'
import Article from './module/Article'



const App = () => {
  return (
    <div className='bg-desktop md:px-10'>
      <Navbar />
      <div className='content space-y-10'>
        <Hero />
        <Manfaat />
        <AboutUs />
        <Parenting />
        <Tips />
        <Kesalahan />
        <Youtube />
        <Dokter />
        <Testimoni />
        <Article />

      </div>
      <BackToTop />
    </div>
  )
}

export default App
