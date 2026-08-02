import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Как быстро вы задержите результат и рост заказов?',
      answer:
        'Первые результаты видны уже через 3–5 дней после оптимизации карточки ресторана и запуска акционных механик. Полный потенциал роста заказов раскроется к концу первого месяца.',
    },
    {
      question: 'Работаете ли вы по официальному договору?',
      answer:
        'Да, мы работаем исключительно по договору с фиксированными KPI и условиями. Предоставляем все закрывающие документы для юридических лиц и ИП.',
    },
    {
      question: 'Какое участие требуется от владельца или управляющего ресторана?',
      answer:
        'Минимальное. Вы передаёте нам доступ к кабинету Яндекс.Еды и качественные фото блюд (или мы организуем съёмку). Все остальные маркетинговые задачи мы берём на себя.',
    },
    {
      question: 'Что если у ресторана низкий рейтинг (ниже 4.0)?',
      answer:
        'Мы разработаем специальную программу репутационного менеджмента: внедряем бонусы за отзывы для гостей, корректируем упаковку и инструкции курьерам, нейтрализуем негатив.',
    },
    {
      question: 'Работаете ли вы с городами помимо Москвы и Санкт-Петербурга?',
      answer:
        'Да, мы продвигаем рестораны во всех городах присутствия сервиса Яндекс.Еда по всей России — от Калининграда до Владивостока.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-zinc-900 mb-3">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-900" />
            <span>Частые вопросы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Ответы на популярные вопросы
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-zinc-900 text-sm sm:text-base hover:text-[#FFCC00] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-400 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? 'rotate-180 text-[#FFCC00]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
