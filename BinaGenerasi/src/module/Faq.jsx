import React from 'react'
import { imgFaq } from '../assets'

const Faq = () => {
    return (
      <div className='container mx-auto flex flex-col lg:flex-row relative '>
        <div className='absolute top-5 left-5 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mt-2 ml-2 z-10'>Faq</div>
        <div className='w-full lg:w-1/2 mt-2 flex items-center justify-center px-5'data-aos="fade-right">
          <div className='relative w-full max-w-lg'>
            <img src={imgFaq} alt="FAQ" className='object-cover w-full rounded-lg' style={{ filter: 'brightness(50%)' }} />
            <div className='absolute inset-0 bg-primary opacity-30 rounded-lg'></div>
            <div className='absolute inset-0 flex items-center justify-center text-white text-2xl lg:text-4xl font-bold'>
              FAQ
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 px-5'data-aos="fade-left">
          <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Bagaimana Cara Konsultasi Langsung dengan Dokter?</div>
            <div className="collapse-content">
              <p className="text-sm lg:text-base">Klik Konsultasi dan isi formulir sesuai kebutuhan anda pilih dokter sesuai domisili agar bisa berkonsultasi langsung</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Apa yang harus dilakukan ketika Anak Nangis</div>
            <div className="collapse-content">
              <p className="text-sm lg:text-base">Jika anak menangis, periksa kebutuhan dasar seperti lapar atau lelah, dan pastikan kenyamanan fisiknya. Cobalah menenangkan dengan pelukan, menciptakan lingkungan yang tenang, atau menggunakan distraksi. Jika tangisan berlanjut tanpa alasan jelas, konsultasikan dengan dokter.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Apa yang Orang Tua lakukan ketika anaknya di Bully</div>
            <div className="collapse-content">
              <p className="text-sm lg:text-base">Ketika anak di-bully, orang tua harus mendengarkan, berbicara dengan sekolah, mengajarkan keterampilan menghadapi masalah, dan mendukung kesehatan emosional anak.</p>
            </div>
          </div>
  
          <div className="collapse collapse-arrow bg-white mt-2 shadow-md">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-lg lg:text-xl font-medium text-primary">Apa yang Orang Tua lakukan ketika anaknya di Bully</div>
            <div className="collapse-content">
              <p className="text-sm lg:text-base">Ketika anak di-bully, orang tua harus mendengarkan, berbicara dengan sekolah, mengajarkan keterampilan menghadapi masalah, dan mendukung kesehatan emosional anak.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  

export default Faq



