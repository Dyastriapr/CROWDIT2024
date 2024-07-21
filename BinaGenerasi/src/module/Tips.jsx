import React from 'react';
import { MdAccessTime, MdThumbUp, MdSentimentSatisfied, MdOutlineGavel, MdFavorite, MdLightbulb } from 'react-icons/md';

const Tips = () => {
    const tips = [
        {
            title: "Menjadi Panutan yang Baik",
            description: "Anak-anak belajar dengan meniru orang tua. Tunjukkan perilaku positif seperti kejujuran, kebaikan, dan rasa hormat.",
            icon: <MdThumbUp className='text-2xl text-white mb-2' />
        },
        {
            title: "Kontrol Emosi",
            description: "Kelola emosi Anda di depan anak. Hindari berteriak atau menunjukkan perilaku agresif agar anak tidak meniru perilaku negatif tersebut.",
            icon: <MdSentimentSatisfied className='text-2xl text-white mb-2' />
        },
        {
            title: "Berikan Pujian yang Tulus",
            description: "Puji anak dengan tulus saat mereka melakukan hal yang baik untuk meningkatkan rasa percaya diri dan sikap positif mereka.",
            icon: <MdFavorite className='text-2xl text-white mb-2' />
        },
        {
            title: "Tetapkan Batasan yang Jelas",
            description: "Buat dan jelaskan aturan di rumah untuk membantu anak memahami perilaku yang dapat diterima. Konsistensi adalah kunci.",
            icon: <MdOutlineGavel className='text-2xl text-white mb-2' />
        },
        {
            title: "Luangkan Waktu Berkualitas",
            description: "Sempatkan waktu untuk berinteraksi dengan anak, seperti makan bersama, bermain, atau berbicara tentang hari mereka.",
            icon: <MdAccessTime className='text-2xl text-white mb-2' />
        },
        {
            title: "Dorong Kemandirian",
            description: "Ajarkan anak untuk mandiri dengan memberi mereka tanggung jawab sesuai usia, seperti merapikan mainan atau membantu tugas rumah.",
            icon: <MdLightbulb className='text-2xl text-white mb-2' />
        }
    ];

    return (
        <div className='flex px-10 mt-15 '>
            <div className='w-1/4'>
                <div className='bg-primary text-white font-bold rounded btn py-2 hover:bg-primary'>Tips Dan Saran</div>
                <p className='text-primary text-3xl font-extrabold mt-5 leading-normal'>Praktis, Cepat, dan Berguna Untuk Para Orang Tua</p>
            </div>
            <div className='w-3/4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {tips.map((tip, index) => (
                        <div key={index} className='bg-primary flex flex-col items-center p-4 rounded shadow-md'>
                            {tip.icon}
                            <h3 className='font-semibold text-white'>{tip.title}</h3>
                            <p className='text-white text-sm text-center'>{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tips;
