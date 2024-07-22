import React from 'react';
import { imgDokter1 } from '../assets';

const Testimoni = () => {
  return (
    <div className="py-10 px-6 container mx-auto flex flex-col items-center">
      <div className="w-full">
        <div className="text-left mb-5">
          <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">Testimoni</div>
        </div>
      </div>
      <div className="text-center max-w-4xl">
        <p className="text-2xl font-semibold mb-6">“Luar biasa! ini benar-benar melampaui harapan saya dalam segala hal. Ini telah menjadi bagian penting dari kehidupan sehari-hari saya sebagai orang tua, dan saya sangat bersyukur atas dampak positif yang telah diberikannya pada keluarga kami.”</p>
        <div className="flex items-center justify-center">
          <img src={imgDokter1} alt="Nama Orang Tua" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="font-semibold text-lg">Dyas Tri Ap</p>
            <p className="text-sm text-gray-600">Parent</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
