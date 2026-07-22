import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      tagline: 'PERFECT FOR STARTERS',
      price: '50',
      period: '/month',
      badge: 'STARTER',
      desc: 'Essential gym access for independent training.',
      features: [
        'Access to Free Weights Area',
        'Cardio Deck & Machines',
        'Locker Room & Hot Showers',
        '1 Free Personal Trainer Session'
      ],
      isPopular: false,
      buttonText: 'CHOOSE BASIC',
      buttonStyle: 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/10'
    },
    {
      name: 'Pro Plan',
      tagline: 'MOST POPULAR CHOICE',
      price: '85',
      period: '/month',
      badge: '🔥 MOST POPULAR',
      desc: 'Full-spectrum access for high-performance athletes.',
      features: [
        'Everything in Basic Plan',
        'Full Machine Zone Access',
        'Unlimited Group Fitness Classes',
        'Customized Nutrition Plan',
        '5 Personal Training Sessions / mo',
        'Locker Rental Included'
      ],
      isPopular: true,
      buttonText: 'GET PRO ACCESS →',
      buttonStyle: 'bg-accent text-white hover:bg-white hover:text-black shadow-[0_4px_25px_rgba(243,45,75,0.5)]'
    },
    {
      name: 'Elite VIP',
      tagline: 'UNLIMITED LUXURY',
      price: '120',
      period: '/month',
      badge: '👑 VIP ALL-ACCESS',
      desc: 'All-inclusive VIP treatment for maximum results.',
      features: [
        'Everything in Pro Plan',
        'Unlimited Personal Trainer Sessions',
        'VIP Recovery Suite Access',
        '1 Free Guest Pass Every Month',
        'Monthly Supplement & Shaker Kit',
        'Priority Class Booking'
      ],
      isPopular: false,
      buttonText: 'BECOME ELITE',
      buttonStyle: 'bg-white/10 text-white hover:bg-white hover:text-black border border-white/10'
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#090909] text-white relative border-t border-white/10 overflow-hidden">
      
      {/* Ambient Red Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(243,45,75,0.4) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-widest text-xs mb-3 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/10"
          >
            Membership Packages
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight"
          >
            INVEST IN YOUR <span className="text-accent">POTENTIAL</span>
          </motion.h2>
          <p className="text-white/50 text-sm max-w-lg mt-4 font-medium">
            Transparent pricing with zero hidden fees. Pick the membership tier that fits your ambition.
          </p>
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
                  ? 'bg-gradient-to-b from-[#25080c] via-[#150406] to-[#0a0a0a] border-2 border-accent shadow-[0_0_50px_rgba(243,45,75,0.3)] lg:-translate-y-4 z-10' 
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              <div className="mb-6 flex justify-between items-center">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full ${
                  plan.isPopular 
                    ? 'bg-accent text-white shadow-lg' 
                    : 'bg-white/10 text-white/70 border border-white/10'
                }`}>
                  {plan.badge}
                </span>
                <span className="text-xs text-white/30 font-mono">0{idx + 1}</span>
              </div>

              <div>
                <h3 className="text-3xl font-black uppercase tracking-wide mb-1 text-white">{plan.name}</h3>
                <p className="text-accent text-[11px] font-bold tracking-widest uppercase mb-3">{plan.tagline}</p>
                <p className="text-white/50 text-xs mb-8 font-medium leading-relaxed">{plan.desc}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8 pb-8 border-b border-white/10">
                  <span className="text-sm font-bold text-white/40">RM</span>
                  <span className={`text-6xl font-black tracking-tight ${plan.isPopular ? 'text-accent' : 'text-white'}`}>{plan.price}</span>
                  <span className="text-xs font-semibold text-white/40">{plan.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-white/80 font-medium">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        plan.isPopular ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white/60'
                      }`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="https://wa.me/60185713889"
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs text-center transition-all duration-300 block ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
