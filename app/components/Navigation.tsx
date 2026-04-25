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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${isScrolled || isMobileMenuOpen
          ? 'bg-obsidian/90 backdrop-blur-md border-[#222]'
          : 'bg-transparent border-transparent'
        }`}>
        <div className="w-full px-6 lg:px-12 py-4 h-full flex">
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
              className={`md:hidden relative p-2 transition-colors duration-300 z-50 ${isMobileMenuOpen ? 'text-chartreuse' : 'text-slate-300 hover:text-chartreuse'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-[1px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-[2px] translate-y-[-1px] w-[26px]' : 'w-full'}`} />
                <span className={`block h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-2' : 'w-full'}`} />
                <span className={`block h-[1px] bg-current transform transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px] w-[26px]' : 'w-full'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div
          className={`absolute inset-0 bg-obsidian/95 backdrop-blur-xl transition-opacity duration-300`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        />

        <div className={`absolute inset-0 flex flex-col justify-center px-8 transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-12'}`}>
          <div className="space-y-6">
            {navItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left group transition-all duration-300`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-end gap-4 font-space text-4xl sm:text-5xl uppercase tracking-tighter">
                  <span className={`text-sm font-mono transition-colors ${activeSection === item.id ? 'text-chartreuse' : 'text-slate-600 group-hover:text-chartreuse'}`}>
                    {item.num}
                  </span>
                  <span className={`transition-colors ${activeSection === item.id ? 'text-chartreuse' : 'text-slate-300 group-hover:text-white'}`}>
                    {item.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#1a1a1a] font-mono text-xs text-slate-500 flex justify-between items-end">
            <div>
              <div className="text-chartreuse mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-chartreuse animate-pulse" />
                STATUS: ONLINE
              </div>
              <div>LOC: BEIJING, CN</div>
            </div>
            <div className="text-right">
              <div className="mb-2 text-slate-400">V_2.0.4</div>
              <div>SYS.OK</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}