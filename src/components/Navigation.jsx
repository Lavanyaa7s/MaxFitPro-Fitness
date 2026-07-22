import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const links = ['Home', 'About', 'Classes', 'Team', 'Pricing', 'Locations', 'Contact'];

  // Scroll detection & section intersection observer
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Section Observer for Active Navigation State
    const sectionIds = ['hero', 'about', 'classes', 'trainers', 'pricing', 'locations', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Determine active tab for mobile bottom bar
  const isHomeActive = activeSection === 'hero' || activeSection === 'about';
  const isClassesActive = activeSection === 'classes';
  const isPricingActive = activeSection === 'pricing';
  const isLocationsActive = activeSection === 'locations' || activeSection === 'contact';

  return (
    <>
      {/* ── TOP NAVBAR (Desktop Nav only) ── */}
      <nav className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'py-2 bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-50 flex-shrink-0">
            <img
              src="/images/logo-transparent.png?v=2"
              alt="MaxFitPro Fitness"
              className="h-20 w-auto drop-shadow-md"
            />
          </a>

          {/* Desktop — Glass pill nav */}
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full backdrop-blur-md border border-white/10"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            {links.map(link => {
              const id = link.toLowerCase();
              const isActive = activeSection === id || (id === 'home' && activeSection === 'hero') || (id === 'team' && activeSection === 'trainers');
              return (
                <a
                  key={link}
                  href={`#${id === 'home' ? 'hero' : id === 'team' ? 'trainers' : id}`}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/50 hover:text-white/90'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-accent/20 border border-accent/30" />
                  )}
                  <span className="relative">{link}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div>
            <a
              href="#contact"
              className="group relative overflow-hidden px-6 py-2.5 rounded-full font-bold uppercase text-xs text-white shadow-[0_4px_20px_rgba(220,30,50,0.4)] hover:scale-105 transition-transform duration-300 block"
              style={{ background: 'linear-gradient(135deg, #ff2e4c, #c0152a)' }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), transparent)' }}
              />
              <span className="relative">Join Now</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-32 px-6 pb-24 flex flex-col items-center justify-center md:hidden">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase() === 'team' ? 'trainers' : link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white/80 font-black text-3xl w-full text-center py-4 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
          <a
            href="https://wa.me/60185713889"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 rounded-full font-bold uppercase text-sm text-white shadow-lg"
            style={{ background: 'linear-gradient(135deg, #ff2e4c, #c0152a)' }}
          >
            Join Now
          </a>
        </div>
      )}

      {/* ── MOBILE BOTTOM NAVIGATION (With Active Highlighted States) ── */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.9)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ${hidden ? 'translate-y-full' : 'translate-y-0'}`}>
        <div className="w-full h-16 flex items-center justify-around px-2 relative">
          
          {/* 1. HOME TAB */}
          <a 
            href="#hero" 
            className={`relative flex flex-col items-center justify-center w-14 h-full transition-all duration-300 ${
              isHomeActive ? 'text-accent' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {isHomeActive && (
              <span className="absolute top-0 w-8 h-1 bg-accent rounded-full shadow-[0_0_12px_#F32D4B]" />
            )}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isHomeActive ? 'drop-shadow-[0_0_8px_rgba(243,45,75,0.8)]' : ''}>
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <path d="M9 22V12h6v10" />
            </svg>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Home</span>
          </a>

          {/* 2. ZONES / CLASSES TAB */}
          <a 
            href="#classes" 
            className={`relative flex flex-col items-center justify-center w-14 h-full transition-all duration-300 ${
              isClassesActive ? 'text-accent' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {isClassesActive && (
              <span className="absolute top-0 w-8 h-1 bg-accent rounded-full shadow-[0_0_12px_#F32D4B]" />
            )}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isClassesActive ? 'drop-shadow-[0_0_8px_rgba(243,45,75,0.8)]' : ''}>
              <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 00-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Zones</span>
          </a>

          {/* 3. PRICING TAB */}
          <a 
            href="#pricing" 
            className={`relative flex flex-col items-center justify-center w-14 h-full transition-all duration-300 ${
              isPricingActive ? 'text-accent' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {isPricingActive && (
              <span className="absolute top-0 w-8 h-1 bg-accent rounded-full shadow-[0_0_12px_#F32D4B]" />
            )}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isPricingActive ? 'drop-shadow-[0_0_8px_rgba(243,45,75,0.8)]' : ''}>
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Plans</span>
          </a>

          {/* 4. LOCATIONS TAB */}
          <a 
            href="#locations" 
            className={`relative flex flex-col items-center justify-center w-14 h-full transition-all duration-300 ${
              isLocationsActive ? 'text-accent' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {isLocationsActive && (
              <span className="absolute top-0 w-8 h-1 bg-accent rounded-full shadow-[0_0_12px_#F32D4B]" />
            )}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isLocationsActive ? 'drop-shadow-[0_0_8px_rgba(243,45,75,0.8)]' : ''}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Gyms</span>
          </a>

          {/* 5. MENU OVERLAY TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`relative flex flex-col items-center justify-center w-14 h-full transition-all duration-300 ${
              isOpen ? 'text-accent' : 'text-white/50 hover:text-white/80'
            }`}
          >
            {isOpen && (
              <span className="absolute top-0 w-8 h-1 bg-accent rounded-full shadow-[0_0_12px_#F32D4B]" />
            )}
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="text-[9px] font-bold uppercase tracking-wider mt-1">Menu</span>
          </button>

        </div>
      </div>
    </>
  );
}
