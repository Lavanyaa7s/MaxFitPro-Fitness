import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useState } from 'react';

// ── Real SVG Social Icons ──────────────────────────
const SOCIALS = [
  {
    label: 'Facebook', href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
      </svg>
    )
  },
  {
    label: 'Instagram', href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    label: 'TikTok', href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
      </svg>
    )
  },
  {
    label: 'YouTube', href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    )
  },
  {
    label: 'WhatsApp', href: 'https://wa.me/60185713889',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
];

// ── Floating Particle ──────────────────────────────
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`, top: `${y}%`,
        width: size, height: size,
        background: 'radial-gradient(circle, rgba(243,45,75,0.6), transparent)',
      }}
      animate={{ y: [0, -24, 0], opacity: [0.1, 0.5, 0.1] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// ── Diagonal Light Beam ────────────────────────────
function LightBeam() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 6 }}
        className="absolute top-0 left-0 w-[2px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(243,45,75,0.15) 40%, rgba(255,92,114,0.25) 50%, rgba(243,45,75,0.15) 60%, transparent)',
          boxShadow: '0 0 40px 20px rgba(243,45,75,0.05)',
          transform: 'rotate(25deg) translateY(-20%)',
          width: '3px',
          height: '200%',
        }}
      />
    </motion.div>
  );
}

// ── Animated subtle grid ───────────────────────────
function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(243,45,75,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(243,45,75,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    />
  );
}

// ── Mouse Spotlight ────────────────────────────────
function MouseSpotlight({ mouseX, mouseY }) {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(243,45,75,0.06), transparent 70%)`,
      }}
    />
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const [spotX, setSpotX] = useState(0);
  const [spotY, setSpotY] = useState(0);

  const athleteX = useTransform(rawX, [-1, 1], [-14, 14]);
  const athleteY = useTransform(rawY, [-1, 1], [-10, 10]);
  const glowX    = useTransform(rawX, [-1, 1], [-30, 30]);
  const glowY    = useTransform(rawY, [-1, 1], [-20, 20]);
  const textX    = useTransform(rawX, [-1, 1], [-5, 5]);
  const textY    = useTransform(rawY, [-1, 1], [-3, 3]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    rawX.set(nx);
    rawY.set(ny);
    setSpotX(e.clientX - rect.left);
    setSpotY(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    animate(rawX, 0, { duration: 1.2 });
    animate(rawY, 0, { duration: 1.2 });
  };

  const particles = [
    { x: 8,  y: 18, size: 4, duration: 5,   delay: 0    },
    { x: 20, y: 72, size: 3, duration: 6,   delay: 0.7  },
    { x: 38, y: 35, size: 5, duration: 4.5, delay: 1.2  },
    { x: 55, y: 82, size: 3, duration: 5.5, delay: 0.3  },
    { x: 70, y: 12, size: 4, duration: 7,   delay: 1.8  },
    { x: 82, y: 55, size: 2, duration: 4,   delay: 0.9  },
    { x: 14, y: 90, size: 3, duration: 6.5, delay: 2.1  },
    { x: 92, y: 78, size: 4, duration: 5,   delay: 1.4  },
    { x: 48, y: 8,  size: 2, duration: 4.8, delay: 0.5  },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] overflow-hidden"
      style={{ background: '#090909' }}
    >
      {/* ── Layer 1: Red radial gradient ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 65% 65% at 72% 55%, rgba(243,45,75,0.20) 0%, rgba(160,10,25,0.08) 50%, transparent 75%)',
          x: glowX, y: glowY,
        }}
      />

      {/* ── Layer 2: Breathing animated glow ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ background: 'radial-gradient(ellipse 45% 55% at 68% 52%, rgba(243,45,75,0.28), transparent 70%)' }}
      />

      {/* ── Layer 3: Subtle animated grid ── */}
      <AnimatedGrid />

      {/* ── Layer 4: Noise texture (Desktop only for performance) ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Layer 5: Diagonal light beam ── */}
      <LightBeam />

      {/* ── Layer 6: Mouse spotlight ── */}
      <MouseSpotlight mouseX={spotX} mouseY={spotY} />

      {/* ── Layer 7: Floating particles ── */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* ── Layer 8: Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.75) 100%)' }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 container mx-auto px-5 md:px-12 flex flex-col md:flex-row items-center min-h-[100dvh] pt-8 md:pt-24 pb-32 md:pb-0">

        {/* Mobile Top Logo (Scrolls naturally with the page) */}
        <div className="md:hidden w-full flex justify-center mb-4 z-50 order-0">
          <img
            src="/images/logo-transparent.png?v=2"
            alt="MaxFitPro Fitness"
            className="h-24 w-auto drop-shadow-2xl"
          />
        </div>

        {/* RIGHT — Cinematic Athlete (order-1 on mobile so it's on top, order-2 on desktop) */}
        <div className="flex-1 relative flex items-end justify-center md:justify-end self-end h-[45dvh] md:h-[100dvh] w-full z-0 overflow-visible order-1 md:order-2 mt-4 md:mt-0">
          
          {/* Signature element: giant "NO EXCUSES" behind athlete */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            <span
              className="font-black uppercase text-center leading-none"
              style={{
                fontSize: 'clamp(3rem, 9vw, 8rem)',
                color: 'transparent',
                WebkitTextStroke: '1px rgba(243,45,75,0.12)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
              }}
            >
              NO<br/>EXCUSES
            </span>
          </motion.div>

          {/* Outlined circle behind athlete */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              width: '75%',
              paddingBottom: '75%',
              border: '1px solid rgba(243,45,75,0.12)',
              boxShadow: '0 0 80px 20px rgba(243,45,75,0.05)',
            }}
          />

          {/* Breathing red glow behind athlete (Optimized for mobile: Removed CSS blur filter) */}
          <motion.div
            style={{ x: glowX, y: glowY }}
            animate={{ opacity: [0.4, 0.75, 0.4], scale: [1, 1.06, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none rounded-full"
            style={{
              width: '100%',
              height: '80%',
              background: 'radial-gradient(ellipse at 50% 80%, rgba(243,45,75,0.8), rgba(243,45,75,0.2) 40%, transparent 70%)',
            }}
          />

          {/* Subtle glowing orb behind athlete (Optimized: Removed CSS blur filter & blend mode for mobile performance) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[30vw] h-[90vw] md:h-[30vw] rounded-full opacity-40 pointer-events-none" 
            style={{ background: 'radial-gradient(circle, rgba(243,45,75,0.8) 0%, rgba(243,45,75,0.4) 30%, rgba(0,0,0,0) 70%)' }} />

          {/* Ground shadow */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-2xl pointer-events-none"
            style={{ width: '65%', height: '20px', background: 'rgba(243,45,75,0.3)' }}
          />

          {/* The athlete */}
          <motion.img
            src="/images/hero.webp"
            alt="MaxFitPro Athlete"
            fetchPriority="high"
            loading="eager"
            style={{
              x: athleteX,
              y: athleteY,
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%)',
            }}
            initial={{ opacity: 0, y: 80, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-[55vh] md:h-[110vh] object-contain object-bottom filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* LEFT — Text (order-2 on mobile so it sits BELOW the athlete, order-1 on desktop) */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="flex-1 flex flex-col justify-center py-8 md:py-0 z-20 relative order-2 md:order-1 text-center md:text-left items-center md:items-start"
        >
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <div className="w-8 h-px hidden md:block" style={{ background: 'linear-gradient(90deg, #F32D4B, #FF5C72)' }} />
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold" style={{ color: '#FF5C72' }}>
              Pontian's Premier Gym
            </span>
            <div className="w-8 h-px hidden md:block" style={{ background: 'linear-gradient(270deg, #F32D4B, #FF5C72)' }} />
          </motion.div>

          {/* Editorial headline */}
          <div className="mb-6 md:mb-8 overflow-hidden flex flex-col gap-1">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block font-black uppercase leading-[0.85] tracking-tighter"
                style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: '#EDEDED' }}>
                BUILD YOUR BODY
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block font-black uppercase leading-[0.85] tracking-tighter"
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)', 
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255,255,255,0.4)'
                }}>
                BUILD YOUR
              </span>
            </motion.div>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block font-black uppercase leading-[0.85] tracking-tighter"
                style={{ 
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)', 
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(255,255,255,0.4)'
                }}>
                HABITS!
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs md:text-base max-w-xs mb-8 md:mb-10 leading-relaxed"
            style={{ color: '#555' }}
          >
            State-of-the-art equipment. Expert trainers. A community built to push you past every limit.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="flex flex-col md:flex-row items-center gap-5 mb-8 md:mb-12 w-full md:w-auto"
          >
            <a href="#contact" className="btn-premium px-10 py-4 text-sm w-full md:w-auto text-center">
              <span className="absolute inset-x-0 top-0 h-px rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              Join Now →
            </a>
            <a
              href="https://www.facebook.com/reel/998902199423924"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors group"
              style={{ color: '#555' }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 group-hover:border-[#F32D4B]"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#ededed"><path d="M8 5v14l11-7z" /></svg>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest group-hover:text-[#ededed] transition-colors">Watch Video</span>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex items-center gap-4 justify-center md:justify-start w-full"
          >
            <div className="flex -space-x-3">
              {['trainer', 'yoga', 'crossfit'].map((img, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 overflow-hidden" style={{ borderColor: '#090909', background: '#222' }}>
                  <img src={`/images/${img}.png`} alt="member" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white text-xs font-bold"
                style={{ borderColor: '#090909', background: '#F32D4B' }}>+</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 justify-center md:justify-start">
                <span className="font-semibold text-xs" style={{ color: '#ededed' }}>4.8</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4].map(i => (
                    <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FFD700">
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: '#444' }}>1K+ Reviews</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t hidden md:block"
        style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(9,9,9,0.6)', backdropFilter: 'blur(12px)' }}
      >
        <div className="container mx-auto px-12 py-4 flex items-center gap-16">
          {[['10k+', 'Sqft Facility'], ['500+', 'Active Members'], ['2', 'Branches'], ['4.8★', 'Rated']].map(([val, label]) => (
            <div key={label} className="flex items-baseline gap-3">
              <span className="text-xl font-black" style={{ color: '#ededed' }}>{val}</span>
              <span className="text-xs uppercase tracking-widest" style={{ color: '#444' }}>{label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Social icons — real SVGs, hidden initially, appear on scroll */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="hidden md:flex flex-col gap-3 absolute right-5 top-1/2 -translate-y-1/2 z-30"
      >
        {SOCIALS.map(({ label, href, icon }, idx) => (
          <motion.a
            key={idx}
            href={href}
            aria-label={label}
            whileHover={{ scale: 1.2, rotate: 8, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.4)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(243,45,75,0.85)';
              e.currentTarget.style.borderColor = '#F32D4B';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(243,45,75,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>

    </section>
  );
}
