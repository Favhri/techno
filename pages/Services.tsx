
import React from 'react';

const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Strategic Event Planning",
      description: "Comprehensive end-to-end management from initial concept to post-event analysis. We handle the logistics so you can focus on the experience.",
      details: ["Conceptualization", "Timeline Management", "Budget Allocation", "Venue Sourcing"]
    },
    {
      title: "Creative Design & Curation",
      description: "Aesthetic alignment is our specialty. We create visual narratives that transform venues and enchant guests through minimalism and style.",
      details: ["Mood Boarding", "Floral & Decor Design", "Spatial Planning", "Lighting Direction"]
    },
    {
      title: "Vendor Partnerships",
      description: "Access our exclusive network of premium vendors who share our commitment to quality and excellence.",
      details: ["Catering Excellence", "Entertainment Curation", "Technical Production", "Artisan Partnerships"]
    },
    {
      title: "On-site Coordination",
      description: "A seamless execution is invisible. Our team manages every moving part on the day of the event with calm precision.",
      details: ["Guest Relations", "Show Direction", "Production Oversight", "Hospitality Management"]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-8">Our Services</h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            We provide a tailored suite of services designed for those who value quality over quantity and timeless elegance over fleeting trends.
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
