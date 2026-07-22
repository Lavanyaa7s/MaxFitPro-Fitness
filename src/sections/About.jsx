import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { number: '10K', label: 'SQFT FACILITY', desc: 'Pontian’s largest dedicated gym area' },
    { number: '50+', label: 'PRO MACHINES', desc: 'Plate-loaded & cardio gear' },
    { number: '24/7', label: 'MEMBER ACCESS', desc: 'Train on your own schedule' },
    { number: '100%', label: 'RESULT DRIVEN', desc: 'Certified elite coaching' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: 2x2 Stat Cards Grid (Replaces photo with high-end dark cards) */}
        <div className="lg:col-span-6 relative">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <span className="text-4xl md:text-5xl font-black text-accent mb-2 group-hover:scale-105 transition-transform duration-300 block">
                  {stat.number}
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                    {stat.label}
                  </h4>
                  <p className="text-[11px] text-white/50 leading-relaxed font-medium">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 flex flex-col items-start pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> The Vision
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
              WE FORGE <br/>
              <span className="text-accent">CHAMPIONS.</span>
            </h2>
            
            <p className="text-white/70 text-base leading-relaxed mb-8 font-medium max-w-lg">
              MaxFitPro isn't just a gym. It's Pontian's premier fitness destination engineered for those who refuse to settle. High-performance facilities, expert guidance, and an iron-clad community.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6 w-full max-w-lg">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4 border-t border-white/10 pt-6"
            >
              <h4 className="text-2xl font-black text-accent">01</h4>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 uppercase tracking-wide">Expert Coaching</h3>
                <p className="text-white/60 text-xs leading-relaxed font-medium">Elite trainers dedicated to mapping out your goals and executing the perfect plan with scientific precision.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-4 border-t border-white/10 pt-6"
            >
              <h4 className="text-2xl font-black text-accent">02</h4>
              <div>
                <h3 className="font-bold text-white text-lg mb-1 uppercase tracking-wide">Premium Arsenal</h3>
                <p className="text-white/60 text-xs leading-relaxed font-medium">Exclusive access to top-tier plate-loaded machines, pure iron free weights, and an advanced cardio deck.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <a 
              href="#pricing"
              className="inline-flex h-14 items-center justify-center bg-accent px-8 rounded-full font-bold text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              Discover Memberships →
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
