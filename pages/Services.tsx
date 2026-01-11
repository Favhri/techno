
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Perencanaan Acara Strategis",
      description: "Manajemen ujung-ke-ujung yang komprehensif mulai dari konsep awal hingga analisis pasca-acara. Kami menangani logistik sehingga Anda dapat fokus pada pengalaman tersebut.",
      details: ["Konseptualisasi", "Manajemen Jadwal", "Alokasi Anggaran", "Pencarian Lokasi"]
    },
    {
      title: "Desain Kreatif & Kurasi",
      description: "Penyelarasan estetika adalah keahlian kami. Kami menciptakan narasi visual yang mengubah lokasi dan memikat tamu melalui minimalisme dan gaya.",
      details: ["Mood Boarding", "Desain Dekorasi & Bunga", "Perencanaan Ruang", "Arahan Pencahayaan"]
    },
    {
      title: "Kemitraan Vendor",
      description: "Akses jaringan eksklusif vendor premium kami yang berbagi komitmen kami terhadap kualitas dan keunggulan.",
      details: ["Keunggulan Katering", "Kurasi Hiburan", "Produksi Teknis", "Kemitraan Pengrajin"]
    },
    {
      title: "Koordinasi di Lokasi",
      description: "Eksekusi yang mulus adalah yang tak terlihat. Tim kami mengelola setiap bagian yang bergerak pada hari acara dengan ketenangan dan presisi.",
      details: ["Hubungan Tamu", "Arahan Pertunjukan", "Pengawasan Produksi", "Manajemen Perhotelan"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-8">Our Services</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Kami menyediakan rangkaian layanan yang dirancang khusus bagi mereka yang menghargai kualitas daripada kuantitas dan keanggunan abadi dibandingkan tren sesaat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          {serviceList.map((service, index) => (
            <div key={index} className="group">
              <div className="text-xs font-bold text-neutral-400 mb-6 uppercase tracking-[0.2em]">0{index + 1}</div>
              <h3 className="text-3xl font-serif font-bold mb-6 text-neutral-900 group-hover:text-neutral-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-500 mb-10 leading-relaxed text-lg">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-neutral-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-neutral-200 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
