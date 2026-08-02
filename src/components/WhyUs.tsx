import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Clock, Target, CheckCircle2 } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Award,
      title: '7+ лет опыта на рынке',
      description: 'Глубокое понимание алгоритмов ранжирования Яндекс.Еды, внутренней рекламы и поведения пользователей.',
    },
    {
      icon: Users,
      title: 'Более 1000 успешных кейсов',
      description: 'От небольших семейных кофеен и пиццерий до крупных сетевых ресторанов по всей РФ.',
    },
    {
      icon: Target,
      title: 'Индивидуальная стратегия',
      description: 'Никаких шаблонных решений. Анализируем конкурентов именно в вашем радиусе доставки и подбираем акции.',
    },
    {
      icon: Clock,
      title: 'Поддержка и менеджер 24/7',
      description: 'Персональный маркетолог всегда на связи. Еженедельная отчётность и оперативное добавление новинок.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-zinc-900 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-zinc-900" />
            <span>Почему именно Promotion Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
            Почему рестораторы выбирают нас
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Мы не просто настраиваем рекламу — мы становимся вашей полноценной внешней командой продвижения в доставке.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-zinc-200/80 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#09090B] text-[#FFCC00] mb-5 shadow-lg shadow-black/10 group-hover:bg-[#FFCC00] group-hover:text-black transition-colors">
                    <Icon className="h-7 w-7 stroke-[2]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center space-x-1.5 text-xs font-bold text-[#FFCC00]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-zinc-700">Проверено на практике</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
