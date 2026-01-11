
import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    { title: 'The Monochrome Gala', category: 'Corporate', img: 'https://picsum.photos/seed/proj1/1000/1200' },
    { title: 'Alpine Serenity Wedding', category: 'Wedding', img: 'https://picsum.photos/seed/proj2/1000/1200' },
    { title: 'Lumina Brand Launch', category: 'Commercial', img: 'https://picsum.photos/seed/proj3/1000/1200' },
    { title: 'Industrial Chic Soirée', category: 'Private', img: 'https://picsum.photos/seed/proj4/1000/1200' },
    { title: 'Coastal Retreat Brunch', category: 'Social', img: 'https://picsum.photos/seed/proj5/1000/1200' },
    { title: 'Artisan Workshop Series', category: 'Cultural', img: 'https://picsum.photos/seed/proj6/1000/1200' },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-8">Portfolio</h1>
          <div className="flex flex-wrap gap-8 text-sm font-medium text-neutral-400 uppercase tracking-widest">
            <button className="text-neutral-900 border-b border-neutral-900 pb-1">All Work</button>
            <button className="hover:text-neutral-900 transition-colors">Corporate</button>
            <button className="hover:text-neutral-900 transition-colors">Weddings</button>
            <button className="hover:text-neutral-900 transition-colors">Social</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-neutral-200">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-2xl font-serif font-bold text-neutral-900">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
