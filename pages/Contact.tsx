
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-12">Let's Connect.</h1>
          <p className="text-xl text-neutral-600 mb-16 leading-relaxed">
            Every great event starts with a conversation. We’re here to listen to your ideas and help you realize them.
          </p>

          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">Email Us</h4>
              <p className="text-2xl font-serif">hello@elevateevents.com</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">Call Us</h4>
              <p className="text-2xl font-serif">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">Our Studio</h4>
              <p className="text-xl font-serif leading-relaxed">
                123 Creative Studio, Art District<br />
                Los Angeles, CA 90210
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">First Name</label>
                <input type="text" className="w-full bg-white border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Last Name</label>
                <input type="text" className="w-full bg-white border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Email Address</label>
              <input type="email" className="w-full bg-white border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all" />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Message</label>
              <textarea rows={6} className="w-full bg-white border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-neutral-900 text-white py-5 rounded-xl font-bold hover:bg-neutral-800 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
