import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './module/Hero';
import BackToTop from './components/BackToTop';
import Manfaat from './module/Manfaat';
import AboutUs from './module/AboutUs';
import 'swiper/css';
<<<<<<< HEAD
import { Swiper, SwiperSlide } from 'swiper/react';
import Parenting from './module/Parenting'
import Tips from './module/Tips'
import Kesalahan from './module/Kesalahan'
import Youtube from './module/Youtube'
import Dokter from './module/Dokter'
import Testimoni from './module/Testimoni'
import Article from './module/Article'
import Faq from './module/Faq'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
=======
import Parenting from './module/Parenting';
import Tips from './module/Tips';
import Kesalahan from './module/Kesalahan';
import Youtube from './module/Youtube';
import Dokter from './module/Dokter';
import Testimoni from './module/Testimoni';
import Article from './module/Article';
import Login from './module/Login';
import Regis from './module/Regis';
>>>>>>> e2952e7ccbc415896ae9a5239d2b737e76e81f2b


const Home = () => (
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
);

const App = () => {
  return (
<<<<<<< HEAD
    <div className='bg-desktop'>
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
        <Faq />

      </div>
      <BackToTop />
      <Footer />
    </div>
  )
}
=======
    <Router>
      <div className='bg-desktop md:px-10'>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Regis />} />
        </Routes>
        <BackToTop />
      </div>
    </Router>
  );
};
>>>>>>> e2952e7ccbc415896ae9a5239d2b737e76e81f2b

export default App;
