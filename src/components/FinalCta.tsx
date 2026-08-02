import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Send, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface FinalCtaProps {
  onOpenConsultation: () => void;
}

export function FinalCta({ onOpenConsultation }: FinalCtaProps) {
  const [restaurant, setRestaurant] = useState('');
  const [phone, setPhone] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Здравствуйте! Хочу получить бесплатную консультацию и аудит ресторана.\n` +
      `📌 Название: ${restaurant || 'Уточню в диалоге'}\n` +
      `📞 Телефон: ${phone || 'Указан в WhatsApp'}`
    );
    window.open(`https://wa.me/79990000000?text=${text}`, '_blank');
  };

  return (
    <section id="contacts" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-[3rem] bg-[#09090B] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden border border-zinc-800">
          
          {/* Subtle Ambient Yellow Gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFCC00]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFCC00]/20 px-3.5 py-1 text-xs font-bold text-[#FFCC00]">
                <Sparkles className="h-3.5 w-3.5 text-[#FFCC00]" />
                <span>Бесплатный первичный аудит</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Получите бесплатную консультацию
              </h2>

              <p className="text-base text-zinc-300 font-normal leading-relaxed max-w-xl">
                Расскажите о своем ресторане. Мы проведем первичный анализ карточки, покажем скрытые точки роста и предложим пошаговую стратегию увеличения заказов в течение 24 часов.
              </p>

              {/* Direct Messenger Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="https://wa.me/79990000000?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2.5 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] transition-all transform active:scale-95"
                >
                  <MessageSquare className="h-5 w-5 fill-white text-[#25D366]" />
                  <span>Написать в WhatsApp</span>
                </a>

                <a
                  href="https://max.ru/promotion_delivery?text=Здравствуйте!%20Хочу%20получить%20бесплатную%20консультацию."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center space-x-2.5 rounded-2xl bg-zinc-800 border border-zinc-700 px-6 py-4 font-bold text-[#FFCC00] hover:bg-zinc-700 transition-all transform active:scale-95"
                >
                  <Send className="h-5 w-5 text-[#FFCC00]" />
                  <span>Написать в MAX Messenger</span>
                </a>
              </div>

              <div className="flex items-center space-x-2 text-xs text-zinc-400 pt-2">
                <ShieldCheck className="h-4 w-4 text-[#FFCC00]" />
                <span>Консультация ни к чему вас не обязывает. Отвечаем за 5 минут.</span>
              </div>
            </div>

            {/* Right Column Quick Form */}
            <div className="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-2">
                Запросить разбор ресторана
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Заполните 2 поля для связи с маркетологом:
              </p>

              <form onSubmit={handleQuickSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Название ресторана или кафе
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Например, Италия Пицца"
                    value={restaurant}
                    onChange={(e) => setRestaurant(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 px-4 text-sm text-white placeholder:text-zinc-500 focus:border-[#FFCC00] focus:outline-none focus:ring-1 focus:ring-[#FFCC00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Ваш телефон / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 px-4 text-sm text-white placeholder:text-zinc-500 focus:border-[#FFCC00] focus:outline-none focus:ring-1 focus:ring-[#FFCC00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 rounded-2xl bg-[#FFCC00] py-4 px-6 font-black text-black shadow-lg shadow-[#FFCC00]/30 hover:bg-[#FFD600] transition-all transform active:scale-98"
                >
                  <span>Получить разбор в WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-[10px] text-zinc-500 text-center">
                  Мы свяжемся с вами в течение 5 минут для уточнения деталей.
                </p>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
