import React, { useState } from 'react';
import imgDokter1 from '../assets/image/ListDokter1.jpg'; 
import imgDokter2 from '../assets/image/ListDokter2.jpg'; 
import imgDokter3 from '../assets/image/ListDokter3.jpg';  
import imgDokter4 from '../assets/image/ListDokter4.jpg';
import imgDokter5 from '../assets/image/ListDokter5.jpg';  
import imgDokter7 from '../assets/image/ListDokter7.jpg'; 
import imgDokter8 from '../assets/image/ListDokter8.jpg';
import imgDokter6 from '../assets/image/ListDokter6.jpg';
import imgDokter9 from '../assets/image/Dokter5.jpeg';
import imgDokter10 from '../assets/image/Dokter4.jpg';
import imgDokter11 from '../assets/image/Dokter2.jpg';
import imgDokter12 from '../assets/image/Dokter3.jpg';

const doctors = [
  {
    name: 'Dr. IU',
    specialty: 'Psikolog Anak',
    rating: '5.00',
    reviews: '2k+',
    patients: '2500',
    image: imgDokter1, 
  },
  {
    name: 'Dr. Agua',
    specialty: 'Psikolog Anak',
    rating: '5.00',
    reviews: '520',
    patients: '2000',
    image: imgDokter2,
  },
  {
    name: 'Dr. Lee Hwi',
    specialty: 'Psikolog Anak',
    rating: '4.50',
    reviews: '820',
    patients: '1500',
    image: imgDokter3,
  },
  {
    name: 'Dr. Suzy',
    specialty: 'Ahli Gizi',
    rating: '5.00',
    reviews: '12k+',
    patients: '700',
    image: imgDokter4,
  },
  {
    name: 'Dr. Bagoss',
    specialty: 'Psikolog Anak',
    rating: '4.80',
    reviews: '1k+',
    patients: '1800',
    image: imgDokter5,
  },
  {
    name: 'Dr. John Doe',
    specialty: 'Psikiater',
    rating: '4.90',
    reviews: '850',
    patients: '1500',
    image: imgDokter6,
  },
  {
    name: 'Dr. Sarah Lee',
    specialty: 'Psikiater',
    rating: '4.70',
    reviews: '900',
    patients: '1300',
    image: imgDokter7,
  },
  {
    name: 'Dr. Zee',
    specialty: 'Dokter Spesialis Anak',
    rating: '4.85',
    reviews: '1.2k',
    patients: '1600',
    image: imgDokter8,
  },
  { 
    name: 'Dr. Shani ', 
    specialty: 'Psikolog Anak', 
    rating: '4.85',
    reviews: '1.2k',
    patients: '1600',
    image: imgDokter9 
  },
  { 
    specialty: 'Dokter Spesialis Gizi', 
    rating: '4.80',
    reviews: '1k+',
    patients: '1800',
    name: 'Dr. Chika ', 
    image: imgDokter11 
  },
  { 
    specialty: 'Dokter Spesialis Anak', 
    rating: '4.80',
    reviews: '1k+',
    patients: '1800',
    name: 'Dr. Indah ', 
    image: imgDokter12 
  },
  { 
    specialty: 'Psikolog Anak',
    rating: '4.80',
    reviews: '1k+',
    patients: '1800', 
    name: 'Dr. Kathrina ', 
    image: imgDokter10 
  },
];

const ListDoctor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Daftar Dokter</h2>
        <div className="w-full flex justify-center mb-4">
          <input
            type="text"
            placeholder="Cari Nama Dokter..."
            value={searchTerm}
            onChange={handleSearch}
            className="input input-bordered w-full max-w-md bg-white"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"  data-aos="fade-up"  data-aos-duration="1000">
                <img className="w-40 h-40 rounded-full mb-4 object-cover hover:scale-110 transition-transform duration-300" src={doctor.image} alt={doctor.name} />
                <h3 className="text-xl font-bold text-black">{doctor.name}</h3>
                <p className="text-primary">{doctor.specialty}</p>
                <p className="text-yellow-500 flex items-center">
                  <span className="mr-1">{doctor.rating}</span> 
                  <span>⭐ ({doctor.reviews})</span>
                </p>
                <p className="text-gray-700">+{doctor.patients} Pasien</p>
                <button className="btn bg-primary mt-4 text-white border-none">Buat Janji</button>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">Dokter tidak ditemukan</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListDoctor;
