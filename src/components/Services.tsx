import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, Megaphone, BarChart, ArrowUpRight, Check } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
  onOpenVideo?: (url: string, title: string) => void;
}

export function Services({ onOpenConsultation, onOpenVideo }: ServicesProps) {
  const [activeService, setActiveService] = useState<number>(0);

  const magnificVideoUrl =
    'https://www.image2url.com/r2/default/videos/1785779239844-74160e09-a735-4030-906d-96d0e464bdfa.mp4';

  const services = [
    {
      icon: ShoppingBag,
      title: 'Оптимизация карточки ресторана',
      description:
        'Делаем вашу карточку привлекательной для гостей и алгоритмов Яндекс.Еда. Прорабатываем меню, аппетитные фотографии, сочные описания блюд и выгодные сеты.',
      deliverables: ['Аудит и сочное описание блюд', 'A/B тестирование обложек', 'Настройка акционных комбо'],
    },
    {
      icon: Star,
      title: 'Работа с рейтингом и отзывами',
      description:
        'Повышаем рейтинг ресторана до 4.8–4.9, стимулируем гостей оставлять отзывы, нивелируем негативные оценки и оперативно обрабатываем обратную связь.',
      deliverables: ['Рост рейтинга до 4.9', 'Инструкции для курьеров и гостей', 'Ежедневная работа с негативом'],
    },
    {
      icon: Megaphone,
      title: 'Настройка рекламных кампаний',
      description:
        'Запускаем эффективную рекламу внутри экосистемы Яндекс.Еда. Используем приоритетные позиции, скидки за первый заказ и умный таргетинг.',
      deliverables: ['Оптимизация рекламного бюджета', 'Приоритет в поисковой выдаче', 'Привлечение новых клиентов'],
    },
    {
      icon: BarChart,
      title: 'Аналитика и сопровождение 24/7',
      description:
        'Постоянно анализируем конкурентов, воронку продаж, конверсию блюд и динамику выручки. Персональный менеджер всегда на связи.',
      deliverables: ['Еженедельные понятные отчёты', 'Конкурентный анализ района', 'Персональный менеджер 24/7'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Soft Gradients */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-amber-50 border border-amber-200/80 px-3.5 py-1 text-xs font-bold text-zinc-900 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#FFCC00]" />
            <span>Что мы делаем</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            Полное продвижение на Яндекс.Еда под ключ
          </h2>
          <p className="mt-3 text-base text-zinc-600 font-normal leading-relaxed">
            Берём на себя абсолютно все задачи по продвижению вашего ресторана на Яндекс.Еде, чтобы вы получали стабильно больше заказов и растили прибыль.
          </p>
        </div>

        {/* 2-Column Grid Matching Reference Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Service Cards */}
          <div className="lg:col-span-6 space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = activeService === index;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveService(index)}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-3xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-zinc-50 border-[#FFCC00] shadow-lg shadow-[#FFCC00]/10'
                      : 'bg-white border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                        isSelected
                          ? 'bg-[#FFCC00] text-black shadow-md shadow-[#FFCC00]/30'
                          : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-zinc-900">
                          {service.title}
                        </h3>
                        {isSelected && (
                          <span className="text-xs font-bold text-[#FFCC00] bg-black px-2.5 py-1 rounded-full">
                            Активно
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {service.description}
                      </p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-3 border-t border-zinc-200/80 space-y-1.5"
                        >
                          {service.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-zinc-800">
                              <Check className="h-3.5 w-3.5 text-[#FFCC00]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-2xl bg-[#09090B] px-8 py-4 text-sm font-extrabold text-[#FFCC00] shadow-xl hover:bg-zinc-800 transition-all transform active:scale-98"
              >
                <span>Запросить бесплатный план продвижения</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column Visual: Full Infographics Video without frames */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl lg:max-w-4xl scale-105 sm:scale-115 lg:scale-125 lg:translate-x-8 group">
              {/* Full Video without frame borders or padding */}
              <div
                onClick={() => onOpenVideo?.(magnificVideoUrl, "Анимированная инфографика графиков и результатов")}
                className="relative w-full cursor-pointer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain pointer-events-auto"
                >
                  <source src="https://www.image2url.com/r2/default/videos/1785779239844-74160e09-a735-4030-906d-96d0e464bdfa.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating Badge (Рост заказов и прибыли) */}
              <motion.div
                onClick={onOpenConsultation}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-zinc-200 cursor-pointer flex items-center space-x-3 hover:bg-white transition-colors z-10"
              >
                <div>
                  <span className="text-xs font-black text-zinc-900 block">Рост заказов и прибыли</span>
                  <span className="text-[11px] text-zinc-500">Гарантия в договоре</span>
                </div>
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#FFCC00] text-black shadow-md shadow-[#FFCC00]/40">
                  <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
