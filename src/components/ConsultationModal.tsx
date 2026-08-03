import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, MessageSquare, ArrowRight, Sparkles, Building2, PhoneCall } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRestaurantName?: string;
}

export function ConsultationModal({ isOpen, onClose, defaultRestaurantName = '' }: ConsultationModalProps) {
  const [restaurantName, setRestaurantName] = useState(defaultRestaurantName);
  const [city, setCity] = useState('');
  const [cuisine, setCuisine] = useState('Европейская / Пицца');
  const [currentOrders, setCurrentOrders] = useState('10-30 заказов/день');
  const [contact, setContact] = useState('');
  const [preferredChannel, setPreferredChannel] = useState<'whatsapp' | 'max'>('whatsapp');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Launch confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFCC00', '#09090B', '#25D366', '#FFD600'],
    });

    const encodedText = encodeURIComponent(
      `Здравствуйте! Хочу бесплатную консультацию и аудит для ресторана.\n` +
      `📌 Ресторан: ${restaurantName || 'Не указано'}\n` +
      `📍 Город: ${city || 'Не указан'}\n` +
      `🍕 Кухня: ${cuisine}\n` +
      `📦 Тек. заказы: ${currentOrders}\n` +
      `📞 Контакт: ${contact || 'Указан в чате'}`
    );

    setTimeout(() => {
      if (preferredChannel === 'whatsapp') {
        window.open(`https://wa.me/79161482007?text=${encodedText}`, '_blank');
      } else {
        window.open(`https://max.ru/promotion_delivery?text=${encodedText}`, '_blank');
      }
    }, 1200);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent('Здравствуйте! Хочу получить бесплатную консультацию по продвижению ресторана на Яндекс.Еде.');
    window.open(`https://wa.me/79161482007?text=${text}`, '_blank');
  };

  const handleDirectMax = () => {
    const text = encodeURIComponent('Здравствуйте! Хочу получить бесплатную консультацию по продвижению ресторана на Яндекс.Еде.');
    window.open(`https://max.ru/promotion_delivery?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-zinc-100 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full bg-zinc-100 p-2 text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="mb-6 pr-8">
                <div className="inline-flex items-center space-x-2 rounded-full bg-[#FFCC00]/20 px-3 py-1 text-xs font-bold text-zinc-900 mb-2">
                  <Sparkles className="h-3.5 w-3.5 text-zinc-900" />
                  <span>Бесплатный аудит + Стратегия</span>
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-900 tracking-tight">
                  Обсудить ваш ресторан
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Выберите мессенджер для моментальной связи или заполните короткие данные для экспресс-аудита:
                </p>
              </div>

              {/* Instant Messenger Quick Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="flex items-center justify-center space-x-2 rounded-2xl bg-[#25D366] py-3 px-4 font-bold text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] transition-all transform active:scale-95"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-xs sm:text-sm">WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleDirectMax}
                  className="flex items-center justify-center space-x-2 rounded-2xl bg-[#09090B] py-3 px-4 font-bold text-[#FFCC00] shadow-lg shadow-black/20 hover:bg-zinc-800 transition-all transform active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span className="text-xs sm:text-sm">MAX Messenger</span>
                </button>
              </div>

              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-200" />
                </div>
                <span className="relative bg-white px-3 text-xs font-medium text-zinc-400">
                  или оставьте заявку на расчёт
                </span>
              </div>

              {/* Consultation Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Название ресторана или кафе
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="Например, Суши Мастер или Италия Пицца"
                      value={restaurantName}
                      onChange={(e) => setRestaurantName(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#FFCC00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Город
                    </label>
                    <input
                      type="text"
                      placeholder="Москва, СПБ..."
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 px-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#FFCC00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Текущие заказы
                    </label>
                    <select
                      value={currentOrders}
                      onChange={(e) => setCurrentOrders(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 px-3 text-sm text-zinc-900 focus:border-[#FFCC00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30 transition-all"
                    >
                      <option value="Только открываемся">Только открываемся</option>
                      <option value="10-30 заказов/день">10-30 заказов/день</option>
                      <option value="30-80 заказов/день">30-80 заказов/день</option>
                      <option value="80+ заказов/день">80+ заказов/день</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Телефон или Telegram для связи
                  </label>
                  <div className="relative">
                    <PhoneCall className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      placeholder="+7 (916) 148-20-07 или @username"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#FFCC00] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Messenger Toggle */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Где удобнее продолжить диалог?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredChannel('whatsapp')}
                      className={`flex items-center justify-center space-x-2 rounded-xl py-2 px-3 text-xs font-bold transition-all ${
                        preferredChannel === 'whatsapp'
                          ? 'bg-[#25D366] text-white shadow-sm'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      <span>WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPreferredChannel('max')}
                      className={`flex items-center justify-center space-x-2 rounded-xl py-2 px-3 text-xs font-bold transition-all ${
                        preferredChannel === 'max'
                          ? 'bg-[#09090B] text-[#FFCC00] shadow-sm'
                          : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                      }`}
                    >
                      <span>MAX Messenger</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center space-x-2 rounded-2xl bg-[#FFCC00] py-3.5 px-6 font-extrabold text-zinc-950 shadow-lg shadow-[#FFCC00]/30 hover:bg-[#FFD600] transition-all transform active:scale-98"
                >
                  <span>Получить бесплатный аудит в {preferredChannel === 'whatsapp' ? 'WhatsApp' : 'MAX'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-[11px] text-center text-zinc-400">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Переход в мессенджер произойдет автоматически.
                </p>
              </form>
            </>
          ) : (
            /* Submitted State */
            <div className="py-8 text-center space-y-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                type="spring"
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFCC00]/20 text-[#09090B]"
              >
                <CheckCircle2 className="h-10 w-10 text-[#09090B]" />
              </motion.div>
              <h3 className="text-2xl font-extrabold text-zinc-900">Заявка принята!</h3>
              <p className="text-sm text-zinc-600 max-w-xs mx-auto">
                Открываем мессенджер для диалога с вашим персональным экспертом по Яндекс.Еде...
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="rounded-xl bg-zinc-900 py-2.5 px-6 text-xs font-bold text-white hover:bg-zinc-800 transition-colors"
                >
                  Закрыть окно
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
