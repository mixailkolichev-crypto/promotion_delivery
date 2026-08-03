import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { FloatingDock, DockItem } from './ui/floating-dock';
import {
  IconTools,
  IconChartBar,
  IconInfoCircle,
  IconMessage2,
  IconPhone,
  IconBrandWhatsapp,
  IconMessageCode,
} from '@tabler/icons-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export function Header({ onOpenConsultation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Кейсы', href: '#cases' },
    { name: 'О нас', href: '#about' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const dockItems: DockItem[] = [
    {
      title: 'Услуги',
      icon: <IconTools className="h-4 w-4 text-zinc-700" />,
      href: '#services',
    },
    {
      title: 'Кейсы',
      icon: <IconChartBar className="h-4 w-4 text-zinc-700" />,
      href: '#cases',
    },
    {
      title: 'О нас',
      icon: <IconInfoCircle className="h-4 w-4 text-zinc-700" />,
      href: '#about',
    },
    {
      title: 'Отзывы',
      icon: <IconMessage2 className="h-4 w-4 text-zinc-700" />,
      href: '#reviews',
    },
    {
      title: 'Контакты',
      icon: <IconPhone className="h-4 w-4 text-zinc-700" />,
      href: '#contacts',
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent ${
        isScrolled ? 'py-2.5' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center">
              <span className="h-3 w-3 rounded-full bg-[#FFCC00] animate-pulse" />
              <div className="h-7 w-7 rounded-full bg-[#FFCC00] flex items-center justify-center font-black text-black text-xs shadow-md shadow-[#FFCC00]/40 group-hover:scale-105 transition-transform">
                е
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-zinc-900 leading-none">
                еда<span className="text-[#FFCC00]">.</span>
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase">
                Promotion Delivery
              </span>
            </div>
          </a>

          {/* Floating Dock Navigation (Desktop) */}
          <div className="hidden md:flex items-center">
            <FloatingDock items={dockItems} />
          </div>

          {/* CTA & Messenger Quick Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/79161482007"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-1.5 text-xs font-semibold text-zinc-700 hover:text-[#25D366] transition-colors p-2 rounded-full hover:bg-zinc-100/80"
              title="Написать в WhatsApp"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenConsultation}
              data-cursor="Консультация"
              className="relative group overflow-hidden rounded-full bg-[#09090B] px-5 py-2.5 text-xs font-bold text-white transition-all shadow-md hover:shadow-lg hover:shadow-black/20 transform active:scale-95 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC00] via-[#FFD600] to-[#FFCC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
              <span className="relative z-10 flex items-center space-x-1.5 group-hover:text-zinc-950 transition-colors">
                <span>Обсудить проект</span>
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </button>
          </div>

          {/* Mobile Floating Dock & Menu Trigger */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="rounded-full bg-[#09090B] px-3.5 py-1.5 text-xs font-bold text-[#FFCC00] shadow-sm"
            >
              Консультация
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full bg-zinc-100 p-2 text-zinc-700 hover:bg-zinc-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-zinc-800 hover:text-[#FFCC00] py-1 border-b border-zinc-100"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-2 grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/79161482007"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl bg-[#25D366] py-2.5 text-xs font-bold text-white shadow-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://max.ru/promotion_delivery"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2 rounded-xl bg-[#09090B] py-2.5 text-xs font-bold text-[#FFCC00] shadow-sm"
                >
                  <Send className="h-4 w-4" />
                  <span>MAX</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center space-x-2 rounded-2xl bg-[#FFCC00] py-3 text-sm font-extrabold text-zinc-950 shadow-md"
              >
                <span>Получить бесплатную консультацию</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

