import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Image Area (Asymmetric, spans 7 cols) */}
        <div className="lg:col-span-6 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] bg-black border border-black/10 overflow-hidden relative"
          >
            <img 
              src="/images/fitness-program.png" 
              alt="Fitness Training" 
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            {/* Raw Stat Overlay */}
            <div className="absolute bottom-0 left-0 bg-accent text-white p-6 md:p-8 w-2/3 max-w-[300px]">
              <h3 className="text-4xl md:text-5xl font-black mb-1 leading-none">10K</h3>
              <p className="text-sm font-bold tracking-widest uppercase text-white/90">Sqft Facility</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content (Spans 6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-start pt-8 lg:pt-0">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> The Vision
            </span>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight mb-8 uppercase tracking-tighter">
              WE FORGE <br/>
              <span className="text-accent">CHAMPIONS.</span>
            </h2>
            
            <p className="text-black/70 text-lg leading-relaxed mb-12 font-medium max-w-lg">
              MaxFitPro isn't just a gym. It's Pontian's premier fitness destination designed for those who refuse to settle. State-of-the-art facilities, expert guidance, and an iron-clad community.
            </p>
          </motion.div>

          <div className="flex flex-col gap-10 w-full max-w-lg">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-6 border-t border-black/10 pt-6"
            >
              <h4 className="text-3xl font-black text-black/20">01</h4>
              <div>
                <h3 className="font-bold text-black text-xl mb-2 uppercase tracking-wide">Expert Coaching</h3>
                <p className="text-black/60 text-sm leading-relaxed font-medium">Elite trainers dedicated to mapping out your goals and executing the perfect plan with scientific precision.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start gap-6 border-t border-black/10 pt-6"
            >
              <h4 className="text-3xl font-black text-black/20">02</h4>
              <div>
                <h3 className="font-bold text-black text-xl mb-2 uppercase tracking-wide">Premium Arsenal</h3>
                <p className="text-black/60 text-sm leading-relaxed font-medium">Exclusive access to top-tier plate-loaded machines, pure iron free weights, and an advanced cardio deck.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12"
          >
            <button 
              data-cursor="JOIN"
              className="group relative inline-flex h-14 items-center justify-center bg-black px-10 font-bold text-white transition-all duration-300 hover:bg-accent"
            >
              <span className="uppercase tracking-widest text-sm flex items-center gap-3">
                Discover More <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
