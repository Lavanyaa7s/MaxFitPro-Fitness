import { motion } from 'framer-motion';

export default function Trainers() {
  const trainers = [
    {
      name: "Marcus Cole",
      role: "Head Strength Coach",
      img: "/images/trainer.png",
      quote: "Discipline equals freedom.",
      socials: { ig: "#", tk: "#" }
    },
    {
      name: "Elena Rostova",
      role: "Hypertrophy Specialist",
      img: "/images/trainer.png",
      quote: "Build the machine.",
      socials: { ig: "#", tk: "#" }
    },
    {
      name: "David Chen",
      role: "Performance Director",
      img: "/images/trainer.png",
      quote: "Optimize everything.",
      socials: { ig: "#", tk: "#" }
    },
    {
      name: "Sarah Jenkins",
      role: "Conditioning Lead",
      img: "/images/trainer.png",
      quote: "Never stop moving.",
      socials: { ig: "#", tk: "#" }
    }
  ];

  return (
    <section id="trainers" className="py-24 md:py-32 bg-black relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-[2px] bg-accent inline-block" /> The Elite
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter">
              MEET THE <br/>
              <span className="text-accent">ROSTER.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 max-w-sm text-lg font-medium leading-relaxed"
          >
            Our coaches aren't just trainers. They are architects of human performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trainers.map((trainer, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative bg-black aspect-[3/4] overflow-hidden"
            >
              {/* Image */}
              <img 
                src={trainer.img} 
                alt={trainer.name} 
                className="w-full h-full object-cover object-top grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {trainer.role}
                </p>
                <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2">
                  {trainer.name}
                </h3>
                
                {/* Socials / Links (Revealed on hover) */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mt-4">
                  <a href={trainer.socials.ig} className="text-white hover:text-accent font-bold text-sm tracking-widest transition-colors">
                    IG
                  </a>
                  <a href={trainer.socials.tk} className="text-white hover:text-accent font-bold text-sm tracking-widest transition-colors">
                    TK
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
