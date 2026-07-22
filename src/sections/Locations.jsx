import { motion } from 'framer-motion';

export default function Locations() {
  return (
    <section id="locations" className="relative py-12 md:py-24 bg-[#090909] text-white overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(243,45,75,0.4), transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-xs mb-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10"
          >
            Find Your Gym
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            OUR <span className="text-accent">LOCATIONS</span>
          </motion.h2>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: HQ Pontian */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                  Main Headquarters
                </span>
                <span className="text-xs text-white/40 font-mono">01</span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-wide mb-4 group-hover:text-accent transition-colors">
                HQ / PONTIAN
              </h3>

              <div className="space-y-4 text-white/70 text-sm mb-8 leading-relaxed">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>55-1, 56-1,56, 2, Jalan Emas 2<br />Pusat Perniagaan Kota Emas<br />82000 Pontian District, Johor</span>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col">
                    <span>TEL: 018-571 3889</span>
                    <span>TEL: 010-760 3889</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              <a 
                href="https://maps.google.com/?q=55-1,+56-1,56,+2,+Jalan+Emas+2+Pusat+perniagaan+kota+emas+82000+Pontian+District+Johor" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-3 px-6 rounded-xl bg-white/5 hover:bg-accent hover:text-white border border-white/10 text-center font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                Google Maps <span>↗</span>
              </a>
              <a 
                href="https://wa.me/60185713889" 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 py-3 px-6 rounded-xl bg-accent text-white hover:bg-white hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                WhatsApp HQ <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Branch 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60 px-3 py-1 bg-white/10 border border-white/20 rounded-full">
                  Expansion
                </span>
                <span className="text-xs text-white/40 font-mono">02</span>
              </div>

              <h3 className="text-3xl font-black uppercase tracking-wide mb-4 text-white/80">
                BRANCH TWO
              </h3>

              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 mb-8">
                <span className="inline-block px-3 py-1 bg-accent text-white font-bold text-xs uppercase tracking-widest rounded mb-3">
                  COMING SOON
                </span>
                <p className="text-white/50 text-sm leading-relaxed font-medium">
                  Details for our next elite training ground will be announced shortly. Stay tuned to our social channels for location reveal.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a 
                href="#contact"
                className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-center font-bold text-xs uppercase tracking-wider transition-all duration-300 block text-white/70 hover:text-white"
              >
                Be First To Know
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
