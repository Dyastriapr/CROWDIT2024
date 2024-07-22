import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa';
import { imgFaq } from '../assets';
import { FaMessage } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className='container mx-auto flex flex-col lg:flex-row py-10'>
      {/* Bagian FAQ */}
      <div className='w-full lg:w-2/3 px-5'>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Bagaimana cara Berkonsultasi Dengan Dokter ?</div>
          <div className="collapse-content">
            <p className="text-sm text-black">Layanan Hourly Place kami menawarkan berbagai jenis ruang yang dapat disewa secara per jam, termasuk kamar mandi, ruang individu, dan tempat parkir, yang memenuhi berbagai kebutuhan dan preferensi.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Bagaimana Fitur Buat Janji dengan Dokter?</div>
          <div className="collapse-content">
            <p className="text-sm text-blacke">Fitur Roommate memungkinkan Anda menemukan dan mengatur teman sekamar untuk ruang berbagi, memastikan kompatibilitas dan kesepakatan bersama.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Bagaimana Cara Mengatasi Anak Tantrum</div>
          <div className="collapse-content">
            <p className="text-sm text-black">Ya, Anda dapat menjelajahi dan melihat ruang yang tersedia tanpa akun, tetapi untuk memesan Anda harus membuat akun untuk tujuan verifikasi.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Bagaimana Cara Mengatasi Anak Kesurupan?</div>
          <div className="collapse-content">
            <p className="text-sm text-black">Last-Minute Deals adalah penawaran khusus untuk ruang yang tersedia dengan harga diskon untuk pemesanan di hari yang sama.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Apakah Perlu Login untuk Buat janji dengan Dokter?</div>
          <div className="collapse-content">
            <p className="text-sm text-black">Login diperlukan untuk memesan hotel dan mengakses Last-Minute Deals untuk memastikan identitas dan detail pemesanan Anda aman.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Apakah Kesiapan Jadi Orang Tua</div>
          <div className="collapse-content">
            <p className="text-sm text-black">Ya, Anda dapat membatalkan pemesanan atau pengaturan teman sekamar, tergantung pada syarat dan ketentuan yang tercantum dalam perjanjian layanan.</p>
          </div>
        </div>
      </div>

      {/* Bagian Kontak */}
      <div className='w-full lg:w-1/3 p-5 mt-10 lg:mt-0'>
        <div className="bg-white px-5 py-10 shadow-md rounded-md text-center">
          <FaMessage  className='text-5xl mb-4 mx-auto text-primary' />
          <h3 className="text-xl text-primary font-bold mb-4">Apakah Anda Memiliki Pertanyaan Lain?</h3>
          <p className="text-sm lg:text-base mb-4 text-black">Platform yang menyeluruh dan ramah pengguna yang menghubungkan Anda dengan apa yang Anda cari, menyederhanakan proses pencarian Anda dengan mudah.</p>
          <Link to="/contact" className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-primary">Kontak Kami</Link>
        </div>
      </div>
    </div>
  );
}

export default Faq;
