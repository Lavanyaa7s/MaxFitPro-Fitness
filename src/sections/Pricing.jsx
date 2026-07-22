import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '50',
      period: '/month',
      desc: 'Essential access for dedicated fitness enthusiasts.',
      features: ['Access to Free Weights Area', 'Cardio Deck Access', 'Locker Room & Showers', '1 Free Personal Training Session'],
      isPopular: false,
    },
    {
      name: 'Pro Plan',
      price: '85',
      period: '/month',
      desc: 'Our most popular membership for serious transformation.',
      features: ['Everything in Basic Plan', 'Full Machine Zone Access', 'Unlimited Group Fitness Classes', 'Customized Nutrition Blueprint', '5 Personal Training Sessions / mo'],
      isPopular: true,
    },
    {
      name: 'Elite Plan',
      price: '120',
      period: '/month',
      desc: 'All-inclusive VIP access for maximum performance.',
      features: ['Everything in Pro Plan', 'Unlimited Personal Training Sessions', 'VIP Recovery Suite Access', 'Free Guest Pass (1 / mo)', 'Monthly Supplement Kit'],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10">
      
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, rgba(243,45,75,0.5) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Memberships & Packages</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            INVEST IN YOUR <span className="text-accent">POTENTIAL</span>
          </motion.h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative p-8 md:p-10 rounded-2xl flex flex-col justify-between transition-all duration-500 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-[#1c080b] via-[#120507] to-[#0a0a0a] border-2 border-accent shadow-[0_0_40px_rgba(243,45,75,0.25)] lg:-translate-y-4' 
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-2xl font-black uppercase tracking-wide mb-2 text-white">{plan.name}</h3>
                <p className="text-white/50 text-xs mb-6 font-medium leading-relaxed">{plan.desc}</p>

                <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10">
                  <span className="text-sm font-bold text-white/50">RM</span>
                  <span className={`text-5xl font-black ${plan.isPopular ? 'text-accent' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-xs font-semibold text-white/40">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                      <svg className={`w-5 h-5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-accent' : 'text-white/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/60185713889"
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-center transition-all duration-300 block ${
                  plan.isPopular 
                    ? 'bg-accent text-white hover:bg-white hover:text-black shadow-[0_4px_20px_rgba(243,45,75,0.4)]' 
                    : 'bg-white/10 text-white hover:bg-white hover:text-black'
                }`}
              >
                Choose Plan →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
