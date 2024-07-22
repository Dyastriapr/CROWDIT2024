import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-black">Hubungi Kami</h2>
          <p className="mt-2 text-center text-sm text-black">
            Hubungi kami menggunakan informasi di bawah ini. Kami akan merespons pertanyaan dan umpan balik Anda dengan cepat.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 space-y-4 text-black">
            <h3 className="text-xl font-bold text-black">Formulir Kontak Ulak</h3>
            <p>Jika Anda belum menemukan apa yang Anda cari, silakan <a href="#" className="text-blue-500">cek ini</a>.</p>
            <p>Punya pertanyaan atau umpan balik? Jangan ragu untuk menghubungi kami dengan <a href="#" className="text-blue-500">menelpon kami</a>.</p>
            <p>Sebelum mengirim pesan, Anda mungkin ingin meninjau secara menyeluruh <a href="#" className="text-blue-500">halaman dokumentasi</a>.</p>
            <p>Jika Anda tidak dapat menemukan apa yang Anda butuhkan, hubungi dukungan langsung untuk <a href="#" className="text-blue-500">bantuan cepat</a>.</p>
            <p>Silakan pilih produk, masukkan nama depan dan nama belakang Anda, serta berikan email dan nomor telepon Anda sebelum mengirim pesan melalui formulir kontak.</p>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-black">Kirim pesan Anda sekarang!</h3>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pilih Produk</span>
                </label>
                <select className="select select-bordered bg-white">
                  <option>Pesanan</option>
                  <option>Dukungan</option>
                  <option>Umpan Balik</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nama Depan</span>
                </label>
                <input type="text" placeholder="Nama depan" className="input input-bordered bg-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nama Belakang</span>
                </label>
                <input type="text" placeholder="Nama belakang" className="input input-bordered bg-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="you@company.com" className="input input-bordered bg-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Telepon</span>
                </label>
                <input type="tel" placeholder="(+355) 282 872 25" className="input input-bordered bg-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Perusahaan (opsional)</span>
                </label>
                <input type="text" placeholder="Perusahaan Anda" className="input input-bordered bg-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pesan</span>
                </label>
                <textarea className="textarea textarea-bordered bg-white" placeholder="Judul pesan di sini"></textarea>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text ml-2 bg-white">Saya menerima <a href="#" className="text-blue-500">kebijakan privasi</a> situs web ini.</span>
                </label>
              </div>
              <div>
                <button type="submit" className="btn bg-primary text-white w-full hover:bg-blue-500 border-none">Kirim</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
