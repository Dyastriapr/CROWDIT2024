import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdAccessTime, MdThumbUp, MdSentimentSatisfied, MdOutlineGavel, MdFavorite, MdLightbulb } from 'react-icons/md';
import 'swiper/css'; // Import Swiper styles

// Inline CSS for uniform card heights
const cardStyle = {
    height: "200px", // Set a fixed height if necessary
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between' // Ensures content is spaced evenly
};

const Tips = () => {
    const tips = [
        {
            title: "Menjadi Panutan yang Baik",
            description: "Anak-anak belajar dengan meniru orang tua. Tunjukkan perilaku positif seperti kejujuran, kebaikan, dan rasa hormat.",
            icon: <MdThumbUp className='text-4xl text-white mb-2' />
        },
        {
            title: "Kontrol Emosi",
            description: "Kelola emosi Anda di depan anak. Hindari berteriak atau menunjukkan perilaku agresif agar anak tidak meniru perilaku negatif tersebut.",
            icon: <MdSentimentSatisfied className='text-4xl text-white mb-2' />
        },
        {
            title: "Berikan Pujian yang Tulus",
            description: "Puji anak dengan tulus saat mereka melakukan hal yang baik untuk meningkatkan rasa percaya diri dan sikap positif mereka.",
            icon: <MdFavorite className='text-4xl text-white mb-2' />
        },
        {
            title: "Tetapkan Batasan yang Jelas",
            description: "Buat dan jelaskan aturan di rumah untuk membantu anak memahami perilaku yang dapat diterima. Konsistensi adalah kunci.",
            icon: <MdOutlineGavel className='text-4xl text-white mb-2' />
        },
        {
            title: "Luangkan Waktu Berkualitas",
            description: "Sempatkan waktu untuk berinteraksi dengan anak, seperti makan bersama, bermain, atau berbicara tentang hari mereka.",
            icon: <MdAccessTime className='text-4xl text-white mb-2' />
        },
        {
            title: "Dorong Kemandirian",
            description: "Ajarkan anak untuk mandiri dengan memberi mereka tanggung jawab sesuai usia, seperti merapikan mainan atau membantu tugas rumah.",
            icon: <MdLightbulb className='text-4xl text-white mb-2' />
        }
    ];

    return (
        <div className='flex px-5 mt-15 container mx-auto'>
            <div className='w-1/4 hidden md:block'>
                <div className='bg-primary text-white font-bold rounded btn py-2 hover:bg-primary'>Tips Dan Saran</div>
                <p className='text-center md:text-left lg:text-left text-primary text-2xl md:text-3xl font-extrabold mt-5 leading-normal'>Praktis, Cepat, dan Berguna Untuk Para Orang Tua</p>
            </div>
            <div className='w-3/4 hidden md:block ' data-aos="fade-right overflow-hidden">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {tips.map((tip, index) => (
                        <div key={index} className='bg-primary flex flex-col items-center p-4 rounded shadow-md hover:scale-105 transition-transform duration-300' style={cardStyle}>
                            {tip.icon}
                            <h3 className='font-semibold text-white'>{tip.title}</h3>
                            <p className='text-white text-md md:text-md text-center'>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full md:hidden '>
                <div className='text-left mb-4'>
                    <div className='bg-primary text-white font-bold rounded btn py-2'>Tips Dan Saran</div>
                    <p className='text-primary text-2xl md:text-3xl font-bold mt-2 mb-4 text-center md:text-left lg:text-left'>Praktis dan Berguna Untuk Orang Tua</p>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {tips.map((tip, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-primary flex flex-col items-center p-4 rounded shadow-md' style={cardStyle}>
                                {tip.icon}
                                <h3 className='font-semibold text-white'>{tip.title}</h3>
                                <p className='text-white text-sm text-center'>{tip.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Tips;
