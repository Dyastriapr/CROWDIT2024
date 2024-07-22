import React from 'react';
import { imgHero, imgHero2, imgHero3, imgNangis, imgNangis2, imgNangis3 } from '../assets'; // Ensure imgHero is an array or object with paths to your images
import { GoShieldX } from "react-icons/go";
import { BiMessageAltX } from "react-icons/bi";
import { FaPersonCircleXmark } from "react-icons/fa6";

const Kesalahan = () => {
  return (
    <div className='px-10 mt-10 container mx-auto'>
      <h2 className='text-center text-3xl font-extrabold mb-6 text-primary'>3 Kesalahan Utama Dalam Mendidik Anak</h2>
      <div className='flex flex-wrap justify-center gap-1'>
        {/* First row of images */}
        <div className='relative w-96 h-96'>
          <img src={imgNangis} alt="Image 1" className="w-full h-full object-cover rounded" />
          <div className='absolute inset-0 bg-primary opacity-50 rounded'></div>
        </div>
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <GoShieldX className='text-5xl text-primary mb-4' />
          <p className='text-2xl text-center font-bold text-primary mb-4'>Terlalu Protektif</p>
          <p className='text-justify px-5'>Melindungi anak secara berlebihan dapat menghambat kemandirian dan kemampuan mereka untuk menghadapi tantangan.</p>
        </div>
        <div className='relative w-96 h-96'>
          <img src={imgNangis2} alt="Image 3" className="w-full h-full object-cover rounded" />
          <div className='absolute inset-0 bg-primary opacity-50 rounded'></div>
        </div>
        {/* Second row of images */}
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <BiMessageAltX className='text-5xl text-primary mb-4' />
          <p className='text-2xl text-center font-bold text-primary mb-4'>Kurangnya Komunikasi</p>
          <p className='text-justify px-5'>Tidak meluangkan waktu untuk berbicara dan mendengarkan anak dapat menghambat perkembangan emosional dan sosial mereka.</p>
        </div>
        <div className='relative w-96 h-96'>
          <img src={imgNangis3} alt="Image 5" className="w-full h-full object-cover rounded" />
          <div className='absolute inset-0 bg-primary opacity-50 rounded'></div>
        </div>
        <div className='w-96 h-96 flex flex-col items-center justify-center bg-white rounded'>
          <FaPersonCircleXmark className='text-5xl text-primary mb-4'/>
          <p className='text-2xl text-center font-bold text-primary mb-4'>Tidak Memberikan 
          Contoh yang Baik</p>
          <p className='text-justify px-5'>Tidak meluangkan waktu untuk berbicara dan mendengarkan anak dapat menghambat perkembangan emosional dan sosial mereka.</p>
        </div>
      </div>
    </div>
  );
}

export default Kesalahan;
