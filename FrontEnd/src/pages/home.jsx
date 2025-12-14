import { Link } from 'react-router-dom';
import backgroundImage from '../Asset/ChatGPT Image Nov 13, 2025, 06_03_54 PM 2.png';
import ellipseBackground from '../Asset/Ellipse 1.png';
import logoPink from '../Asset/setor pink.png';
import logoWhite from '../Asset/setor putih.png';
import groupImage from '../Asset/Ellipse 1.png';
import teamImage from '../Asset/ChatGPT_Image_13_Nov_2025__18.09.25-removebg-preview 1 (1).png';
import topLeftEllipse from '../Asset/Group 41.png';
import group73Image from '../Asset/Group 73.png';
import icon1 from '../Asset/amico.png';
import icon2 from '../Asset/bro.png';
import icon3 from '../Asset/documento_foi_aprovado_conceito_ilustração_design_plano_vetor_eps10__elemento_gráfico_moderno_para_página_de_destino__ui_de_estado_vazio__infográfico__ícone-removebg-preview 1.png';
import icon4 from '../Asset/rafiki.png';
import icon5 from '../Asset/amico2.png';
import phoneIcon from '../Asset/fluent_call-12-filled.png';
import emailIcon from '../Asset/line-md_email.png';
import instagramIcon from '../Asset/mdi_instagram.png';
import whatsappIcon from '../Asset/whatsapp-white-icon 1.png';
import rectangleImage from '../Asset/Rectangle 132.png';
import ellipse26Image from '../Asset/Ellipse 26.png';

export default function Home() {

  // Mock data for the report submission steps
  const reportSteps = [
    {
      number: '1',
      title: 'Masukkan Data',
      description: 'Masukkan identitas pelapor, lokasi kejadian, tanggal penanganan, deskripsi singkat kondisi, dan unggah gambar (bila perlu) sebagai bukti pendukung.',
      icon: (
        <img src={icon1} className="w-28 h-28 text-green-900" alt="Masukkan Data" />
      )
    },
    {
      number: '2',
      title: 'Masukkan Gambar Luka',
      description: 'Masukkan gambar yang nantinya akan di check dengan Gemini AI',
      icon: (
        <img src={icon2} className="w-28 h-28 text-green-900" alt="Masukkan Gambar Luka" />
      )
    },
    {
      number: '3',
      title: 'Kirim Laporan',
      description: 'Setelah semua data dan hasil analisis siap, tekan tombol "Kirim Laporan" untuk mengirimkan laporan Anda ke sistem.',
      icon: (
        <img src={icon3} className="w-28 h-28 text-green-900" alt="Kirim Laporan" />
      )
    },
    {
      number: '4',
      title: 'Unduh & Bagikan Laporan Anda',
      description: 'Setelah laporan berhasil dikirim, Anda dapat mengunduh versi imajenya dan anda dapat membagikannya ke media sosial anda',
      icon: (
        <img src={icon4} className="w-28 h-28 text-green-900" alt="Unduh & Bagikan" />
      )
    },
    {
      number: '5',
      title: 'Tunggu Email Balasan dari Kami',
      description: 'Tim kami akan meninjau laporan Anda. Hasil verifikasi dan tindak lanjut akan dikirim melalui email yang Anda daftarkan.',
      icon: (
        <img src={icon5} className="w-28 h-28 text-green-900" alt="Tunggu Email" />
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#255F3B] text-white animate-fadeIn">
      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#255F3B] opacity-80"></div>
        {/* The ellipse background will be added behind the main image */}

        {/* Adding Ellipse 1 image as sticky element positioned to the left with specified dimensions */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-80 z-0 hidden md:block">
          <img
            src={topLeftEllipse}
            alt="Ellipse 1"
            className="w-[200px] md:w-[300px] lg:w-[428px] h-auto"
          />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 relative z-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-pink-200 leading-tight ml-0 md:ml-6 text-center md:text-left">
                Awasi dan Tingkatkan Kualitas Penanganan Kesehatan di Indonesia
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 ml-0 md:ml-6 text-center md:text-left">
                Kesehatan yang baik berawal dari kepedulian kita bersama. Melalui Sehat Monitor, Anda dapat turut mengawasi dan melaporkan penanganan kesehatan agar lebih cepat, aman, dan berkualitas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 ml-0 md:ml-6 justify-center md:justify-start">
                <Link to="/report-form" className="bg-pink-400 text-white font-bold py-3 px-6 rounded-full hover:bg-pink-500 transition-colors text-center">
                  Mulai Pelaporan
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('guide');
                    if (element) {
                      const offsetTop = element.offsetTop - 100;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-green-900 transition-colors"
                >
                  Panduan
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 relative z-20 mt-8 lg:mt-0">
              <div className="relative flex justify-center items-center">
                {/* Background ellipse behind main image - moved slightly to the right */}
                <img
                  src={ellipseBackground}
                  alt="Background ellipse"
                  className="rounded-lg absolute hidden md:block w-full max-w-[400px]"
                  style={{ width: '100%', maxWidth: '500px', height: 'auto', zIndex: 0, top: '-50px' }}
                />

                <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
                  {/* Adding the logo behind the main image */}
                  <div className="absolute -top-8 -left-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 z-0 rotate-12 hidden md:block">
                    <img
                      src={logoWhite}
                      alt="SETOR Logo"
                      className="w-full h-full object-contain opacity-70 blur"
                    />
                  </div>

                  {/* Main image */}
                  <img
                    src={backgroundImage}
                    alt="Person with bandaged arm"
                    className="rounded-lg relative bg-opacity-0 mx-auto w-full h-auto z-10 max-h-[300px] sm:max-h-[400px]"
                  />

                  <div className="absolute top-1/4 -right-2 sm:-right-4 md:right-[-20px] bg-black bg-opacity-40 p-1 sm:p-2 md:p-4 rounded-lg z-20 text-center transform translate-x-1/2 md:translate-x-0">
                    <div className="text-xs sm:text-sm text-white mb-1 md:mb-2 font-poppins">Powered by</div>
                    <img
                      src={group73Image}
                      alt="Powered by"
                      className="w-16 sm:w-20 md:w-32 h-auto mx-auto"
                    />
                  </div>

                  {/* Moving the "Jaminan laporan tersampaikan kepada pemerintah" text below the left side of the image and with black background */}
                  <div className="absolute bottom-2 left-0 bg-black bg-opacity-40 p-1 sm:p-2 md:p-4 rounded-lg max-w-[100px] sm:max-w-[150px] md:max-w-[220px] z-20">
                    <p className="text-xs sm:text-sm md:text-lg text-white font-poppins">Jaminan laporan tersampaikan kepada pemerintah</p>
                  </div>
                </div>

                {/* Moving the other logo to the bottom right */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 z-0 rotate-12 hidden md:block">
                  <img
                    src={logoWhite}
                    alt="SETOR Logo"
                    className="w-full h-full object-contain opacity-70 blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Submission Guide Section */}
      <section id="guide" className="py-16 px-6 bg-[#255F3B] relative overflow-hidden">
        <div className="container mx-auto">
          {/* Ellipse 26 Image positioned behind the cards */}
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={ellipse26Image}
              alt="Ellipse 26"
              className="w-[300px] sm:w-[500px] md:w-[1000px] lg:w-[1400px] h-auto opacity-100 z-0 hidden md:block" // Hidden on mobile
            />
          </div>

          <h2 className="text-4xl font-bold text-center mb-14 -mt-4 text-white relative z-10">Panduan Pengisian Laporan</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {reportSteps.map((step, index) => (
              <div key={index} className="bg-white text-gray-800 rounded-xl p-4 shadow-xl hover:shadow-xl transition-shadow z-20">
                <div className="flex flex-col">
                  <div className="flex justify-center w-full mb-2">
                    <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-xl font-bold text-white font-poppins">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-green-900 text-left px-2">{step.title}</h3>
                  <div className="flex justify-center w-full my-2">
                    {step.icon}
                  </div>
                  <p className="text-xs leading-relaxed text-gray-700 text-left px-2 mt-2 font-poppins">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="contact" className="py-16 px-6 bg-[#255F3B]">
        <div className="container mx-auto relative">
          {/* Logo di kiri atas - Hidden on mobile */}
          <div className="absolute top-20 -left-4 w-32 h-32 sm:w-40 sm:h-40 md:w-45 md:h-45 z-0 opacity-70 -rotate-12 blur hidden md:block">
            <img
              src={logoWhite}
              alt="SETOR Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Logo di kanan bawah - Hidden on mobile */}
          <div className="absolute bottom-4 left-64 sm:left-80 md:left-96 w-32 h-32 sm:w-40 sm:h-40 md:w-50 md:h-50 z-0 opacity-70 rotate-12 blur hidden md:block">
            <img
              src={logoWhite}
              alt="SETOR Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* WhatsApp icon di kanan atas - Hidden on mobile */}
          <div className="absolute top-16 right-16 sm:top-20 sm:right-24 z-10 hidden md:block">
            <img
              src={whatsappIcon}
              alt="WhatsApp"
              className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40"
            />
          </div>


          {/* Instagram icon di kanan bawah - Hidden on mobile */}
          <div className="absolute -bottom-10 sm:-bottom-14 -right-4 z-10 -rotate-12 hidden md:block">
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-32 sm:w-48 md:w-60 h-32 sm:h-48 md:h-60 object-contain blur opacity-70 "
            />
          </div>

          {/* Ellipse 1 image di kiri bawah - Hidden on mobile */}
          <div className="absolute -top-0 -left-20 sm:-left-30 opacity-100 z-0 hidden md:block">
            <img
              src={ellipseBackground}
              alt="Ellipse 1"
              className="w-[300px] sm:w-[400px] md:w-[600px] h-auto"
            />
          </div>

          <div className="text-left relative z-30">
            <div className="mb-8 text-center md:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
                <span className="text-white">"Karena</span>
                <span className="text-white"> Setiap</span>
                <span style={{ color: '#FFD0EE' }}> Laporan</span>
                <span className="text-white"> anda</span>
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4" style={{ fontFamily: "'La Belle Aurore', cursive" }}>
                <span className="z-30" style={{ color: '#FFD0EE' }}>Bermanfaat</span>
                <span className="text-white"> Bagi</span>
                <span className="text-white"> Sesama"</span>
              </div>
            </div>

            <div className="flex flex-col items-center md:flex-row items-center gap-6 md:gap-8 mt-8 relative">
              <div className="md:w-1/2 w-full max-w-[300px] md:max-w-none relative">
                <img
                  src={teamImage}
                  alt="Team members"
                  className="z-50 relative w-full h-auto"
                />
              </div>

              <div className="md:w-1/2 w-full">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-200 text-center md:text-left mb-6">Contact Us</h3>
                <div className="space-y-3 pl-0 md:pl-1">
                  <div className="flex items-center gap-3">
                    <img src={phoneIcon} className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" alt="Phone Icon" />
                    <span className="text-base sm:text-lg">+6282134577655</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={emailIcon} className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" alt="Email Icon" />
                    <span className="text-base sm:text-lg">sehatmonitor@gmail.com</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img src={instagramIcon} className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" alt="Instagram Icon" />
                    <span className="text-base sm:text-lg">@sehatmonitor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

  );
}
