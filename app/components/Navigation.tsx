'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME', num: '01' },
    { id: 'about', label: 'SKILLS', num: '02' },
    { id: 'projects', label: 'PROJECTS', num: '03' },
    { id: 'contact', label: 'CONNECT', num: '04' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 cyber-nav ${isScrolled ? 'shadow-[0_0_30px_rgba(0,240,255,0.15)]' : ''}`}>
        <div className="w-full px-6 lg:px-12 h-full flex items-center">
          <div className="flex-1 flex items-center justify-between">
            <button
              type="button"
              className="font-space font-bold tracking-[0.2em] cursor-pointer bg-transparent border-none flex items-center gap-3 group"
              onClick={() => scrollToSection('home')}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-neon-cyan opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300" />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-neon-cyan via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50" />
                <span className="text-neon-cyan text-xs font-mono group-hover:text-neon-pink transition-colors duration-300">ZJ</span>
              </div>
              <span className="text-white text-lg tracking-[0.15em] hidden sm:block group-hover:text-neon-cyan transition-colors duration-300">
                ZHU JIA
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-mono text-xs tracking-[0.2em] transition-all duration-300 group ${
                    activeSection === item.id
                      ? 'text-neon-cyan'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className={`text-[10px] opacity-40 ${activeSection === item.id ? 'text-neon-pink opacity-70' : 'group-hover:opacity-70'}`}>
                      [{item.num}]
                    </span>
                    <span className="group-hover:text-neon-cyan">{item.label}</span>
                  </span>
                  <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`} />
                  {activeSection === item.id && (
                    <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1 h-1 bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)] rotate-45" />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500 tracking-wider">
                <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_8px_var(--neon-cyan)]" />
                <span>SYSTEM ONLINE</span>
              </div>
            </div>

            <button
              type="button"
              className={`md:hidden relative p-2 transition-colors duration-300 z-[60] ${
                isMobileMenuOpen ? 'text-neon-pink' : 'text-slate-300 hover:text-neon-cyan'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-[2px] translate-y-[1px] w-[26px]' : 'w-full'}`} />
                <span className={`block h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-3' : 'w-full'}`} />
                <span className={`block h-[2px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-[2px] -translate-y-[1px] w-[26px]' : 'w-full'}`} />
              </div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
      </nav>

      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div
          className="absolute inset-0 bg-obsidian/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        />

        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <div className="cyber-grid absolute inset-0 opacity-30" />

          <div className="relative space-y-8">
            {navItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left group transition-all duration-300"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-sm transition-colors duration-300 ${
                    activeSection === item.id ? 'text-neon-pink' : 'text-slate-600 group-hover:text-neon-cyan'
                  }`}>
                    [{item.num}]
                  </span>
                  <span className={`font-space text-5xl sm:text-6xl font-bold tracking-[0.1em] transition-colors duration-300 ${
                    activeSection === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`}>
                    {item.label}
                  </span>
                  <div className={`ml-auto w-0 h-[2px] bg-gradient-to-r from-neon-cyan to-transparent transition-all duration-300 ${activeSection === item.id ? 'w-16' : 'w-0 group-hover:w-8'}`} />
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-neon-cyan/20 font-mono text-xs">
            <div className="flex justify-between items-end text-slate-500">
              <div>
                <div className="text-neon-cyan mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_var(--neon-cyan)]" />
                  STATUS: ONLINE
                </div>
                <div>LOC: BEIJING, CN</div>
              </div>
              <div className="text-right">
                <div className="text-neon-pink mb-2">v3.0.0</div>
                <div>PROTOCOL: SECURE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
