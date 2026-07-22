import { motion } from 'framer-motion';

export default function Trainers() {
  const trainers = [
    {
      name: "Marcus Cole",
      initials: "MC",
      role: "Head Strength Coach",
      quote: "Discipline equals freedom. No shortcuts.",
      specialty: "Olympic Weightlifting & Powerbuilding",
      whatsapp: "https://wa.me/60185713889"
    },
    {
      name: "Elena Rostova",
      initials: "ER",
      role: "Hypertrophy Specialist",
      quote: "Build the machine with scientific precision.",
      specialty: "Body Recomposition & Muscle Building",
      whatsapp: "https://wa.me/60185713889"
    },
    {
      name: "David Chen",
      initials: "DC",
      role: "Performance Director",
      quote: "Optimize movement, conquer heavy weight.",
      specialty: "Athletic Conditioning & Mobility",
      whatsapp: "https://wa.me/60185713889"
    },
    {
      name: "Sarah Jenkins",
      initials: "SJ",
      role: "Conditioning Lead",
      quote: "Never stop pushing past your threshold.",
      specialty: "HIIT, Endurance & Fat Loss",
      whatsapp: "https://wa.me/60185713889"
    }
  ];

  return (
    <section id="trainers" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> Elite Coaching
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight">
              MEET THE <span className="text-accent">ROSTER.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-sm text-sm font-medium leading-relaxed"
          >
            Our coaches aren't just trainers. They are dedicated architects of human performance.
          </motion.p>
        </div>

        {/* Trainer Cards (Sleek Executive Cards without photo images) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Initials Badge */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 text-accent flex items-center justify-center font-black text-xl mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {trainer.initials}
                </div>

                <p className="text-accent text-[10px] font-bold tracking-widest uppercase mb-1">
                  {trainer.role}
                </p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-accent transition-colors">
                  {trainer.name}
                </h3>
                <p className="text-white/70 italic text-xs leading-relaxed mb-6">
                  "{trainer.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/40 font-mono block mb-1">SPECIALTY</span>
                <p className="text-xs text-white/80 font-semibold mb-4">{trainer.specialty}</p>

                <a
                  href={trainer.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-accent text-white border border-white/10 hover:border-accent text-center font-bold text-[11px] uppercase tracking-wider transition-all duration-300 block"
                >
                  Book Session →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
