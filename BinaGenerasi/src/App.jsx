import React, { useState } from 'react';
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
import Consult from './module/Consult';
import Contact from './module/Contact';
import ListDoctor from './module/ListDoctor';
import Chat from './components/Chat';
import { FaQuestionCircle } from 'react-icons/fa';
import { RiCustomerService2Line } from 'react-icons/ri';

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
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className='bg-desktop'>
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<Consult />} />
        <Route path="/doctor" element={<ListDoctor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
      </Routes>
      {showNavbarAndFooter && (
        <>
          <BackToTop />
          <button onClick={toggleChat} className="fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full shadow-lg">
            <RiCustomerService2Line  className="text-2xl" />
          </button>
          <Chat isOpen={isChatOpen} toggleChat={toggleChat} />
          <Footer />
        </>
      )}
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
