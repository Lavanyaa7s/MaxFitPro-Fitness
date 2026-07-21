import { motion } from 'framer-motion';

export default function Classes() {
  const classes = [
    { 
      title: 'Free Weights', 
      desc: 'Pure iron. Push your limits in our extensive free weights zone.',
      img: '/images/weights.png',
      colSpan: 'col-span-12 md:col-span-7',
      aspect: 'aspect-[16/9]'
    },
    { 
      title: 'Machine Zone', 
      desc: 'Precision engineering for isolated muscle targeting.',
      img: '/images/machines.png',
      colSpan: 'col-span-12 md:col-span-5',
      aspect: 'aspect-[4/5] md:aspect-auto h-full'
    },
    { 
      title: 'Cardio Deck', 
      desc: 'High-intensity equipment to build unbreakable endurance.',
      img: '/images/cardio.png',
      colSpan: 'col-span-12',
      aspect: 'aspect-[21/9]'
    }
  ];

  return (
    <section id="classes" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> The Arsenal
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              TRAINING <br/>
              <span className="text-accent">ZONES.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 max-w-sm text-lg font-medium leading-relaxed"
          >
            Three specialized zones designed to optimize every aspect of your performance. No compromises.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {classes.map((cls, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`${cls.colSpan} relative group overflow-hidden bg-black ${cls.aspect}`}
              data-cursor="VIEW"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={cls.img} 
                  alt={cls.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              
              {/* Solid Color Overlay on Hover */}
              <div className="absolute inset-0 bg-accent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-3 uppercase tracking-wider">{cls.title}</h3>
                <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
                  <p className="text-white/90 text-lg max-w-md font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {cls.desc}
                  </p>
                </div>
              </div>

              {/* Top Right Brutalist Arrow */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
