import React from 'react';
import Slider from 'react-slick';
import imgDokter1 from '../assets/image/Dokter1.jpg';
import imgDokter2 from '../assets/image/Dokter2.jpg';
import imgDokter3 from '../assets/image/Dokter3.jpg';
import imgDokter4 from '../assets/image/Dokter4.jpg';
import imgDokter5 from '../assets/image/Dokter5.jpeg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Custom Previous Arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer shadow-lg"
      style={{ top: '50%', left: '10px', transform: 'translateY(-50%)' }} // Adjust position
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

// Custom Next Arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer shadow-lg"
      style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }} // Adjust position
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

const Dokter = () => {
  const doctors = [
    { 
      specialty: 'Dokter Spesialis Anak', 
      name: 'Dr. Azizi Shafa Asadel Sp.A', 
      location: 'Bogor, Indonesia',
      imgSrc: imgDokter1 
    },
    { 
      specialty: 'Dokter Spesialis Gizi', 
      name: 'Dr. Yessica Tamara S.Gz', 
      location: 'Medan, Indonesia',
      imgSrc: imgDokter2 
    },
    { 
      specialty: 'Dokter Spesialis Anak', 
      name: 'Dr. Indah Cahya Wardana Sp.A', 
      location: 'Jambi, Indonesia',
      imgSrc: imgDokter3 
    },
    { 
      specialty: 'Psikolog Anak', 
      name: 'Dr. Kathrina Irene Putri Ps.A', 
      location: 'Jakarta, Indonesia',
      imgSrc: imgDokter4 
    },
    { 
      specialty: 'Psikolog Anak', 
      name: 'Dr. Shani Indira Natio Ps.A', 
      location: 'Yogyakarta, Indonesia',
      imgSrc: imgDokter5 
    },
    // Add more doctors as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerMode: true,
          centerPadding: '0px',
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        }
      }
    ]
  };

  return (
    <div className='w-full bg-primary relative'>
      <div className='flex px-10 py-10 mx-auto container'>
        <div className='w-1/3 flex flex-col justify-center items-center'>
          <div className='text-white text-center font-bold text-xl mb-4'>Apa Yang Kami Tawarkan ?</div>
          <div className='bg-white text-primary text-2xl text-center font-bold p-5 rounded-lg capitalize'>
            Kami Menawarkan Layanan Konsultasi dengan Dokter dan Ahli Terbaik
          </div>
        </div>
        <div className='w-2/3 px-5'>
          <Slider {...settings}>
            {doctors.map((doctor, index) => (
              <div key={index} className='px-0.5'>
                <div className='bg-white p-4 rounded-lg flex flex-col items-center w-56 h-72 mx-auto'>
                  <p className='font-bold text-center text-primary'>{doctor.specialty}</p>
                  <img src={doctor.imgSrc} alt="Doctor" className='w-32 h-32 rounded-full mt-3 object-cover' />
                  <p className='font-bold mt-3 text-center text-primary'>{doctor.name}</p>
                  <p className='font-bold text-center text-primary'>{doctor.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Dokter;
