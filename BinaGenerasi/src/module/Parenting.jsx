import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Parenting = () => {
  const [content, setContent] = useState('');
  const [activeAgeGroup, setActiveAgeGroup] = useState('');

  const handleButtonClick = (text, ageGroup) => {
    const formattedText = (
      <div>
        {text.split('.').map((item, index) => (
          <p key={index} className="mb-2">{item.trim()}</p>
        ))}
      </div>
    );
    setContent(formattedText);
    setActiveAgeGroup(ageGroup);
  };

  return (
    <div className="p-5">
      <p className='text-primary text-center text-2xl md:text-3xl font-extrabold' data-aos="fade-left">Apa Parenting itu Penting?</p>
      
      <div className='flex flex-col md:flex-row mt-10 container mx-auto'>
        <div className='w-full md:w-1/3 overflow-x-hidden' data-aos="fade-right">
          <ul className="timeline timeline-vertical">
            {[
              { age: '0 - 1 Bulan', text: "Masa Neonatal Fase Awal: Pada bulan pertama, bayi belajar mengenal dunia melalui indera penglihatan, pendengaran, dan sentuhan. Nutrisi dan kasih sayang menjadi sangat penting di tahap ini.", key: 'Neonatal' },
              { age: '1 bulan - 1 tahun', text: "3 Bulan: Mulai mengembangkan senyum sosial, mengenali orang tua dan bereaksi terhadap rangsangan visual dan suara.6 Bulan: Mampu duduk dengan bantuan, responsif terhadap nama, dan mulai makan makanan padat.9 Bulan: Mulai merangkak, mengerti permainan ciluk ba, dan meningkatkan keterampilan motorik halus.12 Bulan: Mungkin mulai berjalan, mengucapkan beberapa kata, dan memahami instruksi sederhana.", key: 'Bayi' },
              { age: '1 - 3 Tahun', text: "Pengembangan Bahasa: Mulai mengucapkan lebih banyak kata dan membuat kalimat sederhana.Kemandirian: Meningkatkan kemampuan untuk berjalan, berlari, makan sendiri, dan mulai menggunakan toilet.", key: 'Toddler' },
              { age: '3 - 5 Tahun', text: "Sosialisasi: Meningkatkan interaksi dengan anak lain, bermain berkelompok.Belajar Dasar: Mengenali huruf, angka, dan mungkin mulai membaca.", key: 'Pra-Sekolah' },
              { age: '5 - 12 Tahun', text: "Pendidikan Formal: Mengembangkan keterampilan akademik dan sosial di sekolah.Perkembangan Emosional: Mulai memahami dan mengelola emosi sendiri dan orang lain.", key: 'Masa Sekolah' },
              { age: '12 - 18 Tahun', text: "Pencarian Identitas: Eksplorasi diri, membangun identitas pribadi, dan kemandirian meningkat.Perkembangan Sosial: Membentuk hubungan yang lebih dalam dengan teman dan mungkin mulai tertarik pada hubungan romantis.", key: 'Masa Remaja' },
              { age: '18+ Tahun', text: "Kemandirian Penuh: Mereka mulai menjalani hidup mandiri dari orang tua, seperti karir, pendidikan tinggi, atau membina keluarga sendiri.", key: 'Masa Dewasa' }
            ].map(({ age, text, key }) => (
              <li key={key}>
                <hr className='bg-primary' />
                <div className="timeline-start">{age}</div>
                <div className="timeline-middle">
                  <FaCheckCircle className="text-primary text-xl" />
                </div>
                <div 
                  className={`timeline-end text-black bg-white timeline-box btn hover:bg-primary hover:text-white ${activeAgeGroup === key ? 'bg-primary text-white ' : ''}`}
                  onClick={() => handleButtonClick(text, key)}
                >
                  {key}
                </div>
                <hr className='bg-primary' />
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-2/3 mt-6 md:mt-0 'data-aos="fade-left">
          <p className='text-justify md:text-md'>Parenting adalah proses berkelanjutan yang berlangsung selama masa tumbuh kembang anak dari lahir hingga mereka dewasa. Setiap tahapan memiliki keunikan dan tantangan tersendiri. Berikut ini adalah garis besar tahapan utama dalam tumbuh kembang anak dari bayi baru lahir hingga mereka mencapai kemandirian penuh (Silahkan Pilih Masa Parenting Anak):</p>
          <p className='mt-5 font-semibold text-justify'>{content || "Pilih tahapan untuk melihat detail lebih lanjut."}</p>

          <div className='btn rounded bg-primary text-white hover:bg-primary mt-10'>
            Temukan Lebih banyak Cara
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parenting;
