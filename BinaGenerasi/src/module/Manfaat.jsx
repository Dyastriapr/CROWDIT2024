import React from 'react';
import { MdPerson, MdHealthAndSafety, MdOutlinePsychology, MdOutlineSupport } from 'react-icons/md';

const Manfaat = () => {
  return (
    <div className="bg-white p-8 shadow-md container mx-auto">
      <h2 className="text-center text-3xl font-extrabold mb-6 text-primary">Manfaat Bersama Kami</h2>
      <p className="text-center mb-10 md:px-32">Rasakan Pemahaman Mendalam dan Dukungan Tulus dalam Pengasuhan Anak Bersama Kami. Kami Berkomitmen Mendampingi Setiap Langkah Perkembangan Anak Anda Menuju Masa Depan yang Cerah.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4 shadow rounded-lg hover:scale-105 transition-transform duration-300">
          <MdPerson className="text-4xl mb-2 text-primary" />
          <h3 className="font-semibold">Dokter Ahli</h3>
          <p className='text-center'>Dapatkan panduan dari para ahli parenting yang berpengalaman dalam mendidik dan mengasuh anak.</p>
        </div>
        <div className="flex flex-col items-center p-4 shadow rounded-lg hover:scale-105 transition-transform duration-300">
          <MdOutlinePsychology className="text-4xl mb-2 text-primary" />
          <h3 className="font-semibold">Metode Modern</h3>
          <p className='text-center'>Manfaatkan teknik dan pendekatan terkini dalam pengasuhan anak untuk mendukung perkembangan mereka secara optimal.</p>
        </div>
        <div className="flex flex-col items-center p-4 shadow rounded-lg hover:scale-105 transition-transform duration-300">
          <MdHealthAndSafety className="text-4xl mb-2 text-primary" />
          <h3 className="font-semibold">Pendekatan Personal</h3>
          <p className='text-center'>Setiap anak unik, dan kami menyediakan pendekatan yang disesuaikan untuk mendukung kebutuhan spesifik anak Anda.</p>
        </div>
        <div className="flex flex-col items-center p-4 shadow rounded-lg hover:scale-105 transition-transform duration-300">
          <MdOutlineSupport className="text-4xl mb-2 text-primary" />
          <h3 className="font-semibold">Bantuan Darurat</h3>
          <p className='text-center'>Dukungan cepat dan tepat saat Anda membutuhkannya, untuk memastikan keamanan dan kesehatan anak Anda selalu terjaga.</p>
        </div>
      </div>
    </div>
  );
}

export default Manfaat;
