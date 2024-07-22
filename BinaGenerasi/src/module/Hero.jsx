import React from 'react';
import { imgHero, imgHero2, imgHero3 } from '../assets';


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row w-full md:mt-10 container mx-auto">
      {/* Text and images combined section for mobile, only text for desktop */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-10">
        <div>
          <p className="text-primary md:text-xl font-bold mb-2">Didik Anak Kesayanganmu Sedari Dini</p>
          <p className="text-3xl md:text-5xl font-extrabold mb-2 md:leading-normal leading-none">Menginspirasi Orang Tua Disetiap Tahap <span className='text-primary'>Perkembangan</span></p>
          
          {/* Images visible only on mobile */}
          <div className="md:hidden flex flex-row space-x-4 ">
            <img src={imgHero} alt="Family Outdoor" className="rounded-xl object-cover shadow-md " />
          </div>

          <p className="md:text-xl">Menjawab setiap permasalahan orangtua dalam mendidik anak pada masa perkembangannya</p>
          <button className="mt-10 py-2 px-4 bg-primary text-white font-bold rounded-2xl">
            Konsultasi
          </button>
        </div>
      </div>
      
      {/* Images visible only on desktop */}
      <div className="hidden md:flex w-full md:w-1/2 items-center justify-center overflow-x-auto">
        <div className="flex flex-row space-x-4 p-4">
          <img src={imgHero} alt="Family Outdoor" className="rounded-xl w-44 h-80 object-cover shadow-md border-2 mb-20 border-solid border-primary hover:scale-105 transition-transform duration-300" />
          <img src={imgHero2} alt="Father and Child" className="rounded-xl w-44 h-80 object-cover shadow-md mt-10 border-2 border-solid border-primary hover:scale-105 transition-transform duration-300" />
          <img src={imgHero3} alt="Mother and Child" className="rounded-xl w-44 h-80 object-cover shadow-md mt-20 border-2 border-solid border-primary hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
