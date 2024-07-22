import React from 'react';

const Youtube = () => {
  return (
    <div className='px-10 mt-10 container mx-auto'>
      <h2 className='text-primary text-3xl font-extrabold mb-4'>Strategi Parenting Anak Paling Penting</h2>
      <p className='text-right text-gray-600'>Source: Youtube TED</p>
      <div className='mt-4'>
        <iframe 
          width="100%" 
          height="800" 
          src="https://www.youtube.com/embed/PHpPtdk9rco?start=73" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  );
}

export default Youtube;
