import React from 'react';
import { FaCheckCircle, FaRegLightbulb, FaRegSmile } from 'react-icons/fa';  // Asumsi ikon tambahan dari react-icons
import { imgAboutUs } from '../assets';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-12 px-10 py-6 mt-10 mb-20">
      {/* Circle with image and outer circle */}
      <div className="md:flex-shrink-0 md:w-1/3 flex justify-center">
        {/* Outer circle */}
        <div className="bg-desktop relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg flex justify-center items-center transition-all duration-300 hover:w-96 hover:h-96 hover:scale-110">
          {/* Ikon yang muncul saat hover, ditempatkan di atas kanan dan bawah kanan */}
          <div className="absolute inset-0 flex justify-center items-center transition-opacity opacity-0 hover:opacity-100">
            <FaRegLightbulb className="text-blue-500 text-3xl absolute right-2 top-2 " />
            <FaRegSmile className="text-blue-500 text-3xl absolute right-2 bottom-2" />
          </div>
          {/* Inner image circle */}
          <div className="absolute w-80 h-80 rounded-full overflow-hidden">
            <img src={imgAboutUs} alt="Happy Family" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow md:w-2/3">
        <h2 className="text-3xl font-bold text-primary">BINA GENERASI</h2>
        <p className="text-gray-600 mt-4">
          BinaGenerasi adalah tujuan terpercaya Anda untuk dukungan dan bimbingan pengasuhan yang komprehensif. Tim kami yang berpengalaman dalam bidang psikologi dan pendidikan anak berkomitmen untuk membantu mempertahankan dan meningkatkan kualitas pengasuhan Anda. Pengasuhan yang berkualitas adalah prioritas kami, dan kami di sini untuk memenuhi kebutuhan Anda.
        </p>
        <div className="flex mt-8">
          <div className="mr-8">
            <h3 className="text-xl font-semibold text-primary">Visi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Tanggung jawab dalam setiap kebutuhan parenting</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Layanan dukungan orang tua yang lengkap</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Memperkuat kemampuan mendidik anak</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary">Misi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Kinerja terbaik dalam pendampingan</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Menyediakan fasilitas modern</li>
              <li className="flex items-center"><FaCheckCircle className="text-primary mr-2" /> Waktu respons yang cepat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
