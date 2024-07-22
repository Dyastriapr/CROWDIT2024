import React from 'react';

const Youtube = () => {
  return (
    <div className='px-4 sm:px-10 mt-10 container mx-auto'>
      <h2 className='text-primary text-center sm:text-left text-2xl md:text-3xl font-extrabold mb-4'>Strategi Parenting Anak Paling Penting</h2>
      <p className='text-right text-gray-600 text-sm'>Source: Youtube TED</p>
      <div className='relative mt-4 aspect-video'> {/* aspect-video provides a 16:9 ratio */}
        <div className='absolute inset-0 bg-primary opacity-30 z-10'></div>
        <iframe 
          className='absolute top-0 left-0 w-full h-full z-20'
          src="https://www.youtube.com/embed/PHpPtdk9rco?start=73" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Youtube;
