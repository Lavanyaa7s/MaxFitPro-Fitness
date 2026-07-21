import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Testimonial() {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      name: 'Michael T.',
      role: 'Verified Member',
      text: 'Since joining MaxFitPro, I\'ve completely transformed my physique. The atmosphere here is unlike any other gym in Pontian. It\'s pure motivation.',
      rating: 5,
    },
    {
      name: 'Sarah W.',
      role: 'Verified Member',
      text: 'The trainers actually care about your progress. The equipment is top-tier and the community keeps me accountable every single day.',
      rating: 5,
    },
    {
      name: 'David L.',
      role: 'Verified Member',
      text: 'I used to struggle with consistency until I found this place. Now, skipping a workout isn\'t an option. The energy here is infectious.',
      rating: 5,
    },
    {
      name: 'Elena R.',
      role: 'Verified Member',
      text: 'Best investment I\'ve made in myself. The free weights section is massive and I never have to wait for machines.',
      rating: 5,
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth > 768 ? 450 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth > 768 ? 450 : window.innerWidth * 0.85;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonial" className="py-24 md:py-32 bg-black relative border-y border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> The Legacy
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              WORD ON THE <br/>
              <span className="text-accent">STREET.</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
              <div className="h-6 w-[1px] bg-white/20 mx-2" />
              <span className="text-white font-bold text-sm tracking-wide">4.9/5 RATING</span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Area */}
      <div className="w-full relative border-t border-white/10">
        <div ref={scrollRef} className="flex px-4 md:px-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar divide-x divide-white/10" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="snap-center shrink-0 w-[85vw] md:w-[450px] relative bg-black p-10 lg:p-12 cursor-grab"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex gap-1 text-accent mb-8">
                  {[...Array(test.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-12 flex-grow">
                  "{test.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-white flex items-center justify-center font-black text-black text-xl">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg leading-tight uppercase tracking-wider mb-1">{test.name}</h4>
                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Invisible spacer for end padding */}
          <div className="shrink-0 w-4 md:w-8" />
        </div>
      </div>

    </section>
  );
}
