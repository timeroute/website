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
    { id: 'home', label: 'SYS.HOME', num: '01' },
    { id: 'about', label: 'SYS.SPECS', num: '02' },
    { id: 'projects', label: 'SYS.DATA', num: '03' },
    { id: 'contact', label: 'SYS.LINK', num: '04' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${isScrolled
          ? 'bg-obsidian/90 backdrop-blur-md border-[#1a1a1a]'
          : 'bg-transparent border-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 h-full flex">
          <div className="flex-1 flex items-center justify-between">
            {/* Logo */}
            <button
              type="button"
              className="text-xl font-space font-bold tracking-widest cursor-pointer hover:text-chartreuse transition-colors duration-300 bg-transparent border-none flex items-center gap-2"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-3 h-3 bg-chartreuse animate-pulse" />
              TIMEROUTE
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-1 text-sm font-mono tracking-wider transition-all duration-300 group flex items-center gap-2 ${activeSection === item.id
                      ? 'text-chartreuse'
                      : 'text-slate-400 hover:text-slate-200'
                    }`}
                >
                  <span className="text-[10px] opacity-50 group-hover:opacity-100">{item.num}</span>
                  {item.label}
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-chartreuse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden relative p-2 text-slate-300 hover:text-chartreuse transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span className={`block h-[1px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-[1px] bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <button
          type="button"
          className={`absolute inset-0 bg-obsidian/80 backdrop-blur-sm transition-opacity duration-300 border-none ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        />

        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0d0d0d] border-l border-[#1a1a1a] transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-24">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left p-4 border transition-all duration-300 ${activeSection === item.id
                      ? 'border-chartreuse text-chartreuse bg-chartreuse/5'
                      : 'border-[#1a1a1a] text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center gap-4 font-mono">
                    <span className="text-xs opacity-50">{item.num}</span>
                    <div className="font-medium tracking-widest">{item.label}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#1a1a1a] font-mono text-xs text-slate-500">
              <div className="text-chartreuse mb-2">STATUS: ONLINE</div>
              <div>LOC: BEIJING, CN</div>
              <div className="mt-4">V_2.0.4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}