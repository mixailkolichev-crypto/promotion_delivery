import { useState } from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { motion } from 'motion/react';
import { TrendingUp, Award, Building, MapPin, Smartphone, Star, ArrowUpRight, BarChart3, ChevronRight } from 'lucide-react';

export function Dashboard3D() {
  const [activeTab, setActiveTab] = useState<'case1' | 'case2' | 'mobile'>('case1');

  return (
    <section id="cases" className="bg-[#FAFAFA] relative overflow-hidden py-10">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFCC00]/20 px-4 py-1.5 text-xs font-extrabold text-zinc-900">
              <BarChart3 className="h-4 w-4 text-zinc-900" />
              <span>Реальная аналитика из кабинета Яндекс.Еда</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
              Результаты, которые мы приносим клиентам
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
              Посмотрите на динамику роста выручки, среднего чека и заказов на примери действующих ресторанов-партнеров.
            </p>
          </div>
        }
      >
        {/* Interactive Case Study Dashboard Matching photo_2026-08-02_21-55-08.jpg */}
        <div className="h-full w-full bg-[#09090B] text-white p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto custom-scrollbar">
          
          {/* Top Control Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-zinc-800 pb-4 gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-[#FFCC00] animate-pulse" />
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  Продвижение в Яндекс Еде
                </h3>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Рост заказов и выручки ресторана «Италия Паста & Пицца»
              </p>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center bg-zinc-900 p-1 rounded-xl border border-zinc-800 text-xs">
              <button
                onClick={() => setActiveTab('case1')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'case1'
                    ? 'bg-[#FFCC00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Отчёт #1 (Май - Окт)
              </button>
              <button
                onClick={() => setActiveTab('case2')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'case2'
                    ? 'bg-[#FFCC00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Отчёт #2 (Общая статистика)
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeTab === 'mobile'
                    ? 'bg-[#FFCC00] text-black shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Карточка в приложении
              </button>
            </div>
          </div>

          {/* Main Dashboard Content */}
          {activeTab === 'case1' && (
            <div className="my-6 space-y-6">
              {/* Top 3 KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Orders Card */}
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 relative overflow-hidden">
                  <div className="text-xs text-zinc-400 font-medium">Заказы</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">5 873</div>
                  <div className="flex items-center space-x-1 mt-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>+127% к прошлому периоду</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFCC00] w-[85%]" />
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 relative overflow-hidden">
                  <div className="text-xs text-zinc-400 font-medium">Выручка</div>
                  <div className="text-2xl sm:text-3xl font-black text-[#FFCC00] mt-1">1 475 320 ₽</div>
                  <div className="flex items-center space-x-1 mt-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>+156% к прошлому периоду</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-[92%]" />
                  </div>
                </div>

                {/* Avg Check Card */}
                <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-4 relative overflow-hidden">
                  <div className="text-xs text-zinc-400 font-medium">Средний чек</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">1 248 ₽</div>
                  <div className="flex items-center space-x-1 mt-1 text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>+18% к прошлому периоду</span>
                  </div>
                  <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-400 w-[60%]" />
                  </div>
                </div>

              </div>

              {/* Order Dynamics Interactive Graph */}
              <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-zinc-200">Динамика заказов (Май — Октябрь)</span>
                  <span className="text-xs font-bold bg-[#FFCC00] text-black px-2.5 py-1 rounded-full shadow-sm">
                    Октябрь: 5 873 заказов 🏆
                  </span>
                </div>

                {/* Simulated Bar & Line Chart matching photo_2026-08-02_21-55-08.jpg */}
                <div className="h-44 sm:h-52 w-full flex items-end justify-between gap-2 pt-6 px-2 pb-2 relative border-b border-zinc-800">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="border-b border-white w-full" />
                    <div className="border-b border-white w-full" />
                    <div className="border-b border-white w-full" />
                  </div>

                  {/* Month 1: May */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-zinc-400 group-hover:text-[#FFCC00]">540</div>
                    <div className="w-full bg-zinc-700/80 rounded-t-lg h-[20%] group-hover:bg-[#FFCC00] transition-colors" />
                    <span className="text-xs text-zinc-400">Май</span>
                  </div>

                  {/* Month 2: June */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-zinc-400 group-hover:text-[#FFCC00]">1 650</div>
                    <div className="w-full bg-zinc-700/80 rounded-t-lg h-[38%] group-hover:bg-[#FFCC00] transition-colors" />
                    <span className="text-xs text-zinc-400">Июн</span>
                  </div>

                  {/* Month 3: July */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-zinc-400 group-hover:text-[#FFCC00]">2 810</div>
                    <div className="w-full bg-zinc-700/80 rounded-t-lg h-[55%] group-hover:bg-[#FFCC00] transition-colors" />
                    <span className="text-xs text-zinc-400">Июл</span>
                  </div>

                  {/* Month 4: August */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-zinc-400 group-hover:text-[#FFCC00]">3 450</div>
                    <div className="w-full bg-zinc-700/80 rounded-t-lg h-[68%] group-hover:bg-[#FFCC00] transition-colors" />
                    <span className="text-xs text-zinc-400">Авг</span>
                  </div>

                  {/* Month 5: September */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-[10px] text-zinc-400 group-hover:text-[#FFCC00]">4 620</div>
                    <div className="w-full bg-zinc-700/80 rounded-t-lg h-[82%] group-hover:bg-[#FFCC00] transition-colors" />
                    <span className="text-xs text-zinc-400">Сен</span>
                  </div>

                  {/* Month 6: October Peak */}
                  <div className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-xs font-bold text-[#FFCC00]">5 873</div>
                    <div className="w-full bg-[#FFCC00] rounded-t-lg h-[98%] shadow-lg shadow-[#FFCC00]/30" />
                    <span className="text-xs font-bold text-white">Окт</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'case2' && (
            /* Case 2: Overall Statistics matching photo_2026-08-02_21-55-08.jpg top-right section */
            <div className="my-6 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl">
                  <span className="text-xs text-zinc-400">Заказы</span>
                  <div className="text-xl font-extrabold text-white mt-1">4 392</div>
                  <span className="text-[11px] font-bold text-emerald-400">↑ 112%</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl">
                  <span className="text-xs text-zinc-400">Выручка</span>
                  <div className="text-xl font-extrabold text-[#FFCC00] mt-1">1 214 215 ₽</div>
                  <span className="text-[11px] font-bold text-emerald-400">↑ 139%</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl">
                  <span className="text-xs text-zinc-400">Средний чек</span>
                  <div className="text-xl font-extrabold text-white mt-1">1 263 ₽</div>
                  <span className="text-[11px] font-bold text-emerald-400">↑ 15%</span>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-2xl">
                  <span className="text-xs text-zinc-400">Посетители</span>
                  <div className="text-xl font-extrabold text-white mt-1">23 187</div>
                  <span className="text-[11px] font-bold text-emerald-400">↑ 85%</span>
                </div>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
                <div className="text-sm font-bold text-zinc-200 mb-3">
                  Статистика за период (1 - 31 октября): 6 283 заказа (+137%), Выручка 1 658 740 ₽ (+163%)
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400">Рост заказов</span>
                      <span className="font-bold text-[#FFCC00]">+137%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full">
                      <div className="h-full bg-[#FFCC00] w-[87%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400">Рост выручки</span>
                      <span className="font-bold text-emerald-400">+163%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full">
                      <div className="h-full bg-emerald-400 w-[95%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400">Рост среднего чека</span>
                      <span className="font-bold text-blue-400">+20%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full">
                      <div className="h-full bg-blue-400 w-[60%] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mobile' && (
            /* Mobile Phone Yandex Food Mockup Preview matching photo_2026-08-02_21-55-08.jpg bottom right */
            <div className="my-6 flex flex-col md:flex-row items-center justify-center gap-6">
              
              {/* Phone Frame */}
              <div className="w-full max-w-[280px] bg-white rounded-[32px] p-4 text-zinc-900 shadow-2xl border-4 border-zinc-800">
                <div className="flex justify-between items-center text-[10px] text-zinc-400 border-b border-zinc-100 pb-2 mb-3">
                  <span className="font-bold text-zinc-800">Яндекс Еда</span>
                  <span className="text-emerald-600 font-bold">● В ТОП-1</span>
                </div>

                {/* Restaurant Card Preview */}
                <div className="rounded-2xl border border-zinc-200 overflow-hidden bg-zinc-50 p-2 space-y-2">
                  <div className="relative h-28 rounded-xl overflow-hidden bg-zinc-200">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=400"
                      alt="Ваш ресторан"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-full text-[10px] font-bold text-zinc-900 flex items-center shadow-sm">
                      <Star className="h-3 w-3 fill-[#FFCC00] text-[#FFCC00] mr-0.5" />
                      4.9
                    </div>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-sm text-zinc-900">Ваш Ресторан</h4>
                    <p className="text-[10px] text-zinc-500">Паста • Пицца • Выпечка</p>
                    <div className="flex items-center space-x-2 text-[10px] text-zinc-600 mt-1">
                      <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">44–60 мин</span>
                      <span className="bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">Бесплатная доставка</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[11px] font-bold text-zinc-800">Популярное в ресторане:</div>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <div className="p-1.5 bg-zinc-100 rounded-lg text-[10px]">
                    <span className="font-bold block text-zinc-900">Паста карбонара</span>
                    <span className="text-[#FFCC00] font-black">590 ₽</span>
                  </div>
                  <div className="p-1.5 bg-zinc-100 rounded-lg text-[10px]">
                    <span className="font-bold block text-zinc-900">Пицца пепперони</span>
                    <span className="text-[#FFCC00] font-black">720 ₽</span>
                  </div>
                </div>
              </div>

              {/* Stats side description */}
              <div className="max-w-md space-y-3">
                <div className="inline-block bg-[#FFCC00]/20 text-[#FFCC00] font-bold text-xs px-3 py-1 rounded-full">
                  Оптимизация карточки 100%
                </div>
                <h3 className="text-xl font-bold text-white">Высокая конверсия из просмотра в заказ</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Мы создаём аппетитные описания, прорабатываем сочные фотографии, запускаем скидки и акционные комбо, поднимая кликабельность (CTR) карточки в 2.5 раза.
                </p>
              </div>

            </div>
          )}

          {/* Bottom Highlight Bar matching photo_2026-08-02_21-55-08.jpg */}
          <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#FFCC00] text-black p-3.5 rounded-2xl font-black text-xs text-center">
            <div className="flex items-center justify-center space-x-1.5">
              <Award className="h-4 w-4" />
              <span>Более 7 лет опыта</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5">
              <Building className="h-4 w-4" />
              <span>Более 1000 ресторанов</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5">
              <MapPin className="h-4 w-4" />
              <span>Работаем по всей России</span>
            </div>
          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}
