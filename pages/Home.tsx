
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const testimonials = [
    {
      quote: "ABDIL Events mengubah peluncuran brand kami menjadi sebuah mahakarya. Perhatian mereka terhadap detail benar-benar tidak tertandingi.",
      author: "Siti Rahma",
      role: "Direktur Kreatif PT Maju Jaya",
      category: "Korporat"
    },
    {
      quote: "Pengalaman perencanaan pernikahan paling lancar yang pernah kami bayangkan. Minimalis, elegan, dan sangat mencerminkan diri kami.",
      author: "Budi & Linda",
      role: "Pasangan Pengantin",
      category: "Pernikahan"
    },
    {
      quote: "Profesionalisme di puncaknya. Mereka tidak hanya merencanakan acara, mereka merancang kenangan abadi yang berkesan bagi semua tamu.",
      author: "Aditya Pratama",
      role: "Pengusaha",
      category: "Gala Privat"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Consultation",
      description: "Kami mendengarkan visi Anda, memahami kebutuhan Anda, dan mendiskusikan konsep awal.",
      color: "bg-blue-50 text-blue-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Planning & Design",
      description: "Tim kami membuat rencana detail, mood board, dan desain khusus yang disesuaikan dengan acara Anda.",
      color: "bg-green-50 text-green-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Coordination & Preparation",
      description: "Kami menangani koordinasi vendor, logistik, dan semua persiapan di balik layar.",
      color: "bg-purple-50 text-purple-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Execution & Management",
      description: "Pada hari H, tim kami memastikan semuanya berjalan lancar sementara Anda menikmati momen tersebut.",
      color: "bg-yellow-50 text-yellow-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "05",
      title: "Final Touches & Review",
      description: "Kami menambahkan sentuhan akhir, mengelola jadwal, dan memastikan kesempurnaan di setiap detail.",
      color: "bg-pink-50 text-pink-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
        </svg>
      )
    },
    {
      number: "06",
      title: "Celebration & Follow-up",
      description: "Setelah acara, kami mengumpulkan umpan balik dan membagikan kenangan yang diabadikan.",
      color: "bg-orange-50 text-orange-500",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-neutral-100">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-neutral-900 text-white rounded-full">
            The Art of Celebration
          </span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-neutral-900 leading-tight mb-8">
            Memories <br /> 
            <span className="italic font-light">Designers.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kami mengubah ruang biasa menjadi pengalaman luar biasa. Minimalisme bertemu dengan perencanaan yang teliti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/portfolio" className="bg-neutral-900 text-white px-10 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all w-full sm:w-auto">
              Lihat Karya Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 px-6 bg-white border-y border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif italic text-neutral-800 leading-snug">
            "Detail bukanlah sekadar detail. <br /> Mereka adalah nyawa dari desain."
          </h2>
          <div className="w-12 h-px bg-neutral-300 mx-auto mt-8"></div>
          <p className="mt-8 text-neutral-500 uppercase tracking-widest text-xs font-semibold">Charles Eames</p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Our Expertise</h3>
              <h2 className="text-4xl font-serif font-bold text-neutral-900">Setiap sektor dipersembahkan melalui kurasi momen yang elegan dan berkelas.</h2>
            </div>
            <Link to="/services" className="hidden md:block text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1">
              Jelajahi Semua Layanan
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Corporate Galas', 
                img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800&h=1000', 
                desc: 'Acara yang elegan, profesional, dan berdampak yang mewakili etos brand Anda.' 
              },
              { 
                title: 'Intimate Weddings', 
                img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800&h=1000', 
                desc: 'Fokus pada koneksi. Estetika minimalis dengan detail yang menyentuh jiwa.' 
              },
              { 
                title: 'Private Soirées', 
                img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800&h=1000', 
                desc: 'Pertemuan eksklusif yang didefinisikan oleh keanggunan dan kemewahan yang bersahaja.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
                <h4 className="text-xl font-serif font-bold mb-3">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Timeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase bg-yellow-100 text-yellow-700 rounded-full">
              Proses Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">Bagaimana Kami Menciptakan Keajaiban</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Sebuah proses 6 langkah yang mulus untuk memastikan acara Anda dijalankan tanpa cela dari awal hingga akhir.
            </p>
          </div>

          <div className="relative mb-20">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16 relative">
              {processSteps.map((step, idx) => (
                <div key={step.number} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow duration-300 ${idx % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center mb-5`}>
                        {step.icon}
                      </div>
                      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">Langkah {step.number}</span>
                      <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3">{step.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-white border-2 border-yellow-400 items-center justify-center z-10 font-serif font-bold text-neutral-900 text-sm">
                    {step.number}
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="w-full md:w-5/12 md:block hidden"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey CTA Box */}
          <div className="max-w-4xl mx-auto">
             <div className="relative p-1 rounded-2xl bg-gradient-to-br from-yellow-500 via-neutral-200 to-blue-600">
                <div className="bg-white rounded-[14px] p-8 md:p-12 text-center">
                   <h2 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4">Siap untuk Memulai Perjalanan Anda?</h2>
                   <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
                      Jadwalkan konsultasi gratis dengan spesialis acara kami dan mari wujudkan visi Anda menjadi nyata.
                   </p>
                   <Link 
                      to="/contact" 
                      className="inline-block bg-[#EAB308] hover:bg-yellow-600 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
                    >
                      Pesan Konsultasi Gratis
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-4">Voices of Experience</h3>
          <h2 className="text-4xl font-serif font-bold text-neutral-900">Client Reflections</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-10 border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-neutral-200 text-6xl font-serif block mb-4 leading-none">“</span>
                <p className="text-neutral-700 font-serif italic text-xl mb-8 leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div>
                <div className="w-8 h-px bg-neutral-300 mb-6"></div>
                <h4 className="font-bold text-neutral-900 tracking-tight">{t.author}</h4>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{t.role}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-neutral-50 text-[10px] font-bold text-neutral-400 uppercase tracking-tighter rounded">
                  {t.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-neutral-900 py-24 px-6 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full text-neutral-400">
               <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
               <circle cx="200" cy="200" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
               <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
         </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Siap meningkatkan <br /> pengalaman Anda berikutnya?</h2>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl">
            Tim kami siap membantu Anda membawa visi Anda menjadi kenyataan. Mari ciptakan sesuatu yang tak terlupakan bersama.
          </p>
          <Link to="/contact" className="inline-block bg-white text-neutral-900 px-12 py-5 rounded-full font-bold hover:bg-neutral-100 transition-all">
            Mulai Percakapan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
