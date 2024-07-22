import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './module/Hero';
import BackToTop from './components/BackToTop';
import Manfaat from './module/Manfaat';
import AboutUs from './module/AboutUs';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Parenting from './module/Parenting';
import Tips from './module/Tips';
import Kesalahan from './module/Kesalahan';
import Youtube from './module/Youtube';
import Dokter from './module/Dokter';
import Testimoni from './module/Testimoni';
import Article from './module/Article';
import Faq from './module/Faq';
import Login from './module/Login';
import Regis from './module/Regis';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

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
    <Faq />
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const noNavbarAndFooterRoutes = ['/login', '/regis'];
  const showNavbarAndFooter = !noNavbarAndFooterRoutes.includes(location.pathname);

  return (
    <div className='bg-desktop'>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
      </Routes>
      <BackToTop />
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
