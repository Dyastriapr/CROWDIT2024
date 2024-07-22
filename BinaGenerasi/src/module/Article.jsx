import React from 'react';

const articles = [
  {
    title: 'Memilih Ekstrakurikuler Buat Anak',
    description: 'Ekstrakurikuler memiliki banyak manfaat bagi perkembangan anak. Orang tua perlu memperhatikan perannya. Ada tips terkait.',
    imageUrl: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '18 Jan 2021',
    link: 'https://www.kompasiana.com/siti14957/669db675ed64155b100ca002/memilihkan-ekstrakurikuler-buat-anak-tips-untuk-orang-tua'
  },
  {
    title: 'Jangan Bandingkan Anak Kita dengan Anak Tetangga',
    description: 'Bunda, Jangan Bandingkan Aku dengan anak tetangga.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661456247892-dbde1ad28277?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.kompasiana.com/awaluddinaceh6780/669d287dc925c4790f29b852/jangan-bandingkan-anak-kita-dengan-anak-tetangga'
  },
  {
    title: 'Strategi Efektif Mengatasi Tantangan Anak di Era digital',
    description: 'Menciptakan lingkungan keluarga yang penuh kasih sayang, terbuka, dan suportif sangat',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682123725103-75b18625c59d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.kompasiana.com/obedsariyanto7003/669cfd5bc925c43e9f7b2f62/strategi-efektif-mengatasi-tantangan-anak-di-era-modern'
  },
  {
    title: 'Mengajarkan Tanggung Jawab Kepada Anak Sejak Dini',
    description: 'Mengajar Tanggung Jawab kepada anak sejak dini, untuk mempersiapkannya di masa depan',
    imageUrl: 'https://images.unsplash.com/photo-1665389666769-9a3300eb4805?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.kompasiana.com/awaluddinaceh6780/669bba05ed641570581df162/mengajarkan-tanggung-jawab-kepada-anak-sejak-dini'
  },
];

const Article = () => {
  return (
    <div className="container mx-auto py-10 px-4 ">
      <div className="mb-6">
       ` <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold mb-2 ">Artikel & News</div>
        <h2 className="text-2xl font-bold text-primary text-2xl md:text-3xl">Artikel Terbaru</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0" data-aos="fade-right">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={articles[0].imageUrl} alt={articles[0].title} className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"/>
            <div className="p-6">
              <a href={articles[0].link} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-bold text-primary mb-2 hover:underline">{articles[0].title}</h3>
              </a>
              <p className="text-gray-700 mb-4 text-justify">{articles[0].description}</p>
              <p className="text-gray-400 text-sm">{articles[0].date}</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4" data-aos="fade-left">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="flex mb-6">
              <img src={article.imageUrl} alt={article.title} className="w-28 h-28 object-cover rounded-lg mr-4 hover:scale-110 transition-transform duration-300"/>
              <div>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <h4 className="text-lg font-bold text-primary hover:underline">{article.title}</h4>
                </a>
                <p className="text-gray-700 text-justify">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Article;
