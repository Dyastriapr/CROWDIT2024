import React from 'react';
import { imgNangis, imgNangis2, imgNangis3 } from '../assets';
import { GoShieldX } from "react-icons/go";
import { BiMessageAltX } from "react-icons/bi";
import { FaPersonCircleXmark } from "react-icons/fa6";

const Kesalahan = () => {
  return (
    <div className='px-10 mt-10' data-aos="fade-up">
      <h2 className='text-center text-2xl md:text-3xl font-extrabold mb-6 text-primary'>3 Kesalahan Utama Dalam Mendidik Anak</h2>
      {/* First row */}
      <div className='flex flex-wrap justify-center '>
        <div className='lg:w-96 lg:h-96 bg-primary bg-opacity-30 relative w-64 h-64'>
          <img src={imgNangis} alt="Image 1" className="w-full h-full object-cover rounded absolute" />
        </div>
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <GoShieldX className='text-5xl text-primary mb-4' />
          <p className='text-lg md:text-xl text-center font-bold text-primary mb-4'>Terlalu Protektif</p>
          <p className='text-justify p-5 text-black'>Melindungi anak secara berlebihan dapat menghambat kemandirian dan kemampuan mereka untuk menghadapi tantangan.</p>
        </div>
        <div className='lg:w-96 lg:h-96 bg-primary bg-opacity-30 relative w-64 h-64'>
          <img src={imgNangis2} alt="Image 3" className="w-full h-full object-cover rounded absolute" />
        </div>
      </div>
      {/* Second row */}
      <div className='flex flex-wrap justify-center'>
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <BiMessageAltX className='text-5xl text-primary mb-4' />
          <p className='text-lg md:text-xl text-center font-bold text-primary mb-4'>Kurangnya Komunikasi</p>
          <p className='text-justify p-5 text-black'>Tidak meluangkan waktu untuk berbicara dan mendengarkan anak dapat menghambat perkembangan emosional dan sosial mereka.</p>
        </div>
        <div className='lg:w-96 lg:h-96 bg-primary bg-opacity-30 relative w-64 h-64'>
          <img src={imgNangis3} alt="Image 5" className="w-full h-full object-cover rounded absolute" />
        </div>
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <FaPersonCircleXmark className='text-5xl text-primary mb-4'/>
          <p className='text-lg md:text-xl text-center font-bold text-primary mb-4 px-5'>Tidak Memberikan 
          Contoh yang Baik</p>
          <p className='text-justify p-5 text-black'>Tidak meluangkan waktu untuk berbicara dan mendengarkan anak dapat menghambat perkembangan emosional dan sosial mereka.</p>
        </div>
      </div>
    </div>
  );
}

export default Kesalahan;
