import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const pillars = [
    {
      step: '01',
      title: 'State of the Art Arsenal',
      desc: 'No compromise. We stock biomechanically superior plate-loaded gear and olympic iron.',
    },
    {
      step: '02',
      title: 'Certified Elite Coaches',
      desc: 'Our roster consists exclusively of certified personal trainers dedicated to your results.',
    },
    {
      step: '03',
      title: 'Unmatched Atmosphere',
      desc: 'A pure iron culture designed for high focus, intense progress, and zero distractions.',
    }
  ];

  return (
    <section id="whyus" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block flex items-center gap-3">
                <span className="w-8 h-[2px] bg-accent inline-block" /> Our Standard
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tight mb-6">
                NO EXCUSES. <br/>
                <span className="text-accent">JUST RESULTS.</span>
              </h2>
              <p className="text-white/70 text-base font-medium leading-relaxed mb-8 max-w-md">
                We don't do gimmicks. We provide the elite tools and the intense environment required to forge your absolute best self.
              </p>
            </motion.div>
          </div>

          {/* Right Content: 3 Pillar Feature Cards (Replaces photo with high-end dark cards) */}
          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/50 transition-all duration-300 flex items-start gap-6 group"
              >
                <span className="text-3xl font-black text-accent shrink-0 font-mono">
                  {pillar.step}
                </span>
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-2 group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
