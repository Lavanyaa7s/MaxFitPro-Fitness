import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Plan',
      price: '50',
      period: '/month',
      features: ['Access to Free Weights', 'Cardio Deck Access', 'Locker Room', '1 Free PT Session'],
      isPopular: false,
    },
    {
      name: 'Pro Plan',
      price: '85',
      period: '/month',
      features: ['Everything in Basic', 'Machine Zone Access', 'Group Classes', 'Nutrition Plan', '5 PT Sessions/mo'],
      isPopular: true,
    },
    {
      name: 'Elite Plan',
      price: '120',
      period: '/month',
      features: ['Everything in Pro', 'Unlimited PT Sessions', 'VIP Recovery Room', 'Guest Pass', 'Dietary Supplements'],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white relative border-y border-black/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-accent inline-block" /> 
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Memberships</span>
            <span className="w-8 h-[2px] bg-accent inline-block" /> 
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-tight uppercase tracking-tighter mb-6"
          >
            INVEST IN YOUR <br/>
            <span className="text-accent">POTENTIAL.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t lg:border-t-0 lg:border-l border-black/10 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className={`relative p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col group ${
                plan.isPopular ? 'bg-black text-white transform lg:scale-105 lg:-translate-y-4 shadow-2xl z-10' : 'bg-white text-black hover:bg-gray-50 transition-colors'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-0 w-full bg-accent text-white text-xs font-bold uppercase tracking-widest py-2 text-center">
                  Most Popular
                </div>
              )}

              <div className={`mt-8 ${plan.isPopular ? '' : ''}`}>
                <h3 className="text-2xl font-black uppercase tracking-wider mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-10 pb-10 border-b border-black/10 group-hover:border-black/20 transition-colors">
                  <span className={`text-sm font-bold mb-2 ${plan.isPopular ? 'text-white/60' : 'text-black/40'}`}>RM</span>
                  <span className={`text-6xl font-black ${plan.isPopular ? 'text-accent' : 'text-black'}`}>{plan.price}</span>
                  <span className={`text-sm font-bold mb-2 ${plan.isPopular ? 'text-white/60' : 'text-black/40'}`}>{plan.period}</span>
                </div>

                <ul className="flex flex-col gap-5 mb-12 flex-grow">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${plan.isPopular ? 'bg-accent' : 'bg-black/20'}`} />
                      <span className={`text-sm font-medium ${plan.isPopular ? 'text-white/80' : 'text-black/70'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-5 font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  plan.isPopular 
                    ? 'bg-accent text-white hover:bg-white hover:text-black' 
                    : 'bg-black text-white hover:bg-accent'
                }`}>
                  Choose Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
