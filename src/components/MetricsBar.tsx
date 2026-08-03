import { motion } from 'motion/react';
import { ShoppingBag, Users, Star, TrendingUp } from 'lucide-react';

export function MetricsBar() {
  const metrics = [
    {
      icon: ShoppingBag,
      value: '+137%',
      title: 'роста заказов в среднем',
      subtitle: 'у наших клиентов за первые 30 дней',
    },
    {
      icon: Users,
      value: '>1000',
      title: 'ресторанов и кафе',
      subtitle: 'уже успешно работают с нами по всей РФ',
    },
    {
      icon: Star,
      value: '4.9',
      title: 'средний рейтинг',
      subtitle: 'наших партнерских заведений на Яндекс.Еде',
    },
    {
      icon: TrendingUp,
      value: 'от 300 000 ₽',
      title: 'прирост прибыли',
      subtitle: 'увеличиваем ежемесячный доход рестораторов',
    },
  ];

  return (
    <section className="py-10 bg-[#FAFAFA] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Dark Contrast Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#09090B] p-8 sm:p-12 shadow-2xl text-white border border-zinc-800"
        >
          {/* Subtle Ambient Yellow Gradient Backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col space-y-3 group hover:translate-y-[-2px] transition-transform"
                >
                  {/* Yellow Icon Badge */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFCC00] text-black shadow-lg shadow-[#FFCC00]/25 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 stroke-[2.5]" />
                  </div>

                  {/* Main Metric Value */}
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {metric.value}
                  </div>

                  {/* Descriptions */}
                  <div>
                    <h3 className="text-sm font-bold text-zinc-200">
                      {metric.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5 leading-relaxed">
                      {metric.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
