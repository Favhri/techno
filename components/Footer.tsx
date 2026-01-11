
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-white mb-6 block">
            ABDIL<span className="text-neutral-500 font-light">EVENTS</span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Menciptakan pengalaman yang disesuaikan dan berkesan. Dari acara gala korporat hingga perayaan intim, kami mewujudkan visi Anda dengan presisi dan gaya.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Navigation</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li>Corporate Events</li>
            <li>Wedding Planning</li>
            <li>Private Parties</li>
            <li>Brand Launches</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li>abdilevent@gmail.com</li>
            <li>+62 8123456789</li>
            <li>Jl. Berok Raya 95-1, Kurao Pagang,<br />Kec. Nanggalo, Kota Padang,<br />Sumatera Barat 25173</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-neutral-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>© 2026 ABDIL Events. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
