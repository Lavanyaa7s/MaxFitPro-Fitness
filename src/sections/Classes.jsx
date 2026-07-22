import { motion } from 'framer-motion';

export default function Classes() {
  const zones = [
    { 
      tag: 'ZONE 01',
      title: 'Free Weights Arena', 
      subtitle: 'HEAVY IRON & DUMBBELLS UP TO 60KG',
      desc: 'Pure iron & olympic benches. Engineered for maximum hypertrophy and raw strength building.',
      icon: '🏋️‍♂️',
      stats: 'Olympic Racks • Dumbbells 2kg–60kg • Deadlift Platforms'
    },
    { 
      tag: 'ZONE 02',
      title: 'Machine & Iso-Zone', 
      subtitle: 'PLATE-LOADED & LEVERAGE MACHINES',
      desc: 'Precision target machinery for isolated muscle building with zero joint stress.',
      icon: '⚙️',
      stats: 'Plate-Loaded Rigs • Cable Crossovers • Leg Press Stations'
    },
    { 
      tag: 'ZONE 03',
      title: 'Endurance & Cardio Deck', 
      subtitle: 'HIIT & CARDIO EQUIPMENT',
      desc: 'High-intensity treadmills, assault bikes, and rowers designed to build unstoppable stamina.',
      icon: '🔥',
      stats: 'Curved Treadmills • Concept2 Rowers • Air Bikes'
    }
  ];

  return (
    <section id="classes" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> Facility Specs
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
              TRAINING <span className="text-accent">ZONES.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-sm text-sm font-medium leading-relaxed"
          >
            Three specialized training zones designed to optimize every aspect of your performance. No waiting, no compromises.
          </motion.p>
        </div>

        {/* Zones Grid (Sleek Dark Cards without photo images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((zone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl">{zone.icon}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full">
                    {zone.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">
                  {zone.title}
                </h3>
                <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-4">
                  {zone.subtitle}
                </p>
                <p className="text-white/60 text-xs leading-relaxed font-medium mb-6">
                  {zone.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/40 font-mono block mb-1">EQUIPMENT SPECS</span>
                <p className="text-xs text-white/80 font-semibold">{zone.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
