import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './module/Hero';
import BackToTop from './components/BackToTop';
import Manfaat from './module/Manfaat';
import AboutUs from './module/AboutUs';
import 'swiper/css';
import Parenting from './module/Parenting';
import Tips from './module/Tips';
import Kesalahan from './module/Kesalahan';
import Youtube from './module/Youtube';
import Dokter from './module/Dokter';
import Testimoni from './module/Testimoni';
import Article from './module/Article';
import Login from './module/Login';
import Regis from './module/Regis';


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

export default App;
