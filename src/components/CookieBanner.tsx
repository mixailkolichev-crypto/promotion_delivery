import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (!consent) {
      // Show with a slight delay for smoother entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent_accepted', 'true');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('cookie_consent_accepted', 'dismissed');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50"
        >
          <div className="relative overflow-hidden rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/90 p-4 sm:p-5 shadow-2xl shadow-black/50 text-white">
            {/* Ambient Yellow Glow Accent */}
            <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[#FFCC00]/15 blur-2xl pointer-events-none" />

            <div className="flex items-start gap-3.5">
              {/* Cookie Icon badge */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFCC00] text-zinc-950 shadow-md shadow-[#FFCC00]/25">
                <Cookie className="h-5 w-5 stroke-[2.2]" />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0 pr-2">
                <h4 className="text-sm font-bold text-white tracking-tight">
                  Мы используем cookie
                </h4>
                <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                  Файлы cookie помогают нам повышать качество обслуживания и делать сайт удобнее. Оставаясь на сайте, вы соглашаетесь с использованием cookie.
                </p>

                {/* Actions */}
                <div className="mt-3.5 flex items-center gap-2">
                  <button
                    onClick={handleAccept}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl bg-[#FFCC00] px-4 py-2 text-xs font-extrabold text-zinc-950 hover:bg-[#FFD600] transition-all transform active:scale-95 shadow-md shadow-[#FFCC00]/20 cursor-pointer"
                  >
                    Принять
                  </button>
                  <button
                    onClick={handleDismiss}
                    className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-3 py-2 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Понятно
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="shrink-0 p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors cursor-pointer"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
