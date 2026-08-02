import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, TrendingUp, ArrowLeft, ArrowRight, Building2 } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  city: string;
  avatar: string;
  text: string;
  growth: string;
  rating: string;
};

export function Testimonials({ autoplay = false }: { autoplay?: boolean }) {
  const [active, setActive] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Михаил Соколов',
      role: 'Управляющий сети «Италия Паста & Пицца»',
      city: 'Москва (3 филиала)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      text: 'За 2 месяца работы с командой Promotion Delivery наши заказы на Яндекс.Еде выросли в 2.8 раза! Карточки стали привлекательными, рейтинг поднялся с 4.2 до 4.9. Выручка с доставки полностью перекрыла аренду зала!',
      growth: '+180% выручка',
      rating: '4.9',
    },
    {
      name: 'Елена Васильева',
      role: 'Основатель суши-бара «Токио Ролл»',
      city: 'Санкт-Петербург',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
      text: 'До обращения были на 15-й позиции в локации и не понимали, почему нет заказов. Ребята пересобрали меню, запустили умный таргетинг внутри приложения. В первый же месяц +120 заказов каждую неделю!',
      growth: '+145% заказы',
      rating: '4.9',
    },
    {
      name: 'Артем Арутюнян',
      role: 'Владелец ресторана «Кавказский Дворик»',
      city: 'Краснодар',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
      text: 'Очень доволен еженедельной аналитикой и персональным сопровождением. Менеджер на связи даже в выходные. Мы вышли на чистую прибыль +210 000 руб/мес только с Яндекс.Еды. Рекомендую всем коллегам!',
      growth: '+210 000 ₽/мес',
      rating: '5.0',
    },
    {
      name: 'Наталья Громова',
      role: 'Бренд-шеф бургерной «Bulls & Burgers»',
      city: 'Екатеринбург',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      text: 'После профессиональной настройки активов меню и оптимизации сетов в Яндекс.Еде, конверсия из просмотра в заказ выросла на 64%! Перешагнули отметку в 850 заказов в месяц только из сервиса доставки.',
      growth: '+160% профит',
      rating: '5.0',
    },
    {
      name: 'Дмитрий Ковалев',
      role: 'Директор сети кофеен «Sweets & Coffee»',
      city: 'Новосибирск (4 точки)',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      text: 'Благодаря грамотному позиционированию и продвижению в утренние часы пик, просадку продаж полностью убрали. Вложения в команду агентства окупились в первую же неделю работы!',
      growth: '+195% заказы',
      rating: '4.9',
    },
    {
      name: 'Роман Зайцев',
      role: 'Совладелец азиатского гастробара «Wok & Roll»',
      city: 'Казань',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
      text: 'Работаем с Promotion Delivery более полугода. Потрясающий сервисный подход: аналитик контролирует маржинальность блюд и позиции в выдаче. Месячная выручка с Яндекс.Еды превысила 1.6 млн рублей!',
      growth: '+320 000 ₽/мес',
      rating: '5.0',
    },
  ];

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const stableRotations = [-6, 5, -4, 7, -5, 4];

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFCC00]/20 px-3.5 py-1 text-xs font-bold text-zinc-900 mb-3">
            <Quote className="h-3.5 w-3.5 text-zinc-900" />
            <span>Истории успеха</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
            Отзывы владельцев ресторанов
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Реальные результаты и впечатления наших клиентов по всей России.
          </p>
        </div>

        {/* Animated Testimonials Container */}
        <div className="mx-auto max-w-5xl px-2 sm:px-4 py-8 antialiased">
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-center">
            
            {/* Left Column: Stacked Image Cards */}
            <div className="relative h-80 sm:h-96 w-full max-w-md mx-auto">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => {
                  const rotation = stableRotations[index % stableRotations.length];
                  return (
                    <motion.div
                      key={testimonial.avatar}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: rotation,
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.6,
                        scale: isActive(index) ? 1 : 0.92,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : rotation,
                        zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -40, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: rotation,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <div className="relative h-full w-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-zinc-900 group">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          draggable={false}
                          className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Overlay Badges on Card */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                          <div className="bg-emerald-500/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black flex items-center shadow-lg">
                            <TrendingUp className="h-3.5 w-3.5 mr-1" />
                            {testimonial.growth}
                          </div>

                          <div className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#FFCC00] flex items-center space-x-1 border border-white/20">
                            <Star className="h-3.5 w-3.5 fill-[#FFCC00] text-[#FFCC00]" />
                            <span>{testimonial.rating}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right Column: Quote & Details */}
            <div className="flex flex-col justify-between py-2 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFCC00] bg-zinc-900 px-2.5 py-0.5 rounded-md">
                      Отзыв #{active + 1} из {testimonials.length}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium flex items-center">
                      <Building2 className="h-3.5 w-3.5 mr-1 text-zinc-500" />
                      {testimonials[active].city}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-950">
                    {testimonials[active].name}
                  </h3>
                  
                  <p className="text-sm font-semibold text-zinc-500 mt-1">
                    {testimonials[active].role}
                  </p>

                  {/* Word-by-word animated quote */}
                  <div className="mt-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal italic bg-zinc-50/80 p-5 rounded-2xl border border-zinc-200/80 shadow-sm relative">
                    <Quote className="h-8 w-8 text-[#FFCC00]/40 absolute -top-3 -left-2" />
                    <p className="relative z-10">
                      "{testimonials[active].text.split(' ').map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{
                            filter: 'blur(10px)',
                            opacity: 0,
                            y: 5,
                          }}
                          animate={{
                            filter: 'blur(0px)',
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                            delay: 0.015 * index,
                          }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls & Pagination Dots */}
              <div className="flex items-center justify-between pt-8 border-t border-zinc-100 mt-6">
                
                {/* Pagination Dots */}
                <div className="flex space-x-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        i === active ? 'w-8 bg-[#FFCC00]' : 'w-2.5 bg-zinc-200 hover:bg-zinc-300'
                      }`}
                      aria-label={`Перейти к отзыву ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Предыдущий отзыв"
                    className="group/button flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 hover:bg-[#FFCC00] transition-colors duration-300 shadow-sm"
                  >
                    <ArrowLeft className="h-5 w-5 text-zinc-800 transition-transform duration-300 group-hover/button:-translate-x-0.5" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Следующий отзыв"
                    className="group/button flex h-11 w-11 items-center justify-center rounded-full bg-zinc-100 hover:bg-[#FFCC00] transition-colors duration-300 shadow-sm"
                  >
                    <ArrowRight className="h-5 w-5 text-zinc-800 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

