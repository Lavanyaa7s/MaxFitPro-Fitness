import { motion } from 'framer-motion';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Classes', href: '#classes' },
    { label: 'Why Choose Us', href: '#whychooseus' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Locations', href: '#locations' },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* ── TOP CTA BANNER (Vibrant Red Accent Background) ── */}
      <div className="relative py-12 md:py-16 px-4 md:px-8 bg-gradient-to-r from-[#F32D4B] via-[#D01A35] to-[#990B21] shadow-[0_-10px_40px_rgba(243,45,75,0.2)]">
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left relative z-10">
          <div>
            <span className="text-white/80 font-bold uppercase tracking-widest text-xs mb-1 block">
              Start Your Journey Today
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-sm">
              READY TO TRANSFORM YOUR BODY?
            </h2>
          </div>

          <a 
            href="https://wa.me/60185713889" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex h-14 items-center justify-center bg-white text-black px-10 rounded-full font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all duration-300 shadow-xl shrink-0"
          >
            Claim Free Trial →
          </a>
        </div>
      </div>

      {/* ── MAIN FOOTER CONTENT (Rich Dark Charcoal/Carbon Background) ── */}
      <div className="bg-[#111111] border-b border-white/10 relative">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 relative z-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 pr-0 lg:pr-12">
            <a href="#" className="mb-6 block">
              <img
                src="/images/Logo.png"
                alt="MaxFitPro Fitness"
                className="h-16 w-auto filter invert"
              />
            </a>
            <p className="text-white/60 mb-8 leading-relaxed font-medium text-sm">
              The premium training ground in Pontian. Engineered for those who demand excellence in every rep. Join our high-performance community today.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { name: 'FB', href: '#' },
                { name: 'IG', href: '#' },
                { name: 'TK', href: '#' },
                { name: 'WA', href: 'https://wa.me/60185713889' }
              ].map(social => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300 font-bold text-xs"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-white text-sm tracking-widest uppercase mb-6 text-accent">
              Quick Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60 font-medium">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200 block py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours & Contact */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-white text-sm tracking-widest uppercase mb-6 text-accent">
              Hours & Contact
            </h4>
            <div className="space-y-4 text-sm text-white/70">
              <div>
                <span className="block font-bold text-xs uppercase tracking-wider text-white/40 mb-1">Operating Hours</span>
                <p className="font-medium text-white/90">Monday – Sunday: 8:00 AM – 11:00 PM</p>
              </div>

              <div>
                <span className="block font-bold text-xs uppercase tracking-wider text-white/40 mb-1">Phone Enquiries</span>
                <p className="font-medium text-white/90">018-571 3889 / 010-760 3889</p>
              </div>

              <div>
                <span className="block font-bold text-xs uppercase tracking-wider text-white/40 mb-1">Location</span>
                <p className="font-medium text-white/90">Pusat Perniagaan Kota Emas, Pontian</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* ── COPYRIGHT BAR ── */}
      <div className="bg-[#080808] py-8 pb-32 md:pb-8 text-center relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs font-semibold tracking-wider">
          <p>© {new Date().getFullYear()} MAXFITPRO FITNESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white/70 transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
