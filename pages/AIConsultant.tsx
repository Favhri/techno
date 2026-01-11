
import React, { useState } from 'react';
import { generateEventConcept } from '../services/geminiService';
import { EventConcept } from '../types';

const AIConsultant: React.FC = () => {
  const [eventType, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EventConcept | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const prompt = `Generate a creative and minimalist event concept for a ${eventType}. 
    Budget range: ${budget}. Number of guests: ${guestCount}.
    Focus on sophisticated aesthetics and unique experiences. 
    Return as a JSON object with theme, vibe, activities (array), estimatedCostRange, and venueSuggestions (array).`;

    try {
      const data = await generateEventConcept(prompt);
      setResult(data);
    } catch (err: any) {
      setError('Could not connect to the AI planner. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-neutral-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4 block">Powered by Gemini</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-6 italic">Event Concept Designer</h1>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Dreaming of your next event? Use our AI-powered tool to generate a unique concept, theme, and activity list in seconds.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-neutral-100">
            <form onSubmit={handleGenerate} className="space-y-8">
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Event Type</label>
                <input 
                  type="text" 
                  placeholder="e.g., Brand Launch, Anniversary, Networking"
                  className="w-full bg-neutral-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Budget</label>
                  <input 
                    type="text" 
                    placeholder="e.g., $5,000 - $10,000"
                    className="w-full bg-neutral-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">Guests</label>
                  <input 
                    type="number" 
                    placeholder="e.g., 50"
                    className="w-full bg-neutral-50 border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-neutral-200 transition-all"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-neutral-900 text-white py-5 rounded-xl font-bold hover:bg-neutral-800 transition-all disabled:opacity-50 flex items-center justify-center space-x-3"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Generating Concept...</span>
                  </>
                ) : (
                  <span>Design My Concept</span>
                )}
              </button>
            </form>
            {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
          </div>

          {/* Results Display */}
          <div className="relative">
            {result ? (
              <div className="bg-white p-8 md:p-12 shadow-xl rounded-2xl border border-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="text-xs font-bold text-neutral-400 uppercase tracking-[0.3em] mb-2 block">The Concept</span>
                <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-6">{result.theme}</h2>
                <div className="h-px bg-neutral-100 mb-8"></div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">The Vibe</h4>
                    <p className="text-neutral-700 font-medium italic">"{result.vibe}"</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">Key Activities</h4>
                    <ul className="space-y-2">
                      {result.activities.map((act, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-neutral-300 mr-3">•</span>
                          <span className="text-sm text-neutral-600">{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-50">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Venue Style</h4>
                      <p className="text-sm text-neutral-600">{result.venueSuggestions[0]}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Estimated Budget</h4>
                      <p className="text-sm text-neutral-600">{result.estimatedCostRange}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-neutral-200 rounded-2xl text-center px-12 opacity-60">
                <svg className="w-16 h-16 text-neutral-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="text-neutral-400 italic font-serif">Fill in the details to unveil your personalized event vision.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
