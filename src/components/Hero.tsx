import { motion } from 'motion/react';
import { ArrowUpRight, Star, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideo: (url: string, title: string) => void;
}

export function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-[#FAFAFA]">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FFCC00]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Floating Leaves/Vegetable particles matching reference image */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[10%] opacity-40 hidden lg:block pointer-events-none"
      >
        <span className="text-3xl">🌿</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 left-[5%] opacity-30 hidden lg:block pointer-events-none"
      >
        <span className="text-4xl">🌱</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full bg-white border border-zinc-200/80 px-3.5 py-1.5 shadow-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFCC00] animate-ping" />
              <span className="text-xs font-semibold text-zinc-800">
                🟡 Продвижение ресторанов и кафе на Яндекс.Еде
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]"
            >
              Больше заказов на{' '}
              <span className="text-[#FFCC00] bg-[#09090B] px-3 py-0.5 rounded-md inline-block shadow-lg">
                Яндекс.Еда
              </span>{' '}
              — больше прибыли для вашего ресторана
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 max-w-2xl font-normal leading-relaxed"
            >
              Комплексное продвижение ресторанов и кафе на Яндекс.Еде под ключ.
              Привлекаем новых гостей, поднимаем позиции в выдаче, увеличиваем заказы и ваш чистый доход.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
            >
              {/* Primary Consultation Button */}
              <button
                onClick={onOpenConsultation}
                data-cursor="Бесплатно"
                className="flex items-center justify-center space-x-2 rounded-full bg-[#09090B] px-8 py-4 text-sm font-extrabold text-white shadow-xl shadow-black/20 hover:bg-zinc-800 hover:shadow-black/30 transition-all transform active:scale-98 group"
              >
                <span>Получить бесплатную консультацию</span>
                <ArrowUpRight className="h-4 w-4 text-[#FFCC00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Cases Button */}
              <a
                href="#cases"
                className="flex items-center justify-center space-x-2 rounded-full bg-white border border-zinc-200 px-6 py-4 text-sm font-bold text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm"
              >
                <span>Смотреть кейсы</span>
                <ArrowUpRight className="h-4 w-4 text-zinc-500" />
              </a>
            </motion.div>


            {/* Social Proof Avatars */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-3 pt-3 border-t border-zinc-200/60"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Ресторатор"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
                  alt="Владелец кафе"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120"
                  alt="Шеф-повар"
                />
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#FFCC00] text-[#FFCC00]" />
                  ))}
                  <span className="text-xs font-bold text-zinc-900 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Более <strong className="text-zinc-900">200+ ресторанов</strong> доверяют нам продвижение
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual (Dishes, Floating Stat Cards & Yandex Elements) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Main Video Wrapper */}
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Inner Soft Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FFCC00]/15 to-amber-100/30 blur-2xl -z-10" />

              {/* Main Dish / Video Container blending with background */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden group mix-blend-multiply">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 pointer-events-auto mix-blend-multiply"
                >
                  <source src="https://www.image2url.com/r2/default/videos/1785699802300-47ff45e4-bc2a-485b-b260-8732ed1c6dd1.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Live Badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-white flex items-center space-x-1.5 border border-white/20 pointer-events-none shadow-lg z-10">
                <span className="w-2 h-2 rounded-full bg-[#FFCC00] animate-pulse" />
                <span>Доставка Яндекс.Еда</span>
              </div>

              {/* Yandex Food Spiral Emblem (Yellow Badge) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute top-12 left-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFCC00] text-black shadow-lg shadow-[#FFCC00]/40 border-2 border-white"
              >
                <div className="text-xl font-black">🌀</div>
              </motion.div>

              {/* Floating Stat Card 1: Top Right (+137% Orders) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-zinc-100 max-w-[190px]"
              >
                <span className="text-[11px] font-semibold text-zinc-400 block mb-0.5">Заказы</span>
                <div className="flex items-center space-x-1.5">
                  <span className="text-2xl font-black text-zinc-900">+137%</span>
                  <div className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    <span>3.2х</span>
                  </div>
                </div>
                {/* SVG Sparkline Graph */}
                <svg className="w-full h-8 mt-1 text-[#FFCC00]" viewBox="0 0 100 25" fill="none">
                  <path
                    d="M0 20 Q 20 18, 40 12 T 80 8 T 100 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Floating Stat Card 2: Bottom Left (Rating 4.9) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-2 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-zinc-100 min-w-[180px]"
              >
                <span className="text-[11px] font-semibold text-zinc-400 block mb-0.5">Рейтинг ресторана</span>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-2xl font-black text-zinc-900">
                    <Star className="h-5 w-5 fill-[#FFCC00] text-[#FFCC00] mr-1" />
                    <span>4.9</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    +0.7 за месяц
                  </span>
                </div>
              </motion.div>

              {/* Floating Leaf Particles */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 -left-10 text-2xl"
              >
                🍃
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-10 right-0 text-2xl"
              >
                🌱
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
