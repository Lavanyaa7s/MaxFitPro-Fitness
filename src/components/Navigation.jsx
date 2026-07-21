import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const links = ['Home', 'About', 'Classes', 'Team', 'Pricing', 'Contact'];

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── TOP NAVBAR (Desktop Nav only now) ── */}
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
              const isActive = activeLink === id;
              return (
                <a
                  key={link}
                  href={`#${id}`}
                  onClick={() => setActiveLink(id)}
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
              className="group relative overflow-hidden px-6 py-2.5 rounded-full font-bold uppercase text-xs text-white shadow-[0_4px_20px_rgba(220,30,50,0.4)] hover:scale-105 transition-transform duration-300"
              style={{ background: 'linear-gradient(135deg, #ff2e4c, #c0152a)' }}
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/25 rounded-full" />
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
              href={`#${link.toLowerCase()}`}
              onClick={() => { setIsOpen(false); setActiveLink(link.toLowerCase()); }}
              className="text-white/80 font-black text-3xl w-full text-center py-4 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 rounded-full font-bold uppercase text-sm text-white"
            style={{ background: 'linear-gradient(135deg, #ff2e4c, #c0152a)' }}
          >
            Join Now
          </a>
        </div>
      )}

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <div className={`md:hidden fixed bottom-0 left-0 w-full z-50 flex flex-col bg-black border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-safe transition-transform duration-300 ${hidden ? 'translate-y-full' : 'translate-y-0'}`}>

        {/* Tab Bar Icons */}
        <div className="w-full h-16 flex items-center justify-between px-6">
          
          {/* Location Icon (Left) */}
          <a href="#contact" className="p-2 text-white/70 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          
          {/* Center Logo */}
          <a href="#" className="p-1" onClick={() => window.scrollTo(0,0)}>
            <img src="/images/logo-transparent.png?v=2" alt="Home" className="h-12 w-auto object-contain drop-shadow-md" />
          </a>
          
          {/* Nav Options / Hamburger (Right) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
