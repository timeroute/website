'use client';

import { useEffect, useState } from 'react';

const navItems = [
  { id: 'work', label: '作品' },
  { id: 'focus', label: '方向' },
  { id: 'contact', label: '联系' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const ids = ['home', 'focus', 'work', 'contact'];
      const y = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isScrolled || isOpen
            ? 'bg-snow/85 backdrop-blur-md border-b border-ink/8'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
          <button
            type="button"
            onClick={() => go('home')}
            className="font-display text-lg tracking-tight text-ink"
            style={{ fontWeight: 800 }}
          >
            ZHU JIA
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => go(item.id)}
                className={`text-sm transition-colors ${
                  active === item.id
                    ? 'text-meridian font-semibold'
                    : 'text-ink/65 hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/zhujia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-ember hover:opacity-80"
            >
              GitHub
            </a>
          </div>

          <button
            type="button"
            className="relative z-50 p-2 text-ink md:hidden"
            aria-label={isOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="flex h-5 w-6 flex-col justify-between">
              <span
                className={`block h-[1.5px] bg-current transition-transform origin-left ${
                  isOpen ? 'translate-y-[1px] rotate-45' : ''
                }`}
              />
              <span className={`block h-[1.5px] bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span
                className={`block h-[1.5px] bg-current transition-transform origin-left ${
                  isOpen ? '-translate-y-[1px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-snow/96 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <div className="space-y-6">
            {[{ id: 'home', label: '首页' }, ...navItems].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => go(item.id)}
                className={`block w-full text-left font-display text-4xl tracking-tight ${
                  active === item.id ? 'text-meridian' : 'text-ink'
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/zhujia"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 text-ember font-semibold"
          >
            打开 GitHub →
          </a>
        </div>
      </div>
    </>
  );
}
