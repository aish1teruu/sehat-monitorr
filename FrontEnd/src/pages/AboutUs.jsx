import React from 'react';
import { Link } from 'react-router-dom';
import aboutUsImage from '../Asset/Rectangle 147 (1).png';
import ellipse1Image from '../Asset/Ellipse 1.png';
import dzakwanImage from '../Asset/fotodzakwan.jpg';
import aisyImage from '../Asset/FotoAisy.jpg';
import fannyImage from '../Asset/FotoFanny.jpg';
import nadhifImage from '../Asset/nadip.jpg';
import nadiahImage from '../Asset/fotonadiah.jpg';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'Nadhif', role: 'Lead, Backend Developer', image: nadhifImage },
    { id: 2, name: 'Fany', role: 'UI/UX Design, Frontend Developer', image: fannyImage },
    { id: 3, name: 'Nadiah', role: 'Technical Writer', image: nadiahImage },
    { id: 4, name: 'Dzakwan', role: 'Database Administrator', image: dzakwanImage },
    { id: 5, name: 'Aisy', role: 'Frontend', image: aisyImage }
  ];

  return (
    <div className="min-h-screen bg-green-900 text-white font-sans animate-fadeIn">
      {/* Hero Section - navigation is now handled by Layout component */}

      {/* Hero Section */}
      <section className="relative py-16 px-6 mt-32 mb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-700 to-green-900 opacity-70" />
        <div className="absolute inset-0 opacity-30 flex items-center justify-center">
          <img
            src={require('../Asset/fotbar.jpg')}
            alt="Medical Team"
            className="object-contain"
          />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-pink-300 mb-4 font-poppins">
            Get To Know More About US
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md lg:max-w-3xl text-white leading-relaxed mt-4 font-poppins">
            Kami percaya bahwa teknologi dapat menjadi jembatan penting antara masyarakat, tenaga medis, dan pemerintah dalam menciptakan sistem pelaporan kesehatan yang cepat, akurat, dan terpercaya.
          </p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 px-6 bg-green-900 relative overflow-hidden">
        {/* Logo kanan atas */}
        <div className="absolute top-12 right-4 z-0 -rotate-12">
          <img
            src={`${process.env.PUBLIC_URL}/setor putih.png`}
            alt="SETOR Logo"
            className="w-24 sm:w-32 md:w-50 h-24 sm:h-32 md:h-50 object-contain opacity-70 blur"
          />
        </div>

        {/* Logo kiri bawah */}
        <div className="absolute bottom-4 left-4 z-0 rotate-12">
          <img
            src={`${process.env.PUBLIC_URL}/setor putih.png`}
            alt="SETOR Logo"
            className="w-24 sm:w-32 md:w-32 lg:w-full h-24 sm:h-32 md:h-32 lg:h-full object-contain opacity-70 blur"
          />
        </div>

        {/* Ellipse 1 kiri atas */}
        <div className="absolute -top-20 sm:-top-32 -left-32 sm:-left-56 z-0 opacity-40 blur rotate-90">
          <img
            src={ellipse1Image}
            alt="Ellipse 1"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto object-contain"
          />
        </div>

        {/* Ellipse 1 kanan bawah */}
        <div className="absolute -bottom-20 sm:-bottom-30 -right-32 sm:-right-56 z-0 opacity-40 blur -rotate-90">
          <img
            src={ellipse1Image}
            alt="Ellipse 1"
            className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px] h-auto object-contain"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 font-serif"
            style={{ fontFamily: "'La Belle Aurore', cursive", color: '#FFD0EE' }}>
            The Purpose Behind Our Platform
          </h2>

          <div className="bg-neutral-900 rounded-xl p-4 sm:p-6 md:p-10 shadow-xl bg-opacity-70 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-1 items-center">

              {/* Text */}
              <div className="space-y-4 text-white font-poppins">
                <p className="text-sm sm:text-base leading-relaxed">
                  Banyak penanganan medis di Indonesia yang masih belum sesuai standar, namun tidak pernah dilaporkan karena tidak ada kanal pelaporan yang mudah, cepat, dan dapat ditindaklanjuti. Data nasional menunjukkan ribuan insiden keselamatan pasien tercatat setiap tahun, sementara banyak fasilitas kesehatan belum aktif melapor; sehingga jumlah kasus sebenarnya jauh lebih besar.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Platform ini hadir untuk menjembatani kesenjangan tersebut. Dengan formulir pelaporan yang sederhana, dukungan AI WoundChecker untuk mengecek kesesuaian tindakan, serta fitur pengiriman otomatis ke pihak berwenang, laporan masyarakat dapat berubah menjadi data yang benar-benar ditindak, bukan sekadar keluhan yang hilang begitu saja.
                </p>
              </div>

              {/* Image card */}
              <div className="relative flex items-center justify-center mt-4 md:mt-0">
                <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-sm">
                  <img
                    src={aboutUsImage}
                    alt="Platform visualization"
                    className="w-full rounded-xl"
                  />

                  <div className="absolute top-2 sm:top-4 right-4 sm:right-8 bg-black bg-opacity-70 p-1 sm:p-2 rounded-md text-[#FFD0EE] text-lg sm:text-2xl md:text-3xl font-bold">
                    100+
                  </div>

                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black bg-opacity-70 p-1 sm:p-2 rounded-md text-[#FFD0EE] text-lg sm:text-2xl md:text-3xl font-bold">
                    100+
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-green-900 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFD0EE] text-center mb-8 sm:mb-12 -mt-4 sm:-mt-10 font-poppins">
            Meet Our Teams
          </h2>

          {/* Ellipse 1 kiri bawah */}
          <div className="absolute -bottom-16 -left-80 opacity-50 blur">
            <img
              src={ellipse1Image}
              alt="Ellipse 1"
              className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[900px] h-auto object-contain -rotate-90 z-0"
            />
          </div>

          {/* Logo kanan bawah */}
          <div className="absolute -bottom-24 sm:-bottom-32 right-8 sm:right-24 z-0 -rotate-12">
            <img
              src={`${process.env.PUBLIC_URL}/setor putih.png`}
              alt="SETOR Logo"
              className="w-32 sm:w-40 md:w-50 h-32 sm:h-40 md:h-50 object-contain opacity-70 blur"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow z-50"
              >
                <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-700 w-full h-full"></div> // Fallback jika tidak ada gambar
                  )}
                  <div className="absolute inset-0 bg-opacity-30 flex items-end p-3 sm:p-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white-400 ">{member.name}</h3>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-gray-200 text-sm sm:text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
