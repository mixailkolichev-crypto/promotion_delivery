import { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, BarChart2, Eye, ShoppingCart, DollarSign, ArrowRight } from 'lucide-react';

interface AnalyticsSectionProps {
  onOpenVideo?: (url: string, title: string) => void;
  onOpenConsultation: () => void;
}

export function AnalyticsSection({ onOpenConsultation }: AnalyticsSectionProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'30days' | '90days' | '1year'>('30days');

  const stats = {
    '30days': { orders: '6 283', revenue: '1 658 740 ₽', avgCheck: '1 317 ₽', visitors: '27 654', orderGrowth: '+137%', revGrowth: '+163%' },
    '90days': { orders: '18 420', revenue: '4 820 100 ₽', avgCheck: '1 380 ₽', visitors: '81 200', orderGrowth: '+185%', revGrowth: '+210%' },
    '1year': { orders: '68 900', revenue: '18 450 000 ₽', avgCheck: '1 420 ₽', visitors: '310 000', orderGrowth: '+240%', revGrowth: '+290%' },
  }[selectedTimeframe];

  return (
    <section className="py-20 bg-[#09090B] text-white relative overflow-hidden">
      {/* Background Yellow Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFCC00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFCC00]/20 px-3.5 py-1 text-xs font-bold text-[#FFCC00] mb-3">
              <BarChart2 className="h-3.5 w-3.5 text-[#FFCC00]" />
              <span>Динамика и аналитика</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Сквозная аналитика и отчётность
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-xl">
              Видим каждую точку роста. Отслеживаем конверсии из показов в просмотры и из корзины в доставленный заказ.
            </p>
          </div>

          {/* Timeframe selector */}
          <div className="flex items-center bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800 self-start md:self-auto">
            {(['30days', '90days', '1year'] as const).map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTimeframe(time)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedTimeframe === time
                    ? 'bg-[#FFCC00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {time === '30days' ? '30 дней' : time === '90days' ? '90 дней' : '1 год'}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Card */}
        <div className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-2">
            <div>
              <span className="text-xs text-zinc-400">Сводные показатели за период</span>
              <div className="text-xl sm:text-2xl font-extrabold text-white">Ресторан «Суши & Вок Топ»</div>
            </div>
            <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-500/30 self-start sm:self-auto">
              Заказы {stats.orderGrowth}
            </span>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-1">
                <ShoppingCart className="h-4 w-4 text-[#FFCC00]" />
                <span>Всего заказов</span>
              </div>
              <div className="text-2xl font-black text-white">{stats.orders}</div>
              <div className="text-[11px] font-bold text-emerald-400 mt-1 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stats.orderGrowth} к прошл. периоду
              </div>
            </div>

            <div className="p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-1">
                <DollarSign className="h-4 w-4 text-emerald-400" />
                <span>Общая выручка</span>
              </div>
              <div className="text-2xl font-black text-[#FFCC00]">{stats.revenue}</div>
              <div className="text-[11px] font-bold text-emerald-400 mt-1 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stats.revGrowth} к прошл. периоду
              </div>
            </div>

            <div className="p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-1">
                <BarChart2 className="h-4 w-4 text-blue-400" />
                <span>Средний чек</span>
              </div>
              <div className="text-xl font-bold text-white">{stats.avgCheck}</div>
              <div className="text-[11px] text-zinc-400 mt-1">Оптимизация сетов</div>
            </div>

            <div className="p-4 bg-zinc-950/60 rounded-2xl border border-zinc-800/80">
              <div className="flex items-center space-x-2 text-xs text-zinc-400 mb-1">
                <Eye className="h-4 w-4 text-purple-400" />
                <span>Посетители карточки</span>
              </div>
              <div className="text-xl font-bold text-white">{stats.visitors}</div>
              <div className="text-[11px] text-zinc-400 mt-1">CTR 14.8%</div>
            </div>

          </div>

          {/* Visual Progress Bar */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-zinc-400">Эффективность рекламного бюджета (ROAS)</span>
              <span className="text-[#FFCC00]">540% (x5.4 доходность)</span>
            </div>
            <div className="h-2.5 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '88%' }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-[#FFCC00] to-amber-500 rounded-full"
              />
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 text-sm font-extrabold text-[#FFCC00] hover:underline"
            >
              <span>Хотите такой же рост показателей? Получить план</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
