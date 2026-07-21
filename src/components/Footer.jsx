import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <footer id="contact" ref={containerRef} className="relative overflow-hidden bg-black">
      
      {/* Massive CTA Section */}
      <div className="relative min-h-[60vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-32 overflow-hidden border-b border-white/10" data-cursor="JOIN">
        
        {/* Cinematic Background */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        >
          <img 
            src="/images/fitness-program.png" 
            alt="Ready to change your life?"
            className="w-full h-full object-cover object-top filter grayscale contrast-125"
          />
        </motion.div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-12 uppercase tracking-tighter"
          >
            START <br/>
            <span className="text-accent">NOW.</span>
          </motion.h2>

          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="https://wa.me/60185713889" 
            className="inline-flex h-16 items-center justify-center bg-accent px-12 font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span className="uppercase tracking-widest text-sm flex items-center gap-3">
              Join The Elite <span>→</span>
            </span>
          </motion.a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 pt-20 relative z-10 bg-black">
        
        {/* Brand Col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 pr-0 lg:pr-12"
        >
          <a href="#" className="mb-8 block">
            <img
              src="/images/logo.png"
              alt="MaxFitPro Fitness"
              className="h-16 w-auto"
              style={{ mixBlendMode: 'screen', filter: 'invert(1)' }}
            />
          </a>
          <p className="text-white/60 mb-8 leading-relaxed font-medium">
            The premium training ground in Pontian. Engineered for those who demand excellence in every rep. Join the community today.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors font-bold text-sm tracking-widest">
              FB
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors font-bold text-sm tracking-widest">
              IG
            </a>
            <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-colors font-bold text-sm tracking-widest">
              TK
            </a>
          </div>
        </motion.div>

        {/* Branch 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-4"
        >
          <h4 className="font-black text-white text-xl mb-8 tracking-wider uppercase">HQ / Pontian</h4>
          <ul className="flex flex-col gap-6 text-white/70">
            <li className="flex items-start gap-4">
              <span className="leading-relaxed font-medium text-sm">55-1, 56-1,56, 2, Jalan Emas 2<br/> Pusat perniagaan kota emas<br/> 82000 Pontian District, Johor</span>
            </li>
            <li className="flex flex-col gap-1 font-medium text-sm">
              <span>TEL: 018-571 3889</span>
              <span>TEL: 010-760 3889</span>
            </li>
          </ul>
        </motion.div>

        {/* Branch 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-3"
        >
          <h4 className="font-black text-white text-xl mb-8 tracking-wider uppercase">Branch Two</h4>
          <div className="border border-white/10 p-6">
            <span className="inline-block px-2 py-1 bg-white text-black font-bold text-xs uppercase tracking-widest mb-4">Coming Soon</span>
            <p className="text-white/50 leading-relaxed text-sm font-medium">Details for our next elite training ground will be announced shortly.</p>
          </div>
        </motion.div>

      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black py-8 pb-32 md:pb-8 text-center relative z-10">
        <p className="text-white/40 text-xs font-bold tracking-widest uppercase">© {new Date().getFullYear()} MAXFITPRO. All rights reserved.</p>
      </div>
    </footer>
  );
}
