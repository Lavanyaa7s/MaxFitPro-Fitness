import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'State of the Art Equipment',
      desc: 'No compromises. We import only the finest biomechanically superior machines.',
      icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    },
    {
      title: 'Expert Trainers',
      desc: 'Our roster consists exclusively of certified elite coaches who deliver results.',
      icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>
    },
    {
      title: 'Unmatched Atmosphere',
      desc: 'A pure iron culture that demands focus and breeds relentless consistency.',
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    }
  ];

  return (
    <section id="whyus" className="py-24 md:py-32 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> Our Standard
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight uppercase tracking-tighter mb-8">
              NO EXCUSES. <br/>
              <span className="text-accent">JUST RESULTS.</span>
            </h2>
            <p className="text-black/70 text-lg font-medium leading-relaxed mb-12 max-w-md">
              We don't do gimmicks. We provide the elite tools and the intense environment required to forge your best self.
            </p>

            <div className="flex flex-col gap-8">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex gap-6 group"
                >
                  <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feat.icon}
                    </svg>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-black uppercase tracking-wide mb-2">{feat.title}</h3>
                    <p className="text-black/60 font-medium text-sm leading-relaxed max-w-sm">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[600px] bg-black"
          >
            <img 
              src="/images/fitness-program.png" 
              alt="Dedication" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            {/* Hard brutalist accent border */}
            <div className="absolute top-8 -left-8 w-full h-full border-4 border-accent pointer-events-none hidden md:block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
